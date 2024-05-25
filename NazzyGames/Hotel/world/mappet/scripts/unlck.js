function main(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    
    var ui = mappet.createUI(c, "handler").background();
    var layout = ui.layout();
    layout.getCurrent().rxy(0.5, 0.5).wh(400, 400).anchor(0.5);
    var backdrop = layout.graphics().id("backdrop");
    var scroll = layout.column(5, 5);
    var text = scroll.text("Ты уверен, что хочешь получить доступ к креативу?")

    var apply = layout.button("Да, я уверен").background(0x426242).id("yes");
    var back = layout.button("Нет.").background(0x424242).id("back");
    
    scroll.getCurrent().scroll().rxy(0.5, 0.7).w(170).rh(0.5).anchor(0.5);
    backdrop.rxy(0.5, 0.53).wh(170, 60).anchor(0.5);
    backdrop.rect(0, 0, 170, 50, 0x88000000);
    apply.rxy(0.4, 0.55).wh(80, 15).anchor(0.5);
    back.rxy(0.6, 0.55).wh(80, 15).anchor(0.5);
    
    s.openUI(ui);
    
}
function handler(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    var uiContext = c.getSubject().getUIContext();
    
    s.closeUI();
    if (uiContext.getLast() === "yes")
    {
        states.setNumber("gmUnlock", 1)
        s.setGameMode(1);
        s.sendActionBar("Креатив §aразблокирован")
    }
}