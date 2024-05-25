function main(c)
{
    // Code...
    var s = c.getSubject();
    var item = s.getMainItem();
    var itemID = item.getItem().getId();
    var pos = s.getPosition();
    
    if (s.getStates().getNumber("soda") == 1 || s.getStates().getNumber("hunger") == 1)
    {
        s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        s.setupHUD("text_info");
        var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Пока [aдостаточно [fэнергии\",Name:\"label\"}")
        s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else
    {
       item.setCount(item.getCount() - 1);
       s.getStates().setNumber("soda", 1);
       c.getWorld().playSound("mp.sounds:ht.interaction.soda_open", pos.x, pos.y, pos.z, 0.5, 1);
       c.getWorld().playSound("minecraft:entity.generic.drink", pos.x, pos.y, pos.z, 0.5, 1);
       s.playSound("mp.sounds:ht.events.bass2", pos.x, pos.y, pos.z, 1, 1.5);
       s.swingArm();
    }
}