function main(c)
{
    // Code...
    var s = c.getSubject();
    var coordinates = s.getStates().getString("lastBlockClick");
    
var parts = coordinates.split(" ");
var x = parts[0];
var y = parts[1];
var z = parts[2];

var block = c.getWorld().getBlock(x, y, z);
var blockID = block.getBlockId();
var meta = block.getMeta();
var states = c.getServer().getStates();
    
            var canHack = true;
            //coords
            if (coordinates == "8 15 -1") //washing room
            {
                door_facing = "{RotateY:-90.0f}";
            }
            else if (coordinates == "8 15 -9") //staff living room
            {
                door_facing = "{RotateY:-90.0f}";
            }
            else if (coordinates == "19 15 -25" || coordinates == "19 15 -33") //pool main doors
            {
                door_facing = "{RotateY:-90.0f}";
            }
            else if (coordinates == "-14 15 -26" || coordinates == "-14 15 -33") //pool backdoor + pool storage
            {
                door_facing = "{RotateY:-90.0f}";
            }
            else if (coordinates == "-16 15 -21") //pool backdoor
            {
                door_facing = "{RotateY:180.0f}";
            }
            else if (coordinates == "-12 15 -15") //storage gym
            {
                door_facing = "{RotateY:-0.0f}";
            }
            else if (coordinates == "-3 15 12") //staff reception
            {
                door_facing = "{RotateY:180.0f}";
            }
            else if (coordinates == "0 21 -14" || coordinates == "0 21 -31") //library doors
            {
                door_facing = "{RotateY:270.0f}";
            }
            else if (coordinates == "8 21 -7") //chess club 1
            {
                door_facing = "{RotateY:-90.0f}";
            }
            else if (coordinates == "4 21 -11") //chess club 2
            {
                door_facing = "{RotateY:-0.0f}";
            }
            else if (coordinates == "8 21 -24") //music club
            {
                door_facing = "{RotateY:-270.0f}";
            }
            else if (coordinates == "-4 21 3") //bar
            {
                door_facing = "{RotateY:-0.0f}";
            }
            else if (coordinates == "-3 21 -3") //bar storage
            {
                door_facing = "{RotateY:180.0f}";
            }
            else if (coordinates == "4 21 19") //kids room
            {
                door_facing = "{RotateY:-0.0f}";
            }
            else if (coordinates == "5 9 -9" || coordinates == "22 9 8") //staff rooms basement
            {
                door_facing = "{RotateY:-180.0f}";
            }
            else if (coordinates == "15 9 14") //storage basement
            {
                door_facing = "{RotateY:-0.0f}";
            }
            else
            {
              canHack = false;
              s.setupHUD("text_info");
              var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ошибка [cвзлома\",Name:\"label\"}")
              s.changeHUDMorph("text_info", 0, HUDmorph)
              s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
            }
                 
    if (canHack == true)
    {
        c.executeCommand("/clear @s ht:lockpick 0 1"); //remove 1 lockpick
        c.scheduleScript(1, function (context)
        {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", meta), x, y, z);
         });
        c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", meta), x, y - 1, z);
        c.executeCommand("/blockdata "+x+" "+(y - 1)+" "+z+" "+door_facing+"");
        c.executeCommand("/modelblock morph "+x+" "+(y - 1)+" "+z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+blockID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+blockID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.getWorld().playSound("mp.sounds:ht.interaction.door_open", x, y, z, 1, 1);
        c.scheduleScript(19, function (context)
        {
             c.getWorld().setBlock(mappet.createBlockState(""+blockID+"open", meta), x, y, z);
        });
        c.scheduleScript(20, function (context)
        {
             c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y - 1, z);
         }); 
         
         //stats
                var doorsOpened = states.getNumber("doorsOpened");
                states.setNumber("doorsOpened", doorsOpened + 1);
    }
    
         
}