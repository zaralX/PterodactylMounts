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
    var s = c.getSubject();
    var steps = 10; 
    var look = {x: 0, y: 0, z: 1};
    var pos = s.getPosition();
    var distance = 6;
    var length = Math.sqrt(look.x * look.x + look.z * look.z);
    var width = s.getWidth() * 1.1;
    var angle = 80;
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
          if (ray.getEntity().getStates().getNumber("demon") == 1 && s.getStates().getNumber("scare_cooldown") <= 0 && c.getServer().getStates().getNumber("d_visible") == 1)
          {
              s.getStates().setNumber("scare_cooldown", 400);
                 c.scheduleScript(5, function (context)
                 {
                      s.executeCommand("/playsound mp.sounds:ht.jumpscare.scare"+Math.floor(mappet.random(1,4))+" ambient @s ~ ~8000 ~ 1000")
                      s.executeCommand("/playsound mp.sounds:ht.events.camera_glitch ambient @s ~ ~1000 ~ 1000 0.8");
                      s.setupHUD("HUD_flickering");
                 }); 
              
             var d_huntTime = c.getServer().getStates().getNumber("d_huntTime");
             if (d_huntTime <= 0)
             {
                 s.getStates().setNumber("sanity", s.getStates().getNumber("sanity") + 40);
                 c.scheduleScript(8, function (context)
                 {
                     c.getServer().getStates().setString("d_trigger", "invisible");
                 }); 
             }
             else
             {
                 s.getStates().setNumber("sanity", 100);
                 s.getStates().setNumber("music_cooldown", 0);
             }
          }
          
      }
      //Обработай ray
    }
}