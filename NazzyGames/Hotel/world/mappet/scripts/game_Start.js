function main(c)
{
    // Code...
    var gStates = c.getServer().getStates();
    
    gStates.setString("books_notfound", "ht:edbookchef,ht:edbookmaster,ht:edbookhack"); //reset all notfound books
    c.executeCommand("/difficulty 1");
    c.executeCommand("/effect @a clear");
    c.executeCommand("/mp npc despawn @e");
    c.executeCommand("/mp state set @a death 1");
    c.executeCommand("/mp state set @a[mpe=demon==1] death 0");
    c.executeCommand("/mp state set @r[mpe=demon!=1] skillPoint_extra 1"); //extraPoints set
    c.executeCommand("/mp hud close @a demon_ui");
    c.executeCommand("/mp hud close @a d_points");
    
    c.executeCommand("/clear @a");
    

//gameplay states
    gStates.setNumber("stage", 0);
    gStates.setNumber("elevator_on", 0);
    gStates.setNumber("wither_startTime", 600);
    gStates.setString("fridgeFood", "egg");
    gStates.setNumber("symbolsFoundCount", 0); //symbols
    gStates.setString("symbolsFound", "");
    gStates.setNumber("corpseFoundCount", 0); //corpse
    gStates.setString("corpseFound", "");
    gStates.setString("bloodynotesFound", ""); //bloodynotes
    gStates.setNumber("bloodynotesFoundCount", 0);
    gStates.setNumber("taskNumber", -1);
    gStates.setNumber("elevator_currentFloor", 0);
    gStates.setNumber("doorsOpened", 0);
    gStates.setString("keycard_state", "none");
    gStates.setString("fridgeFood", "soda");
    gStates.setNumber("lights", 1);
    
    
//demon states
    gStates.setNumber("d_points", 0);
    gStates.setNumber("d_hp", 5);
    gStates.setNumber("d_huntStartTime", 400);
    gStates.setNumber("d_huntTime", -1);
    gStates.setNumber("d_forceHuntTime", -1);
    gStates.setNumber("d_RayDistance", 2);
    gStates.setNumber("d_points_multiplier", 2);
    gStates.setNumber("d_cooldown_start", 600); 
    gStates.setNumber("d_cooldown_pointsStart", 1);
    gStates.setNumber("d_cooldown_points", 1);
    gStates.setString("d_skills", ""); //demon skills
    gStates.setString("d_trigger", "none"); //demon skills
    gStates.setNumber("d_huntReady", 0);
    gStates.setNumber("d_soundRadius", 8);
    gStates.setNumber("d_visible", 0);
    gStates.setNumber("d_ab_TPcooldown", 600);
    gStates.setNumber("d_ab_VisibleCooldown", 1200);
    gStates.setNumber("d_cooldown", 300);
    gStates.setNumber("d_huntPoints", 70); //huntPoints for start
    gStates.setNumber("d_puddleCount", 1); //d_puddleCount 
    gStates.setNumber("d_morphCount", 0);
    gStates.setNumber("d_ab_VisibleCount", 0);
    gStates.setNumber("d_falseCardCount", 0);
    
    
    c.executeCommand("/mp hud setup @a[mpe=demon==1] demon_ui");
    c.executeCommand("/mp hud setup @a[mpe=demon==1] d_points");
    gStates.setNumber("d_points", 20);
    
//player effects
    c.executeCommand("/effect @a minecraft:weakness 99999 5 true");
    c.executeCommand("/effect @a[mpe=demon!=1] minecraft:slowness 99999 1 true");
    c.executeCommand("/effect @a[mpe=demon!=1] minecraft:saturation 1 5 true")
    
//players states
    c.executeCommand("/scoreboard teams leave @a");
    c.executeCommand("/mp state set @a wither -1");
    c.executeCommand("/mp state set @a obsessionPoints 0");
    c.executeCommand("/mp state set @a obsessionConfirmed 0");
    c.executeCommand("/mp state set @a book_canfind 1");
    c.executeCommand("/mp state set @a book_search 101");
    c.executeCommand("/mp state set @a book_learning 101");
    c.executeCommand("/mp state set @a[mpe=demon!=1] hunger 0");
    c.executeCommand("/mp state set @a[mpe=demon!=1] soda 0");
    c.executeCommand("/mp state set @a[mpe=demon!=1] pills 0");
    c.executeCommand("/mp state set @a[mpe=demon!=1] skillPoint_extra 0");
    c.executeCommand("/mp state set @r[mpe=demon!=1] skillPoint_extra 1");
    c.executeCommand("/mp state set @a[mpe=demon!=1] book_canfind 1");
    c.executeCommand("/mp state set @a[mpe=demon!=1] skills none,");
    c.executeCommand("/mp state set @a demon_touch 0");
    c.executeCommand("/mp state set @a mirror_scare 1");
    
//blocks_and_items
    c.executeCommand("/setblock -7 12 -31 air") //remove gamecard from spot
    c.executeCommand("/setblock -1 9 21 air") //remove item from workbench
    c.executeCommand("/setblock -4 15 15 ht:nfc 3") //nfc remove
    c.executeCommand("/setblock 1 9 0 ht:elfuse 5"); //elevator
    c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
    c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
    c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
    c.executeCommand("/fill 5 10 10 5 10 9 ht:lampceilinglight2off 3");
    c.executeCommand("/fill 5 16 10 5 16 9 ht:lampceilinglight2off 3");
    c.executeCommand("/fill 5 22 10 5 22 9 ht:lampceilinglight2off 3");
    c.executeCommand("/fill 5 21 11 6 9 11 ht:elevatordoorl 3 replace ht:elevatordoorlopen");
    c.executeCommand("/fill 5 21 11 6 9 11 ht:elevatordoorr 3 replace ht:elevatordoorropen");
    c.executeCommand("/setblock 5 15 11 ht:elevatordoorlopen 3");
    c.executeCommand("/setblock 6 15 11 ht:elevatordoorropen 3");
    
    c.executeCommand("/setblock 15 15 -3 ht:pan_empty 5"); //pan
    c.executeCommand("/setblock -4 14 20 ht:katana 3"); //katana_block
    c.executeCommand("/setblock 19 15 -25 ht:techdoor 5"); //pool_door1
    c.executeCommand("/setblock 19 15 -33 ht:techdoor 5"); //pool_door2
    c.executeCommand("/setblock -14 15 -33 ht:techdoor 5"); //pool_storage
    c.executeCommand("/setblock -14 15 -26 ht:techdoor 5"); //pool_office1
    c.executeCommand("/setblock -16 15 -21 ht:techdoor 3"); //pool_office2
    c.executeCommand("/setblock -12 15 -15 ht:techdoor 2"); //gym_storage
    c.executeCommand("/setblock -4 15 -12 ht:roomdoor 4"); //staff_room1
    c.executeCommand("/setblock 8 15 -9 ht:officedoor 5"); //staff_room2
    c.executeCommand("/setblock 8 15 -1 ht:techdoor 5"); //washingroom
    c.executeCommand("/setblock -3 15 12 ht:officedoor 3"); //office1
    c.executeCommand("/setblock -7 15 2 ht:roomdoor 2"); //office2
    c.executeCommand("/setblock 20 15 0 ht:doorkitchen 3"); //kitchen1
    c.executeCommand("/setblock 19 15 1 ht:doorlockkitchen_on 3"); //kitchen1_lock
    c.executeCommand("/setblock 14 15 -12 ht:doorkitchen 4"); //kitchen2
    c.executeCommand("/setblock 13 15 -13 ht:doorlockkitchen_on 4"); //kitchen2_lock
    c.executeCommand("/setblock 4 21 19 ht:libdoor 2"); //kids_room
    c.executeCommand("/setblock 8 21 -7 ht:libdoor 5"); //chess1
    c.executeCommand("/setblock 4 21 -11 ht:libdoor 2"); //chess2
    c.executeCommand("/setblock 8 21 -24 ht:techdoor 4"); //music_room
    c.executeCommand("/setblock 0 21 -14 ht:libdoor 5"); //library1
    c.executeCommand("/setblock 0 21 -31 ht:libdoor 5"); //library2
    c.executeCommand("/setblock -4 21 3 ht:techdoor 2"); //bar_door
    c.executeCommand("/setblock -3 21 -3 ht:techdoor 3"); //bar_storage
    c.executeCommand("/setblock 14 21 20 ht:roomdoor 4"); //100
    c.executeCommand("/setblock 14 21 12 ht:roomdoor 4"); //101
    c.executeCommand("/setblock 19 21 3 ht:roomdoor 2"); //102
    c.executeCommand("/setblock 19 21 -3 ht:roomdoor 3"); //103
    c.executeCommand("/setblock 14 21 -11 ht:roomdoor 4"); //104
    c.executeCommand("/setblock 14 21 -20 ht:roomdoor 4"); //105
    c.executeCommand("/setblock 14 21 -28 ht:roomdoor 4"); //106
    c.executeCommand("/setblock 5 9 -9 ht:officedoor 3"); //basement_office1
    c.executeCommand("/setblock 22 9 8 ht:officedoor 3"); //basement_office2
    c.executeCommand("/setblock 15 9 14 ht:techdoor 2"); //basement_storage
    c.executeCommand("/setblock -4 9 19 ht:officedoor 3"); //basement_workshop
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 19, 41, 8);//demon_books start
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 9, 41, 3);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 4, 41, 24);
    
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:dischargercapacitor", 4), -3, 14, 18); //discharger
    
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 19, 21, 22);//symbols start
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 1, 21, -20);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -1, 21, -8);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -2, 15, 1);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -15, 15, -34);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -21, 15, -6);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -8, 15, 9);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 22, 21, 16);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 16, 21, -17);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 21, -25);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 22, 21, -33);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 20, 9, 1);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 7, 9, -13);
    
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -7, 21, 24); //time symbols start
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 5, 21, -29);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 23, 21, 8);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -8, 21, -2);
    
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 6, 9, 7);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 18, 9, -5);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 18, 9, 19);
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -3, 9, 24);
    
    c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:barfaucetcupempty", 5), -7, 21, 16); //bar faucet
    
    
    c.executeCommand("/setblock 7 8 23 ht:toolboxopen 4"); //toolbox_open_list
    c.executeCommand("/setblock 20 8 18 ht:toolboxopen 5");
    c.executeCommand("/setblock 14 9 5 ht:toolboxopen 5");
    c.executeCommand("/setblock 22 8 -4 ht:toolboxopen 2");
    c.executeCommand("/setblock -4 8 -10 ht:toolboxopen 4");
    c.executeCommand("/setblock -7 8 7 ht:toolboxopen 3");
    c.executeCommand("/setblock 9 8 5 ht:toolboxopen 5");
    
    c.executeCommand("/setblock 24 9 -1 ht:toolbox 4"); //toolbox_basement_office1
    c.executeCommand("/setblock 1 8 -13 ht:toolbox 5"); //toolbox_basement_office2
    c.executeCommand("/setblock -7 20 -4 ht:toolbox 2"); //toolbox_bar_storage
    c.executeCommand("/setblock 3 14 -5 ht:toolbox 5"); //toolbox_washing_room
    c.executeCommand("/setblock -12 14 -13 ht:toolbox 2"); //toolbox_gym_storage
    c.executeCommand("/setblock -18 14 -26 ht:toolbox 3"); //toolbox_pool_office
    c.executeCommand("/setblock -16 16 -32 ht:toolbox 2"); //toolbox_pool_storage
    c.executeCommand("/setblock 2 15 6 ht:toolbox 5"); //toolbox_understairs
    
    c.executeCommand("/setblock 23 21 24 minecraft:air"); //pills_clear
    c.executeCommand("/setblock 20 21 -10 minecraft:air");
    c.executeCommand("/setblock 24 21 -28 minecraft:air");
    c.executeCommand("/setblock 20 21 16 minecraft:air");
    c.executeCommand("/setblock 21 20 6 minecraft:air");
    c.executeCommand("/setblock 23 21 -25 minecraft:air");
    c.executeCommand("/setblock 2 21 -5 minecraft:air");
    c.executeCommand("/setblock -5 14 4 minecraft:air");
    c.executeCommand("/setblock 21 8 -1 minecraft:air");
    c.executeCommand("/setblock 2 8 -11 minecraft:air");
    c.executeCommand("/setblock -19 14 -24 minecraft:air");
    c.executeCommand("/setblock 2 20 23 minecraft:air");
    
    c.executeCommand("/setblock 7 21 -21 minecraft:air"); //radio_clear
    c.executeCommand("/setblock 7 21 22 minecraft:air");
    
    //radio_spawn
    var random = Math.floor(mappet.random(1, 3))
    //c.send("random radio: "+random)
    if (random == 1){
         c.executeCommand("/setblock 7 21 -21 ht:radio 4");
    }
    else if (random == 2){
         c.executeCommand("/setblock 7 21 22 ht:radio 4");
    }
    
    //pliers_spawn
    var random = Math.floor(mappet.random(1, 8))
    //c.send("pliers_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item pliers 15.9 21 22");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item pliers 16 20 16");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item pliers 15 21 5.9");
    }
    else if (random == 4){
         c.executeCommand("/mp npc summon item pliers 15 20 -6.01");
    }
    else if (random == 5){
         c.executeCommand("/mp npc summon item pliers 15 21 -14.1");
    }
    else if (random == 6){
         c.executeCommand("/mp npc summon item pliers 16 20 -25");
    }
    else if (random == 7){
         c.executeCommand("/mp npc summon item pliers 15 20 -33");
    }
    //pills1_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("pills1: "+random)
    if (random == 1){
         c.executeCommand("/setblock 23 21 24 ht:pills 5");
    }
    else if (random == 2){
         c.executeCommand("/setblock 20 21 -10 ht:pills 3");
    }
    else if (random == 3){
         c.executeCommand("/setblock 24 21 -28 ht:pills 2");
    }
    //pills2_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("pills2: "+random)
    if (random == 1){
         c.executeCommand("/setblock 20 21 16 ht:pills 4");
    }
    else if (random == 2){
         c.executeCommand("/setblock 21 20 6 ht:pills 2");
    }
    else if (random == 3){
         c.executeCommand("/setblock 23 21 -25 ht:pills 4");
    }
    //pills3_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("pills3: "+random)
    if (random == 1){
         c.executeCommand("/setblock 2 21 -5 ht:pills 3");
    }
    else if (random == 2){
         c.executeCommand("/setblock -5 14 4 ht:pills 3");
    }
    else if (random == 3){
         c.executeCommand("/setblock 21 8 -1 ht:pills 5");
    }
    //pills4_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("pills4: "+random)
    if (random == 1){
         c.executeCommand("/setblock 2 8 -11 ht:pills 2");
    }
    else if (random == 2){
         c.executeCommand("/setblock -19 14 -24 ht:pills 3");
    }
    else if (random == 3){
         c.executeCommand("/setblock 2 20 23 ht:pills 5");
    }
    
    //lighter2_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("lighter2: "+random)
    if (random == 1){
         c.getServer().getWorld(0).spawnNpc("item", "lighter", 24, 21, -3.5, 75, 0, 75);
    }
    else if (random == 2){
         c.getServer().getWorld(0).spawnNpc("item", "lighter", 5.5, 15, -4, 75, 0, 75);
    }
    else if (random == 3){
         c.getServer().getWorld(0).spawnNpc("item", "lighter", -12, 14, -13.5, 75, 0, 75);
    }
    
    //coin1_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin1_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin 22.7 15 9");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin -13 15 -5");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin 16 15 -35");
    }
    //coin2_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin2_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin -7 15 -20");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin 16 15 24");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin -11 14 -25");
    }
    //coin3_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin3_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin 0 15 -3");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin -18 15 -36");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin -2 14 7");
    }
    //coin4_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin4_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin 21.8 20 21");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin 23 21 7");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin 23 21 -8");
    }
    //coin5_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin5_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin 23 21 -19");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin 7 21 -21");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin -1 21 -21");
    }
    //coin6_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin6_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin -8 21 5");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin 6 21 -9.2");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin 5 20 24");
    }
    //coin7_spawn
    var random = Math.floor(mappet.random(1, 4))
    //c.send("coin7_spawn: "+random)
    if (random == 1){
         c.executeCommand("/mp npc summon item coin 20 9 -2");
    }
    else if (random == 2){
         c.executeCommand("/mp npc summon item coin 6 9 -14");
    }
    else if (random == 3){
         c.executeCommand("/mp npc summon item coin -1 9 21");
    }
    
    //key basement spawn
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_basement", -7.35, 15, 10.95, 0, 0, 0);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_basement", 2.5, 15, -13.5, 0, 0, 0);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_basement", -0.7, 21, -26, 0, 0, 0);
           }
    //keycard
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "keycard", -3, 20, 2, 0, 0, 0);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "keycard", -12, 14, -8.5, 0, 0, 0);
           }
           
    //tripod spawn      
    c.getServer().getWorld(0).spawnNpc("item", "tripod_off", -4, 14, 18, 25, 0, 25);
    //tripod2
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", -3, 15, 7.5, 25, 0, 25);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", -16, 14, -28, 25, 0, 25);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", 4.5, 20, -6, 25, 0, 25);
           }
    //tripod3
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", 23, 20, -30, 120, 0, 120);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", 22, 20, 15, -120, 0, -120);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).spawnNpc("item", "tripod_off", -5.5, 8, 22.5, -120, 0, -120);
           }
    //jar1
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", -0.2, 15, -1.2, 25, 0, 25);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", -10.3, 16, -12.6, 25, 0, 25);
           }
    //jar2
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", -0.3, 22, -3.5, 25, 0, 25);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", -17.5, 15.6, -21.3, 25, 0, 25);
           }
    //jar3
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", 20.4, 8, 5.8, 25, 0, 25);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "jar", 6.4, 9, -13.4, 25, 0, 25);
           }
    
    c.getServer().executeScript("game_extraSpawns");
    
    
    c.executeCommand("/mp state set @a[mpe=demon!=1] playerModelChange 1");
    c.executeCommand("/mp hud setup @a[mpe=demon!=1] vignette");
    c.executeCommand("/mp hud setup @a HUD_blackscreen_out");
    c.executeCommand("/scoreboard teams join demon @a[mpe=demon==1]");
    c.executeCommand("/mp state set ~ d_trigger invisible");
    
    c.executeCommand("/tp @a 10 26 14")
    c.executeCommand("/tp @a[mpe=demon==1] 12 20 -22 -70 0")
    
    c.executeCommand("/mp state set @r[x=10,y=26,z=14,r=5] death 0");
    c.executeCommand("/tp @r[x=10,y=26,z=14,r=5,mpe=death==0] -1.0 14 22 180 0"); //hunter1_TP
    c.executeCommand("/mp state set @r[x=10,y=26,z=14,r=5] death 0");
    c.executeCommand("/tp @r[x=10,y=26,z=14,r=10,mpe=death==0] 23.0 14 -34 25 0");  //hunter2_TP
    c.executeCommand("/mp state set @r[x=10,y=26,z=14,r=5] death 0");
    c.executeCommand("/tp @r[x=10,y=26,z=14,r=5] 3 20 -14 90 0");  //hunter3_TP
    c.executeCommand("/gamemode 2 @a[mpe=death==0]");
    c.executeCommand("/mp state set @a gmUnlock 0");
    
    gStates.setNumber("huntersAlive", 0)
    var players = c.getServer().getAllPlayers();
    for (var i in players)
    {
        if (players[i].getStates().getNumber("death") == 0 && players[i].getStates().getNumber("demon") == 0)
        {
            var huntersAlive = gStates.getNumber("huntersAlive");
            gStates.setNumber("huntersAlive", huntersAlive + 1);
        }
    }
    
    //FINAL_commands
       gStates.setString("cutScene_trigger", "scene1");
       c.getServer().executeScript("cutScene_play");

}