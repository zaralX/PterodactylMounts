function main(c)
{
    // Code...
    var s = c.getSubject();
    var pos = s.getPosition();
    var gStates = c.getServer().getStates();
    var ambSound_cooldown = s.getStates().getNumber("ambSound_cooldown")
    var music_cooldown = s.getStates().getNumber("music_cooldown")
    var inDimension = s.getStates().getNumber("inDimension")
    var d_huntTime = gStates.getNumber("d_huntTime");
    var sanity = s.getStates().getNumber("sanity");
    
    if (ambSound_cooldown > 0)
    {
        s.getStates().setNumber("ambSound_cooldown", ambSound_cooldown - 1);
        //s.sendActionBar(ambSound_cooldown - 1);
    }
    if (music_cooldown > 0)
    {
        s.getStates().setNumber("music_cooldown", music_cooldown - 1);
    }
    
    //sanity music
    if (music_cooldown <= 0 && sanity > 0 && inDimension == 0 && d_huntTime <= 0)
    {
       if (sanity > 0 && sanity < 20)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.sanity1 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 147);
           
            var HUDmorph = mappet.createMorph("{Color:16777215,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 20 && sanity < 40)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.sanity2 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 147);
           //s.sendActionBar("stage 2")
           
            var HUDmorph = mappet.createMorph("{Color:536870911,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 40 && sanity < 60)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.sanity3 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 147);
           //s.sendActionBar("stage 3")
           
            var HUDmorph = mappet.createMorph("{Color:1509949439,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 60 && sanity < 80)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.sanity4 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 147);
           //s.sendActionBar("stage 4")
           
            var HUDmorph = mappet.createMorph("{Color:-1560281089,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 80 && sanity < 100)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.sanity5 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 147);
           //s.sendActionBar("stage 5")
           
            var HUDmorph = mappet.createMorph("{Color:-402653185,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
    }
    //hunt music
    if (music_cooldown <= 0 && d_huntTime > 0)
    {
       if (sanity < 25)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.demonaround1 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 100);
           
            var HUDmorph = mappet.createMorph("{Color:16777215,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 25 && sanity < 50)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.demonaround2 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 100);
           //s.sendActionBar("stage 2")
           
            var HUDmorph = mappet.createMorph("{Color:536870911,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity >= 50 && sanity < 75)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.demonaround3 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 100);
           //s.sendActionBar("stage 3")
           
            var HUDmorph = mappet.createMorph("{Color:1509949439,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
       else if (sanity > 75)
       {
           c.executeCommand("/playsound mp.sounds:ht.music.demonaround4 ambient @s ~ ~1000 ~ 1000")
           s.getStates().setNumber("music_cooldown", 100);
           //s.sendActionBar("stage 4")
           
            var HUDmorph = mappet.createMorph("{Color:-1560281089,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
            s.changeHUDMorph("vignette", 0, HUDmorph)
       }
    }
    
    if (ambSound_cooldown <= 0 && (pos.y >= 8 && pos.y < 11))
    {
        c.executeCommand("/playsound mp.sounds:ht.ambient.amb_basement ambient @s ~ ~5000 ~ 1000")
        s.getStates().setNumber("ambSound_cooldown", 78);
    }
    
    if (music_cooldown <= 0 && inDimension == 1)
    {
            var tracker = c.getSubject();
            var trackedEntities = c.getServer().getEntities("@e[mpe=demon==1]");
            for each (var trackedEntity in trackedEntities)
            {
                if (trackedEntity.isEntityInRadius(tracker, 11))
                {
                    c.executeCommand("/playsound mp.sounds:ht.music.dimension2 ambient @s ~ ~1000 ~ 1000")
                    s.getStates().setNumber("music_cooldown", 73);
                }
                else if (trackedEntity.isEntityInRadius(tracker, 20))
                {
                    c.executeCommand("/playsound mp.sounds:ht.music.dimension1 ambient @s ~ ~1000 ~ 1000")
                    s.getStates().setNumber("music_cooldown", 73);
                }
                
            }

    }
    if (ambSound_cooldown <= 0 && inDimension == 1)
    {
        c.executeCommand("/playsound mp.sounds:ht.ambient.amb_dimension ambient @s ~ ~8000 ~ 1000")
        s.getStates().setNumber("ambSound_cooldown", 80);
    }
    
    
}