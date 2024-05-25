function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var d_ab_VisibleCooldown = gStates.getNumber("d_ab_VisibleCooldown");
    var d_huntTime = gStates.getNumber("d_huntTime");
    var elevator_on = gStates.getNumber("elevator_on");
    var stage = gStates.getNumber("stage");
    var d_cooldown = gStates.getNumber("d_cooldown");
    var d_cooldown_start = gStates.getNumber("d_cooldown_start"); //default 600
    var d_soundRadius = gStates.getNumber("d_soundRadius"); //default 8
    var pos = s.getPosition();
    

    if (/*d_huntTime > 0 || */stage < 2/* || gStates.getNumber("d_visible") == 1*/)
    {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Способность [cнедоступна\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else if (d_cooldown <= 0)
    {
           gStates.setNumber("d_cooldown", d_cooldown_start);
           gStates.setString("d_trigger", "sound_cooldown");
           c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
           playSound();
    }
    
function playSound() //
{
    var gStates = c.getServer().getStates();
    var d_huntTime = gStates.getNumber("d_huntTime");
    
    var multiplier = 0;
    if (d_huntTime > 0)
    {
        multiplier = 0.3
    }

    if (s.isInArea(-10, 25, 25, 0, 19, 3)) //bar
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.bar"+Math.floor(mappet.random(1,9))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(0, 17, 12, -8, 13, 18)) //reception
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.reception"+Math.floor(mappet.random(1,7))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(15, 17, 0, 25, 13, 18)) //restaurant
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.restaurant"+Math.floor(mappet.random(1,8))+"", pos.x, pos.y, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(-13, 17, -21, 18, 14, -37)) //pool
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.pool"+Math.floor(mappet.random(1,10))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(7, 17, 2, -3, 14, -7)) //washroom
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.washroom"+Math.floor(mappet.random(1,4))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(0, 17, 11, -9, 14, 3) || s.isInArea(25, 11, 7, 19, 8, -2) || s.isInArea(8, 11, -14, 1, 8, -9)) //office
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.office"+Math.floor(mappet.random(1,8))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(-9, 23, -12, 0, 20, -33)) //biblio
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.biblio"+Math.floor(mappet.random(1,7))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (s.isInArea(1, 23, 25, 7, 20, 19)) //kidsroom
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.kidsroom"+Math.floor(mappet.random(1,7))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
    else if (pos.y <= 10) //basement
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.basement"+Math.floor(mappet.random(1,23))+"", pos.x, pos.y, pos.z, 0.8, 1 - multiplier);
    }
    else //default
    {
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.default"+Math.floor(mappet.random(1,24))+"", pos.x, pos.y + 1, pos.z, 0.8, 1 - multiplier);
    }
}    
    
}
//-10 25 25 0 19 3 bar