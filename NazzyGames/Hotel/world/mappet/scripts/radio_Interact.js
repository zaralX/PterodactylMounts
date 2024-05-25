function main(c)
{
    // Code...
    var s = c.getSubject();
    var pos = s.getPosition();
    
    if (s.getMainItem().getItem().getId() === "ht:radio")
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_button", pos.x, pos.y, pos.z, 0.3, 1.0);
        var tag = mappet.createCompound("{id:\"ht:radio_on\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[{Script:\"radio_Tick\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},StoppedHolding:{Blocks:[{Type:\"command\",Command:\"/mp state set ~ radio_tick 0\",Frequency:1},{Type:\"command\",Command:\"/stopsound @a ambient mp.sounds:ht.radio.radio1\",Frequency:1},{Type:\"command\",Command:\"/stopsound @a ambient mp.sounds:ht.radio.radio2\",Frequency:1},{Type:\"command\",Command:\"/stopsound @a ambient mp.sounds:ht.radio.radio3\",Frequency:1},{Type:\"command\",Command:\"/stopsound @a ambient mp.sounds:ht.radio.radio4\",Frequency:1}]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"radio_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        var item = mappet.createItemNBT(tag);
        s.setMainItem(item);
    }
    else if (s.getMainItem().getItem().getId() === "ht:radio_on")
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_button", pos.x, pos.y, pos.z, 0.3, 0.8);
        var tag = mappet.createCompound("{id:\"ht:radio\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"radio_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        var item = mappet.createItemNBT(tag);
        s.setMainItem(item);
        s.executeCommand("/stopsound @a ambient mp.sounds:ht.radio.radio1");
        s.executeCommand("/stopsound @a ambient mp.sounds:ht.radio.radio2");
        s.executeCommand("/stopsound @a ambient mp.sounds:ht.radio.radio3");
        s.executeCommand("/stopsound @a ambient mp.sounds:ht.radio.radio4");
        c.getServer().getStates().setNumber("radio_tick", 0);
    }
}