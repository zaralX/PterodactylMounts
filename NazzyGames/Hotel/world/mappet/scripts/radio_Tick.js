function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = c.getServer().getStates()
    
    if (states.getNumber("radio_tick") > 0)
    {
        states.setNumber("radio_tick", states.getNumber("radio_tick") - 1)
    }
    else
    {
        states.setNumber("radio_tick", 118);
        var pos = s.getPosition();
        //check radius
            var tracker = c.getSubject();
            var trackedEntities = c.getServer().getEntities("@e[mpe=demon==1]");
            
            for each (var trackedEntity in trackedEntities)
            {
                if (trackedEntity.isEntityInRadius(tracker, 9))
                {
                   //c.getWorld().playSound("mp.sounds:ht.radio.radio4", pos.x, pos.y, pos.z, 0.5, 1.0);
                   c.executeCommand("/playsound mp.sounds:ht.radio.radio4 ambient @s ~ ~1000 ~ 80")
                   c.executeCommand("/playsound mp.sounds:ht.radio.radio4 ambient @a[name=!"+s.getName()+"] ~ ~ ~ 0.5");
                   c.executeCommand("/mp state add @a[r=5] sanity 4")
                   //c.send("10")
                }
                else if (trackedEntity.isEntityInRadius(tracker, 15))
                {
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio3 ambient @s ~ ~1000 ~ 80");
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio3 ambient @a[name=!"+s.getName()+"] ~ ~ ~ 0.5");
                    c.executeCommand("/mp state add @a[r=5] sanity 2")
                    //c.send("15")
                }
                else if (trackedEntity.isEntityInRadius(tracker, 20))
                {
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio2 ambient @s ~ ~1000 ~ 80");
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio2 ambient @a[name=!"+s.getName()+"] ~ ~ ~ 0.5");
                    //c.send("20")
                }
                else if (trackedEntity.isEntityInRadius(tracker, 200))
                {
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio1 ambient @s ~ ~1000 ~ 80");
                    c.executeCommand("/playsound mp.sounds:ht.radio.radio1 ambient @a[name=!"+s.getName()+"] ~ ~ ~ 0.5");
                    //c.send("30")
                }
                
            }
    }
    //s.sendActionBar(states.getNumber("radio_tick"));
    
};