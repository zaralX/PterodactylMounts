function main(c)
{
    // Code...
    var item = c.getSubject();
    var pos = item.getPosition();
    var id = item.getStates().getString("item");
    var player = c.getObject();
    
    if (player.getMainItem().getItem().getId() === "minecraft:air" && player.getStates().getNumber("demon") != 1 && player.getStates().getNumber("death") == 0)
    {
        item.remove();
        player.swingArm();
        var tag = mappet.createCompound(id);
        var item = mappet.createItemNBT(tag);
        player.setMainItem(item);
        
        if (id == "coin")
        {
            player.giveItem(mappet.createItem("ht:coin", 1));
            c.executeCommand("/playsound mp.sounds:ht.interaction.coin_pickup block @a ~ ~ ~ 0.5 1.1");
        }
        if (id == "{id:\"ht:tripod\",Count:1b,Damage:0s}")
        {
            c.executeCommand("/playsound mp.sounds:ht.interaction.tripod_pickup block @a ~ ~ ~ 0.5 1");
        }
        if (id == "{id:\"ht:lighter\",Count:1b,Damage:0s}")
        {
            c.executeCommand("/playsound mp.sounds:ht.misc.zippo_pickup block @a ~ ~ ~ 0.5 1");
        }
        if (id == "{id:\"ht:gamecard\",Count:1b,Damage:0s}")
        {
            c.executeCommand("/playsound mp.sounds:ht.misc.gamecard block @a ~ ~ ~ 0.5 1.5");
        }
        if (id == "fakegamecard")
        {
            var sanity = player.getStates().getNumber("sanity");
            player.getStates().setNumber("sanity", sanity + 30);
            c.getWorld().playSound("mp.sounds:ht.misc.portal_open", pos.x, pos.y, pos.z, 0.5, 2);
            c.getWorld().playSound("mp.sounds:ht.voicelines.demon.hunt_end1", pos.x, pos.y, pos.z, 0.5, 2);
                  
            var morph = mappet.createMorph("{Scheme:\"hotel_slash\",Vars:{variable.high:\"0.2\",variable.size:\"0.05\",variable.low:\"0\"},Name:\"snowstorm\"}");
            c.getServer().getWorld(0).displayMorph(morph, 1, pos.x, pos.y, pos.z);
        }
    }
    
}