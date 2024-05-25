function main(c)
{
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
    var item = s.getMainItem()
    
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
      
      if (block == "ht:katana" && s.getMainItem().getItem().getId() === "minecraft:air" && states.getNumber("taskNumber") >= 10)
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1);
          c.getWorld().playSound("mp.sounds:ht.voicelines.demon.basement15", x, y, z, 1, 1);
          s.setMainItem(mappet.createItem("ht:katana"));
          s.swingArm();
          states.setNumber("d_huntPoints", 0);
          states.setNumber("d_forceHuntTime", 500);
          states.setNumber("d_symbolTimePoints", 500);
          states.setNumber("d_huntReady", 0);
      }
      
      if (block == "ht:dischargerempty" && s.getMainItem().getItem().getId() === "ht:capacitor_on")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:dischargercapacitorprocess", meta), x, y, z);
          s.setMainItem(mappet.createItem("minecraft:air"));
          c.getWorld().playSound("mp.sounds:ht.interaction.capacitor_in", x, y, z, 0.5, 1);
          s.swingArm();
          states.setNumber("discharger_time", 15);
      }
      if (x == 7 && y == 28 && z == 18)
      {
          s.setupHUD("text_info");
          var HUDmorph = mappet.createMorph("{Pose:{P:[0.0f,1.0f,0.0f],S:[5.0f,5.0f,5.0f]},Texture:\"b.a:1_HOTEL/eg/eg2.jpg\",Name:\"blockbuster.image\"}")
          s.changeHUDMorph("text_info", 0, HUDmorph)
          s.playSound("mp.sounds:ht.events.bass1", x, y, z, 1, 1.5);
      }
      if (x == 12 && y == 28 && z == 10)
      {
          s.setupHUD("text_info");
          var HUDmorph = mappet.createMorph("{Pose:{P:[0.0f,1.0f,0.0f],S:[5.0f,5.0f,5.0f]},Texture:\"b.a:1_HOTEL/eg/eg3.jpg\",Name:\"blockbuster.image\"}")
          s.changeHUDMorph("text_info", 0, HUDmorph)
          s.playSound("mp.sounds:ht.events.bass1", x, y, z, 1, 1.5);
      }
      if (block == "ht:dischargercapacitor" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("ht:dischargerempty", meta), x, y, z);
          s.setMainItem(mappet.createItem("ht:capacitor"));
          c.getWorld().playSound("mp.sounds:ht.interaction.capacitor_out", x, y, z, 0.5, 1);
          s.swingArm();
      }
      if ((block == "ht:symbol_t1" || block == "ht:symbol_t2") && s.getMainItem().getItem().getId() === "ht:capacitor")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          s.setMainItem(mappet.createItem("ht:capacitor_on"));
          c.getWorld().playSound("mp.sounds:ht.interaction.capacitor_symbol", x, y, z, 5, 1);
          states.setNumber("d_symbolTimePoints", states.getNumber("d_symbolTimePoints") - 200); //10 sec
          s.swingArm();
          var morph = mappet.createMorph("{Scheme:\"fire_emission\",Vars:{variable.emitter_random_4:\"\",variable.size:\"0.05\",variable.particle_speed.x:\"\",variable.height:\"10\",variable.life:\"1\",variable.radius:\"0.2\",variable.speed:\"2\"},Name:\"snowstorm\"}");
          c.getWorld().displayMorph(morph, 1, x + 0.5, y + 0.5, z + 0.5);
      }
      if (block == "ht:reagent" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.interaction.reagent_pickup", x, y, z, 1, 1);
          s.giveItem(mappet.createItem("ht:reagent", 2))
          s.swingArm();
      }
      if (block == "ht:jar")
      {
          if (master == true)
          {
              if (s.getMainItem().getItem().getId() == "ht:reagent")
              {
                item.setCount(item.getCount() - 1);
                c.getWorld().setBlock(mappet.createBlockState("ht:jarpotion", meta), x, y, z);
                s.swingArm();
                c.getWorld().playSound("mp.sounds:ht.interaction.reagent_pickup", x, y, z, 1, 0.9);
                c.getWorld().playSound("mp.sounds:ht.misc.frying_start", x, y, z, 1, 1.5);
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
      if (block == "ht:jarpotion" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
            c.getWorld().setBlock(mappet.createBlockState("minecraft:air", meta), x, y, z);
            s.swingArm();
            c.getWorld().playSound("mp.sounds:ht.interaction.jar_pickup", x, y, z, 1, 1);
            s.giveItem(mappet.createItem("ht:jarpotion", 1))
      }
      if (x == -7 && y == 11 && z == -31 && s.getMainItem().getItem().getId() === "ht:demonbook")
      {
          item.setCount(item.getCount() - 1);
          c.getWorld().setBlock(mappet.createBlockState("ht:demonbook", 4), x, y + 1, z);
          c.getWorld().playSound("mp.sounds:ht.interaction.book_close", x, y, z, 0.5, 1.2);
          s.swingArm();
      }
      if (block == "ht:demonbook" && x == -7 && y == 12 && z == -31 && s.getMainItem().getItem().getId() === "ht:lighter")
      {
          c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y, z);
          states.setNumber("pool_portal", 10);
          states.setNumber("d_forceHuntTime", 3000); //set hunt wont start
          states.setNumber("d_huntReady", 0); //set hunt wont start
          c.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 2, 1);
          c.getWorld().playSound("mp.sounds:ht.misc.portal_open", x, y + 1, z, 1, 1);
          c.getWorld().playSound("mp.sounds:ht.events.demonbook_burn", x, y + 1, z, 2, 1);
          s.swingArm();
          var morph = mappet.createMorph("{Scheme:\"fire_emission\",Vars:{variable.size:\"0.05\",variable.height:\"0.2\",variable.radius:\"0.2\",variable.speed:\"2\"},Name:\"snowstorm\"}");
          c.getWorld().displayMorph(morph, 1, -6.7, 12, -30.7);
          c.executeCommand("/modelblock morph -7 17 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Left:16,Top:16,Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Right:16,Bottom:16,Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
          c.executeCommand("/modelblock morph -7 16 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Left:24,Top:24,Pose:{R:[90.0f,0.0f,0.0f],S:[3.0f,3.0f,3.0f]},Right:24,Bottom:24,Animation:{Interp:19,Animates:1b,Duration:0},Texture:\"b.a:1_HOTEL/sprites/blackspot2.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[3.0f,3.0f,3.0f]},Animation:{Interp:19,Animates:1b,Duration:20},Texture:\"b.a:1_HOTEL/sprites/blackspot2.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")

          c.scheduleScript(10, function (context)
          {
              c.executeCommand("/mp hud setup @a[r=10] symbols")
              c.executeCommand("/mp hud setup @a[r=10,mpe=demon!=1] HUD_noise")
              c.getWorld().playSound("mp.sounds:ht.events.symbol_pickup", x, y + 1, z, 1, 1.3);
              c.executeCommand("/modelblock morph -7 17 -31 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Left:16,Top:16,Pose:{R:[90.0f,0.0f,0.0f],S:[0.0f,0.0f,0.0f]},Right:16,Bottom:16,Animation:{Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Animation:{Duration:5.0f,Interp:19,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}") 
              c.executeCommand("/setblock -10 12 -28 ht:lampwalllight_off 2")
              c.executeCommand("/setblock -3 12 -28 ht:lampwalllight_off 2")
              c.executeCommand("/setblock -3 12 -34 ht:lampwalllight_off 3")
              c.executeCommand("/setblock -10 12 -34 ht:lampwalllight_off 3")
              c.executeCommand("/modelblock property -7 15 -31 enabled true");
              var morph = mappet.createMorph("{Scheme:\"hotel_portalDustFinal\",Name:\"snowstorm\"}");
              c.getServer().getWorld(0).displayMorph(morph, 180, -6.5, 12, -30.5);
          });
          c.scheduleScript(15, function (context)
          {
              c.executeCommand("/modelblock morph -7 17 -31 {List:[{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.2f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.2f,2.0f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}") 
          });
          c.scheduleScript(45, function (context)
          {
              var morph = mappet.createMorph("{Scheme:\"hotel_symbols\",Name:\"snowstorm\"}");
              c.getServer().getWorld(0).displayMorph(morph, 150, -6.5, 13, -30.5);
          });
          c.scheduleScript(160, function (context)
          {
              c.executeCommand("/mp script exec @a[r=10,mpe=demon!=1] blackspot_tp")
              c.executeCommand("/modelblock morph -7 17 -31 {List:[{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.2f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Pose:{R:[90.0f,0.0f,0.0f],S:[2.2f,2.0f,2.0f]},Animation:{Interp:21,Animates:1b},Texture:\"b.a:1_HOTEL/sprites/blackspot3.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}") 
          });
          c.scheduleScript(200, function (context)
          {
              states.setString("g_trigger", "task_next");
          });
          
      }
      if (block == "ht:barfaucetcupempty" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          s.swingArm();
          c.getWorld().setBlock(mappet.createBlockState("ht:barfaucetcupprocess", meta), x, y, z);
          c.getWorld().playSound("mp.sounds:ht.interaction.faucet_beer", x, y, z, 0.5, 1);
          
          c.scheduleScript(40, function (context)
          {
              c.getWorld().setBlock(mappet.createBlockState("ht:barfaucetcupbeer", meta), x, y, z);
          });
      }
      if (block == "ht:barfaucetcupbeer" && s.getMainItem().getItem().getId() === "minecraft:air")
      {
          if (s.getStates().getNumber("pills") > 0)
          {
             s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
             s.setupHUD("text_info");
             var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Эффект уже [cдействует\",Name:\"label\"}")
             s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else
          {
              c.getWorld().setBlock(mappet.createBlockState("ht:barfaucetcupbeer", meta), x, y, z);
              s.swingArm();
              c.getWorld().setBlock(mappet.createBlockState("ht:barfaucetcupempty", meta), x, y, z);
              c.getWorld().playSound("minecraft:entity.generic.drink", x, y, z, 0.5, 1.5);
              
              c.scheduleScript(60, function (context) //scheduled drunk effect
              {
                  s.getStates().setNumber("pills", 1200);
                  s.getStates().setNumber("hunger", 0);
                  s.getStates().setNumber("soda", 0);
                  s.setHunger(5)
                  
                  s.setupHUD("HUD_blackscreen_out")
                  s.playSound("mp.sounds:ht.events.bass3", x, y, z, 10, 1);
                  s.applyPotion(mappet.getPotion("nausea"), 140, 0, false);
              });
          }
      }
      /*
                                                                                          
                                                                                          
                                                                  :-=+++++=*-.            
                                                              :+%@@@@@@@@%%#%@@*-         
                                                           .+%@@@@@@@@@%%%##%@@@@%.   -:  
                                                          +@@@@@@@@@@@%%%####@@@@@%= =%%- 
                                                        :%@@@@@@@@@@@%#######@@@@@@@@%%%%.
       .+%=                                            +@@@@@@@@@@@@@#######@@@@@@@@@@%%#-
     -#@@%=                                           #@@@@@@@@@@@@@%######%@@@@@@@@@@@##:
  .+%%%%@@:                                          #@@@@%%%@@@@@@%#######%@@@@@@@@@@@#+ 
 -%%%%%%%%                         .=**##*=-.      .%@@@@@%%%@@@@@@#########%%@%%%%@@@%:  
 %%%%%%%%+                         *#########*+-. .%@@@@@@@%@@@@@@@##****#########%%%@:   
:%%%%%%%*                          +#############*#%@@@@@@@@@@@@@@@#####*+########%%@=    
 -#%*%#-                           :##################%%@@@@@@@@@@@############**-#@@.    
 *%:..                              =#######%#################%%%@@###############%@#     
=%=                                  -###################################+*#######@@#*:   
#%.                                   :######%%@@%%#######################+=*####@@@%= -*=
%%                                      =#####%@@@@@@%%#############%##########%@@%%++#+. 
=%=                                      :####%@@@@@@@@@%###########@@%%#%%%@@@%%%%%%#.   
 *%=                                       *%%%%@@@@@@@@###%%#######%@@@@@@@@@%#%%%%%%*   
  =%#-                                    .@%%%%@@@@@@@@####%%######@@@@@@@@@@*%%%%%%*.   
   .+%#+:                 .::-=++***+=:   +@%%%%%%@@@@@@%%##########%@@@@@@@@@+%%%%%#     
      -*%%*+=--:::---=++*###############++%%%%%%%%%@@@@@@@@%%%######@@@@@@@@@@#%#%-*@.    
         .-=**#######**++==-::..-+*%%%%@@%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@###%        
                             =#@@@@@@@@@#%%#%%%##%####%@@@@@@@@@@@@@@@@@@@@@@%####        
                          .=*#%@@@@@@@@#################***#%@@@@@@@@@@@@@@@%####*        
                         =######@@@@@@@###################*+=+#@@@@@@@@@@@@@#####+        
                       -*########%@@@@@######################+-+%@@@@@@@%@@%#####-        
                      =###########%@@@@%#######################=+#@@@@@%##%######:        
                     -#############%@@@@########################+*@@@@%##########         
                     *##############%@@@%########################%@@@%##########+         
                    :################%@@%#######################=.. +@%#########.         
                    +###############%%@@@%#######################   :@@@%######-          
                   :################%%%@@@#######################-   #@@@@#%%%@.          
                   +################%%%##%%######################=     .:-:+#**.          
                   #################%%%+    -####################+                        
                  :#################%%%-     .*##################=                        
                  =################%%%#        -#################=                        
                  +################%%#=          +###############=                        
                  *###############%%%#            :*#############=                        
                  ################%##:              +#######%%%##*.                       
                  *#################-                =#############+.                     
                  +################=                  :*#############+.                   
                  =###############+                     +############%#:                  
                  -##############*                      -#############%#.                 
                  :#############*                       :##############%*                 
                  :#############:                        *#############%%:                
                  -############=                         .#############%%=                
                  +###########*                           .############%%*                
                  ++++++++++++                             .++++++++++++++  
      */
      if (block == "ht:document" && x == 11 && y == 27 && z == 18)
      {
          s.executeScript("UI_donators");
          s.playSound("minecraft:ui.button.click", x, y, z, 0.5, 2);
          s.playSound("mp.sounds:ht.interaction.item_found", x, y, z, 0.5, 1.5);
      }
      if (block == "ht:document" && x == 8 && y == 27 && z == 12)
      {
          c.getWorld().playSound("mp.sounds:ht.interaction.book_open", x, y, z, 0.5, 2);
          s.sendActionBar("Да не мышкой кликай, а §eTAB §fнажми.")
          s.swingArm();
      }
      if (block == "ht:chibin" || block == "ht:chibiv" || block == "ht:chibih" || block == "ht:chibijc" || block == "ht:chibik")
      {
          c.getWorld().playSound("mp.sounds:ht.voicelines.demon.default2", x, y, z, 0.5, 2);
          s.sendActionBar(":3")
          s.swingArm();
      }
      if (block == "ht:calendar1" && x == 9 && y == 27 && z == 12)
      {
          s.playSound("minecraft:ui.button.click", x, y, z, 0.5, 2);
          s.sendActionBar("Начало разработки режима: §302.04.23");
      }
      if (x == 15 && y == 9 && z == 13)
      {
          s.playSound("minecraft:ui.button.click", x, y, z, 0.5, 2);
          s.sendActionBar("Не заходи внутрь...");
      }
      if (x == 16 && y == 8 && z == 16)
      {
          s.playSound("minecraft:ui.button.click", x, y, z, 0.5, 2);
          s.sendActionBar("§4Попался.");
      }
      if (x == -3 && y == 14 && z == 32)
      {
          s.playSound("minecraft:ui.button.click", x, y, z, 0.5, 2);
          s.sendActionBar("Чего это мы тут забыли...?");
      }
      
    }//if hand


}