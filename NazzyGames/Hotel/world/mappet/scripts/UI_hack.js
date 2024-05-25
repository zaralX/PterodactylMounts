function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var pos = s.getPosition();
    s.moveTo("linear", 30, pos.x, pos.y, pos.z, false);
    
    var ui = mappet.createUI(c, "handler").background();
    
    var playerModelName = s.getStates().getString("playerModelName");
    var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{RX:0.52359843f},handR:{RX:0.12217307f},legLB:{},armLT:{RX:0.9706271f,RY:-0.6514099f,RZ:-0.13484554f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{RX:0.82539505f,F:0b,RY:0.051633105f,RZ:0.08338443f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{RX:-0.22689278f},handL:{},feetLT:{},feetRT:{},armLB:{RX:0.4014256f},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[30.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.0f,0.025f,0.0f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
    s.setMorph(playerMorph);
    
    var background = mappet.createMorph("{Skin:\"b.a:1_HOTEL/hack_background_ui/skins/texture.png\",BodyParts:[{S:[15.0f,15.0f,15.0f],T:[0.0f,0.0f,0.0625f],Limb:\"background\",Morph:{Color:-16777216,Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"}}],Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_background_ui\"}");
    var morph_background = ui.morph(background);
    morph_background.position(0.62, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_background.enabled(false).wh(1280, 720);
    
    //spring1
    var spring1 = mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}");
    var morph_spring1 = ui.morph(spring1).id("spring1");
    morph_spring1.position(0.995, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_spring1.enabled(false).wh(1280, 720);
    var click1 = ui.click().id("click1").enabled(true);
    click1.rxy(0.4, 0.5).wh(40, 150).anchor(0.5);
    
    //spring2
    var spring2 = mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}");
    var morph_spring2 = ui.morph(spring2).id("spring2");
    morph_spring2.position(0.805, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_spring2.enabled(false).wh(1280, 720);
    var click2 = ui.click().id("click2").enabled(true);
    click2.rxy(0.453, 0.5).wh(40, 150).anchor(0.5);
    
    //spring3
    var spring3 = mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}");
    var morph_spring3 = ui.morph(spring3).id("spring3");
    morph_spring3.position(0.618, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_spring3.enabled(false).wh(1280, 720);
    var click3 = ui.click().id("click3").enabled(true);
    click3.rxy(0.5, 0.5).wh(40, 150).anchor(0.5);
    
    //spring4
    var spring4 = mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}");
    var morph_spring4 = ui.morph(spring4).id("spring4");
    morph_spring4.position(0.428, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_spring4.enabled(false).wh(1280, 720);
    var click4 = ui.click().id("click4").enabled(true);
    click4.rxy(0.555, 0.5).wh(40, 150).anchor(0.5);
    
    //spring5
    var spring5 = mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}");
    var morph_spring5 = ui.morph(spring5).id("spring5");
    morph_spring5.position(0.242, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_spring5.enabled(false).wh(1280, 720);
    var click5 = ui.click().id("click5").enabled(true);
    click5.rxy(0.603, 0.5).wh(40, 150).anchor(0.5);
    
    var text_title = ui.label("[lВЗЛОМ ЗАМКА").id("text_title");
    text_title.rx(0.5).ry(0.2, 0).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    var text_title = ui.label("[7Нужно нажать по штифтам в нужной последовательности").id("text_title");
    text_title.rx(0.5).ry(0.23, 0).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var blackscreen = mappet.createMorph("{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:8},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:8.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
    var morph_blackscreen = ui.morph(blackscreen);
    morph_blackscreen.position(0.62, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_blackscreen.enabled(false).wh(1280, 720);
    
    //var backdrop = ui.graphics().id("backdrop");
    //backdrop.rxy(0.603, 0.5).wh(40, 150).anchor(0.5);
    //backdrop.rect(0, 0, 40, 150, 0x88000000);
    
// Random 1, 2, 3, 4, 5
var numbers = [1, 2, 3, 4, 5];
var sequence = [];

while (numbers.length > 0)
 {
  var index = Math.floor(Math.random() * numbers.length);
  sequence.push(numbers[index]);
  numbers.splice(index, 1);
}

//c.send(sequence);
    
    states.setString("UI_hack_reset", sequence)
    states.setString("UI_hack", sequence)
    s.setupHUD("HUD_blackscreen");
    
c.scheduleScript(5, function (context)
{
    s.openUI(ui);
    s.closeHUD("HUD_blackscreen");
});

}
function handler(c)
{
    var s = c.getSubject();
    var states = s.getStates()
    var uiContext = s.getUIContext();
    
    var pressedNumber = 0;

    var UI_hack = s.getStates().getString("UI_hack");
    var UI_hack_reset = s.getStates().getString("UI_hack_reset");
    var numbers = UI_hack.split(",")
    
    //s.send(numbers);
    
    s.swingArm();
    
    if (uiContext.getLast() === "click1")
    {
        uiContext.get("spring1").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{P:[0.0f,4.03125f,0.0f]},spring1:{P:[0.0f,13.03125f,0.0f],S:[1.0f,0.5f,1.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click1").enabled(false);
        pressedNumber = 1
    }
    if (uiContext.getLast() === "click2")
    {
        uiContext.get("spring2").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{P:[0.0f,4.03125f,0.0f]},spring1:{P:[0.0f,13.03125f,0.0f],S:[1.0f,0.5f,1.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click2").enabled(false);
        pressedNumber = 2
    }
    if (uiContext.getLast() === "click3")
    {
        uiContext.get("spring3").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{P:[0.0f,4.03125f,0.0f]},spring1:{P:[0.0f,13.03125f,0.0f],S:[1.0f,0.5f,1.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click3").enabled(false);
        pressedNumber = 3
    }
    if (uiContext.getLast() === "click4")
    {
        uiContext.get("spring4").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{P:[0.0f,4.03125f,0.0f]},spring1:{P:[0.0f,13.03125f,0.0f],S:[1.0f,0.5f,1.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click4").enabled(false);
        pressedNumber = 4
    }
    if (uiContext.getLast() === "click5")
    {
        uiContext.get("spring5").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{P:[0.0f,4.03125f,0.0f]},spring1:{P:[0.0f,13.03125f,0.0f],S:[1.0f,0.5f,1.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click5").enabled(false);
        pressedNumber = 5
    }
    
    if (numbers[0] == pressedNumber)
    {
        var pos = s.getPosition();
        c.getWorld().playSound("mp.sounds:ht.hack.lockpick", pos.x, pos.y, pos.z, 1.0, 1.0);
        
        numbers.shift();
        var new_numbers = numbers;
        
        states.setString("UI_hack", new_numbers)
        //c.send(new_numbers)
        
//When code pass
        if (new_numbers == 0)
        {
        states.setString("UI_hack", 5) //reset ui
        s.closeUI();
        s.setupHUD("HUD_blackscreen_out");
        var pos = s.getPosition();
        c.getWorld().playSound("mp.sounds:ht.hack.lockpick_success2", pos.x, pos.y, pos.z, 1.0, 0.9);
        
        s.executeScript("player_doorHack")
        //test coordinates//
        
        }
        
    }
    else
    {
        states.setString("UI_hack", UI_hack_reset)
        uiContext.get("click1").enabled(true);
        uiContext.get("spring1").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click2").enabled(true);
        uiContext.get("spring2").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click3").enabled(true);
        uiContext.get("spring3").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click4").enabled(true);
        uiContext.get("spring4").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        uiContext.get("click5").enabled(true);
        uiContext.get("spring5").morph(mappet.createMorph("{Animation:{Interp:12,Animates:1b,Duration:5},Skin:\"b.a:1_HOTEL/hack_spring_ui/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube1:{},spring1:{P:[0.0f,13.03125f,0.0f]}}},Settings:{Hands:1b},Name:\"blockbuster.1_HOTEL/hack_spring_ui\"}"));
        
        var pos = s.getPosition();
        c.getWorld().playSound("mp.sounds:ht.hack.lockpick", pos.x, pos.y, pos.z, 0.8, 1.5);
    }
    
}