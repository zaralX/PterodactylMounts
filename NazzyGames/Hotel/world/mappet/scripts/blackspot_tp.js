function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var inDimension = states.getNumber("inDimension")
    var demon_touch = states.getNumber("demon_touch")
    var wither_startTime = c.getServer().getStates().getNumber("wither_startTime");
    var d_points = c.getServer().getStates().getNumber("d_points");
    
    if (states.getNumber("demon") == 1)
    {
        var pos = s.getPosition();
        s.setPosition(pos.x, pos.y + 5, pos.z);
        s.playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y, pos.z, 0.5, 1.5);
    }
    
    if (states.getNumber("demon") != 1 && inDimension == 0)
    {
        states.setNumber("playerModelChange", 0) //remove player change models
        var playerMorph = s.getMorph()
        var morph = mappet.createMorph("{Scheme:\"hotelblackspot_particle\",Name:\"snowstorm\"}");
        s.setMorph(morph);
        
        c.executeCommand("/playsound mp.sounds:ht.misc.portal_jump ambient @a ~ ~ ~");
        c.executeCommand("/playsound mp.sounds:ht.misc.blackspot_teleport ambient @s ~ ~8000 ~ 1000");
        s.setupHUD("HUD_noise");
        s.setupHUD("HUD_blackscreen");
        var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:5},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:35.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:5},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        s.changeHUDMorph("HUD_blackscreen", 0, morph);
        s.setFallDistance(0)
        
        
        c.scheduleScript(44, function (context)
        {
            s.closeHUD("HUD_blackscreen");
            states.setNumber("hunger", 0) //set player hunger to disable sprint
            states.setNumber("soda", 0) //set player soda to disable sprint
            states.setNumber("pills", 0) //set player soda to disable sprint
            states.setNumber("ambSound_cooldown", 0) //set player amb sound to 0
            s.setHunger(5);
            s.setMorph(playerMorph);
            
             if (demon_touch == 1)
             {
                s.getStates().setNumber("demon_touch", 0); //reset demon touch
                s.getStates().setNumber("wither", wither_startTime); //gives default wither time
                c.getServer().getStates().setNumber("d_points", d_points + 10);
                c.executeCommand("/playsound mp.sounds:ht.voicelines.demon.indimension"+Math.floor(mappet.random(1,9))+" ambient @s ~ ~1000 ~ 1000")
                
                if (s.getStates().getNumber("obsessionConfirmed") == 1)
                {
                    s.getStates().setNumber("obsessionConfirmed", 0);
                }
             }
             else
             {
                s.getStates().setNumber("wither", wither_startTime + 400);
             }
        });
        c.scheduleScript(35, function (context)
        {
            c.executeCommand("/tp @s 22 42 24 180 0");
            states.setNumber("playerModelChange", 1) //set player change models
            var randomPortal = Math.floor(mappet.random(1, 3))
            if (randomPortal == 1)
            {
               c.executeCommand("/setblock 13 39 0 air");
               c.executeCommand("/setblock 1 39 23 ht:bmt1cf");
               c.executeCommand("/modelblock property 13 43 0 enabled true")
               c.executeCommand("/modelblock property 1 43 23 enabled false")
            }
            else if (randomPortal == 2)
            {
               c.executeCommand("/setblock 13 39 0 ht:bmt1cf");
               c.executeCommand("/setblock 1 39 23 air");
               c.executeCommand("/modelblock property 13 43 0 enabled false")
               c.executeCommand("/modelblock property 1 43 23 enabled true")
            }
        });
    }
    if (states.getNumber("demon") != 1 && inDimension == 1)
    {
        s.getStates().setNumber("wither", -1)
        c.executeCommand("/playsound mp.sounds:ht.misc.portal_jump ambient @a ~ ~ ~");
        c.executeCommand("/playsound mp.sounds:ht.misc.blackspot_teleport ambient @s ~ ~8000 ~ 1000");
        s.setupHUD("HUD_noise");
        s.setupHUD("HUD_blackscreen");
        var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:5},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:35.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:5},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        s.changeHUDMorph("HUD_blackscreen", 0, morph);
        
        c.scheduleScript(44, function (context)
        {
            s.closeHUD("HUD_blackscreen");
            s.setHunger(10)
        });
        c.scheduleScript(35, function (context)
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
        });
    }
}