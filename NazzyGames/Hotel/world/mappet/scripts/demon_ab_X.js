function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var d_ab_VisibleCooldown = gStates.getNumber("d_ab_VisibleCooldown");
    var d_huntTime = gStates.getNumber("d_huntTime");
    var elevator_on = gStates.getNumber("elevator_on");
    var pitch = s.getPitch();
    var pos = s.getPosition();
    
    if (d_huntTime > 0 || gStates.getNumber("d_visible") == 1 || gStates.getNumber("d_huntReady") == 0)
    {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Способность [cнедоступна\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else
    {
        gStates.setString("d_trigger", "hunt")
    }
    
}