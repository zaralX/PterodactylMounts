function rotateVector(vector, angle)
{
    angle = -angle * (Math.PI / 180);

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var newX = vector.x * cos - vector.z * sin;
    var newZ = vector.x * sin + vector.z * cos;
    
    vector.x = newX;
    vector.z = newZ;
    
    return vector;
}

function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var gStates = c.getServer().getStates();
    var on = states.getNumber("on");
    var cooldown = states.getNumber("cooldown");
    var steps = 6; 
    var look = {x: 0, y: 0, z: 1};
    var pos = s.getPosition();
    var distance = 3;
    var length = Math.sqrt(look.x * look.x + look.z * look.z);
    var width = s.getWidth() * 1.1;
    var angle = 70;
    var offsetX = 0;
    var offsetY = 0;
    var offsetZ = 0;
    
    rotateVector(look, -s.getYawHead());

    if (length == 0)
    {
        offsetY = look.y >= 0 ? 0.5 : -s.getHeight();
    }
    else
    {
        offsetX = look.x / length * width; 
        offsetZ = look.z / length * width; 
    }

    for (var i = 0; i <= steps; i++)
    {
        var newLook = {x: look.x * distance, y: look.y * distance, z: look.z * distance};
        var x = pos.x + offsetX;
        var y = pos.y + 1.62 + offsetY; 
        var z = pos.z + offsetZ;
        
        var vec = rotateVector(newLook, -angle / 2 + (i / steps) * angle);
        var ray = c.getWorld().rayTrace(x, y, z, x + vec.x * distance, y + vec.y * distance, z + vec.z * distance);

      // Обработай ray
      if (ray.isEntity())
      {
         if (on == 1 && cooldown <= 0)
         {
             if (ray.getEntity().getStates().getNumber("demon") == 1 && gStates.getNumber("d_visible") == 0)
             {
                 //c.send("demon cooldown")
                 gStates.setNumber("d_cooldown", gStates.getNumber("d_cooldown") + 150);
                 gStates.setNumber("d_points", gStates.getNumber("d_points") - 1);
                 ray.getEntity().setupHUD("HUD_flickering");
                 c.getWorld().playSound("mp.sounds:ht.voicelines.demon.hunt_end1", pos.x, pos.y, pos.z, 0.2, 1.5);
             }
             states.setNumber("trigger_shot", 1)
             //c.send("shot");
         }
      //Обработай ray
      }
   }
   
   if (on == 1 && cooldown > 0)
   {
      states.setNumber("cooldown", cooldown - 1)
      c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 0.2, 2.0);
   }
   
   if (states.getNumber("trigger_shot") == 1)
   {
      states.setNumber("trigger_shot", 0)
      states.setNumber("cooldown", 10)
      var pos = s.getPosition();
      c.getWorld().playSound("mp.sounds:ht.interaction.tripod_flash", pos.x, pos.y, pos.z, 2.0, 1.0);
      c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", pos.x, pos.y, pos.z, 1, 0.6);
      
      //shot_morph
      var morph = mappet.createMorph("{Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:tripod\",Count:1b,Damage:0s}}},{R:[90.0f,0.0f,0.0f],S:[1.0f,1.75f,1.0f],T:[0.02f,-0.9375f,1.03125f],Limb:\"cube\",Morph:{Lighting:0b,Color:-65536,Texture:\"b.a:1_HOTEL/sprites/light.png\",Shaded:0b,Name:\"blockbuster.image\"}},{R:[90.0f,0.0f,90.0f],S:[1.0f,1.75f,1.0f],T:[0.02f,-0.9375f,1.03125f],Limb:\"cube\",Morph:{Lighting:0b,Color:-65536,Texture:\"b.a:1_HOTEL/sprites/light.png\",Shaded:0b,Name:\"blockbuster.image\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
      s.setMorph(morph);
      c.scheduleScript(5, function (context)
      {
         //default_morph
         var morph = mappet.createMorph("{Skin:\"b.a:empty/skins/texture.png\",BodyParts:[{R:[180.0f,180.0f,0.0f],T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:tripod\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
         s.setMorph(morph);
      });

   }

}