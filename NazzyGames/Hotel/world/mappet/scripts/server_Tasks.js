function main(c)
{
    var gStates = c.getServer().getStates();
    var stage = gStates.getNumber("stage");
    var taskNumber = gStates.getNumber("taskNumber");
    var random;
    
    //c.send("task number: "+taskNumber);
    
    if (taskNumber == 0)
    {
        gStates.setString("taskString", "ИССЛЕДОВАТЬ ОТЕЛЬ");
        c.getServer().executeScript("lights_control");
        
           //lighter
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "lighter", -7, 21, 23.5, 75, 0, 75);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "lighter", -0.5, 21, 10, 30, 0, 30);
           }
           //key_pool
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_pool", -18.5, 15, -13.2, 200, 0, 200);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_pool", 4.5, 21, -29, 0, 0, 0);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).spawnNpc("item", "key_pool", 22.5, 21, -1.4, -50, 0, -50);
           }
    }
    if (taskNumber == 1)
    {
        gStates.setString("taskString", "ПОПАСТЬ В БАССЕЙН");
    }
    if (taskNumber == 2)
    {
        gStates.setString("taskString", "ИЗУЧИТЬ БАССЕЙН");
        c.getServer().getWorld(0).spawnNpc("item", "ball", 0, 14, -35, 0, 0, 0);
    }
    if (taskNumber == 3)
    {
        gStates.setString("taskString", "НАЙТИ ПРИМЕНЕНИЕ ВЕЩИ ДЕМОНА");
    }
    if (taskNumber == 4)
    {
        gStates.setString("taskString", "ИССЛЕДОВАТЬ ИЗМЕРЕНИЕ ДЕМОНА");
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:keylibrary", 2), 10, 41, 9);
    }
    if (taskNumber == 5)
    {
        gStates.setString("taskString", "ДАЛЬШЕ ИССЛЕДОВАТЬ ОТЕЛЬ"); //Открытие библиотеки. Начало 1 стадии.
        gStates.setString("g_trigger", "stage_next"); //next task
        gStates.setString("fridgeFood", "egg");
           
    }
    if (taskNumber == 6)
    {
        gStates.setString("taskString", "НАЙТИ ДЕМОНИЧЕСКИЕ СИМВОЛЫ"); //Первое приготовление еды. Начало 2 стадии.
        gStates.setString("g_trigger", "stage_next"); //next task
        
        c.scheduleScript(60, function (context)//spawn symbols. Так нужно, ибо сцена блокбастера поглощает блоки.
        {
            symbolsSpawn();
        });
        
    }
    if (taskNumber == 7)
    {
        gStates.setString("taskString", "НАЙТИ ДЕМОНИЧЕСКУЮ КНИГУ"); //Поиск всех символов. Начало 3 стадии.
        gStates.setString("g_trigger", "stage_next"); //next task
        
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 19, 41, 8);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 9, 41, 3);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 4, 41, 24);
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:demonbook", 4), 19, 41, 8);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:demonbook", 4), 9, 41, 3);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:demonbook", 2), 4, 41, 24);
           }
    }
    if (taskNumber == 8)
    {
        gStates.setString("taskString", "ПЕРЕНЕСТИ СИМВОЛЫ В ДЕМОНИЧЕСКУЮ КНИГУ"); //Поиск всех символов. Начало 4 стадии.
        gStates.setString("g_trigger", "stage_next"); //next task
        
        //
        var players = c.getServer().getAllPlayers();
        var numbers = [];

        for (var i in players)
        {
            var obsessionPoints = players[i].getStates().getNumber("obsessionPoints")
            numbers.push(obsessionPoints);
        }

        var maxNumber = Math.max.apply(null, numbers);
   
        for (var i in players)
        {
            var pos = players[i].getPosition();
            
            if (players[i].getStates().getNumber("obsessionPoints") == maxNumber)
            {
                players[i].getStates().setNumber("obsessionConfirmed", 1) //set obsession
                players[i].playSound("mp.sounds:ht.voicelines.demon.basement14", pos.x, pos.y, pos.z, 2.0, 0.8);
                players[i].playSound("mp.sounds:ht.events.symbol_pickup", pos.x, pos.y, pos.z, 5, 1.5);
                players[i].setupHUD("symbols");
                players[i].setupHUD("text_info");
                var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\" [4ТЫ ОДЕРЖИМОСТЬ \",Name:\"label\"}");
                players[i].changeHUDMorph("text_info", 0, HUDmorph);
            }
            else
            {
                players[i].playSound("mp.sounds:ht.voicelines.demon.basement6", pos.x, pos.y, pos.z, 2.0, 0.9);
            }
   }
        //
        
    }
    if (taskNumber == 9)
    {
        gStates.setString("taskString", "СЖЕЧЬ ДЕМОНИЧЕСКУЮ КНИГУ");
    }
    if (taskNumber == 10)
    {
        gStates.setString("taskString", "УНИЧТОЖИТЬ ДЕМОНА");
    }
    
    
       function symbolsSpawn()
       {
           //symbol1
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 19, 21, 22);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 1, 21, -20);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -1, 21, -8);
           
           random = Math.floor(mappet.random(1,4))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol1", 5), 19, 21, 22);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol1", 5), 1, 21, -20);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol1", 4), -1, 21, -8);
           }
           //c.send("symbol1: "+random);
           
           //symbol2
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -2, 15, 1);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -15, 15, -34);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -21, 15, -6);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -8, 15, 9);
           
           random = Math.floor(mappet.random(1,5))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol2", 2), -2, 15, 1);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol2", 4), -15, 15, -34);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol2", 5), -21, 15, -6);
           }
           else if (random == 4)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol2", 5), -8, 15, 9);
           }
           //c.send("symbol2: "+random);
           
           //symbol3
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 22, 21, 16);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 16, 21, -17);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 15, 21, -25);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 22, 21, -33);
           
           random = Math.floor(mappet.random(1,5))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol3", 2), 22, 21, 16);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol3", 3), 16, 21, -17);
           }
           else if (random == 3)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol3", 5), 15, 21, -25);
           }
           else if (random == 4)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol3", 3), 22, 21, -33);
           }
           //c.send("symbol3: "+random);
           
           //symbol4
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 20, 9, 1);
           c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 7, 9, -13);
           
           random = Math.floor(mappet.random(1,3))
           if (random == 1)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol4", 5), 20, 9, 1);
           }
           else if (random == 2)
           {
                c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol4", 4), 7, 9, -13);
           }
           //c.send("symbo4: "+random);
       }
}