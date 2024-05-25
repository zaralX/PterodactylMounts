function main(c)
{
    // Code...
    var s = c.getSubject();
    s.setRotations(0, 0, 0);
    
    var pos = s.getPosition();
    c.getWorld().playSound("mp.sounds:ht.misc.portal_jump", pos.x, pos.y, pos.z, 0.5, 0.8);
    
    c.scheduleScript(9, function (context)
    {
        var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:0.2f,Enabled:1b,Height:0.2f,Width:2.5f},Pose:{P:[0.0f,0.05f,0.0f],R:[-90.0f,45.0f,0.0f],S:[3.02f,3.0f,1.0f]},Animation:{Interp:21,Animates:1b,Duration:8},Texture:\"b.a:1_HOTEL/sprites/corrosion.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:0.2f,Enabled:1b,Height:0.2f,Width:2.5f},Pose:{P:[0.0f,0.05f,0.0f],R:[-90.0f,45.0f,0.0f],S:[3.0f,3.02f,1.0f]},Animation:{Interp:21,Animates:1b,Duration:8},Texture:\"b.a:1_HOTEL/sprites/corrosion.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        s.setMorph(morph);
    });
}