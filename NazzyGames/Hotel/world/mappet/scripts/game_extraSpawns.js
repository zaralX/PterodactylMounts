function main(c)
{
    //reagent spawn
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), -13, 14, -11);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 2), 18, 14, -10);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 4), -19, 14, -35);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 2), -16, 16, -25);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), -13, 16, -14);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), -3, 20, -9);
    //reagent despawn from light_control
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 16, 20, 24);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 16, 20, 16);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 20, 6);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 20, -14);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 20, -25);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 20, -33);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 0, 14, 1);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -1, 14, -4);
    
    //corpses_remove
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -2, 14, 6);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 16, 14, -31);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 6, 14, -12);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 17, 40, 9);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 13, 40, 18);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 6, 40, 18);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -2, 20, -8);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 4, 20, -20);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -3, 20, -18);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 21, 8, 2);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 2, 8, -11);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 17, 8, 20);
    
    //corpse1
           var random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse1", 3), -2, 14, 6);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse1", 5), 16, 14, -31);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse1", 2), 6, 14, -12);
           }
    //corpse2
           var random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse2", 5), 17, 40, 9);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse2", 3), 13, 40, 18);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse2", 2), 6, 40, 18);
           }
    //corpse3
           var random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse3", 3), -2, 20, -8);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse3", 2), 4, 20, -20);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse3", 3), -3, 20, -18);
           }
    //corpse4
           var random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse4", 2), 21, 8, 2);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse4", 5), 2, 8, -11);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:corpse4", 5), 17, 8, 20);
           }
}