//ЭТО ОДИН ИЗ ПЕРВЫХ СКРИПТОВ, ТУТ ОЧЕНЬ МНОГО ГОВНОКОДА!!!!!
function main(c)
{
var players = c.getServer().getAllPlayers();
for (var i in players)
{
    var player = players[i];
    if (player.getStates().getNumber("demon") == 1)
    {
        var states = player.getStates();
        var gStates = c.getServer().getStates();
        var d_cooldown = gStates.getNumber("d_cooldown");
        var d_huntTime = gStates.getNumber("d_huntTime");
        var d_forceHuntTime = gStates.getNumber("d_forceHuntTime");
        var elevator_on = gStates.getNumber("elevator_on");
        var stage = gStates.getNumber("stage");
        var taskNumber = gStates.getNumber("taskNumber");
        var d_cooldown_start = gStates.getNumber("d_cooldown_start"); //default 600
        var d_points = gStates.getNumber("d_points");
        var d_points_old = gStates.getNumber("d_points_old");
        var d_dashCooldown = gStates.getNumber("d_dashCooldown");
        var d_dashCount = gStates.getNumber("d_dashCount");
        var d_ab_VisibleCooldown = gStates.getNumber("d_ab_VisibleCooldown");
        var d_ab_VisibleCount = gStates.getNumber("d_ab_VisibleCount");
        
        var demonSkin = Math.floor(mappet.random(1,4))
        var demonStage0 = mappet.createMorph("{Actions:{sprinting:{Speed:2.0f,Name:\"running\"}},Pose:{Pose:{armRB:{},hairR1:{},skirtF:{},hairR2:{},hairF:{},hairR3:{},hairL1:{},hairL2:{},hairL3:{},head:{SX:0.85f,SY:0.85f,SZ:0.85f},hairB1:{},hairB2:{},armRT:{},feetRB:{},handL:{},skirtB:{},armLB:{},legRB:{},handR:{},legLB:{},armLT:{},feetLB:{},bodyT:{},legRT:{},legLT:{},bodyB:{},feetLT:{},feetRT:{},base:{SX:0.75f,SY:0.75f,SZ:0.75f}}},Skin:[{Path:\"c.s:hotelgirl1/skins/hotelgirl"+demonSkin+".png\",Color:-2046820353}],BodyParts:[{R:[0.0f,180.0f,0.0f],T:[0.0f,1.25f,0.0f],Limb:\"base\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}],Name:\"chameleon.hotelgirl1\"}")
        var demonStage2 = mappet.createMorph("{Actions:{sprinting:{Speed:2.0f,Name:\"running\"}},Pose:{Pose:{armRB:{},hairR1:{},skirtF:{},hairR2:{},hairF:{},hairR3:{},hairL1:{},hairL2:{},hairL3:{},head:{SX:0.85f,SY:0.85f,SZ:0.85f},hairB1:{},hairB2:{},armRT:{},feetRB:{},handL:{},skirtB:{},armLB:{},legRB:{},handR:{},legLB:{},armLT:{},feetLB:{},bodyT:{},legRT:{},legLT:{},bodyB:{},feetLT:{},feetRT:{},base:{SX:0.75f,SY:0.75f,SZ:0.75f}}},Skin:\"c.s:hotelgirl1/skins/hotelgirl"+demonSkin+".png\",BodyParts:[{R:[0.0f,180.0f,0.0f],T:[0.0f,1.25f,0.0f],Limb:\"base\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}],Name:\"chameleon.hotelgirl1\"}")
        var demonStage3 = mappet.createMorph("{Actions:{running:\"running_flying\",sprinting:{Speed:2.0f,Name:\"running_flying\"},idle:\"idle_flying\"},Pose:{Pose:{armRB:{},hairR1:{},skirtF:{},hairR2:{},hairF:{},hairR3:{},hairL1:{},hairL2:{},hairL3:{},head:{SX:0.85f,SY:0.85f,SZ:0.85f},hairB1:{},hairB2:{},armRT:{},feetRB:{},handL:{},skirtB:{},armLB:{},legRB:{},handR:{},legLB:{},armLT:{},feetLB:{},bodyT:{},legRT:{},legLT:{},bodyB:{},feetLT:{},feetRT:{},base:{SX:0.75f,SY:0.75f,SZ:0.75f}}},Skin:\"c.s:hotelgirl1/skins/hotelgirl"+demonSkin+".png\",BodyParts:[{R:[0.0f,180.0f,0.0f],T:[0.0f,1.25f,0.0f],Limb:\"base\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}],Name:\"chameleon.hotelgirl1\"}")
        var demonProcess = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:1.8f},Skin:\"b.a:empty/skins/texture.png\",BodyParts:[{T:[0.0f,-1.0f,0.0f],Limb:\"cube\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}},{Target:1b,Limb:\"cube\",Morph:{Scheme:\"hotelblackspot_particle\",Name:\"snowstorm\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}")
        
        player.executeScript("demon_RaycastInfo");
        
        if (d_cooldown > 0/* && d_huntTime <= 0*/)
        {
            gStates.setNumber("d_cooldown", d_cooldown - 1);
            if (stage >= 2)
            {
                var HUDmorph = mappet.createMorph("{Color:5197647,Label:\""+Math.floor(d_cooldown / 20)+"\",Name:\"label\"}")
                player.changeHUDMorph("demon_ui", 5, HUDmorph)
            }
        }
        if (d_cooldown == 0 && stage >= 2)
        {
            gStates.setNumber("d_cooldown", -1);
            gStates.setString("d_trigger", "sound_ready")
        }
        
        //demon triggers
        var d_trigger = gStates.getString("d_trigger");
        if (d_trigger == "test")
        {
            gStates.setString("d_trigger", "none")
            c.send("test");
        }
        if (d_trigger == "invisible")
        {
            var pos = player.getPosition();
            gStates.setString("d_trigger", "none")
            gStates.setNumber("d_visible", 0);
            
            var morph = mappet.createMorph("{Scheme:\"hotel_portalDust\",Name:\"snowstorm\"}");
            c.getServer().getWorld(0).displayMorph(morph, 1, pos.x, pos.y + 0.2, pos.z);
            
            player.setHunger(5);
            player.applyPotion(mappet.getPotion("invisibility"), 99999, 0, false);
            player.applyPotion(mappet.getPotion("speed"), 99999, 0, false);
            var morph = mappet.createMorph("{EntityData:{CanBreakDoors:0b,ForgeCaps:{},PersistenceRequired:0b,AbsorptionAmount:0.0f,UpdateBlocked:0b},Scale:1.0f,Name:\"minecraft:zombie\"}");
            player.setMorph(morph);
            player.executeCommand("/stopsound @a hostile mp.sounds:ht.voicelines.demon.demon_huntloop1");
            c.executeCommand("/execute @a[mpe=demon==1] ~ ~1 ~ /playsound mp.sounds:ht.voicelines.demon.hunt_end"+Math.floor(mappet.random(1,3))+" hostile @a ~ ~ ~ 1 1");
        }
        if (d_trigger == "visible" && player.isOnGround())
        {
         
            gStates.setString("d_trigger", "visible_cooldown")
            gStates.setNumber("d_visible", 1);
            
            player.setHunger(5);
            player.applyPotion(mappet.getPotion("speed"), 99999, 0, false);
            
            if (stage >= 3) //set morph to demon
            {
               player.setMorph(demonStage3);
            }
            else if (stage >= 2)
            {
               player.setMorph(demonStage2);
            }
            else
            {
               player.setMorph(demonStage0);
            }
            
            
            if (d_huntTime <= 0) //ability use without hunt
            {
                 var HUDmorph = mappet.createMorph("{Color:-788529264,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_visible.png\",Shaded:0b,Name:\"blockbuster.image\"}")
                 player.changeHUDMorph("demon_ui", 6, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Color:16777104,Label:\"R\",Name:\"label\"}")
                 player.changeHUDMorph("demon_ui", 7, HUDmorph)
                 
                c.scheduleScript(200, function (context) //reset visible
                {
                    if (gStates.getNumber("d_visible") == 1) //if player check demon before
                    {
                       gStates.setString("d_trigger", "invisible")
                    }
                }); //schedule end
            }
        }
        if (d_trigger == "hunt")
        {
            gStates.setString("d_trigger", "none")
            if ((taskNumber < 10) || (taskNumber >= 10 && gStates.getNumber("lights") == 1))
            {
               gStates.setNumber("lights", 0);
               c.getServer().executeScript("lights_control")
            }
            
            gStates.setNumber("d_huntReady", 0); //hunt time
            gStates.setNumber("d_huntTime", 9999); //need for schedule
            gStates.setNumber("d_dashCount", 1); //jump forward count
            gStates.setNumber("d_dashCooldown", 150); //jump forward count
            
            player.setMorph(demonProcess);
            c.executeCommand("/execute @a[mpe=demon==1] ~ ~1 ~ /playsound mp.sounds:ht.voicelines.demon.hunt_start"+Math.floor(mappet.random(1,7))+" hostile @a ~ ~ ~ 1 1");
            
            var HUDmorph = mappet.createMorph("{Color:-788529264,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_hunt.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 0, HUDmorph)
            var HUDmorph = mappet.createMorph("{Color:16777104,Label:\"X\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 1, HUDmorph)
            
            gStates.setString("d_trigger", "tp_cooldown");
            c.scheduleScript(1, function (context)
            {
                gStates.setString("d_trigger", "visible_cooldown");
            });
            //c.scheduleScript(2, function (context)
            //{
                //gStates.setString("d_trigger", "sound_cooldown");
            //});
            
            var pos = player.getPosition();
            player.moveTo("linear", 100, pos.x, pos.y, pos.z, false);
            
                //hunt starts
                c.scheduleScript(100, function (context)
                {
                    gStates.setNumber("d_huntTime", gStates.getNumber("d_huntStartTime") + gStates.getNumber("d_symbolTimePoints")); //hunt time
                    gStates.setString("d_trigger", "visible")
                    gStates.setNumber("d_huntSound", 0);
                });
        }
        if (d_trigger == "ui_huntReady")
        {
            gStates.setString("d_trigger", "none")
            gStates.setNumber("d_huntReady", 1); //hunt time
            var HUDmorph = mappet.createMorph("{Color:-788529153,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_hunt.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 0, HUDmorph)
            var HUDmorph = mappet.createMorph("{Label:\"X\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 1, HUDmorph)
        }
        if (d_trigger == "sound_ready")
        {
            gStates.setString("d_trigger", "none")
            var HUDmorph = mappet.createMorph("{Color:-788529153,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_sound.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 4, HUDmorph)
            var HUDmorph = mappet.createMorph("{Label:\"F\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 5, HUDmorph)
        }
        if (d_trigger == "sound_cooldown")
        {
            gStates.setString("d_trigger", "none")
            var HUDmorph = mappet.createMorph("{Color:805306367,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_sound.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 4, HUDmorph)
            var HUDmorph = mappet.createMorph("{Color:5197647,Label:\"F\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 5, HUDmorph)
        }
        if (d_trigger == "tp_ready")
        {
            gStates.setString("d_trigger", "none")
            
            var elevator_on = gStates.getNumber("elevator_on");
            if (elevator_on == 0)
            {
                var HUDmorph = mappet.createMorph("{Color:805306367,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_teleport.png\",Shaded:0b,Name:\"blockbuster.image\"}")
                player.changeHUDMorph("demon_ui", 2, HUDmorph)
                var HUDmorph = mappet.createMorph("{Color:5197647,Label:\"Q\",Name:\"label\"}")
                player.changeHUDMorph("demon_ui", 3, HUDmorph)
            }
            else
            {
                var HUDmorph = mappet.createMorph("{Color:-788529153,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_teleport.png\",Shaded:0b,Name:\"blockbuster.image\"}")
                player.changeHUDMorph("demon_ui", 2, HUDmorph)
                var HUDmorph = mappet.createMorph("{Label:\"Q\",Name:\"label\"}")
                player.changeHUDMorph("demon_ui", 3, HUDmorph)
            }
            
        }
        if (d_trigger == "tp_cooldown")
        {
            var pos = player.getPosition();
            gStates.setString("d_trigger", "none");
            var HUDmorph = mappet.createMorph("{Color:805306367,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_teleport.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 2, HUDmorph)
            var HUDmorph = mappet.createMorph("{Color:5197647,Label:\"Q\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 3, HUDmorph)
            player.playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y + 1, pos.z, 0.5, 1.7);
            player.setupHUD("HUD_flickering")
            
            if (d_huntTime <= 0)
            {
                gStates.setNumber("d_ab_TPcooldown", 600);
            }
            
        }
        if (d_trigger == "visible_ready")
        {
            gStates.setString("d_trigger", "none");
            var HUDmorph = mappet.createMorph("{Color:-788529153,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_visible.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 6, HUDmorph)
            var HUDmorph = mappet.createMorph("{Label:\"R\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 7, HUDmorph)
        }
        if (d_trigger == "visible_cooldown")
        {
            gStates.setString("d_trigger", "none");
            var HUDmorph = mappet.createMorph("{Color:805306367,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_visible.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 6, HUDmorph)
            var HUDmorph = mappet.createMorph("{Color:5197647,Label:\"R\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 7, HUDmorph)
            
            if (d_huntTime <= 0)
            {
                gStates.setNumber("d_ab_VisibleCooldown", 1200);
            }

        }
        //triggers end
        if (d_forceHuntTime > 0)
        {
            gStates.setNumber("d_forceHuntTime", d_forceHuntTime - 1);
            var HUDmorph = mappet.createMorph("{Color:5197647,Label:\""+Math.floor(d_forceHuntTime / 20)+"\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 1, HUDmorph)
        }
        if (d_forceHuntTime == 0)
        {
            gStates.setNumber("d_forceHuntTime", -1);
            gStates.setString("d_trigger", "ui_huntReady") //trigger
        }
        
        
        if (d_huntTime > 0 && gStates.getNumber("d_visible") == 1)
        {
            gStates.setNumber("d_huntTime", d_huntTime - 1);
            var HUDmorph = mappet.createMorph("{Color:16777104,Label:\""+Math.floor(d_huntTime / 20)+"\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 1, HUDmorph)
            
            var tracker = player;
            var trackedEntities = c.getServer().getEntities("@a[mpe=demon!=1]");
            for each (var trackedEntity in trackedEntities)
            {
                if (trackedEntity.isEntityInRadius(tracker, 1.5) && trackedEntity.getStates().getNumber("death") != 1)
                {
                   gStates.setNumber("d_huntTime", 0);
                   trackedEntity.getStates().setNumber("demon_touch", 1)
                   if (stage < 4 || trackedEntity.getStates().getNumber("obsessionConfirmed") == 1)
                   {
                     trackedEntity.executeScript("blackspot_tp");
                   }
                   else
                   {
                      trackedEntity.executeScript("player_death");
                   }
                }//if
            }
            
        }
        
        if (d_huntTime == 0)
        {
            gStates.setString("d_trigger", "invisible");
            gStates.setNumber("d_huntTime", -1);
            if (taskNumber < 10)
            {
               gStates.setNumber("lights", 1);
               //create card
               var pos = player.getPosition();
               c.executeCommand("/mp npc despawn @e[mpe=remove==1]")
               c.executeCommand("/mp npc summon item gamecard "+pos.x+" "+ (pos.y) +" "+pos.z);
               
               c.getServer().executeScript("lights_control")
               gStates.setNumber("d_puddleCount", 2); //d_puddleCount
               gStates.setNumber("d_falseCardCount", 1);
            }
            else
            {
               gStates.setNumber("d_forceHuntTime", 400);
            }

            var HUDmorph = mappet.createMorph("{Color:805306367,Animation:{Interp:21,Animates:1b,Duration:5},Texture:\"b.a:1_HOTEL/ui/icon_hunt.png\",Shaded:0b,Name:\"blockbuster.image\"}")
            player.changeHUDMorph("demon_ui", 0, HUDmorph)
            var HUDmorph = mappet.createMorph("{Color:16777104,Label:\""+gStates.getNumber("d_huntPoints")+"\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 1, HUDmorph)
            gStates.setNumber("d_cooldown", d_cooldown_start);
            c.executeCommand("/playsound mp.sounds:ht.events.hunt_end ambient @a[mpe=demon==1] ~ ~1000 ~ 1000");
            
               //set visible cound
               if (stage >= 1 && stage < 3) {
                   gStates.setNumber("d_ab_VisibleCount", 1);
               }
               else if (stage >= 3) {
                   gStates.setNumber("d_ab_VisibleCount", 2);
               }
               
               if (stage >= 2) {
                   gStates.setNumber("d_morphCount", 1)
               }
            
            c.scheduleScript(2, function (context)
            {
                gStates.setString("d_trigger", "tp_cooldown");
            });
            c.scheduleScript(3, function (context)
            {
                gStates.setString("d_trigger", "visible_cooldown");
            });
            c.scheduleScript(4, function (context)
            {
                gStates.setString("d_trigger", "sound_cooldown");
            });
            
        }
        
        //demonSound
        if (d_huntTime > 0 && gStates.getNumber("d_visible") == 1 && gStates.getNumber("d_huntSound") > 0)
        {
            gStates.setNumber("d_huntSound", gStates.getNumber("d_huntSound") - 1);
            //player.sendActionBar(gStates.getNumber("d_huntSound"));
            
        }
        if (d_huntTime > 0 && gStates.getNumber("d_visible") == 1 && gStates.getNumber("d_huntSound") == 0)
        {
            gStates.setNumber("d_huntSound", 19);
            c.executeCommand("/execute @a[mpe=demon==1] ~ ~1 ~ /playsound mp.sounds:ht.voicelines.demon.demon_huntloop1 hostile @a ~ ~ ~ 2 1");
        }
        
        if (gStates.getNumber("d_visible") == 1)
        {
           var motion = player.getMotion();
           if (motion.y > 0)
           {
             player.setMotion(motion.x, motion.y - 1, motion.z);
             
             var look = player.getLook();
             var dashCount = gStates.getNumber("d_dashCount");
             if (dashCount > 0)
             {
                 if (d_dashCooldown <= 0)
                 {
                    player.setMotion(look.x * 1, look.y * 0.1, look.z * 1);
                    gStates.setNumber("d_dashCount", dashCount - 1);
                      if (taskNumber >= 10)
                      {
                        gStates.setNumber("d_dashCooldown", 150);
                      }
                      else
                      {
                        gStates.setNumber("d_dashCooldown", 0);
                      }
                      
                    var pos = player.getPosition();
                    c.getServer().getWorld(0).playSound("mp.sounds:ht.voicelines.demon.dash1", pos.x, pos.y, pos.z, 2, 1);
                 }
             }
             
    
           }
        }
        
        var d_ab_TPcooldown = gStates.getNumber("d_ab_TPcooldown");
        if (d_ab_TPcooldown > 0 && d_huntTime <= 0 && elevator_on == 1)
        {
            gStates.setNumber("d_ab_TPcooldown", d_ab_TPcooldown - 1);
            var HUDmorph = mappet.createMorph("{Color:5197647,Label:\""+Math.floor(d_ab_TPcooldown / 20)+"\",Name:\"label\"}")
            player.changeHUDMorph("demon_ui", 3, HUDmorph)
        }
        if (d_ab_TPcooldown == 0)
        {
            gStates.setNumber("d_ab_TPcooldown", -1);
            gStates.setString("d_trigger", "tp_ready")
        }
        
        if (d_ab_VisibleCooldown > 0 && d_huntTime <= 0 && stage >= 1 && d_ab_VisibleCount > 0)
        {
            if (gStates.getNumber("d_visible") == 0) //if demon not visible
            {
               gStates.setNumber("d_ab_VisibleCooldown", d_ab_VisibleCooldown - 1);
               var HUDmorph = mappet.createMorph("{Color:5197647,Label:\""+Math.floor(d_ab_VisibleCooldown / 20)+"\",Name:\"label\"}")
               player.changeHUDMorph("demon_ui", 7, HUDmorph)
            }
        }
        if (d_ab_VisibleCooldown == 0)
        {
            gStates.setNumber("d_ab_VisibleCooldown", -1);
            gStates.setString("d_trigger", "visible_ready");
        }
        
        if (d_points != d_points_old) //refresh points in ui;
        {
           gStates.setNumber("d_points_old", d_points);
           c.executeCommand("/mp hud morph @a[mpe=demon==1] d_points 0 {Background:1258291200,Max:120,Label:\"Очки стресса: [e"+ (d_points) +" [fед.\",Name:\"label\"}");
           var pos = player.getPosition();
           player.playSound("minecraft:ui.button.click", pos.x, pos.y, pos.z, 0.03, 1);
           
           var d_huntReady = gStates.getNumber("d_huntReady")
           if (taskNumber > 2 && d_huntTime <= 0 && d_forceHuntTime <= 0 && d_huntReady != 1)
           {
               gStates.setNumber("d_huntPoints", gStates.getNumber("d_huntPoints") - (d_points - d_points_old));
               var HUDmorph = mappet.createMorph("{Color:16777104,Label:\""+gStates.getNumber("d_huntPoints")+"\",Name:\"label\"}")
               player.changeHUDMorph("demon_ui", 1, HUDmorph)
           }
        }
        
        //cooldonw on hunt when hunt points get
        if (gStates.getNumber("d_huntPoints") <= 0 && taskNumber > 2 && d_forceHuntTime <= 0 && d_huntReady != 1)
        {
            if (taskNumber < 10)
            {
              gStates.setNumber("d_forceHuntTime", 500);
              gStates.setNumber("d_huntPoints", 130); //huntPoints
            }

            //c.send("test");
        }
        
        
        if (d_dashCooldown > 0)
        {
           gStates.setNumber("d_dashCooldown", d_dashCooldown - 1);
           
           if (d_dashCooldown == 1)
           {
               player.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\" Выпад [aготов \",Name:\"label\"}");
               player.changeHUDMorph("text_info", 0, HUDmorph);  
                    if (taskNumber >= 10)
                    {
                      gStates.setNumber("d_dashCount", 1); //give demon dash point
                    }
           }
        }

    }//if (demon != 1)

}//for (var i in players)

}//function main(c)