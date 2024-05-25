function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates()
    var states = s.getStates();
    var game_in = gStates.getNumber("game_in");
    var game_demonLock = gStates.getNumber("game_demonLock");
    var playerModelName = states.getString("playerModelName");
    
    if (playerModelName == "") //first time in game
    {
           var random = Math.floor(mappet.random(1,4))
           var name;
           if (random == 1)
           {
                name = "hotel_David"
           }
           else if (random == 2)
           {
                name = "hotel_Zero"
           }
           else if (random == 3)
           {
                name = "hotel_Oni"
           }
        states.setString("playerModelName", name); //default skin
        states.setNumber("playerModelChange", 1);
        s.executeScript("frsttime");
    }
    
    if (game_in == 0)
    {
        if (states.getNumber("demon") == 1)
        {
            states.setNumber("demon", 0);
            s.closeHUD("demon_ui");
            s.closeHUD("d_points");
        }
        s.setPosition(11, 26, 15);
        s.setGameMode(2);
        s.applyPotion(mappet.getPotion("slowness"), 99999*20, 1, false);
        s.applyPotion(mappet.getPotion("weakness"), 99999*20, 1, false);
        
        //костыль для смены скина
        s.setMainItem(mappet.createItem("ht:barrierhalfv"));
        c.scheduleScript(1, function (context)
        {
            s.setMainItem(mappet.createItem("minecraft:air"));
        });
    }
    else if (game_in == 1)
    {
        if (states.getNumber("death") == 1)
        {
            s.setGameMode(3);
        }
    }
    
}