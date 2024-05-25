function main(c)
{
    // Code...
    var projectile = c.getValue("projectile");
    var thrower = c.getValue("thrower");
    var entity = c.getValue("entity");
    var pos = c.getValue("pos");
    var last_projectile = thrower.getStates().getString("last_projectile")
    var d_huntTime = c.getServer().getStates().getNumber("d_huntTime");
    
    //c.send(last_projectile);
    //c.send(thrower.getName());
    
    if (last_projectile == "katana")
    {
        thrower.getStates().setString("last_projectile", "none");
        
        if (entity.getStates().getNumber("demon") == 1 && c.getServer().getStates().getNumber("d_visible") == 1)
        {
            if (d_huntTime > 0)
            {
                c.getServer().getStates().setNumber("d_huntTime", 0);
                c.getServer().getStates().setString("d_trigger", "invisible");
                c.getWorld().playSound("mp.sounds:ht.voicelines.demon.hunt_end"+Math.floor(mappet.random(1,3)), pos.x, pos.y + 1000, pos.z, 1000, 1)
                c.getWorld().playSound("mp.sounds:ht.events.demon_hp", pos.x, pos.y, pos.z, 1, 1);
                thrower.setupHUD("itemFound");
              
                var morph = mappet.createMorph("{Scheme:\"fire_emission\",Vars:{variable.size:\"0.1\",variable.height:\"0\",variable.life:\"2\",variable.radius:\"0.07\",variable.speed:\"8\"},Name:\"snowstorm\"}");
                c.getWorld().displayMorph(morph, 1, pos.x, pos.y + 1, pos.z);
              
                var d_hp = c.getServer().getStates().getNumber("d_hp");
                c.getServer().getStates().setNumber("d_hp", d_hp - 1);
              
                var d_hp = c.getServer().getStates().getNumber("d_hp");
                if (d_hp <= 0)
                {
                    entity.executeScript("demon_death");
                }
            }
            else
            {
              c.getServer().getStates().setString("d_trigger", "invisible");
            }
        }
    }
    
    if (last_projectile == "jar")
    {
        thrower.getStates().setString("last_projectile", "none");
          var morph = mappet.createMorph("{Scheme:\"hotel_jarpotion\",Name:\"snowstorm\"}");
          c.getWorld().playSound("mp.sounds:ht.interaction.jar_crash", pos.x, pos.y, pos.z, 2, 1);
          c.getWorld().playSound("mp.sounds:ht.misc.frying_start", pos.x, pos.y, pos.z, 0.5, 1.5);
          c.getWorld().displayMorph(morph, 1, pos.x, pos.y, pos.z);

            var trackedEntities = c.getServer().getEntities("@a[mpe=demon==1]");
            for each (var trackedEntity in trackedEntities)
            {
                if (trackedEntity.isEntityInRadius(projectile, 3))
                {
                   if (d_huntTime > 0)
                   {
                       c.getServer().getStates().setNumber("d_huntTime", 0);
                       c.getServer().getStates().setString("d_trigger", "invisible");
                   }
                   else
                   {
                       c.getServer().getStates().setString("d_trigger", "invisible");
                   }
                }//if
            }
        
          
    }
    
}