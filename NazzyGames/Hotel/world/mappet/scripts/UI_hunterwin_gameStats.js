function main(c)
{
    var ui = mappet.createUI(c, "handler").closable(true);
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    
    var corpseFoundCount = gStates.getNumber("corpseFoundCount");
    var bloodynotesFoundCount = gStates.getNumber("bloodynotesFoundCount");
    var huntersAlive = gStates.getNumber("huntersAlive");
    var doorsOpened = gStates.getNumber("doorsOpened");
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.49).wh(180, 150).anchor(0.5);
    backdrop.rect(0, 0, 180, 150, 0x99000000);
    
    var pos = s.getPosition();
    s.playSound("mp.sounds:ht.interaction.item_found", pos.x, pos.y, pos.z, 0.3, 2);
    s.playSound("mp.sounds:ht.interaction.tripod_flash", pos.x, pos.y, pos.z, 0.5, 1.5);
    
    var text_title = ui.label(" ДЕМОН УНИЧТОЖЕН! ").id("text_title").background(0x99900000);
    text_title.rx(0.5).ry(0.4, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var text_title = ui.label(" Останков найдено: [e"+corpseFoundCount+" [f/ 4 ").id("text_title").background(0x99303030);
    text_title.rx(0.5).ry(0.45, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    var text_title = ui.label(" Записок прочитано: [e"+bloodynotesFoundCount+" [f/ 5 ").id("text_title").background(0x99303030);
    text_title.rx(0.5).ry(0.48, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    var text_title = ui.label(" Дверей взломано: [e"+doorsOpened+" [f/ 18 ").id("text_title").background(0x99303030);
    text_title.rx(0.5).ry(0.51, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    var text_title = ui.label(" Охотников выжило: [e"+huntersAlive+" [f/ 3 ").id("text_title").background(0x99003000);
    text_title.rx(0.5).ry(0.55, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    
    var points = corpseFoundCount + bloodynotesFoundCount + huntersAlive + (doorsOpened / 2);
    
    if (huntersAlive < 3)
    {
        points = points - 5;
    }
    
    var rank = "";
    
    if (points >= 21)
    {
        rank = "[eS";
    }
    else if (points < 21 && points >= 16)
    {
        rank = "[2A";
    }
    else if (points < 16 && points >= 11)
    {
        rank = "[3B";
    }
    else if (points < 11)
    {
        rank = "[7C";
    }
    
    
    var rank = ui.label(" Ранг: "+rank+" ").id("rank").background(0x99000000);
    rank.rx(0.5).ry(0.58, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var button1 = ui.button("Ок").id("ok").background(0x303030);
    button1.rxy(0.5, 0.6).wh(40, 20).anchor(0.5);
    
    s.openUI(ui);
}
function handler(c)
{
    var uiContext = c.getSubject().getUIContext();
    var data = uiContext.getData();
    var s = c.getSubject();
    
    if (uiContext.getLast() === "ok")
    {
       s.closeUI();
    }
    
    
}