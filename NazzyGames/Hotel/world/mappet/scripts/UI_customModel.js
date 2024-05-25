function main(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    var playerModelName = states.getString("playerModelName");
    
    var ui = mappet.createUI(c, "handler").background();
    var layout = ui.layout();
    layout.getCurrent().rxy(0.5, 0.5).wh(400, 400).anchor(0.5);
    var backdrop = layout.graphics().id("backdrop");
    
    var morph = mappet.createMorph("{Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Name:\"chameleon."+playerModelName+"\"}");
    var char = layout.morph(morph).id("char");
    char.rxy(0.5, 0.45).wh(150, 250).anchor(0.5).position(0.027, 1.4, 0.019).rotation(0, -35).distance(2.5).fov(65).enabled(true);
    
    var text = layout.label("Уникальный облик").id("text");
    var text_textbox = layout.label("Название файла:").id("text");
    var textbox = layout.textbox(playerModelName).id("textbox").tooltip("Введите название, как в папке [lconfig/chameleon/models...").id("textbox").maxLength(999);
    var apply = layout.button("Применить").background(0x426242).id("skin_apply");
    var back = layout.button("Назад").background(0x424242).id("back");
    var info = layout.icon("help").id("icon").tooltip("Папка, модель и текстура должны называться одинаково.                  [7Путь к моделям: [lconfig/chameleon/models.      [fТакже в файлах находятся шаблоны для создания своих моделей: [lhotel_templateMale [fи [lhotel_templateFemale");
    
    info.rxy(0.68, 0.135).wh(10, 10).anchor(0.5);
    backdrop.rxy(0.5, 0.51).wh(170, 320).anchor(0.5);
    backdrop.rect(0, 0, 170, 320, 0x88000000);
    text.rxy(0.5, 0.14).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    text_textbox.rxy(0.405, 0.79).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    textbox.rxy(0.5, 0.83).wh(160, 20).anchor(0.5);
    apply.rxy(0.4, 0.88).wh(80, 15).anchor(0.5);
    back.rxy(0.6, 0.88).wh(80, 15).anchor(0.5);
    
    s.openUI(ui);
}

function handler(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    var pos = s.getPosition();
    var uiContext = c.getSubject().getUIContext();
    var data = uiContext.getData();
    var playerModelName = data.getString("textbox")
    
    if (uiContext.getLast() === "textbox")
    {
       var new_morph = mappet.createMorph("{Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Name:\"chameleon."+playerModelName+"\"}");
       uiContext.get("char").morph(new_morph);
       s.playSound("minecraft:ui.button.click", pos.x, pos.y, pos.z, 1, 2);
    }
    if (uiContext.getLast() === "skin_apply")
    {
       states.setString("playerModelName", playerModelName);
       //Это костыль, чтобы у игрока поставилась модель,.
       s.setMainItem(mappet.createItem("ht:barrierhalfv")); //это невидимый предмет.  
          c.scheduleScript(1, function (context)
          {
              s.setMainItem(mappet.createItem("minecraft:air"));
          });
    }
    if (uiContext.getLast() === "back")
    {
        s.closeUI();
        s.executeScript("UI_customization");
    }
}