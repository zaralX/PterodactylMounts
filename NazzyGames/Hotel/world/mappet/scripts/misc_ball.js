function main(c)
{
    // Code...
    var s = c.getSubject();
    var player = c.getObject();
    var ray = player.rayTrace(3);
    
    if (player.getStates().getNumber("demon") != 1 && ray.isEntity())
    {
        var look = player.getLook();
        var rot = player.getRotations();
        var pitch = rot.x;
        var yaw = rot.y;
        
        player.swingArm();
        s.setRotations(pitch, yaw, yaw);
        s.setMotion(look.x * 2, 0.3, look.z * 2);
    }
}