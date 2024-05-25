function main(c)
{
    // Code...
    var s = c.getSubject();
    var o = c.object;
    var pos = s.getPosition();
    var opos = o.getPosition();
    var yaw = s.getYaw();
    var hand = c.getValue("hand");
    var states = c.getServer().getStates()
    var ray = s.rayTrace(1.9);
    var demon = s.getStates().getNumber("demon");
    var d_huntTime = states.getNumber("d_huntTime");
    var taskNumber = states.getNumber("taskNumber");
    var requestFromPlayer = s.getStates().getString("requestFromPlayer");
    var book_learning = s.getStates().getNumber("book_learning");
    var itemInHands = s.getMainItem().getItem().getId();
    var item = s.getMainItem()
    
    if (hand == "main" && ray.isEntity() && demon != 1 && s.getStates().getNumber("death") != 1)
    {
          if (o.getStates().getNumber("death") == 0 && o.isPlayer() && o.getStates().getNumber("demon") == 0)
          {
              if (itemInHands != "minecraft:air" && book_learning >= 100)
              {
                  o.getStates().setString("requestFromPlayer", s.getName());
                  o.setupHUD("text_info");
                  var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"[a"+s.getName()+" [fпередаёт [e"+s.getMainItem().getDisplayName()+"\",Name:\"label\"}")
                  o.changeHUDMorph("text_info", 0, HUDmorph)
                  o.playSound("mp.sounds:ht.misc.zippo_light", opos.x, opos.y, opos.z, 1, 2);
                  s.setupHUD("text_info");
                  var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"[fПередача [e"+s.getMainItem().getDisplayName()+"\",Name:\"label\"}")
                  s.changeHUDMorph("text_info", 0, HUDmorph)
                  s.playSound("mp.sounds:ht.misc.zippo_light", opos.x, opos.y, opos.z, 1, 2);
                  
                  c.scheduleScript(40, function (context)
{
                    o.getStates().setString("requestFromPlayer", null);
                  });
              }
              else if (itemInHands == "minecraft:air")
              {
                  if (requestFromPlayer == o.getName())
                  {
                      o.getStates().setString("requestFromPlayer", null);
                      s.setMainItem(o.getMainItem());
                      o.setMainItem(null);
                  }
              }
          }
          if (o.getNpcId() == "puddle")
          {
              if (itemInHands == "minecraft:air")
              {
                  s.setupHUD("text_info");
                  var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нужен [cреагент\",Name:\"label\"}")
                  s.changeHUDMorph("text_info", 0, HUDmorph)
                  s.playSound("mp.sounds:ht.misc.zippo_light", opos.x, opos.y, opos.z, 1, 2);
              }
              else if (itemInHands == "ht:reagent")
              {
                  item.setCount(item.getCount() - 1);
                  s.swingArm()
                  c.getWorld().playSound("mp.sounds:ht.interaction.reagent_pickup", pos.x, pos.y, pos.z, 0.5, 1);
                  c.getWorld().playSound("mp.sounds:ht.misc.frying_start", opos.x, opos.y, opos.z, 0.3, 1.5);
                  c.getWorld().playSound("mp.sounds:ht.misc.portal_open", opos.x, opos.y, opos.z, 0.3, 2);
                  
                  var morph = mappet.createMorph("{Scheme:\"hotel_slash\",Vars:{variable.high:\"0.1\",variable.size:\"0.1\",variable.low:\"0\"},Name:\"snowstorm\"}");
                  c.getServer().getWorld(0).displayMorph(morph, 1, opos.x, opos.y, opos.z);
                  
                  
                  morph = mappet.createMorph("{Loop:1,Hitbox:{Eye:0.9f,Sneak:0.2f,Enabled:1b,Height:0.2f,Width:3.0f},List:[{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:0.2f,Enabled:1b,Height:0.2f,Width:2.5f},Pose:{P:[0.0f,0.05f,0.0f],R:[-90.0f,45.0f,0.0f],S:[3.0f,3.0f,1.0f]},Animation:{Interp:21,Animates:1b,Duration:8},Texture:\"b.a:1_HOTEL/sprites/corrosion.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Hitbox:{Eye:0.9f,Sneak:0.2f,Enabled:1b,Height:0.2f,Width:2.5f},Left:24,Top:24,Pose:{P:[0.0f,0.05f,0.0f],R:[-90.0f,45.0f,0.0f],S:[3.02f,3.0f,1.0f]},Right:24,Bottom:24,Animation:{Interp:21,Animates:1b,Duration:8},Texture:\"b.a:1_HOTEL/sprites/corrosion.png\",Name:\"blockbuster.image\"},Duration:8.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
                    o.setMorph(morph)
                    c.scheduleScript(8, function (context)
                    {
                         o.remove()
                    });
                  
              }
              
          }
       
    }

}