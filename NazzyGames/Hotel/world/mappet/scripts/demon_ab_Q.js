function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var d_ab_TPcooldown = gStates.getNumber("d_ab_TPcooldown");
    var d_huntTime = gStates.getNumber("d_huntTime");
    var elevator_on = gStates.getNumber("elevator_on");
    var pitch = s.getPitch();
    var pos = s.getPosition();
    
    if (elevator_on == 0 || d_huntTime > 0 || gStates.getNumber("d_visible") == 1)
    {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Способность [cнедоступна\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else if (d_ab_TPcooldown <= 0)
    {
        //1st floor
        if (pos.y == 14 && (pitch < -40 && pitch > -90))
        {
            secondFloor()
        }
        else if (pos.y == 14 && (pitch > 40 && pitch < 90))
        {
            basement()
        }
        //2nd floor
        else if (pos.y == 20 && (pitch < -40 && pitch > -90))
        {
            error()
        }
        else if (pos.y == 20 && (pitch > 40 && pitch < 90))
        {
            firstFloor()
        }
        //basement
        else if (pos.y == 8 && (pitch < -40 && pitch > -90))
        {
            firstFloor()
        }
        else if (pos.y == 8 && (pitch > 40 && pitch < 90))
        {
            error()
        }
        else
        {
            error()
        }
    }
    
    function firstFloor()
    {
            gStates.setString("d_trigger", "tp_cooldown")
            var random = Math.floor(mappet.random(1, 4))
            if (random == 1)
            {
               c.executeCommand("/tp @s -17 14 -18 -90 0");
            }
            else if (random == 2)
            {
               c.executeCommand("/tp @s 17 14 23 180 0");
            }
            else if (random == 3)
            {
               c.executeCommand("/tp @s 22 14 -35 0 0");
            }
    }
    function secondFloor()
    {
            gStates.setString("d_trigger", "tp_cooldown")
            var random = Math.floor(mappet.random(1, 4))
            if (random == 1)
            {
               c.executeCommand("/tp @s 23 20 0 90 0");
            }
            else if (random == 2)
            {
               c.executeCommand("/tp @s 11 20 -31 0 0");
            }
            else if (random == 3)
            {
               c.executeCommand("/tp @s 11 20 23 -180 0");
            }
    }
    function basement()
    {
            gStates.setString("d_trigger", "tp_cooldown")
            var random = Math.floor(mappet.random(1, 4))
            if (random == 1)
            {
               c.executeCommand("/tp @s 11 8 6 -180 0");
            }
            else if (random == 2)
            {
               c.executeCommand("/tp @s 6 8 23 180 0");
            }
            else if (random == 3)
            {
               c.executeCommand("/tp @s -6 8 -13 -90 0");
            }
    }
    function error()
    {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Там [cничего нет\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    
}