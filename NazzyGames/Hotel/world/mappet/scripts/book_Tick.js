function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var book_learning = states.getNumber("book_learning");
    var taskNumber = c.getServer().getStates().getNumber("taskNumber");
    
    s.setupHUD("HUD_book");
    var HUDmorph = mappet.createMorph("{Left:10,Right:"+book_learning+",Texture:\"b.a:1_HOTEL/bar_ui/ht_searchbar.png\",Name:\"blockbuster.image\"}")
    s.changeHUDMorph("HUD_book", 0, HUDmorph)
    
    if (s.isSprinting() || !s.isOnGround())
    {
       states.setNumber("book_learning", book_learning);
    }
    else
    {
        states.setNumber("book_learning", book_learning - 0.25);
        var pos = s.getPosition();
        s.playSound("minecraft:ui.button.click", pos.x, pos.y, pos.z, 0.01, 1);
    }
    
    if (states.getNumber("book_learning") <= 0)
    {
        states.setNumber("book_learning", 100);
        states.setNumber("hunger", 0);
        var skills = states.getString("skills");
        s.closeHUD("HUD_book");
        if (s.getMainItem().getItem().getId() === "ht:edbookchefopen")
        {
           //c.send("chef")
           //s.executeCommand("/clear @s ht:edbookchefopen");
           c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
           states.setString("skills", skills+"chef,")
           var tag = mappet.createCompound("{id:\"ht:edbookchef\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
           s.setMainItem(mappet.createItem(tag));
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Вы научились [aготовить\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
        }
        else if (s.getMainItem().getItem().getId() === "ht:edbookmasteropen")
        {
           //c.send("master") 
           //s.executeCommand("/clear @s ht:edbookmasteropen");
           c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
           states.setString("skills", skills+"master,")
           var tag = mappet.createCompound("{id:\"ht:edbookmaster\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
           s.setMainItem(mappet.createItem(tag));
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Вы научились пользоваться [aверстаком\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
        }
        else if (s.getMainItem().getItem().getId() === "ht:edbookhackopen")
        {
           //c.send("hack educates")
           //s.executeCommand("/clear @s ht:edbookhackopen");
           c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
           states.setString("skills", skills+"hacker,")
           var tag = mappet.createCompound("{id:\"ht:edbookhack\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
           s.setMainItem(mappet.createItem(tag));
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Вы научились [aвзлому\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
        }
        else if (s.getMainItem().getItem().getId() === "ht:demonbook4")
        {
           //s.executeCommand("/clear @s ht:demonbook4");
           c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.5, 1.0);
           states.setString("skills", skills+"demonbook,")
           var tag = mappet.createCompound("{id:\"ht:demonbook\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
           s.setMainItem(mappet.createItem(tag));
            s.playSound("mp.sounds:ht.events.bass1", pos.x, pos.y + 1, pos.z, 1, 1);
            s.playSound("mp.sounds:ht.events.camera_glitch", pos.x, pos.y + 1, pos.z, 0.5, 1.8);
            s.setupHUD("text_info");
            s.setupHUD("symbols");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Ты изучил [cслабости [fдемона\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
                 if (taskNumber == 9){
                     c.getServer().getStates().setString("g_trigger", "task_next"); //next task   
                 }
        }
    }
    
}