function main(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    
    var ui = mappet.createUI(c, "handler").background().closable(false);
    var layout = ui.layout();
    layout.getCurrent().rxy(0.5, 0.4).wh(400, 400).anchor(0.5);
    var backdrop = layout.graphics().id("backdrop");
    var scroll = layout.column(5, 5);
    var text = scroll.text("[eЕсли вы планируете использовать ресурсы из этого режима, пожалуйста, указывайте авторство. [f\n" 
    +" \n"+
    " \n"+
    "[lНад проектом работали: \n" +
    "[f[oNazzy, VikosIII, Heydwald, Kryystll, JustDelta, JhonParker, LUCIYS и др.");

    var apply = layout.button("Хорошо").background(0x426242).id("ok");
    
    scroll.getCurrent().scroll().rxy(0.5, 0.7).w(175).rh(0.5).anchor(0.5);
    backdrop.rxy(0.5, 0.59).wh(180, 140).anchor(0.5);
    backdrop.rect(0, 0, 180, 140, 0x88000000);
    apply.rxy(0.39, 0.61).wh(80, 15).anchor(0.5);
    
    var text = layout.label("[lВНИМАНИЕ").id("label");
    text.rx(0.5).ry(0.38, 25).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    s.openUI(ui);
    
}
function handler(c)
{
    var s = c.getSubject();
    var states = c.getSubject().getStates();
    var uiContext = c.getSubject().getUIContext();
    s.closeUI();
}