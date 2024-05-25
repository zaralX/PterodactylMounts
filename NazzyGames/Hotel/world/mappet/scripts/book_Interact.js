function main(c)
{
    // Code...
    var s = c.getSubject();
    var pos = s.getPosition();
    var item = c.getValue("item");
    var skills = s.getStates().getString("skills").split(",");
    
    var hacker = false;
    var master = false;
    var chef = false;
    var demonbook = false;
    
    for (var i = 0; i < skills.length; i++) 
    {
       if (skills[i] == "hacker") 
       {
         hacker = true;
       }
       if (skills[i] == "master") 
       {
         master = true;
       }
       if (skills[i] == "chef") 
       {
         chef = true;
       }
       if (skills[i] == "demonbook") 
       {
         demonbook = true;
       }
    }
    
    
    if (s.getMainItem().getItem().getId() === "ht:edbookhack")
    {
        if (hacker == false)
        {
          if (s.getStates().getNumber("hunger") == 1)
          {
            c.getWorld().playSound("mp.sounds:ht.interaction.book_open", pos.x, pos.y, pos.z, 0.5, 1.0);
            var tag = mappet.createCompound("{id:\"ht:edbookhackopen\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[{Script:\"book_Tick\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},StoppedHolding:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"},{Type:\"command\",Command:\"/mp state set @s book_learning 100\",Frequency:1}]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
            var book_item = mappet.createItemNBT(tag);
            s.setMainItem(book_item);
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Сначала нужно [cпоесть[f...\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
          }
        }
        else
        {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Этот навык [aуже изучен\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        }
    }
    else if (s.getMainItem().getItem().getId() === "ht:edbookmaster")
    {
        if (master == false)
        {
          if (s.getStates().getNumber("hunger") == 1)
          {
            c.getWorld().playSound("mp.sounds:ht.interaction.book_open", pos.x, pos.y, pos.z, 0.5, 1.0);
            var tag = mappet.createCompound("{id:\"ht:edbookmasteropen\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[{Script:\"book_Tick\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},StoppedHolding:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"},{Type:\"command\",Command:\"/mp state set @s book_learning 100\",Frequency:1}]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
            var book_item = mappet.createItemNBT(tag);
            s.setMainItem(book_item);
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Сначала нужно [cпоесть[f...\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
          }

        }
        else
        {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Этот навык [aуже изучен\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        }
    }
    else if (s.getMainItem().getItem().getId() === "ht:edbookchef")
    {
        if (chef == false)
        {
          if (s.getStates().getNumber("hunger") == 1 || s.getStates().getNumber("skillPoint_extra") == 1)
          {
            c.getWorld().playSound("mp.sounds:ht.interaction.book_open", pos.x, pos.y, pos.z, 0.5, 1.0);
            var tag = mappet.createCompound("{id:\"ht:edbookchefopen\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[{Script:\"book_Tick\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},StoppedHolding:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"},{Type:\"command\",Command:\"/mp state set @s book_learning 100\",Frequency:1}]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
            var book_item = mappet.createItemNBT(tag);
            s.setMainItem(book_item);
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Сначала нужно [cпоесть[f...\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
          }

        }
        else
        {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Этот навык [aуже изучен\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        }
    }
    else if (s.getMainItem().getItem().getId() === "ht:demonbook")
    {
        if (demonbook == false)
        {
          if (s.getStates().getNumber("hunger") == 1)
          {
            c.getWorld().playSound("mp.sounds:ht.interaction.book_open", pos.x, pos.y, pos.z, 0.5, 1.0);
            c.getWorld().playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y, pos.z, 0.5, 1.7);
            s.setupHUD("HUD_flickering");
            var tag = mappet.createCompound("{id:\"ht:demonbook4\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[{Script:\"book_Tick\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},StoppedHolding:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"},{Type:\"command\",Command:\"/mp state set @s book_learning 100\",Frequency:1}]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
            var book_item = mappet.createItemNBT(tag);
            s.setMainItem(book_item);
          }
          else
          {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Сначала нужно [cпоесть[f...\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
          }

        }
        else
        {
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Этот навык [aуже изучен\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
            s.getWorld().playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
        }
    }
    
    if (item.getItem().getId() === "ht:edbookhackopen")
    {
        s.executeCommand("/clear @s ht:edbookhackopen");
        c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
        s.getStates().setNumber("book_learning", 100);
        s.closeHUD("HUD_book");
        var tag = mappet.createCompound("{id:\"ht:edbookhack\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        s.giveItem(mappet.createItem(tag));
    }
    else if (item.getItem().getId() === "ht:edbookmasteropen")
    {
        s.executeCommand("/clear @s ht:edbookmasteropen");
        c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
        s.getStates().setNumber("book_learning", 100);
        s.closeHUD("HUD_book");
        var tag = mappet.createCompound("{id:\"ht:edbookmaster\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        s.giveItem(mappet.createItem(tag));
    }
    else if (item.getItem().getId() === "ht:edbookchefopen")
    {
        s.executeCommand("/clear @s ht:edbookchefopen");
        c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
        s.getStates().setNumber("book_learning", 100);
        s.closeHUD("HUD_book");
        var tag = mappet.createCompound("{id:\"ht:edbookchef\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        s.giveItem(mappet.createItem(tag));
    }
    else if (item.getItem().getId() === "ht:demonbook4")
    {
        s.executeCommand("/clear @s ht:demonbook4");
        c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
        s.getStates().setNumber("book_learning", 100);
        s.closeHUD("HUD_book");
        var tag = mappet.createCompound("{id:\"ht:demonbook\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        s.giveItem(mappet.createItem(tag));
    }
}