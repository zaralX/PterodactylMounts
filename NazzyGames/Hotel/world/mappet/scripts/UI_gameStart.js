function main(c)
{
    var ui = mappet.createUI(c, "handler").background();
    
    var s = c.getSubject();
    var pos = s.getPosition();
    var gStates = c.getServer().getStates()
    var states = s.getStates();
    var game_in = gStates.getNumber("game_in");
    var game_demonLock = gStates.getNumber("game_demonLock");
    
    s.playSound("minecraft:ui.button.click", pos.x, pos.y, pos.z, 1, 2);

    var backdrop = ui.graphics().id("backdrop");
    var back = ui.button("Назад").id("back").background(0x424242);
    
    var game_hasDemon = false;
    var start_tooltip = "Нельзя начать игру без демона";
    var players = c.getServer().getAllPlayers();
    for (var i in players)
    {
        if (players[i].getStates().getNumber("demon") == 1)
        {
            game_hasDemon = true;
            start_tooltip = "";
        }
    }
    
    if (game_in == 0)
    {
    
      backdrop.rxy(0.5, 0.51).wh(120, 135).anchor(0.5);
      backdrop.rect(0, 0, 120, 135, 0x88000000);
    
      var start = ui.button("Начать игру").id("start").background(0x426242).enabled(game_hasDemon).tooltip(start_tooltip);
      start.rxy(0.5, 0.45).wh(90, 20).anchor(0.5);
      
      var custom = ui.button("Кастомизация").id("customization").background(0x626262).tooltip("Изменить внешность персонажа");
      custom.rxy(0.5, 0.55).wh(90, 20).anchor(0.5);
      
      back.rxy(0.5, 0.6).wh(90, 20).anchor(0.5);
      
        if (game_demonLock == 0)
        {
            var demon = ui.button("Стать демоном").id("demon").background(0x844242);
            demon.rxy(0.5, 0.5).wh(90, 20).anchor(0.5);
        }
        else if (game_demonLock == 1 && states.getNumber("demon") == 0)
        {
            var demon = ui.button("Стать демоном").id("demon").background(0x844242).enabled(false).tooltip("Роль занята");
            demon.rxy(0.5, 0.5).wh(90, 20).anchor(0.5);
        }
        else if (game_demonLock == 1 && states.getNumber("demon") == 1) //я не хотел тут нестинга...
        {
            var demon = ui.button("Вернуть роль").id("demon_return").background(0x844242).tooltip("Ты станешь охотником");
            demon.rxy(0.5, 0.5).wh(90, 20).anchor(0.5);
        }
    }
    else
    {
      backdrop.rxy(0.5, 0.46).wh(120, 90).anchor(0.5);
      backdrop.rect(0, 0, 120, 90, 0x88000000);
    
      var start = ui.button("Завершить игру").id("stop").background(0x624242);
      start.rxy(0.5, 0.45).wh(90, 20).anchor(0.5);
      
      back.rxy(0.5, 0.5).wh(90, 20).anchor(0.5);
    }
    
    var text = ui.label("Меню").id("label");
    text.rx(0.5).ry(0.358, 25).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    

    c.getSubject().openUI(ui);
    
    
}
function handler(c)
{
    var s = c.getSubject();
    var pos = s.getPosition();
    var uiContext = c.getSubject().getUIContext();
    var gStates = c.getServer().getStates()
    s.closeUI();
    
      var game_hasDemon = false;
      var players = c.getServer().getAllPlayers();
      for (var i in players)
      {
          if (players[i].getStates().getNumber("demon") == 1)
          {
              game_hasDemon = true;
          }
      }
    
    if (uiContext.getLast() == "start")
    {
        if (game_hasDemon == true)
        {
            gStates.setNumber("game_in", 1);
            c.getServer().executeScript("game_Start");
            
            var players = c.getServer().getAllPlayers(); //да, нестинг... понимаю.
            for (var i in players)
            {
               players[i].closeUI();
            }
            
            c.executeCommand("/modelblock property 11 29 18 enabled false");
            
        }
        else
        {
            s.setupHUD("text_info");
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нельзя начать без [cдемона\",Name:\"label\"}");
            s.changeHUDMorph("text_info", 0, HUDmorph)
        }
    }
    else if (uiContext.getLast() == "stop")
    {
        gStates.setNumber("game_in", 0)
        gStates.setNumber("game_demonLock", 0);
        c.executeCommand("/scoreboard teams leave @a"); //включение столкновений
        c.executeCommand("/effect @a clear"); //вырубаем эффекты
        
        var players = c.getServer().getAllPlayers();
        for (var i in players)
        {
            players[i].setupHUD("HUD_blackscreen_out");
            players[i].setPosition(11, 26, 15);
            players[i].setGameMode(2);
            players[i].getStates().setNumber("demon", 0);
            players[i].getStates().setNumber("death", 0);
            players[i].closeHUD("demon_ui");
            players[i].closeHUD("d_points");
            players[i].applyPotion(mappet.getPotion("slowness"), 99999*20, 1, false);
            players[i].applyPotion(mappet.getPotion("weakness"), 99999*20, 1, false);
            
            //Это костыль, чтобы у игрока вернулась его модель, если он был демоном.
            players[i].setMainItem(mappet.createItem("ht:barrierhalfv")); //это невидимый предмет.  
        }
        c.scheduleScript(1, function (context)
        {
            c.executeCommand("/clear @a") //к сожалению нет такого метода, чтобы очистить весь инвентарь.
        });
        
        c.executeCommand("/modelblock property 11 29 18 enabled true");
        
    }
    else if (uiContext.getLast() == "demon")
    {
        s.setupHUD("text_info");
        var text;
        if (game_hasDemon == true)
        {
            text = "Роль уже [cзанята"
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        }
        else
        {
            gStates.setNumber("game_demonLock", 1);
            s.getStates().setNumber("demon", 1)
            text = "Ты стал [cдемоном[f!"
            s.playSound("mp.sounds:ht.events.hunt_end", pos.x, pos.y, pos.z, 0.5, 1.5);
        }
        var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\""+text+"\",Name:\"label\"}");
        s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else if (uiContext.getLast() == "demon_return")
    {
        gStates.setNumber("game_demonLock", 0);
        s.getStates().setNumber("demon", 0)
        s.setupHUD("text_info");
        s.playSound("mp.sounds:ht.events.hunt_end", pos.x, pos.y, pos.z, 0.5, 1);
        var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты вернул [cроль\",Name:\"label\"}");
        s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else if (uiContext.getLast() == "customization")
    {
        s.executeScript("UI_customization");
    }
    
}