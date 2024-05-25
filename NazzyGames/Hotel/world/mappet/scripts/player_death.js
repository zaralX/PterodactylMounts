function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var demon = s.getStates().getNumber("demon");
    var pitch = s.getPitch();
    var yaw = s.getYaw();
    
    
        //if player in dimension
        var inDimension = s.getStates().getNumber("inDimension")
        if (inDimension == 1)
        {
            var random = Math.floor(mappet.random(1, 4))
            if (random == 1)
            {
               c.executeCommand("/tp @s 23 10 -5 -180 0");
            }
            else if (random == 2)
            {
               c.executeCommand("/tp @s 23 10 23 -180 0");
            }
            else if (random == 3)
            {
               c.executeCommand("/tp @s -6 10 -13 -90 0");
            }
            s.getStates().setNumber("inDimension", 0)
        }
        //code start
    
    var playerModelName = states.getString("playerModelName");
    c.executeCommand("/mp npc summon corpse default ~ ~ ~");
    s.setupHUD("HUD_blackscreen_out");
    
    s.setGameMode(3);
    s.applyPotion(mappet.getPotion("invisibility"), 99999, 0, false);
    s.applyPotion(mappet.getPotion("speed"), 99999, 0, false);
    
    var pos = s.getPosition();
    s.playSound("mp.sounds:ht.events.bass1", pos.x, pos.y, pos.z);
    
    var playerMorph = mappet.createMorph("{EntityData:{CanBreakDoors:0b,ForgeCaps:{},PersistenceRequired:0b,AbsorptionAmount:0.0f,UpdateBlocked:0b},Scale:1.0f,Name:\"minecraft:zombie\"}");
    s.setMorph(playerMorph);
    
    var corpse = c.getServer().getEntities("@e[mpe=playerModelName==\"none\",mpid=corpse]");
    for (var i in corpse)
    {
        corpse[i].getStates().setString("playerModelName", "done")
        corpse[i].setRotations(pitch, yaw, yaw);
        var morphCorpse = mappet.createMorph("{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{F:0b},handR:{F:0b},legLB:{},armLT:{F:0b},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{F:0b},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{F:0b},feetLT:{},feetRT:{},armLB:{F:0b},base:{},legRB:{}},Animated:0b},Transition:{Interp:21,Animates:1b,Duration:0},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{F:0b},handR:{F:0b},legLB:{RX:-1.0297443f},armLT:{RX:0.17453294f,F:0b,RZ:-0.2617994f},feetLB:{},bone:{},bodyT:{RX:-0.2617994f},tie_2:{RX:0.31415927f},head:{},legRT:{RX:0.62831855f,RY:-0.034906585f},tie:{},armRT:{RX:0.17453294f,F:0b,RZ:0.22689281f},feetRB:{RX:0.4712389f,Y:1.375f,Z:0.125f},bone3:{},legLT:{RX:-0.10471976f},bone2:{},bodyB:{RX:0.12217305f},handL:{F:0b},feetLT:{},feetRT:{},armLB:{F:0b},base:{RX:-0.17453294f,Y:-5.71875f},legRB:{RX:-1.4835299f}},Animated:0b},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:5.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Pose:{Pose:{armRB:{RX:0.20943949f,F:0b},handR:{F:0b},legLB:{RX:-0.17453294f},armLT:{RX:0.27925268f,F:0b,RY:1.5707964f,RZ:-0.82030475f,Y:-0.09375f,Z:-1.75f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{RX:0.2617994f,RZ:0.10471976f},legRT:{RZ:-0.034906585f},tie:{},armRT:{RX:0.034906585f,F:0b,RY:-1.5707964f,X:-0.1875f,RZ:0.43633237f,Y:0.15625f,Z:-1.6875f},feetRB:{},bone3:{},legLT:{RZ:-0.2443461f},bone2:{RZ:-0.17453294f},bodyB:{},handL:{F:0b},feetLT:{},feetRT:{},armLB:{RX:0.5410521f,F:0b},base:{RX:-1.5707964f,Y:-20.21875f},legRB:{RX:-0.15707964f}},Animated:0b},Transition:{Interp:17,Animates:1b,Duration:12},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,Name:\"chameleon."+playerModelName+"\"},Duration:12.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        corpse[i].setMorph(morphCorpse);
    }
    
   for (let i = 0; i <= 8; i++) 
   {
      s.setHotbarIndex(i);
      s.executeScript("npc_item_create");
   }
   
   s.getStates().setNumber("death", 1);
   s.getStates().setNumber("sanity", 0);
   
   var huntersAlive = c.getServer().getStates().getNumber("huntersAlive");
   c.getServer().getStates().setNumber("huntersAlive", huntersAlive - 1);
    
    
    
    
}