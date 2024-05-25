function main(c)
{
var players = c.getServer().getAllPlayers();
for (var i in players)
{
    var player = players[i];
    players[i].setFallDistance(0)
    
    if (player.getGameMode() == 1 && player.getStates().getNumber("gmUnlock") == 0)
    {
        player.setGameMode(2);
        player.executeScript("unlck");
    }
    
    if (player.getStates().getNumber("demon") != 1 && player.getStates().getNumber("death") != 1)
    {
       
       var motion = player.getMotion();
       if (motion.y > 0 && player.getGameMode() == 2)
       {
         player.setMotion(0, motion.y - 1, 0);
       }
       
       var sanity = player.getStates().getNumber("sanity")
       if (sanity > 0)
       {
           player.getStates().setNumber("sanity", sanity - 0.1)
           //player.sendActionBar(sanity);
       }
       if (sanity > 0 && player.getStates().getNumber("pills") > 0)
       {
           player.getStates().setNumber("sanity", 0)
       }
       if (player.getStates().getNumber("pills") > 0) //pills
       {
           player.getStates().setNumber("pills", player.getStates().getNumber("pills") - 1)
           //player.sendActionBar(player.getStates().getNumber("pills"));
           if (player.getStates().getNumber("pills") == 0)
           {
               player.setupHUD("HUD_blackscreen_out");
               var pos = player.getPosition();
               player.playSound("mp.sounds:ht.events.bass3", pos.x, pos.y, pos.z, 1, 1);
           }
       }
       
       if (sanity > 100)
       {
           player.getStates().setNumber("sanity", 100)
       }
       else if (sanity < 0)
       {
           player.getStates().setNumber("sanity", 0)
       }
       
       
       
       var scare_cooldown = player.getStates().getNumber("scare_cooldown")
       if (scare_cooldown > 0)
       {
           player.getStates().setNumber("scare_cooldown", scare_cooldown - 1)
       }
       else if (scare_cooldown <= 0 && c.getServer().getStates().getNumber("playersCanScare") == 1)
       {
           player.executeScript("player_RaycastScare")
       }
       
       var hunger = player.getStates().getNumber("hunger")
       if ((hunger == 1 || player.getStates().getNumber("soda") == 1) && player.getHunger() <= 6)
       {
          player.setHunger(20);
       }
       
       //player Sprint
       if (player.isSprinting() && player.getStates().getNumber("isSprinting") == 0)
       {
           player.getStates().setNumber("isSprinting", 1)
           player.applyPotion(mappet.getPotion("speed"), 200, 0, false);
       }
       else if (player.isSprinting() == false && player.getStates().getNumber("isSprinting") == 1)
       {
           player.getStates().setNumber("isSprinting", 0)
           player.applyPotion(mappet.getPotion("speed"), 0, 2, false); //reset speed
       }
       
       //player.sendActionBar(player.getHunger());
       
       var inDimension = player.getStates().getNumber("inDimension")
       var wither = player.getStates().getNumber("wither")
       if (inDimension == 1 && wither > 0)
       {
           player.getStates().setNumber("wither", wither - 1)
           //player.sendActionBar(Math.floor(wither / 20));
       }
       if (inDimension == 1 && wither == 200)
       {
          player.closeHUD("HUD_noise"); //reset noise from bug
          player.setupHUD("HUD_redscreen");
          player.setupHUD("HUD_noise");
       }
       if (inDimension == 1 && wither == 0)
       {
           player.getStates().setNumber("wither", -1)
           player.closeHUD("HUD_redscreen");
           player.executeScript("player_death");
       }
       
       player.executeScript("player_soundsTick");
       
       player.executeScript("player_RaycastSymbols");
       
       player.executeScript("player_RaycastInfo"); //below because of raycast bug
       
       
    }//if (demon != 1)

}//for (var i in players)

}//function main(c)