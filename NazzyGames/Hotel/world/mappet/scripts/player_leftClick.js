function main(c)
{
    // Code...
    var s = c.getSubject();
    var pos = s.getPosition();
    var look = s.getLook();
    var item = s.getMainItem();
    var demon = s.getStates().getNumber("demon");
    var playerModelName = s.getStates().getString("playerModelName");
   

    if (item.getItem().getId() === "ht:katana" && demon < 1)
    {
        if (s.getCooldown(s.getHotbarIndex()) == false)
        {
           s.shootBBGunProjectile('{Gun:{HX:0.1f,HY:1.0f,Friction:1.0f,StoredAmmo:0,Morph:{Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Name:\"blockbuster.image\"},LifeSpan:20,ShootWhenHeld:0b,Transform:{R:[90.0f,0.0f,0.0f]},Delay:10,Projectile:{Scheme:\"hotel_slash\",Name:\"snowstorm\"},Gravity:0.0f}}')
           s.setMotion(look.x * -0.5, look.y * -0.5, look.z * -0.5);
           s.setCooldown(s.getHotbarIndex(), 100);
           c.getWorld().playSound("mp.sounds:ht.interaction.katana_fireball1", pos.x, pos.y, pos.z, 3.0, 1.0);
           
           s.getStates().setString("last_projectile", "katana");
           
           var firstMorphNBT = mappet.createCompound(s.getMorph().toNBT().toString());
           var firstMorph = mappet.createMorph(firstMorphNBT);
           
           var morph = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.8f,Enabled:1b,Height:1.8f},Actions:{running:{Speed:1.2f,Name:\"running\"},crouching:{Speed:0.5f,Name:\"running\"},crouching_idle:\"idle\"},Pose:{Pose:{armRB:{RX:0.08726664f,F:0b},handR:{RX:-0.48869208f,F:0b,Y:1.59375f},legLB:{},armLT:{RX:0.8950822f,F:0b,RY:-0.82266587f,RZ:-0.27248415f},feetLB:{},bone:{},bodyT:{RX:-0.29670587f},tie_2:{},head:{RX:0.08726647f},legRT:{RX:0.31415915f},tie:{},armRT:{RX:0.7202252f,F:0b,RY:0.19274199f,RZ:-0.11472993f,Y:-1.15625f,Z:-0.90625f},feetRB:{},bone3:{},legLT:{RX:-0.19198622f},bone2:{},bodyB:{RX:-0.13962638f,RY:-0.17453294f},handL:{F:0b},feetLT:{},feetRT:{},armLB:{RX:-0.034906395f,F:0b},base:{},legRB:{}}},Transition:{Interp:21,Animates:1b,Duration:2},Skin:\"c.s:"+playerModelName+"/skins/"+playerModelName+".png\",Scale:0.7f,BodyParts:[{R:[20.0f,194.0f,0.0f],Target:1b,S:[1.2f,1.2f,1.2f],T:[0.06064348f,0.056250002f,-0.07762011f],Limb:\"handR\",Morph:{Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}}],Name:\"chameleon."+playerModelName+"\"}")
           s.setMorph(morph);
           
           c.scheduleScript(10, function (context)
           {
                if (s.getMainItem().getItem().getId() === "ht:katana")
                {
                    s.setMorph(firstMorph);
                }
           });
           
        }
        else
        {
            s.playSound("mp.sounds:ht.interaction.katana_fireball1", pos.x, pos.y, pos.z, 0.5, 2);
        }
    }
    if (item.getItem().getId() === "ht:jarpotion" && demon < 1)
    {
           item.setCount(item.getCount() - 1);
           c.getWorld().playSound("mp.sounds:ht.interaction.jar_throw", pos.x, pos.y, pos.z, 1, 1);
           s.shootBBGunProjectile("{Gun:{Speed:0.5f,Morph:{Name:\"item\",Stack:{id:\"minecraft:diamond_hoe\",Count:1b,Damage:0s}},LifeSpan:40,Projectile:{List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Animates:1b,Duration:5},Skin:\"b.a:empty/skins/texture.png\",BodyParts:[{T:[-0.03125f,-0.34375f,0.09375f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:jarpotion\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Animates:1b},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[-360.0f,0.0f,0.0f]}}},BodyParts:[{T:[-0.03125f,-0.34375f,0.09375f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:jarpotion\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:10.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}}")
           s.getStates().setString("last_projectile", "jar");
    }
}