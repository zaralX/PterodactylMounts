function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var item = c.getValue("item");
    var slot = c.getValue("slot");
    var itemID = item.getItem().getId();
    var demon = s.getStates().getNumber("demon");
    var playerModelChange = s.getStates().getNumber("playerModelChange");
    var p_hunterSpeed = 1.2
    var last_slot = states.getNumber("last_slot");
    
    var playerModelName = states.getString("playerModelName");
    var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{},handR:{},legLB:{},armLT:{},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[0.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.0f,-0.1f,0.0f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
    
    if (demon != 1 && playerModelChange == 1)
    {
        c.executeCommand("/playsound minecraft:item.armor.equip_chain ambient @a ~ ~ ~ 0.15 2");
         //tripod
         if (states.getString("last_item") == "ht:tripod")
         {
             s.setHotbarIndex(last_slot);
             s.executeScript("npc_item_create");
             states.setString("last_item", "empty");
             states.setNumber("last_slot", "empty");
         }
        
        if (itemID == "minecraft:air")
        {
            s.setMorph(playerMorph);
                    s.swingArm()
        }
        else if (itemID == "ht:edbookmasteropen" || itemID == "ht:edbookhackopen" || itemID == "ht:edbookchefopen")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f,F:0b},handR:{RX:0.12217307f,F:0b},legLB:{},armLT:{RX:0.87266463f,F:0b,RZ:-0.05235988f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{RX:-0.34906587f,F:0b},legRT:{},tie:{},armRT:{RX:0.87266463f,F:0b,RY:-0.08003895f,RZ:0.05235988f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{RX:0.5235988f,F:0b},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[50.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.03125f,0.025f,0.0f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
                    s.swingArm()
        }
        else if (itemID == "ht:demonbook0" || itemID == "ht:demonbook1" || itemID == "ht:demonbook2" || itemID == "ht:demonbook3" || itemID == "ht:demonbook4")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f,F:0b},handR:{RX:0.12217307f,F:0b},legLB:{},armLT:{RX:0.8726646f,F:0b,RZ:-0.05235988f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{RX:0.8726646f,F:0b,RY:-0.045132365f,RZ:0.05235988f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{RX:0.5235988f,F:0b},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[50.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.0625f,0.05625f,-0.0625f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
                    s.swingArm()
        }
        else if (itemID == "ht:katana")
        {
                  if (playerModelName == "hotel_Vikos"){
                     var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.92502475f,F:0b},handR:{F:0b},legLB:{},armLT:{RX:0.9291522f,F:0b,RY:-0.15047675f,RZ:-0.27215725f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{RX:0.08726647f},legRT:{},tie:{},armRT:{RX:1.7453293f,F:0b,RY:0.62665695f,RZ:1.0534852f,Y:-1.15625f,Z:-0.90625f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{RX:-0.13962634f},handL:{RX:0.6806784f,F:0b},feetLT:{},feetRT:{},armLB:{RX:0.7155852f,F:0b},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[20.0f,194.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.06064348f,0.056250002f,-0.07762011f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
                  }
                  else
                  {
                     var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.8726648f,F:0b},handR:{F:0b},legLB:{},armLT:{RX:0.8218592f,F:0b,RY:-0.20892176f,RZ:-0.014826101f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{RX:0.08726647f},legRT:{},tie:{},armRT:{RX:1.7453293f,F:0b,RY:0.62665695f,RZ:1.0534852f,Y:-1.15625f,Z:-0.90625f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{RX:-0.13962634f},handL:{RX:0.40142575f,F:0b},feetLT:{},feetRT:{},armLB:{RX:0.7155852f,F:0b},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[20.0f,194.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.06064348f,0.056250002f,-0.07762011f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
                  }
                    s.setMorph(playerMorph);
                    s.swingArm()
        }
        else if (itemID == "ht:radio" || itemID == "ht:radio_on")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f},handR:{RX:0.12217307f},legLB:{},armLT:{},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{RX:0.25632828f,F:0b,RY:-0.053837527f,RZ:0.20249987f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[40.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[-0.15625f,0.052063f,-0.101002f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
        }
        else if (itemID == "ht:tripod")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.9424776f,F:0b},handR:{RX:0.12217307f},legLB:{},armLT:{},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{RX:0.47589213f,F:0b,RY:0.17206734f,RZ:0.11140758f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[30.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.0625f,-0.0375f,-0.0625f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
            s.swingArm()
            states.setNumber("last_slot", s.getHotbarIndex())
            states.setString("last_item", "ht:tripod")
        }
        else if (itemID == "ht:capacitor" || itemID == "ht:capacitor_on" || itemID == "ht:jar" || itemID == "ht:jarpotion")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f},handR:{RX:0.12217305f,RZ:-0.418879f},legLB:{},armLT:{RX:-0.094506875f,RY:-0.13021839f,RZ:-0.074689135f},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{RX:0.1297226f,F:0b,RY:0.054447502f,RZ:0.19125198f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{RX:0.15707964f},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[30.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.03125f,0.025f,-0.0625f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
            s.swingArm()
        }
        else if (itemID == "ht:reagent")
        {
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f},handR:{RX:0.3141593f,RY:5.235988E-8f,RZ:-0.24434596f},legLB:{},armLT:{},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{F:0b,RZ:0.17453294f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[80.86781f,181.71048f,8.837264f],Target:1b,S:[1.2f,1.2f,1.2f],T:[-0.022484735f,0.07317782f,-0.39527702f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
            s.swingArm()
        }
        else
        {
            //s.setMorph(playerMorph);
            var playerMorph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:"+p_hunterSpeed+"f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.52359843f},handR:{RX:0.12217307f},legLB:{},armLT:{},feetLB:{},bone:{},bodyT:{},tie_2:{},head:{},legRT:{},tie:{},armRT:{F:0b,RZ:0.12217305f},feetRB:{},bone3:{},legLT:{},bone2:{},bodyB:{},handL:{},feetLT:{},feetRT:{},armLB:{},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:5},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[30.0f,180.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.0f,0.025f,0.0f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
            s.setMorph(playerMorph);
                    s.swingArm()
        }
    }
    
    
}