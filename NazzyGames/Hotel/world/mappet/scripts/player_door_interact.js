function main(c)
{
    // Code...
    var s = c.getSubject();
    var yaw = s.getYaw();
    var block = c.getValue("block");
    var meta = c.getValue("meta");
    var x = c.getValue("x");
    var y = c.getValue("y");
    var z = c.getValue("z");
    var hand = c.getValue("hand");
    var states = c.getServer().getStates();
    var ray = s.rayTrace(1.9);
    var demon = s.getStates().getNumber("demon");
    var keycard_state = states.getString("keycard_state");
    var taskNumber = states.getNumber("taskNumber");
    var keycard_needState;
    var item_need;
    var door_block;
    var door_facing;
    
            //doors properties and coords
            if (x == 14 && y == 21 && z == 20) //room_doors
            {
                keycard_needState = "100";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == 14 && y == 21 && z == 12)
            {
                keycard_needState = "101";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == 19 && y == 21 && z == 3)
            {
                keycard_needState = "102";
                door_facing = "{RotateY:-0.0f}";
            }
            else if (x == 19 && y == 21 && z == -3)
            {
                keycard_needState = "103";
                door_facing = "{RotateY:-180.0f}";
            }
            else if (x == 14 && y == 21 && z == -11)
            {
                keycard_needState = "104";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == 14 && y == 21 && z == -20)
            {
                keycard_needState = "105";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == 14 && y == 21 && z == -28)
            {
                keycard_needState = "106";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == -4 && y == 15 && z == -12)
            {
                keycard_needState = "staff";
                door_facing = "{RotateY:90.0f}";
            }
            else if (x == -7 && y == 15 && z == 2)
            {
                keycard_needState = "staff";
                door_facing = "{RotateY:-0.0f}";
            }
            else if (x == 19 && y == 15 && (z == -25 || z == -33)) //pool_doors
            {
                item_need = "ht:keypool";
                door_facing = "{RotateY:270.0f}";
            }
            else if (x == -4 && y == 9 && z == 19) //master_door
            {
                item_need = "ht:keybasement";
                door_facing = "{RotateY:180.0f}";
            }
            else if (x == 0 && y == 21 && (z == -14 || z == -31)) //lib_doors
            {
                item_need = "ht:keylibrary";
                door_facing = "{RotateY:-90.0f}";
            }
            if (x == 19 && y == 15 && z == 1) //kitchen door 1
            {
                keycard_needState = "kitchen";
                door_facing = "{RotateY:180.0f}";
                d_x = 20;
                d_y = 15;
                d_z = 0;
            }
            if (x == 13 && y == 15 && z == -13) //kitchen door 2
            {
                keycard_needState = "kitchen";
                door_facing = "{RotateY:90.0f}";
                d_x = 14;
                d_y = 15;
                d_z = -12;
            }
    
    
    if (hand == "main" && ray.isBlock() && demon != 1)
    {
        
        if (block == "ht:roomdoor" && s.getMainItem().getItem().getId() === "ht:keycard") //roomdoor
        {
            s.swingArm();
            c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1.2);
            
            if (keycard_needState == keycard_state)
            {
                c.scheduleScript(1, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", meta), x, y, z);
                });
                c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", meta), x, y - 1, z);
                c.executeCommand("/blockdata "+x+" "+(y - 1)+" "+z+" "+door_facing+"");
                c.executeCommand("/modelblock morph "+x+" "+(y - 1)+" "+z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:roomdoorgreen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:roomdoorgreen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 1.2);
                c.getWorld().playSound("mp.sounds:ht.interaction.door_open", x, y, z, 1, 1);
                c.scheduleScript(19, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:roomdooropen", meta), x, y, z);
                });
                c.scheduleScript(20, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y - 1, z);
                     c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 2);
                });
                
                //stats
                var doorsOpened = states.getNumber("doorsOpened");
                states.setNumber("doorsOpened", doorsOpened + 1);
            }
            else
            {
                c.getWorld().setBlock(mappet.createBlockState("ht:roomdoorred", meta), x, y, z);
                c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 0.8);
                c.scheduleScript(10, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:roomdoor", meta), x, y, z);
                     c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 2);
                });
            }
            
        }//if roomdoor
        if (block == "ht:techdoor")
        {
            if (item_need == s.getMainItem().getItem().getId())
            {
                c.scheduleScript(1, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", meta), x, y, z);
                });
                s.setMainItem(mappet.createItem("minecraft:air")) //remove key
                c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", meta), x, y - 1, z);
                c.executeCommand("/blockdata "+x+" "+(y - 1)+" "+z+" "+door_facing+"");
                c.executeCommand("/modelblock morph "+x+" "+(y - 1)+" "+z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:techdoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:techdoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                c.getWorld().playSound("mp.sounds:ht.interaction.door_open", x, y, z, 1, 1);
                c.scheduleScript(19, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:techdooropen", meta), x, y, z);
                });
                c.scheduleScript(20, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y - 1, z);
                     if (taskNumber == 1) {
                     states.setString("g_trigger", "task_next"); //next task
                     }
                });
                
            }
            else if (s.getMainItem().getItem().getId() == "ht:lockpick")
            {
                hack();
            }
            
        }//if pooldoor
        if (block == "ht:officedoor")
        {
            if (item_need == s.getMainItem().getItem().getId())
            {
                c.scheduleScript(1, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", meta), x, y, z);
                });
                s.setMainItem(mappet.createItem("minecraft:air")) //remove key
                c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", meta), x, y - 1, z);
                c.executeCommand("/blockdata "+x+" "+(y - 1)+" "+z+" "+door_facing+"");
                c.executeCommand("/modelblock morph "+x+" "+(y - 1)+" "+z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:officedoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:officedoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                c.getWorld().playSound("mp.sounds:ht.interaction.door_open", x, y, z, 1, 1);
                c.scheduleScript(19, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:officedooropen", meta), x, y, z);
                });
                c.scheduleScript(20, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y - 1, z);
                });
                
            }
            else if (s.getMainItem().getItem().getId() == "ht:lockpick")
            {
                hack()
            }
            
        }//if officedoor
        if (block == "ht:libdoor")
        {
            if (item_need == s.getMainItem().getItem().getId())
            {
                c.scheduleScript(1, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", meta), x, y, z);
                });
                s.setMainItem(mappet.createItem("minecraft:air")) //remove key
                c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", meta), x, y - 1, z);
                c.executeCommand("/blockdata "+x+" "+(y - 1)+" "+z+" "+door_facing+"");
                c.executeCommand("/modelblock morph "+x+" "+(y - 1)+" "+z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:libdoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-1.91f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.12f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:libdoor\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                c.getWorld().playSound("mp.sounds:ht.interaction.door_open", x, y, z, 1, 1);
                c.scheduleScript(19, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:libdooropen", meta), x, y, z);
                });
                c.scheduleScript(20, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), x, y - 1, z);
                     if (taskNumber == 4) {
                     states.setString("g_trigger", "task_next"); //next task
                     }
                });
                
            }
            else if (s.getMainItem().getItem().getId() == "ht:lockpick")
            {
                hack()
            }
            
        }//if officedoor
        if (block == "ht:doorlockkitchen_on" && s.getMainItem().getItem().getId() === "ht:keycard") //roomdoor
        {
            s.swingArm();
            c.getWorld().playSound("mp.sounds:ht.misc.gamecard", x, y, z, 0.5, 1.2);
            
               var doorMeta = c.getWorld().getBlock(d_x, d_y, d_z).getMeta();
            
            if (keycard_needState == keycard_state)
            {
                c.scheduleScript(1, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:barrier", doorMeta), d_x, d_y, d_z);
                });
                c.getWorld().setBlock(mappet.createBlockState("ht:doorlockkitchen", meta), x, y, z);
                c.getWorld().setBlock(mappet.createBlockState("blockbuster:model", doorMeta), d_x, d_y - 1, d_z);
                c.executeCommand("/blockdata "+d_x+" "+(d_y - 1)+" "+d_z+" "+door_facing+"");
                c.executeCommand("/modelblock morph "+d_x+" "+(d_y - 1)+" "+d_z+" {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.0f,0.0f,-3.91f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.245f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:doorkitchen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[8.09375f,0.0f,-4.035f],R:[0.0f,90.0f,0.0f]}}},BodyParts:[{T:[-0.5f,-1.5f,-0.245f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:doorkitchen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 1.2);
                c.getWorld().playSound("mp.sounds:ht.interaction.door_open", d_x, d_y, d_z, 1, 1);
                c.scheduleScript(19, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:doorkitchen_open", doorMeta), d_x, d_y, d_z);
                });
                c.scheduleScript(20, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("minecraft:air", 0), d_x, d_y - 1, d_z);
                     c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 2);
                });
                
            }
            else
            {
                c.getWorld().setBlock(mappet.createBlockState("ht:doorlockkitchen", meta), x, y, z);
                c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 0.8);
                c.scheduleScript(10, function (context)
                {
                     c.getWorld().setBlock(mappet.createBlockState("ht:doorlockkitchen_on", meta), x, y, z);
                     c.getWorld().playSound("mp.sounds:ht.interaction.computer_beep2", x, y, z, 1, 2);
                });
            }
        }
        
    }//if main
    
    function hack()
    {
    var skills = s.getStates().getString("skills").split(",");
    var hacker = false;
    
    for (var i = 0; i < skills.length; i++) //skills
    {
         if (skills[i] == "hacker") 
         {
           hacker = true;
         }
    }
    
        if (hacker == true)
        {
            s.executeScript("UI_hack")
        }
        else
        {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Нет навыка [cвзлома\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", x, y, z, 1, 2);
        }
    }
    
}//func main