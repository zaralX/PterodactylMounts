function main(c)
{
    // Code...
    c.cancel();
    var s = c.getSubject();
    var item = s.getMainItem();
    var itemID = item.getItem().getId();
    var pitch = s.getPitch();
    var yaw = s.getYaw();
    var look = s.getLook();
    var pos = s.getPosition();
  
if (s.getStates().getNumber("death") == 0)
{  
    if (itemID == "minecraft:air" || itemID == "ht:edbookhackopen" || itemID == "ht:edbookmasteropen" || itemID == "ht:edbookchefopen" || itemID == "ht:demonbook4")
    {
       //
    }
    else
    {
       var itemNBT = item.serialize().toString();
       item.setCount(item.getCount() - item.getCount());
       
       if (itemID == "ht:tripod")
       {
           c.getWorld().spawnNpc("item", "tripod", pos.x, pos.y, pos.z, yaw, 0, 0);
       }
       else
       {
          c.executeCommand("/mp npc summon item default ~ ~1 ~");
       }
       
       var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       //morphs
       if (itemID == "ht:radio" || itemID == "ht:radio_on")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{T:[0.0f,-0.375f,0.375f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:edbookhack" || itemID == "ht:edbookmaster" || itemID == "ht:edbookchef" || itemID == "ht:demonbook")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{R:[90.0f,0.0f,0.0f],T:[0.0f,0.0f,0.46875f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:keybasement" || itemID == "ht:keylibrary" || itemID == "ht:keypool")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{R:[90.0f,0.0f,0.0f],T:[0.0f,0.25f,0.46875f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:lockpick" || itemID == "ht:metalmat" || itemID == "ht:pliers" || itemID == "ht:egg" || itemID == "ht:gamecard" || itemID == "ht:keycard" || itemID == "ht:lighter" || itemID == "ht:katana" || itemID == "ht:pills" || itemID == "ht:coin")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{R:[90.0f,0.0f,0.0f],T:[0.0f,0.0625f,0.46875f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:demonbook0" || itemID == "ht:demonbook1" || itemID == "ht:demonbook2" || itemID == "ht:demonbook3")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{R:[90.0f,0.0f,0.0f],T:[0.0f,0.0f,0.46875f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:demonbook\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:reagent" || itemID == "ht:jar" || itemID == "ht:jarpotion")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,0.53125f,0.0f],R:[90.00001f,-1.0E-6f,7.0E-6f]}}},BodyParts:[{R:[90.0f,0.0f,0.0f],T:[0.0f,0.0625f,0.46875f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       if (itemID == "ht:capacitor" || itemID == "ht:capacitor_on")
       {
          var morphItem = mappet.createMorph("{Hitbox:{Eye:0.9f,Sneak:1.65f,Enabled:1b,Height:0.1f},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-9.048438E-7f,7.9375f,0.0f]}}},BodyParts:[{Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"}");
       }
       //morphs end
       
       var npc_item = c.getServer().getEntities("@e[mpe=item==\"diamond_hoe\",mpid=item]");
       for (var i in npc_item)
       {
           npc_item[i].getStates().setString("item", itemNBT)
           npc_item[i].setRotations(pitch, yaw, yaw);
            if (itemID != "ht:tripod")
            {
               npc_item[i].setMorph(morphItem);
            }
           
           if (s.getGameMode() == 2)
           {
             npc_item[i].setMotion(look.x * 0.2, look.y * 0.2, look.z * 0.2);
           }
           else
           {
             npc_item[i].setMotion(look.x * mappet.random(0.05, 0.15), look.y * 0.1, look.z * mappet.random(0.05, 0.15));
           }
       }
       
    }
  }
}