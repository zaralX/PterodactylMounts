function main(c)
{
    var gStates = c.getServer().getStates();
    var lights = gStates.getNumber("lights");
    
    if (lights == 0)
    {
      //states
     var players = c.getServer().getAllPlayers();
     for (var i in players)
     {
         if (players[i].getStates().getNumber("demon") != 1)
         {
             players[i].setHunger(20);
             players[i].getStates().setNumber("hunger", 0);
             players[i].getStates().setNumber("pills", 0);
             players[i].closeUI();
         }

     }
     
     
     //
     c.executeCommand("/playsound mp.sounds:ht.events.lights_down ambient @a ~ ~1000 ~ 1000");
     c.executeCommand("/mp hud setup @a HUD_blackscreen_out");
     //c.executeCommand("/mp hud morph @a HUD_blackscreen_out 0 {List:[{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:20},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:15.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
      //важные предметы
      c.executeCommand("/setblock -5 15 15 ht:computeroff 3")
      c.executeCommand("/setblock -1 15 -14 ht:minifridge 3");
      c.executeCommand("/setblock 7 9 -12 ht:minifridge 4");
      c.executeCommand("/setblock 1 20 -10 ht:minifridge 5");
      //ресепшен
      c.executeCommand("/setblock -4 17 18 ht:lamp_drone_off")
      c.executeCommand("/setblock -4 17 14 ht:lampceiling_off")
      c.executeCommand("/setblock -3 16 24 ht:lamp_wall2_off")
      c.executeCommand("/setblock 0 16 24 ht:lamp_wall2_off")
      c.executeCommand("/setblock 1 16 12 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 7 16 12 ht:lamp_wall2_off 3")
      //офис
      c.executeCommand("/fill -7 17 4 -2 17 9 ht:lampceiling_off 0 replace ht:lampceiling")
      //ресторан
      c.executeCommand("/fill 24 16 18 24 16 6 ht:lamp_wall2_off 4 replace ht:lamp_wall2")
      c.executeCommand("/setblock 15 16 21 ht:lamp_wall2_off 5")
      c.executeCommand("/setblock 18 16 21 ht:lamp_wall2_off 4")
      c.executeCommand("/setblock 15 16 16 ht:lamp_wall2_off 5")
      c.executeCommand("/setblock 18 16 13 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 17 16 11 ht:lamp_wall2_off")
      c.executeCommand("/setblock 17 16 1 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 22 16 1 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 17 17 4 ht:lampceiling_off")
      c.executeCommand("/setblock 17 17 8 ht:lampceiling_off")
      c.executeCommand("/setblock 21 17 6 ht:lamp_drone_off")
      c.executeCommand("/setblock 21 17 18 ht:lamp_drone_off")
      //кухня
      c.executeCommand("/fill 20 17 -2 17 17 -7 ht:lamp_drone2_off 0 replace ht:lamp_drone2")
      c.executeCommand("/fill 20 17 -12 16 17 -12 ht:lampceiling_off 0 replace ht:lampceiling")
      //коридор1_этаж1
      c.executeCommand("/fill 9 16 21 9 16 -14 ht:lamp_wall2_off 5 replace ht:lamp_wall2")
      c.executeCommand("/fill 13 16 21 13 16 -14 ht:lamp_wall2_off 4 replace ht:lamp_wall2")
      //коридор2_этаж1
      c.executeCommand("/fill 23 16 -16 -18 16 -16 ht:lamp_wall2_off 2 replace ht:lamp_wall2")
      c.executeCommand("/fill -18 16 -20 15 16 -20 ht:lamp_wall2_off 3 replace ht:lamp_wall2")
      c.executeCommand("/setblock -7 17 -1 ht:lampceiling_off")
      c.executeCommand("/fill 22 17 -25 22 17 -33 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      //прачечная
      c.executeCommand("/fill 7 17 1 -3 17 -6 ht:lampceiling_off 0 replace ht:lampceiling")
      //комната отдыха персонала
      c.executeCommand("/setblock -1 17 -13 ht:lampceiling_off")
      c.executeCommand("/setblock 4 17 -11 ht:lamproom_off")
      c.executeCommand("/setblock -2 17 -9 ht:lampceilinglight2off 4")
      //спортзал
      c.executeCommand("/fill -12 17 -13 -19 17 -1 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      //бассейн
      c.executeCommand("/fill 18 17 -36 -13 17 -22 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      c.executeCommand("/fill -17 17 -23 -17 17 -34 ht:lampceiling_off 0 replace ht:lampceiling")
      c.executeCommand("/fill -3 12 -28 -10 12 -28 ht:lampwalllight_off 2 replace ht:lampwalllight")
      c.executeCommand("/fill -10 12 -34 -3 12 -34 ht:lampwalllight_off 3 replace ht:lampwalllight")
      //коридор_этаж2
      c.executeCommand("/fill 9 22 23 9 22 -28 ht:lamp_wall2_off 5 replace ht:lamp_wall2")
      c.executeCommand("/fill 13 22 -32 13 22 23 ht:lamp_wall2_off 4 replace ht:lamp_wall2")
      c.executeCommand("/setblock 1 22 -2 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 1 22 2 ht:lamp_wall2_off 2")
      c.executeCommand("/setblock 23 22 2 ht:lamp_wall2_off 2")
      c.executeCommand("/setblock 23 22 -2 ht:lamp_wall2_off 3")
      c.executeCommand("/fill 7 22 12 1 22 12 ht:lamp_wall2_off 3 replace ht:lamp_wall2")
      c.executeCommand("/setblock 4 23 15 ht:lamp_drone_off")
      c.executeCommand("/setblock 2 22 -16 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 2 22 -12 ht:lamp_wall2_off 2")
      c.executeCommand("/setblock 2 22 -33 ht:lamp_wall2_off 3")
      c.executeCommand("/setblock 2 22 -29 ht:lamp_wall2_off 2")
      c.executeCommand("/fill 7 23 6 3 23 6 ht:lampceilinglight2off 5 replace ht:lampceilinglight2")
      //бар
      c.executeCommand("/fill -9 22 23 -9 22 5 ht:lamp_wall_off 5 replace ht:lamp_wall")
      c.executeCommand("/fill -9 22 18 -9 21 13 ht:lampwalllight_off 5 replace ht:lampwalllight")
      c.executeCommand("/fill -1 22 23 -1 22 5 ht:lamp_wall_off 4 replace ht:lamp_wall")
      c.executeCommand("/fill -1 21 12 -1 21 10 ht:lampwalllight_off 4 replace ht:lampwalllight")
      c.executeCommand("/fill -1 24 5 -8 24 23 ht:lampceilinglightoff 3 replace ht:lampceilinglight")
      c.executeCommand("/fill -4 23 2 -4 23 -2 ht:lampceilinglight2off 3 replace ht:lampceilinglight2")
      c.executeCommand("/fill -8 23 2 -8 23 -1 ht:lampceilinglight2off 5 replace ht:lampceilinglight2")
      //склад
      c.executeCommand("/fill -2 23 -5 -7 23 -9 ht:lampceiling_off 0 replace ht:lampceiling");
      //шахматы
      c.executeCommand("/fill 6 23 -5 2 23 -9 ht:lampceiling_off 0 replace ht:lampceiling")
      //библиотека
      c.executeCommand("/fill -2 23 -13 -7 23 -32 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      c.executeCommand("/fill -4 23 -13 -4 23 -32 ht:lampceilinglight2off 2 replace ht:lampceilinglight2")
      c.executeCommand("/fill -2 23 -18 -7 23 -18 ht:lampceilinglight2off 4 replace ht:lampceilinglight2")
      //музыкальная
      c.executeCommand("/fill 2 23 -19 6 23 -26 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      c.executeCommand("/fill 2 23 -22 6 23 -22 ht:lampceilinglight2off 5 replace ht:lampceilinglight2")
      //детская
      c.executeCommand("/fill 6 23 21 2 23 23 ht:lampceiling_off 0 replace ht:lampceiling")
      //100
      c.executeCommand("/setblock 22 23 21 ht:lamproom_off")
      //101
      c.executeCommand("/setblock 21 23 13 ht:lamproom_off")
      //102
      c.executeCommand("/setblock 19 23 6 ht:lampceiling_off")
      //103
      c.executeCommand("/setblock 21 23 -6 ht:lamproom_off")
      //104
      c.executeCommand("/setblock 16 23 -11 ht:lampceiling_off")
      //105
      c.executeCommand("/setblock 22 23 -24 ht:lamproom_off")
      //106
      c.executeCommand("/setblock 22 23 -30 ht:lamproom_off")
      c.executeCommand("/setblock 16 23 -32 ht:lampceiling_off")
      //подвал
      c.executeCommand("/fill -7 11 13 -7 11 -10 ht:blamp1walloff 5 replace ht:blamp1wall")
      c.executeCommand("/fill -1 11 13 -1 11 -10 ht:blamp1walloff 4 replace ht:blamp1wall")
      c.executeCommand("/setblock -4 11 2 ht:blamp1walloff 3")
      c.executeCommand("/setblock -4 11 18 ht:blamp1walloff 2")
      c.executeCommand("/fill 11 11 17 -4 11 18 ht:blamp1walloff 2 replace ht:blamp1wall")
      c.executeCommand("/setblock 4 11 12 ht:blamp1walloff 3")
      c.executeCommand("/setblock 7 11 22 ht:blamp1walloff 4")
      c.executeCommand("/setblock 1 11 22 ht:blamp1walloff 5")
      c.executeCommand("/setblock -1 10 21 ht:blamp1walloff 4")
      c.executeCommand("/setblock -7 11 22 ht:blamp1walloff 5")
      c.executeCommand("/setblock 13 11 23 ht:blamp1walloff 4")
      c.executeCommand("/setblock 11 11 19 ht:blamp1walloff 3")
      c.executeCommand("/setblock 22 11 24 ht:blamp1walloff 2")
      c.executeCommand("/setblock 15 11 23 ht:blamp1walloff 5")
      c.executeCommand("/fill 24 11 18 24 11 11 ht:blamp1walloff 4 replace ht:blamp1wall")
      c.executeCommand("/fill 20 11 11 20 11 18 ht:blamp1walloff 5 replace ht:blamp1wall")
      c.executeCommand("/setblock 15 11 13 ht:blamp1walloff 2")
      c.executeCommand("/fill 18 11 6 24 11 -12 ht:blamp1walloff 4 replace ht:blamp1wall")
      c.executeCommand("/fill 17 11 -12 11 11 -12 ht:blamp1walloff 3 replace ht:blamp1wall")
      c.executeCommand("/fill 14 11 6 14 11 1 ht:blamp1walloff 5 replace ht:blamp1wall")
      c.executeCommand("/setblock 11 11 -4 ht:blamp1walloff")
      c.executeCommand("/setblock 9 11 -7 ht:blamp1walloff 5")
      c.executeCommand("/setblock 4 11 -8 ht:blamp1walloff 3")
      c.executeCommand("/setblock -4 11 -14 ht:blamp1walloff 3")
      c.executeCommand("/setblock 4 11 -4 ht:blamp1walloff 2")
      c.executeCommand("/setblock -2 11 -2 ht:blamp1walloff 3")
      c.executeCommand("/setblock 4 11 7 ht:blamp1walloff 2")
      c.executeCommand("/setblock 1 11 0 ht:blamp1walloff 5")
      c.executeCommand("/setblock 12 11 -1 ht:blamp1walloff 4")
      c.executeCommand("/setblock 9 11 6 ht:blamp1walloff 5")
      c.executeCommand("/setblock 11 11 9 ht:blamp1walloff 3")
      //подвал_офис1
      c.executeCommand("/fill 2 11 -12 6 11 -12 ht:lampceiling_off 0 replace ht:lampceiling")
      //подвал_офис2
      c.executeCommand("/fill 22 11 6 22 11 -1 ht:lampceiling_off 0 replace ht:lampceiling")
      //лифт
          c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/fill 5 10 10 5 10 9 ht:lampceilinglight2off 3");
          c.executeCommand("/fill 5 16 10 5 16 9 ht:lampceilinglight2off 3");
          c.executeCommand("/fill 5 22 10 5 22 9 ht:lampceilinglight2off 3");
    }
    else if (lights == 1)
    {
      //states
     var players = c.getServer().getAllPlayers();
     for (var i in players)
     {
         if (players[i].getStates().getNumber("demon") != 1)
         {
             players[i].getStates().setNumber("book_canfind", 1);
             players[i].getStates().setNumber("sanity", 0);
             players[i].getStates().setNumber("pills", 0);
             players[i].getStates().setNumber("hunger", 0);
             players[i].getStates().setNumber("soda", 0);
             
             var HUDmorph = mappet.createMorph("{Color:16777215,Animation:{Interp:18,Animates:1b},Texture:\"b.a:1_HOTEL/ui/vignette.png\",Name:\"blockbuster.image\"}")
             players[i].changeHUDMorph("vignette", 0, HUDmorph)
         }

     }
       c.executeCommand("/playsound mp.sounds:ht.events.lights_up ambient @a[mpe=demon_touch!=1] ~ ~1000 ~ 1000");
      //важные предметы
      c.executeCommand("/setblock -5 15 15 ht:computer 3")
      //ресепшен
      c.executeCommand("/setblock -4 17 18 ht:lamp_drone")
      c.executeCommand("/setblock -4 17 14 ht:lampceiling")
      c.executeCommand("/setblock -3 16 24 ht:lamp_wall2")
      c.executeCommand("/setblock 0 16 24 ht:lamp_wall2")
      c.executeCommand("/setblock 1 16 12 ht:lamp_wall2 3")
      c.executeCommand("/setblock 7 16 12 ht:lamp_wall2 3")
      //офис
      c.executeCommand("/fill -7 17 4 -2 17 9 ht:lampceiling 0 replace ht:lampceiling_off")
      //ресторан
      c.executeCommand("/fill 24 16 18 24 16 6 ht:lamp_wall2 4 replace ht:lamp_wall2_off")
      c.executeCommand("/setblock 15 16 21 ht:lamp_wall2 5")
      c.executeCommand("/setblock 18 16 21 ht:lamp_wall2 4")
      c.executeCommand("/setblock 15 16 16 ht:lamp_wall2 5")
      c.executeCommand("/setblock 18 16 13 ht:lamp_wall2 3")
      c.executeCommand("/setblock 17 16 11 ht:lamp_wall2")
      c.executeCommand("/setblock 17 16 1 ht:lamp_wall2 3")
      c.executeCommand("/setblock 22 16 1 ht:lamp_wall2 3")
      c.executeCommand("/setblock 17 17 4 ht:lampceiling")
      c.executeCommand("/setblock 17 17 8 ht:lampceiling")
      c.executeCommand("/setblock 21 17 6 ht:lamp_drone")
      c.executeCommand("/setblock 21 17 18 ht:lamp_drone")
      //кухня
      c.executeCommand("/fill 20 17 -2 17 17 -7 ht:lamp_drone2 0 replace ht:lamp_drone2_off")
      c.executeCommand("/fill 20 17 -12 16 17 -12 ht:lampceiling 0 replace ht:lampceiling_off")
      //коридор1_этаж1
      c.executeCommand("/fill 9 16 21 9 16 -14 ht:lamp_wall2 5 replace ht:lamp_wall2_off")
      c.executeCommand("/fill 13 16 21 13 16 -14 ht:lamp_wall2 4 replace ht:lamp_wall2_off")
      //коридор2_этаж1
      c.executeCommand("/fill 23 16 -16 -18 16 -16 ht:lamp_wall2 2 replace ht:lamp_wall2_off")
      c.executeCommand("/fill -18 16 -20 15 16 -20 ht:lamp_wall2 3 replace ht:lamp_wall2_off")
      c.executeCommand("/setblock -7 17 -1 ht:lampceiling")
      c.executeCommand("/fill 22 17 -25 22 17 -33 ht:lampceilinglight 2 replace ht:lampceilinglightoff")
      c.executeCommand("/fill 8 16 -20 2 16 -20 ht:lamp_wall2_off 3 replace ht:lamp_wall2");
      c.executeCommand("/fill 2 16 -16 7 16 -16 ht:lamp_wall2_off 2 replace ht:lamp_wall2");
      //прачечная
      c.executeCommand("/fill 7 17 1 -3 17 -6 ht:lampceiling 0 replace ht:lampceiling_off")
      //комната отдыха персонала
      c.executeCommand("/setblock -1 17 -13 ht:lampceiling")
      c.executeCommand("/setblock 4 17 -11 ht:lamproom")
      c.executeCommand("/setblock -2 17 -9 ht:lampceilinglight2 4")
      //спортзал
      c.executeCommand("/fill -12 17 -13 -19 17 -1 ht:lampceilinglight 2 replace ht:lampceilinglightoff")
      //бассейн
      c.executeCommand("/fill 18 17 -36 -13 17 -22 ht:lampceilinglight 2 replace ht:lampceilinglightoff")
      c.executeCommand("/fill -17 17 -23 -17 17 -34 ht:lampceiling 0 replace ht:lampceiling_off")
      c.executeCommand("/fill -3 12 -28 -10 12 -28 ht:lampwalllight 2 replace ht:lampwalllight_off")
      c.executeCommand("/fill -10 12 -34 -3 12 -34 ht:lampwalllight 3 replace ht:lampwalllight_off")
      c.executeCommand("/fill 8 17 -33 5 17 -25 ht:lampceilinglightoff 2 replace ht:lampceilinglight");
      c.executeCommand("/fill 17 17 -27 11 17 -31 ht:lampceilinglightoff 2 replace ht:lampceilinglight");
      c.executeCommand("/fill -2 17 -24 -11 17 -24 ht:lampceilinglightoff 2 replace ht:lampceilinglight");
      c.executeCommand("/fill -5 17 -34 -11 17 -34 ht:lampceilinglightoff 2 replace ht:lampceilinglight")
      //коридор_этаж2
      c.executeCommand("/fill 9 22 23 9 22 -28 ht:lamp_wall2 5 replace ht:lamp_wall2_off")
      c.executeCommand("/fill 13 22 -32 13 22 23 ht:lamp_wall2 4 replace ht:lamp_wall2_off")
      c.executeCommand("/setblock 1 22 -2 ht:lamp_wall2 3")
      c.executeCommand("/setblock 1 22 2 ht:lamp_wall2 2")
      c.executeCommand("/setblock 23 22 2 ht:lamp_wall2 2")
      c.executeCommand("/setblock 23 22 -2 ht:lamp_wall2 3")
      c.executeCommand("/fill 7 22 12 1 22 12 ht:lamp_wall2 3 replace ht:lamp_wall2_off")
      c.executeCommand("/setblock 4 23 15 ht:lamp_drone")
      c.executeCommand("/setblock 2 22 -16 ht:lamp_wall2 3")
      c.executeCommand("/setblock 2 22 -12 ht:lamp_wall2 2")
      c.executeCommand("/setblock 2 22 -33 ht:lamp_wall2 3")
      c.executeCommand("/setblock 2 22 -29 ht:lamp_wall2 2")
      c.executeCommand("/fill 7 23 6 3 23 6 ht:lampceilinglight2 5 replace ht:lampceilinglight2off")
         c.executeCommand("/setblock 13 22 -24 ht:lamp_wall2_off 4")
         c.executeCommand("/setblock 13 22 -15 ht:lamp_wall2_off 4")
         c.executeCommand("/setblock 13 22 23 ht:lamp_wall2_off 4")
         c.executeCommand("/setblock 9 22 3 ht:lamp_wall2_off 5")
         c.executeCommand("/setblock 13 22 8 ht:lamp_wall2_off 4")
         c.executeCommand("/setblock 9 22 -28 ht:lamp_wall2_off 5")
      //бар
      c.executeCommand("/fill -9 22 23 -9 22 5 ht:lamp_wall 5 replace ht:lamp_wall_off")
      c.executeCommand("/fill -9 22 18 -9 21 13 ht:lampwalllight 5 replace ht:lampwalllight_off")
      c.executeCommand("/fill -1 22 23 -1 22 5 ht:lamp_wall 4 replace ht:lamp_wall_off")
      c.executeCommand("/fill -1 21 12 -1 21 10 ht:lampwalllight 4 replace ht:lampwalllight_off")
      c.executeCommand("/fill -1 24 5 -8 24 23 ht:lampceilinglight 3 replace ht:lampceilinglightoff")
      c.executeCommand("/fill -4 23 2 -4 23 -2 ht:lampceilinglight2 3 replace ht:lampceilinglight2off")
      c.executeCommand("/fill -8 23 2 -8 23 -1 ht:lampceilinglight2 5 replace ht:lampceilinglight2off")
      
      c.executeCommand("/fill -8 24 5 -2 24 5 ht:lampceilinglightoff 2 replace ht:lampceilinglight");
      c.executeCommand("/fill -8 23 2 -4 23 -2 ht:lampceilinglight2off 3 replace ht:lampceilinglight2");
      //склад
      c.executeCommand("/fill -2 23 -5 -7 23 -9 ht:lampceiling 0 replace ht:lampceiling_off")
      
      c.executeCommand("/fill -7 23 -5 -2 23 -5 ht:lampceiling_off 0 replace ht:lampceiling");
      //шахматы
      c.executeCommand("/fill 6 23 -5 2 23 -9 ht:lampceiling 0 replace ht:lampceiling_off")
      //библиотека
      c.executeCommand("/fill -2 23 -13 -7 23 -32 ht:lampceilinglight 2 replace ht:lampceilinglightoff")
      c.executeCommand("/fill -4 23 -13 -4 23 -32 ht:lampceilinglight2 2 replace ht:lampceilinglight2off")
      c.executeCommand("/fill -2 23 -18 -7 23 -18 ht:lampceilinglight2 4 replace ht:lampceilinglight2off")
      //музыкальная
      c.executeCommand("/fill 2 23 -19 6 23 -26 ht:lampceilinglight 2 replace ht:lampceilinglightoff")
      c.executeCommand("/fill 2 23 -22 6 23 -22 ht:lampceilinglight2 5 replace ht:lampceilinglight2off")
      //детская
      c.executeCommand("/fill 6 23 21 2 23 23 ht:lampceiling 0 replace ht:lampceiling_off")
      //100
      c.executeCommand("/setblock 22 23 21 ht:lamproom")
      //101
      c.executeCommand("/setblock 21 23 13 ht:lamproom")
      //102
      c.executeCommand("/setblock 19 23 6 ht:lampceiling")
      //103
      c.executeCommand("/setblock 21 23 -6 ht:lamproom")
      //104
      c.executeCommand("/setblock 16 23 -11 ht:lampceiling")
      //105
      c.executeCommand("/setblock 22 23 -24 ht:lamproom")
      //106
      c.executeCommand("/setblock 22 23 -30 ht:lamproom")
      c.executeCommand("/setblock 16 23 -32 ht:lampceiling")
      //подвал
      c.executeCommand("/fill -7 11 13 -7 11 -10 ht:blamp1wall 5 replace ht:blamp1walloff")
      c.executeCommand("/fill -1 11 13 -1 11 -10 ht:blamp1wall 4 replace ht:blamp1walloff")
      c.executeCommand("/setblock -4 11 2 ht:blamp1wall 3")
      c.executeCommand("/setblock -4 11 18 ht:blamp1wall 2")
      c.executeCommand("/fill 11 11 17 -4 11 18 ht:blamp1wall 2 replace ht:blamp1walloff")
      c.executeCommand("/setblock 4 11 12 ht:blamp1wall 3")
      c.executeCommand("/setblock 7 11 22 ht:blamp1wall 4")
      c.executeCommand("/setblock 1 11 22 ht:blamp1wall 5")
      c.executeCommand("/setblock -1 10 21 ht:blamp1wall 4")
      c.executeCommand("/setblock -7 11 22 ht:blamp1wall 5")
      c.executeCommand("/setblock 13 11 23 ht:blamp1wall 4")
      c.executeCommand("/setblock 11 11 19 ht:blamp1wall 3")
      c.executeCommand("/setblock 22 11 24 ht:blamp1wall 2")
      c.executeCommand("/setblock 15 11 23 ht:blamp1wall 5")
      c.executeCommand("/fill 24 11 18 24 11 11 ht:blamp1wall 4 replace ht:blamp1walloff")
      c.executeCommand("/fill 20 11 11 20 11 18 ht:blamp1wall 5 replace ht:blamp1walloff")
      c.executeCommand("/setblock 15 11 13 ht:blamp1wall 2")
      c.executeCommand("/fill 18 11 6 24 11 -12 ht:blamp1wall 4 replace ht:blamp1walloff")
      c.executeCommand("/fill 17 11 -12 11 11 -12 ht:blamp1wall 3 replace ht:blamp1walloff")
      c.executeCommand("/fill 14 11 6 14 11 1 ht:blamp1wall 5 replace ht:blamp1walloff")
      c.executeCommand("/setblock 11 11 -4 ht:blamp1wall")
      c.executeCommand("/setblock 9 11 -7 ht:blamp1wall 5")
      c.executeCommand("/setblock 4 11 -8 ht:blamp1wall 3")
      c.executeCommand("/setblock -4 11 -14 ht:blamp1wall 3")
      c.executeCommand("/setblock 4 11 -4 ht:blamp1wall 2")
      c.executeCommand("/setblock -2 11 -2 ht:blamp1wall 3")
      c.executeCommand("/setblock 4 11 7 ht:blamp1wall 2")
      c.executeCommand("/setblock 1 11 0 ht:blamp1wall 5")
      c.executeCommand("/setblock 12 11 -1 ht:blamp1wall 4")
      c.executeCommand("/setblock 9 11 6 ht:blamp1wall 5")
      c.executeCommand("/setblock 11 11 9 ht:blamp1wall 3")
      //подвал_офис1
      c.executeCommand("/fill 2 11 -12 6 11 -12 ht:lampceiling 0 replace ht:lampceiling_off")
      //подвал_офис2
      c.executeCommand("/fill 22 11 6 22 11 -1 ht:lampceiling 0 replace ht:lampceiling_off")
      //лифт
      if (gStates.getNumber("elevator_on") == 1)
      {
          c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\""+gStates.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\""+gStates.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\""+gStates.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
          c.executeCommand("/fill 5 10 10 5 10 9 ht:lampceilinglight2 3");
          c.executeCommand("/fill 5 16 10 5 16 9 ht:lampceilinglight2 3");
          c.executeCommand("/fill 5 22 10 5 22 9 ht:lampceilinglight2 3");
      }
      
      //spawn toolboxes
            var random = Math.floor(mappet.random(1, 8))
            if (random == 1){
               c.executeCommand("/setblock 7 8 23 ht:toolbox 4");
            }
            else if (random == 2){
               c.executeCommand("/setblock 20 8 18 ht:toolbox 5");
            }
            else if (random == 3){
               c.executeCommand("/setblock 14 9 5 ht:toolbox 5");
            }
            else if (random == 4){
               c.executeCommand("/setblock 22 8 -4 ht:toolbox 2");
            }
            else if (random == 5){
               c.executeCommand("/setblock -4 8 -10 ht:toolbox 4");
            }
            else if (random == 6){
               c.executeCommand("/setblock -7 8 7 ht:toolbox 3");
            }
            else if (random == 7){
               c.executeCommand("/setblock 9 8 5 ht:toolbox 5");
            }
      //spawn reagents
            var random = Math.floor(mappet.random(1, 9))
            if (random == 1){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 2), 16, 20, 24);
            }
            else if (random == 2){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 2), 16, 20, 16);
            }
            else if (random == 3){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), 15, 20, 6);
            }
            else if (random == 4){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), 15, 20, -14);
            }
            else if (random == 5){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 5), 15, 20, -25);
            }
            else if (random == 6){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 3), 15, 20, -33);
            }
            else if (random == 7){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 3), 0, 14, 1);
            }
            else if (random == 8){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:reagent", 2), -1, 14, -4);
            }
            
        //Time Symbols
        gStates.setNumber("d_symbolTimePoints", 400)
        //remove time symbols
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -7, 21, 24);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 5, 21, -29);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 23, 21, 8);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -8, 21, -2);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 6, 9, 7);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 18, 9, -5);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), 18, 9, 19);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("minecraft:air", 0), -3, 9, 24);
        //spawn time symbols_t1
            var random = Math.floor(mappet.random(1, 5))
            if (random == 1){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t1", 2), -7, 21, 24);
            }
            else if (random == 2){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t1", 2), 5, 21, -29);
            }
            else if (random == 3){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t1", 2), 23, 21, 8);
            }
            else if (random == 4){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t1", 5), -8, 21, -2);
            }
        //spawn time symbols_t2
            var random = Math.floor(mappet.random(1, 5))
            if (random == 1){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t2", 2), 6, 9, 7);
            }
            else if (random == 2){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t2", 4), 18, 9, -5);
            }
            else if (random == 3){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t2", 3), 18, 9, 19);
            }
            else if (random == 4){
               c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:symbol_t2", 2), -3, 9, 24);
            }
            
    }
}
//c.executeCommand("")