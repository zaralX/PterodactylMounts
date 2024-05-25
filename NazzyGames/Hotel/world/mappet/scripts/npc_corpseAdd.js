function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var playerModelName = states.getString("playerModelName");
    
    if (playerModelName != "none" || playerModelName != "done")
    {
        states.setString("playerModelName", "done");
        var morph = mappet.createMorph("{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{F:0b},handR:{F:0b},legLB:{},armLT:{F:0b},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{F:0b},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{F:0b},feetLT:{},feetRT:{},armLB:{F:0b},base:{},legRB:{}},Animated:0b},Transition:{Interp:21,Animates:1b,Duration:0},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{F:0b},handR:{F:0b},legLB:{RX:-1.0297443f},armLT:{RX:0.17453294f,F:0b,RZ:-0.2617994f},feetLB:{},bone:{},bodyT:{RX:-0.2617994f},tie_2:{RX:0.31415927f},head:{},legRT:{RX:0.62831855f,RY:-0.034906585f},tie:{},armRT:{RX:0.17453294f,F:0b,RZ:0.22689281f},feetRB:{RX:0.4712389f,Y:1.375f,Z:0.125f},bone3:{},legLT:{RX:-0.10471976f},bone2:{},bodyB:{RX:0.12217305f},handL:{F:0b},feetLT:{},feetRT:{},armLB:{F:0b},base:{RX:-0.17453294f,Y:-5.71875f},legRB:{RX:-1.4835299f}},Animated:0b},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:5.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{RX:0.20943949f,F:0b},handR:{F:0b},legLB:{RX:-0.17453294f},armLT:{RX:0.27925268f,F:0b,RY:1.5707964f,RZ:-0.82030475f,Y:-0.09375f,Z:-1.75f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{RX:0.2617994f,RZ:0.10471976f},legRT:{RZ:-0.034906585f},tie:{},armRT:{RX:0.034906585f,F:0b,RY:-1.5707964f,X:-0.1875f,RZ:0.43633237f,Y:0.15625f,Z:-1.6875f},feetRB:{},bone3:{},legLT:{RZ:-0.2443461f},bone2:{RZ:-0.17453294f},bodyB:{},handL:{F:0b},feetLT:{},feetRT:{},armLB:{RX:0.5410521f,F:0b},base:{RX:-1.5707964f,Y:-20.21875f},legRB:{RX:-0.15707964f}},Animated:0b},Transition:{Interp:17,Animates:1b,Duration:12},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:12.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
        s.setMorph(morph)
    }
}