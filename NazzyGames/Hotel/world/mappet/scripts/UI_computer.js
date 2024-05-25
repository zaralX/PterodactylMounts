function main(c)
{
    var ui = mappet.createUI(c, "handler").background();
    var s = c.getSubject();
    var block = c.getWorld().getBlock(-4, 15, 15);
    var states = c.getServer().getStates();
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.48).wh(300, 150).anchor(0.5);
    backdrop.rect(0, 0, 300, 150, 0x88000000);
    var panel = ui.graphics().id("panel");
    panel.rxy(0.5, 0.47).wh(300, 10).anchor(0.5);
    panel.rect(0, -75, 300, 10, 0xffdadada);
    
    var text_title = ui.label("Выбор опции:").id("text_title");
    text_title.rx(0.5).ry(0.4, -12).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    var button_room = ui.button("Гостевой номер").id("button_room").background(0x424242);
    button_room.rxy(0.5, 0.42).wh(100, 20).anchor(0.5);
    var button_kitchen = ui.button("Кухня").id("button_kitchen").background(0x424242);
    button_kitchen.rxy(0.5, 0.47).wh(100, 20).anchor(0.5);
    var button_staff = ui.button("Персонал").id("button_staff").background(0x424242);
    button_staff.rxy(0.5, 0.52).wh(100, 20).anchor(0.5);
    var button_back = ui.button("Назад").id("button_back").background(0x424242).visible(false);
    button_back.rxy(0.5, 0.42).wh(100, 20).anchor(0.5);
    var textbox = ui.textbox().id("textbox").tooltip("Введите число номера:").maxLength(3).visible(false);
    textbox.rxy(0.5, 0.47).wh(100, 20).anchor(0.5);
    var button_staff = ui.button("Принять").id("button_enter").background(0x424242).visible(false);
    button_staff.rxy(0.5, 0.52).wh(100, 20).anchor(0.5);
    var button_exit = ui.button("x").id("button_exit").background(0xcd393b);
    button_exit.rxy(0.65, 0.33).wh(15, 10).anchor(0.5);
    
    
    
    
    
    //if card empty
    if (block.getBlockId() == "ht:nfc")
    {
        var backdrop2 = ui.graphics().id("backdrop2");
        backdrop2.rxy(0.5, 0.48).wh(300, 150).anchor(0.5);
        backdrop2.rect(0, 0, 300, 150, 0x88000000);
        var text_current = ui.label("Текущие данные: ...").id("text_current");
        text_current.rx(0.5).ry(0.4, 100).wh(160, 20).anchor(0.5).labelAnchor(0.5);
        var click = ui.click().id("click");
        click.rxy(0.5, 0.5).wh(300, 200).anchor(0.5);
        var warning = ui.graphics().id("warning");
        warning.rxy(0.5, 0.48).wh(180, 50).anchor(0.5);
        warning.rect(0, 0, 180, 50, 0x88000000); //aaaaaa
        var warningpanel = ui.graphics().id("warningpanel");
        warningpanel.rxy(0.5, 0.48).wh(180, 10).anchor(0.5);
        warningpanel.rect(0, -30, 180, 10, 0xffdadada);
        var text_warning = ui.label("Ключ-карта отсутствует.").id("text_warning");
        text_warning.rx(0.5).ry(0.5, -22).wh(160, 20).anchor(0.5).labelAnchor(0.5);
        var button_warning = ui.button("ok").id("button_warning").background(0x424242);
        button_warning.rxy(0.5, 0.5).wh(30, 15).anchor(0.5);
        
    }
    else
    {
       var text_current = ui.label("Текущие данные: [e"+states.getString("keycard_state")+"").id("text_current");
       text_current.rx(0.5).ry(0.4, 100).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    }
    
    s.openUI(ui);
}

function handler(c)
{
    var uiContext = c.getSubject().getUIContext();
    var data = uiContext.getData();
    var s = c.getSubject();
    var pos = s.getPosition();
    var states = c.getServer().getStates();

    if (uiContext.getLast() === "button_room")
    {
       uiContext.get("button_kitchen").visible(false);
       uiContext.get("button_staff").visible(false);
       uiContext.get("button_room").visible(false);
       uiContext.get("button_back").visible(true);
       uiContext.get("textbox").visible(true);
       uiContext.get("text_title").label("Гостевой номер:");
       uiContext.get("button_enter").visible(true);
       s.swingArm()
       c.getWorld().playSound("mp.sounds:ht.misc.comp_error", pos.x, pos.y, pos.z, 0.1, 2);
    }
    if (uiContext.getLast() === "button_back")
    {
       uiContext.get("button_kitchen").visible(true);
       uiContext.get("button_staff").visible(true);
       uiContext.get("button_room").visible(true);
       uiContext.get("button_back").visible(false);
       uiContext.get("textbox").visible(false);
       uiContext.get("text_title").label("Выбор опции:");
       uiContext.get("button_enter").visible(false);
       s.swingArm()
       c.getWorld().playSound("mp.sounds:ht.misc.comp_error", pos.x, pos.y, pos.z, 0.1, 1.9);
    }
    if (uiContext.getLast() === "click")
    {
       c.getWorld().playSound("mp.sounds:ht.misc.comp_error", pos.x, pos.y, pos.z, 0.3, 1);
       s.swingArm()
    }
    if (uiContext.getLast() === "button_enter")
    {
       if (data.getString("textbox") != "")
       {
         states.setString("keycard_state", data.getString("textbox"));
         s.closeUI()
         s.executeScript("UI_computer");
         c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 0.8, 1.5);
         s.swingArm()
       }
    }
    if (uiContext.getLast() === "button_kitchen")
    {
       states.setString("keycard_state", "kitchen");
       s.closeUI()
       s.executeScript("UI_computer");
         c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 0.8, 1.5);
       s.swingArm()
    }
    if (uiContext.getLast() === "button_staff")
    {
       states.setString("keycard_state", "staff");
       s.closeUI()
       s.executeScript("UI_computer");
         c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 0.8, 1.5);
       s.swingArm()
    }
    if (uiContext.getLast() === "button_warning" || uiContext.getLast() === "button_exit")
    {
      c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 0.4, 0.9);
       s.closeUI();
       s.swingArm();
    }
    if (uiContext.getLast() === "textbox")
    {
       c.getWorld().playSound("mp.sounds:ht.misc.keyboard"+Math.floor(mappet.random(0,3))+"", pos.x, pos.y, pos.z, 0.3, 1.2);
       s.swingArm();
    }
    
}