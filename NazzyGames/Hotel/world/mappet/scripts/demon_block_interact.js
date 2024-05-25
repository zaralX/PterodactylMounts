function main(c)
{
    //vars
    var s = c.getSubject();
    var block = c.getValue("block");
    var meta = c.getValue("meta");
    var x = c.getValue("x");
    var y = c.getValue("y");
    var z = c.getValue("z");
    var hand = c.getValue("hand");
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var demon = states.getNumber("demon");
    var d_points = gStates.getNumber("d_points");
    var d_cooldown = gStates.getNumber("d_cooldown");
    var d_cooldown_start = gStates.getNumber("d_cooldown_start"); //default 600
    var d_cooldown_points = gStates.getNumber("d_cooldown_points"); //default 0
    var d_cooldown_pointsStart = gStates.getNumber("d_cooldown_pointsStart"); //default 1
    var d_soundRadius = gStates.getNumber("d_soundRadius"); //default 8
    var d_RayDistance = gStates.getNumber("d_RayDistance") //default 2
    var ray = s.rayTrace(d_RayDistance);
    
    var d_skills = gStates.getString("d_skills").split(",");
    var electric = false;
    
    for (var i = 0; i < d_skills.length; i++) //skills
    {
       if (d_skills[i] == "electric") 
       {
         electric = true;
       }
    }
    
    
    if (hand == "main" && ray.isBlock() && demon == 1)
    {
      s.getStates().setString("lastBlockClick", ""+x+" "+y+" "+z+"");
      var lastBlockClick = s.getStates().getString("lastBlockClick");
      
      if (block == "ht:computeroff")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {   
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:computer", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep", x, y, z, 1, 1);
                   c.scheduleScript(60, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:computeroff", meta), x, y, z);
                   });
          }
      } //computeroff
      if (block == "ht:computer" && x == -5 && y == 15 && z == 15)
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {   
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:computeroff", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 0.7);
               c.executeCommand("/mp script exec @a[r=3] inv_close")
                   c.scheduleScript(200, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:computer", meta), x, y, z);
                        c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 1.2);
                   });
          }
      } //computer
      if (block == "ht:vending")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {   
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+12+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:vendingdisabled", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.light2", x, y, z, 1, 0.7);
                   c.scheduleScript(200, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:vending", meta), x, y, z);
                        c.getWorld().playSound("mp.sounds:ht.interaction.light2", x, y, z, 1, 1);
                   });
          }
      } //computer
      if (block == "ht:tvwall")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+16+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:tvwallon", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.tv_wall", x, y, z, 1, 1);
                   c.scheduleScript(100, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:tvwall", meta), x, y, z);
                   });
          }
      } //tvwall
      if (block == "ht:phone")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+14+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:phoneon", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.phone_ring", x, y, z, 1, 1);
                   c.scheduleScript(30, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:phone", meta), x, y, z);
                   });
          }
      } //phone
      if (block == "ht:printeroff")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+12+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:printer", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.printer", x, y, z, 1, 1);
                   c.scheduleScript(20, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:printeroff", meta), x, y, z);
                   });
          }
      } //printeroff
      if (block == "ht:microwave")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:microwave_on", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.microwave", x, y, z, 1, 1);
                   c.scheduleScript(60, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:microwave", meta), x, y, z);
                   });
          }
      } //microwave
      if (block == "ht:washingmachine_off")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().setBlock(mappet.createBlockState("ht:washingmachine", meta), x, y, z);
               c.getWorld().playSound("mp.sounds:ht.interaction.washingmachine", x, y, z, 1, 1);
                   c.scheduleScript(60, function (context)
                   {
                        c.getWorld().setBlock(mappet.createBlockState("ht:washingmachine_off", meta), x, y, z);
                   });
          }
      } //ht:washingmachine_off
      if (block == "ht:convectionheater")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+5+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.convector"+Math.floor(mappet.random(1,4))+"", x, y, z, 0.2, 1);
          }
      } //ht:convectionheater
      if (block == "ht:trashcan")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+4+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.trashbin", x, y, z, 0.8, 1);
          }
      } //ht:trashcan
      if (block == "ht:cardboard1" || block == "ht:cardboard2" || block == "ht:cardboard3")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+4+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.cardboard"+Math.floor(mappet.random(1,4))+"", x, y, z, 0.8, 1);
          }
      } //ht:cardboards
      if (block == "ht:filecabinet" || block == "ht:poollocker")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.locker"+Math.floor(mappet.random(1,4))+"", x, y, z, 0.5, 1);
          }
      } //ht:filecabinet
      if (block == "ht:candleson")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r=6] sanity "+4+"") //ne zavisit ot radiusa
               c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 2);
               c.getWorld().setBlock(mappet.createBlockState("ht:candlesoff", meta), x, y, z);
          }
      } //ht:candleson
      if (block == "ht:barell1" || block == "ht:barell1r" || block == "ht:barell1l" || block == "ht:barell2")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+8+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.barrel"+Math.floor(mappet.random(1,3))+"", x, y, z, 0.4, 2);
          }
      } //ht:barells
      if (block == "ht:muspiano")
      {
          if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+10+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.piano"+Math.floor(mappet.random(1,4))+"", x, y, z, 0.8, 1);
          }
      } //ht:cardboards
      if (block == "ht:lamp_drone" || block == "ht:lampceiling" || block == "ht:lamp_wall2" || block == "ht:lamproom" || block == "ht:blamp1wall")
      {
          if (electric == false)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
               s.setupHUD("text_info");
               var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет нужного [cнавыка\",Name:\"label\"}")
               s.changeHUDMorph("text_info", 0, HUDmorph)
          }
          else if (d_cooldown > 0)
          {
               s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
               gStates.setNumber("d_cooldown", d_cooldown + 1);
          }
          else
          {
               cooldown()
               c.executeCommand("/mp state add @a[mpe=demon!=1,r="+d_soundRadius+"] sanity "+14+"")
               c.getWorld().playSound("mp.sounds:ht.interaction.light"+Math.floor(mappet.random(1,3))+"", x, y, z, 0.8, 1);
                 if (block == "ht:lamp_drone")
                 {
                    c.getWorld().setBlock(mappet.createBlockState("ht:lamp_drone_off", meta), x, y, z);
                 }
                 else if (block == "ht:lampceiling")
                 {
                    c.getWorld().setBlock(mappet.createBlockState("ht:lampceiling_off", meta), x, y, z);
                 }
                 else if (block == "ht:lamp_wall2")
                 {
                     c.getWorld().setBlock(mappet.createBlockState("ht:lamp_wall2_off", meta), x, y, z);
                 }
                 else if (block == "ht:lamproom")
                 {
                     c.getWorld().setBlock(mappet.createBlockState("ht:lamproom_off", meta), x, y, z);
                 }
                 else if (block == "ht:blamp1wall")
                 {
                     c.getWorld().setBlock(mappet.createBlockState("ht:blamp1walloff", meta), x, y, z);
                 }
                 
          }
      } //ht:lamps
      var d_puddleCount = gStates.getNumber("d_puddleCount");
      var d_falseCardCount = gStates.getNumber("d_falseCardCount");
      if ((y == 13 || y == 19 || y == 7) && d_falseCardCount > 0 && s.isSneaking())
      {
           c.getWorld().spawnNpc("item", "fakegamecard", x + 0.5, y + 1, z + 0.5);
           gStates.setNumber("d_falseCardCount", d_falseCardCount - 1);
           c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1.5);
      }
      else if ((y == 13 || y == 19 || y == 7) && d_puddleCount > 0 && !s.isSneaking())
      {
         var trackedEntities = c.getServer().getEntities("@e[mpid=puddle]");
         for each (var trackedEntity in trackedEntities)
         {
             if (trackedEntity.isEntityInRadius(s, 3))
             {
                 var puddleSpawnBlocked = 1;
                 s.playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
                 s.setupHUD("text_info");
                 var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Пятна [cслишком близко [fдруг к другу\",Name:\"label\"}")
                 s.changeHUDMorph("text_info", 0, HUDmorph)
             }
         }
         if (puddleSpawnBlocked != 1) //all ok
         {
              c.getWorld().spawnNpc("puddle", x + 0.5, y + 1, z + 0.5);
              gStates.setNumber("d_puddleCount", d_puddleCount - 1);
         }
      }
      
    function cooldown()
    {
        gStates.setNumber("d_cooldown_points", d_cooldown_points - 1);
        if (gStates.getNumber("d_cooldown_points") <= 0)
        {
            gStates.setNumber("d_cooldown", d_cooldown_start);
            gStates.setNumber("d_cooldown_points", d_cooldown_pointsStart);
            gStates.setString("d_trigger", "sound_cooldown")
        }

    }
      
    }//if hand
    
}