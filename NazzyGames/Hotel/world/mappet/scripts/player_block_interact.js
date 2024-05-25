function main(c)
{
    //vars
    var s = c.getSubject();
    var yaw = s.getYaw();
    var block = c.getValue("block");
    var meta = c.getValue("meta");
    var x = c.getValue("x");
    var y = c.getValue("y");
    var z = c.getValue("z");
    var hand = c.getValue("hand");
    var states = c.getServer().getStates()
    var ray = s.rayTrace(1.9);
    var demon = s.getStates().getNumber("demon");
    var d_huntTime = states.getNumber("d_huntTime");
    var taskNumber = states.getNumber("taskNumber");
    var item = s.getMainItem();
    
    //c.send(meta)
    
    var skills = s.getStates().getString("skills").split(",");
    var hacker = false;
    var master = false;
    var chef = false;
    
    for (var i = 0; i < skills.length; i++) //skills
    {
       if (skills[i] == "hacker") 
       {
         hacker = true;
       }
       if (skills[i] == "master") 
       {
         master = true;
       }
       if (skills[i] == "chef") 
       {
         chef = true;
       }
    }
    
    //code
    if (hand == "main" && ray.isBlock() && demon != 1 && s.getStates().getNumber("death") != 1)
    {
      s.getStates().setString("lastBlockClick", ""+x+" "+y+" "+z+"");
      var lastBlockClick = s.getStates().getString("lastBlockClick");
      //c.send(s.getStates().getString("lastBlockClick"));

      if (block == "ht:vending" && s.getMainItem().getItem().getId() === "ht:coin") //&& x == 13 && y == 15 && z == -7
      {
         c.executeCommand("/clear @s ht:coin 0 1");
         s.getWorld().setBlock(mappet.createBlockState("ht:vendingprogress", meta), x, y, z);
         c.getWorld().playSound("mp.sounds:ht.vending.vending_purchase", x, y, z);
         c.getWorld().playSound("ht:vending_loop", x, y, z, 0.5, 1);
         s.swingArm();
         
          c.scheduleScript(48, function (context)
          {
             context.getWorld().setBlock(mappet.createBlockState("ht:soda", meta), x, y-1, z);
          });
      }
      if (block == "ht:soda" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
         c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
         c.getWorld().playSound("mp.sounds:ht.vending.soda_pickup", x, y, z);
         c.getWorld().playSound("ht:vending_loop", x, y, z, 0.5, 1);
         var tag = mappet.createCompound("{id:\"ht:soda\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"soda_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
         s.giveItem(mappet.createItemNBT(tag))
         s.swingArm();
         
          c.scheduleScript(40, function (context)
          {
               context.getWorld().setBlock(mappet.createBlockState("ht:vending", meta), x, y+1, z)
               c.getWorld().playSound("ht:vending_loop", x, y, z, 0.5, 1);
               c.getWorld().playSound("mp.sounds:ht.vending.vending_end", x, y, z, 0.7, 1);
          });
         
      }
      if (block == "ht:radio" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          var tag = mappet.createCompound("{id:\"ht:radio\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"radio_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
          var item = mappet.createItemNBT(tag);
          s.setMainItem(item);
      }
      if (block == "ht:elevatorpanel" && states.getNumber("elevator_on") == 1 && d_huntTime <= 0)
      {
         s.executeScript("UI_elevator");
      }
      if (block == "ht:elevatorbutton" && x == 4 && y == 21 && z == 12 && states.getNumber("elevator_currentFloor") != 1 && states.getNumber("elevator_on") == 1 && s.getMainItem().getItem().getId() === "minecraft:air" && d_huntTime <= 0)
      {
          s.executeScript("UI_elevator");
          states.setNumber("elevator_nextfloor", 1);
          s.closeUI();
      }
      if (block == "ht:elevatorbutton" && x == 4 && y == 15 && z == 12 && states.getNumber("elevator_currentFloor") != 0 && states.getNumber("elevator_on") == 1 && s.getMainItem().getItem().getId() === "minecraft:air" && d_huntTime <= 0)
      {
          s.executeScript("UI_elevator");
          states.setNumber("elevator_nextfloor", 0);
          s.closeUI();
      }
      if (block == "ht:elevatorbutton" && x == 4 && y == 9 && z == 12 && states.getNumber("elevator_currentFloor") != -1 && states.getNumber("elevator_on") == 1 && s.getMainItem().getItem().getId() === "minecraft:air" && d_huntTime <= 0)
      {
          s.executeScript("UI_elevator");
          states.setNumber("elevator_nextfloor", -1);
          s.closeUI();
      }
      if (block == "ht:elfuse" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:elfuse_on", 5), x, y, z);
          states.setNumber("elevator_on", 1);
          s.swingArm();
          c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/fill 5 10 10 5 10 9 ht:lampceilinglight2 3");
          c.executeCommand("/fill 5 16 10 5 16 9 ht:lampceilinglight2 3");
          c.executeCommand("/fill 5 22 10 5 22 9 ht:lampceilinglight2 3");
          c.getWorld().playSound("mp.sounds:ht.misc.fuse_breaker", x, y, z, 0.5, 1);
          
          c.getServer().getStates().setString("d_trigger", "tp_cooldown") //demon_tp
      }
      if (block == "ht:elfuse_on" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:elfuse", 5), x, y, z);
          states.setNumber("elevator_on", 0);
          s.swingArm();
          c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/fill 5 10 10 5 10 9 ht:lampceilinglight2off 3");
          c.executeCommand("/fill 5 16 10 5 16 9 ht:lampceilinglight2off 3");
          c.executeCommand("/fill 5 22 10 5 22 9 ht:lampceilinglight2off 3");
          c.getWorld().playSound("mp.sounds:ht.misc.fuse_breaker", x, y, z, 0.5, 0.8);
          
          c.getServer().getStates().setString("d_trigger", "tp_cooldown") //demon_tp
      }
      if (block == "ht:gamecard" && x == -7 && y == 12 && z == -31 && s.getMainItem().getItem().getId() === "ht:lighter")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          states.setNumber("pool_portal", 15);
          c.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 2, 1);
          c.getWorld().playSound("mp.sounds:ht.misc.portal_open", x, y, z, 0.5, 1);
          s.swingArm();
          var morph = mappet.createMorph("{Scheme:\"fire_emission\",Vars:{variable.size:\"0.05\",variable.height:\"0.2\",variable.radius:\"0.2\",variable.speed:\"2\"},Name:\"snowstorm\"}");
          c.getWorld().displayMorph(morph, 1, -6.7, 12, -30.7);
          //c.executeCommand("/mp hud setup @a[r=10] HUD_flickering")
          c.executeCommand("/modelblock morph -7 17 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Left:16,Top:16,Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Right:16,Bottom:16,Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
          c.executeCommand("/modelblock morph -7 16 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Left:24,Top:24,Pose:{R:[90.0f,0.0f,0.0f],S:[3.0f,3.0f,3.0f]},Right:24,Bottom:24,Animation:{Interp:19,Animates:1b,Duration:0},Texture:\"b.a:1_HOTEL/sprites/blackspot2.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[3.0f,3.0f,3.0f]},Animation:{Interp:19,Animates:1b,Duration:20},Texture:\"b.a:1_HOTEL/sprites/blackspot2.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")

          c.scheduleScript(10, function (context)
          {
              c.executeCommand("/modelblock morph -7 17 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Left:16,Top:16,Pose:{R:[90.0f,0.0f,0.0f],S:[0.0f,0.0f,0.0f]},Right:16,Bottom:16,Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Animation:{Duration:5.0f,Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}") 
              c.executeCommand("/setblock -10 12 -28 ht:lampwalllight_off 2")
              c.executeCommand("/setblock -3 12 -28 ht:lampwalllight_off 2")
              c.executeCommand("/setblock -3 12 -34 ht:lampwalllight_off 3")
              c.executeCommand("/setblock -10 12 -34 ht:lampwalllight_off 3")
              c.executeCommand("/modelblock property -7 15 -31 enabled true");

          });
          c.scheduleScript(15, function (context)
          {
              c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), -7, 11, -31);
              c.executeCommand("/setblock -10 12 -28 ht:lampwalllight 2")
              c.executeCommand("/setblock -3 12 -28 ht:lampwalllight 2")
              c.executeCommand("/setblock -3 12 -34 ht:lampwalllight 3")
              c.executeCommand("/setblock -10 12 -34 ht:lampwalllight 3")
              c.executeCommand("/modelblock morph -7 17 -31 {List:[{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.2f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.2f,2.0f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}") 
                     if (taskNumber == 3) {
                     states.setString("g_trigger", "task_next"); //next task
                     }
          });
          
      }
      if (x == -7 && y == 11 && z == -31 && s.getMainItem().getItem().getId() === "ht:gamecard")
      {
          item.setCount(item.getCount() - 1);
          c.getWorld().setBlock(mappet.createBlockState("ht:gamecard", 4), x, y + 1, z);
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1.2);
          s.swingArm();
      }
      if (block == "ht:nfc" && s.getMainItem().getItem().getId() === "ht:keycard")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:nfckeycard", 3), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1.2);
          c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 0.5, 1);
          s.setMainItem(mappet.createItem("minecraft:air"));
          s.swingArm();
      }
      if (block == "ht:nfckeycard" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:nfc", 3), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1);
          c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 0.7, 0.9);
          s.setMainItem(mappet.createItem("ht:keycard"));
          s.swingArm();
      }
      if (block == "ht:keylibrary" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1);
          s.setMainItem(mappet.createItem("ht:keylibrary"));
          s.swingArm();
      }
      if (block == "ht:computer" && x == -5 && y == 15 && z == 15 && s.getMainItem().getItem().getId() === "minecraft:air" && (yaw > -50 && yaw < 50))
      {
          s.executeScript("UI_computer");
          c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 0.8, 1.5);
      }
      if (block == "ht:candlesoff" && s.getMainItem().getItem().getId() === "ht:lighter")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:candleson", meta), x, y, z);
          s.swingArm();
          c.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 1);
      }
      if (block == "ht:candleson" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:candlesoff", meta), x, y, z);
          s.swingArm();
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 2);
      }
      
      
      
      if (block == "ht:pan_empty")
      {
          if (chef == true)
          {
              if (s.getMainItem().getItem().getId() === "ht:egg")
              {
                c.getWorld().setBlock(mappet.createBlockState("ht:pan_egg1", 5), x, y, z);
                c.executeCommand("/clear @s ht:egg 0 1");
                s.swingArm();
                c.getWorld().playSound("mp.sounds:ht.misc.frying_start", x, y, z, 0.4, 1);
                c.getWorld().playSound("mp.sounds:ht.misc.egg_pan", x, y, z, 0.4, 1);
                states.setNumber("oven_time", 20);
                states.setNumber("oven_sound", 0);
              }
              else if (s.getMainItem().getItem().getId() === "minecraft:air")
              {
                s.setupHUD("text_info");
                var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нужны [eингредиенты\",Name:\"label\"}")
                s.changeHUDMorph("text_info", 0, HUDmorph)
                s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
              }
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты [cне умеешь [fготовить\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
          }
      }
      if (block == "ht:pan_egg2" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          if (s.getStates().getNumber("hunger") == 1)
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты [cне хочешь [fесть\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
          }
          else
          {
            c.getWorld().setBlock(mappet.createBlockState("ht:pan_empty", 5), x, y, z);
            s.getStates().setNumber("hunger", 1);
            c.getWorld().playSound("mp.sounds:ht.interaction.food_eat", x, y, z, 1, 1);
            s.swingArm();
                     if (taskNumber == 5) {
                     
                        c.scheduleScript(40, function (context)
                        {
                            c.executeCommand("/mp hud setup @a HUD_blackscreen");
                            c.executeCommand("/mp hud morph @a HUD_blackscreen 0 {List:[{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:20},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:20},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                        });
                        c.scheduleScript(59, function (context)
                        {
                        states.setString("cutScene_trigger", "scene2"); //cutscene_play
                        c.executeCommand("/mp script exec ~ cutScene_play");
                        });
                     }
          }
      }
      var book_canfind = s.getStates().getNumber("book_canfind")
      if ((block == "ht:biblbookshelf1" || block == "ht:biblbookshelf2" || block == "ht:biblbookshelfopen") && s.getMainItem().getItem().getId() === "minecraft:air" && book_canfind == 1)
      {
            var book_check = s.getStates().getNumber("book_check");
            var book_search = s.getStates().getNumber("book_search");
            var book_lastBlockClick = s.getStates().getString("book_lastBlockClick");
            
            if ((book_check > 5 && lastBlockClick == book_lastBlockClick) || c.getServer().getStates().getString("books_notfound") == "")
            {
                s.setupHUD("HUD_searchbar");
                var HUDmorph = mappet.createMorph("{Left:10,Right:"+book_search+",Texture:\"b.a:1_HOTEL/bar_ui/ht_searchbar.png\",Name:\"blockbuster.image\"}")
                s.changeHUDMorph("HUD_searchbar", 0, HUDmorph)
                var HUDmorph = mappet.createMorph("{Label:\"[cНет прогресса.\",Name:\"label\"}")
                s.changeHUDMorph("HUD_searchbar", 1, HUDmorph)
            }
            else if (book_check > 5 && lastBlockClick != book_lastBlockClick)
            {
                s.getStates().setString("book_lastBlockClick", ""+x+" "+y+" "+z+"");
                s.getStates().setNumber("book_check", 0);
            }
            else if (book_check < 6)
            {
                s.setupHUD("HUD_searchbar");
                var HUDmorph = mappet.createMorph("{Left:10,Right:"+book_search+",Texture:\"b.a:1_HOTEL/bar_ui/ht_searchbar.png\",Name:\"blockbuster.image\"}")
                s.changeHUDMorph("HUD_searchbar", 0, HUDmorph)
                var HUDmorph = mappet.createMorph("{Label:\"Поиск...\",Name:\"label\"}")
                s.changeHUDMorph("HUD_searchbar", 1, HUDmorph)
                s.getStates().setNumber("book_search", book_search - 2);
                s.getStates().setNumber("book_check", book_check + 1);
                var pos = s.getPosition();
                s.playSound("minecraft:ui.button.click", pos.x, pos.y, pos.z, 0.1, 1);
            }
         if (book_search <= 0)
         {
             s.getStates().setNumber("book_search", 100);
             var randomNumber = mappet.random(0, 10);
             if (randomNumber > 5 && c.getServer().getStates().getString("books_notfound") != "") //find_book
             {
                s.getStates().setNumber("book_canfind", 0);
                s.setupHUD("HUD_blackscreen");
                var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:8.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
                s.changeHUDMorph("HUD_blackscreen", 0, morph)
                
                var s = c.getSubject();
                var books_notfound = c.getServer().getStates().getString("books_notfound").split(",");
    
                var books_number = 0;
                for (var i in books_notfound)
                {
                  books_number = books_number + 1;
                }
                var randomNumber = Math.floor(mappet.random(0, books_number));
                var founded_book = books_notfound[randomNumber]
                s.getStates().setString("item_find", ""+founded_book+"");
                books_notfound.splice(randomNumber, 1);
                c.getServer().getStates().setString("books_notfound", ""+books_notfound+"");
            
                c.scheduleScript(9, function (context)
                {
                   s.executeScript("UI_ItemFind");
                   s.closeHUD("HUD_blackscreen");
                });
             }
         }
      }
      
      if (block == "ht:workbench" && c.getWorld().getBlock(x, y+1, z).getBlockId() == "minecraft:air")
      {
          if (master == true)
          {
              if (s.getMainItem().getItem().getId() === "ht:metalmat")
              {
                c.executeCommand("/clear @s ht:metalmat 0 1");
                c.getWorld().setBlock(mappet.createBlockState("ht:metalmat", meta), x, y+1, z);
                s.swingArm();
                c.getWorld().playSound("mp.sounds:ht.interaction.workbench_place", x, y, z, 0.7, 1);
              }
              else if (s.getMainItem().getItem().getId() === "ht:jar")
              {
                c.executeCommand("/clear @s ht:jar 0 1");
                c.getWorld().setBlock(mappet.createBlockState("ht:jar", meta), x, y+1, z);
                s.swingArm();
                c.getWorld().playSound("mp.sounds:ht.interaction.jar_place", x, y, z, 0.7, 1);
              }
              else if (s.getMainItem().getItem().getId() === "minecraft:air")
              {
                s.setupHUD("text_info");
                var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нужен [eматериал\",Name:\"label\"}")
                s.changeHUDMorph("text_info", 0, HUDmorph)
                s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
              }
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты [cне умеешь [fпользоваться верстаком\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
          }
      }
      if (block == "ht:metalmat")
      {
          if (master == true)
          {
              if (s.getMainItem().getItem().getId() === "ht:pliers")
              {
                c.getWorld().setBlock(mappet.createBlockState("ht:lockpick", meta), x, y, z);
                s.swingArm();
                c.getWorld().playSound("mp.sounds:ht.interaction.craft_lockpick", x, y, z, 1, 1.1);
              }
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты [cне умеешь [fпользоваться верстаком\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
          }
      }
      if (block == "ht:lockpick" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.giveItem(mappet.createItem("ht:lockpick", 1))
          s.swingArm();
      }
      
      if (block == "ht:pills" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          var tag = mappet.createCompound("{id:\"ht:pills\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"pills_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
          s.giveItem(mappet.createItemNBT(tag))
          c.getWorld().playSound("mp.sounds:ht.misc.pills_pickup", x, y, z, 0.5, 1.3);
          s.swingArm();
      }
      
      if (block == "ht:minifridge" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:minifridgeopen", meta), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.interaction.fridge_open", x, y, z, 0.8, 1);
          s.swingArm();
          if (states.getString("fridgeFood") == "egg")
          {
             s.giveItem(mappet.createItem("ht:egg", 1));
          }
          else if (states.getString("fridgeFood") == "soda")
          {
              var tag = mappet.createCompound("{id:\"ht:soda\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"soda_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
              s.giveItem(mappet.createItemNBT(tag))
          }
      }
      if (block == "ht:toolbox" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:toolboxopen", meta), x, y, z);
          s.giveItem(mappet.createItem("ht:metalmat", 1))
          c.getWorld().playSound("mp.sounds:ht.interaction.toolbox_open", x, y, z, 0.6, 1); /////
          s.swingArm();
      }
      if (block == "ht:demonbook" && s.getMainItem().getItem().getId() === "minecraft:air" && taskNumber == 7)
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.setMainItem(mappet.createItem("ht:demonbook0"));
          s.swingArm();
                     if (taskNumber == 7) {
                     states.setString("g_trigger", "task_next"); //next task
                     }
      }
      
      if (block == "ht:symbol1" && s.getMainItem().getItem().getId() === "ht:demonbook0")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.setMainItem(mappet.createItem("ht:demonbook1"));
           c.getWorld().playSound("mp.sounds:ht.events.symbol_pickup", x, y, z, 2, 0.9);
           s.playSound("mp.sounds:ht.events.camera_glitch", x, y, z, 0.2, 1);
           s.setupHUD("HUD_flickering");
      }
      if (block == "ht:symbol2" && s.getMainItem().getItem().getId() === "ht:demonbook1")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.setMainItem(mappet.createItem("ht:demonbook2"));
           c.getWorld().playSound("mp.sounds:ht.events.symbol_pickup", x, y, z, 3, 1.2);
           s.playSound("mp.sounds:ht.events.camera_glitch", x, y, z, 0.25, 1);
           s.setupHUD("HUD_flickering");
      }
      if (block == "ht:symbol3" && s.getMainItem().getItem().getId() === "ht:demonbook2")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.setMainItem(mappet.createItem("ht:demonbook3"));
           c.getWorld().playSound("mp.sounds:ht.events.symbol_pickup", x, y, z, 4, 1.3);
           s.playSound("mp.sounds:ht.events.camera_glitch", x, y, z, 0.35, 1);
           s.setupHUD("HUD_flickering");
      }
      if (block == "ht:symbol4" && s.getMainItem().getItem().getId() === "ht:demonbook3")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
           c.getWorld().playSound("mp.sounds:ht.events.symbol_pickup", x, y, z, 5, 1.5);
           s.playSound("mp.sounds:ht.events.camera_glitch", x, y, z, 0.5, 1);
           s.setupHUD("HUD_flickering");
           s.setupHUD("symbols");
          var tag = mappet.createCompound("{id:\"ht:demonbook\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
          s.setMainItem(mappet.createItem(tag));
          s.swingArm();
                     if (taskNumber == 8) {
                     states.setString("g_trigger", "task_next"); //next task
                     }
      }

      
    
    }
    //if (hand == "main")//
}
//end

//{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:"b.a:empty/skins/texture.png",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:"cube",Morph:{Name:"item",Stack:{id:"ht:doorkitchen",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:"blockbuster.empty"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b},Skin:"b.a:empty/skins/texture.png",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[0.0f,180.0f,0.0f]}}},BodyParts:[{R:[180.0f,-90.0f,0.0f],T:[0.75f,-0.5f,-0.25f],Limb:"cube",Morph:{Name:"item",Stack:{id:"ht:doorkitchen",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:"blockbuster.empty"},Duration:10.0f,EndPoint:1b}],Name:"sequencer",Offset:[0.0f,0.0f,0.0f]}