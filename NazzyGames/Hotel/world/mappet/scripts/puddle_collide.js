function main(c)
{
    // Code...
    var s = c.getSubject();
    var o = c.object;
    var pos = s.getPosition();
    
    if (o.isSprinting() && o.getStates().getNumber("isSprinting") == 1)
    {
        o.setMotion(0, 0, 0);
        c.getWorld().playSound("mp.sounds:ht.interaction.puddle_step"+Math.floor(mappet.random(1,4)), pos.x, pos.y, pos.z, 0.5, "0."+Math.floor(mappet.random(6,9)));
    }
}