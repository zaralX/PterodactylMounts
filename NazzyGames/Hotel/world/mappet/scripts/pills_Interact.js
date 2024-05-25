function main(c)
{
    // Code...
    var s = c.getSubject();
    var item = s.getMainItem();
    var itemID = item.getItem().getId();
    var pos = s.getPosition();
    
    if (s.getStates().getNumber("pills") > 0)
    {
        s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        s.setupHUD("text_info");
        var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Эффект уже [cдействует\",Name:\"label\"}")
        s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else
    {
       item.setCount(item.getCount() - 1);
       s.getStates().setNumber("pills", 2400);
       c.getWorld().playSound("mp.sounds:ht.misc.pills_pickup", pos.x, pos.y, pos.z, 0.5, 1.1);
       s.setupHUD("HUD_blackscreen_out")
       s.playSound("mp.sounds:ht.events.bass3", pos.x, pos.y, pos.z, 1, 1);
       s.swingArm();
    }
}