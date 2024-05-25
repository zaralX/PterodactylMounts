function main(c)
{
    // Code...
    var s = c.getSubject();
    var hand = c.getValue("hand");
    var object = c.getValue("object");
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var demon = states.getNumber("demon");
    var d_points = gStates.getNumber("d_points");
    var d_cooldown = gStates.getNumber("d_cooldown");
    var d_cooldown_start = gStates.getNumber("d_cooldown_start"); //default 600
    var d_cooldown_points = gStates.getNumber("d_cooldown_points"); //default 0
    var d_cooldown_pointsStart = gStates.getNumber("d_cooldown_pointsStart"); //default 1
    var d_soundRadius = gStates.getNumber("d_soundRadius"); //default 8
    var d_RayDistance = gStates.getNumber("d_RayDistance") //default 2
    var d_morphCount = gStates.getNumber("d_morphCount")
    var pos = s.getPosition();
    var ray = s.rayTrace(d_RayDistance);
    
    
    if (hand == "main" && ray.isEntity() && demon == 1)
    {
        if (ray.getEntity().getStates().getNumber("demon") == 0 && ray.getEntity().isPlayer() && ray.getEntity().getStates().getNumber("death") == 0)
        {
            if (d_cooldown > 0 || d_morphCount < 1 || ray.getEntity().getStates().getNumber("pills") > 0)
            {
                 s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
                 gStates.setNumber("d_cooldown", d_cooldown + 1);
            }
            else if (d_cooldown <= 0 && d_morphCount > 0) //morphing
            {
                 cooldown()
                 gStates.setNumber("d_points", d_points - 20);
                 gStates.setNumber("d_morphCount", 0);
                 
                 var victim = ray.getEntity();
                 var victimPos = victim.getPosition();
                 var victimRot = victim.getRotations();
                 
                 var victimMorphNBT = mappet.createCompound(victim.getMorph().toNBT().toString());
                 var victimMorph = mappet.createMorph(victimMorphNBT);
                 
                 var myMorphName = states.getString("playerModelName")
                 var victimMorphName = victim.getStates().getString("playerModelName")
                 states.setString("playerModelName", victimMorphName)
                 
                 
                 s.setPosition(victimPos.x, victimPos.y, victimPos.z);
                 s.setRotations(victimRot.x, victimRot.y, victimRot.z);
                 
                 victim.getStates().setNumber("death", 1);
                 victim.getStates().setNumber("playerModelChange", 0);
                   var emptyMorph = mappet.createMorph("{Skin:\"b.a:empty/skins/texture.png\",Scale:0.75f,Name:\"chameleon.hotelgirl1\"}");
                   victim.setMorph(emptyMorph);
                   s.setMorph(victimMorph);
                 
                 victim.setupHUD("HUD_flickering");
                 victim.setupHUD("HUD_noise");
                 victim.playSound("mp.sounds:ht.events.bass1", pos.x, pos.y, pos.z, 2, 1);
                 victim.playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y, pos.z, 2, 1.5);
                 s.setupHUD("HUD_flickering");
                  
                 states.setNumber("demon", 2)
                 
                   //copy victim's items
                   for (let i = 0; i <= 8; i++)
                   {
                      victim.setHotbarIndex(i);
                      s.setHotbarIndex(i);
                      var item = victim.getMainItem();
                      s.setMainItem(item);
                   }
                   
                   s.applyPotion(mappet.getPotion("speed"), 1, 5, false);
                   s.applyPotion(mappet.getPotion("slowness"), 250, 1, false);
                 
                 c.scheduleScript(250, function (context)
                 {
                      states.setNumber("demon", 1);
                      gStates.setString("d_trigger", "invisible");
                      victim.setMorph(victimMorph);
                      
                      var sPos = s.getPosition();
                      var sRot = s.getRotations();
                      victim.setPosition(sPos.x, sPos.y, sPos.z);
                      victim.setRotations(sRot.x, sRot.y, sRot.z);
                      
                      victim.getStates().setNumber("death", 0);
                      victim.getStates().setNumber("playerModelChange", 1);
                      
                      victim.playSound("mp.sounds:ht.events.bass1", pos.x, pos.y, pos.z, 2, 1);
                      victim.playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y, pos.z, 2, 1.8);
                      victim.setupHUD("HUD_flickering");
                      victim.closeHUD("HUD_noise");
                      s.setupHUD("HUD_flickering");
                      
                        //copy victim's items
                        for (let i = 0; i <= 8; i++)
                        {
                           s.setHotbarIndex(i);
                           victim.setHotbarIndex(i);
                           var item = s.getMainItem();
                           victim.setMainItem(item);
                           s.setMainItem(mappet.createItem("minecraft:air"));
                        }
                      states.setString("playerModelName", myMorphName)
                      
                 });
                 
            }
        } //playerMorph
        
        if (ray.getEntity().getNpcId() == "item" && ray.getEntity().getStates().getNumber("on") == 1)
        {
            if (d_points < 10 || d_cooldown > 0)
            {
                 s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
                 gStates.setNumber("d_cooldown", d_cooldown + 1);
            }
            else
            {
                 cooldown()
                 //gStates.setNumber("d_cooldown", d_cooldown_start);
                 gStates.setNumber("d_points", d_points - 10);
                 c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+4+"")
                 c.getWorld().playSound("mp.sounds:ht.interaction.tripod_place", pos.x, pos.y, pos.z, 1.5, 1.1);
                 c.getWorld().playSound("mp.sounds:ht.interaction.tripod_pickup", pos.x, pos.y, pos.z, 1.5, 0.9);
                 ray.getEntity().getStates().setNumber("on", 0);
                 
                 var morph = mappet.createMorph("{Animation:{Interp:17,Animates:1b,Duration:10},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,3.71875f,7.5625f],R:[-92.74941f,0.969472f,49.985153f]}}},BodyParts:[{R:[180.0f,180.0f,0.0f],T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:tripod\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
                 ray.getEntity().setMorph(morph);
            }
        } //tripod
    }
    
    function cooldown()
    {
        gStates.setNumber("d_cooldown_points", d_cooldown_points - 1);
        if (gStates.getNumber("d_cooldown_points") <= 0)
        {
            gStates.setNumber("d_cooldown", d_cooldown_start);
            gStates.setNumber("d_cooldown_points", d_cooldown_pointsStart);
            gStates.setString("d_trigger", "sound_cooldown")
        }

    }
}