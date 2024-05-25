function main(c)
{
    // Code...
    var ui = mappet.createUI(c, "handler").background().closable(false);
    var s = c.getSubject();
    var states = s.getStates()
    var itemID = states.getString("item_find");
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.2).wh(1000, 1000).anchor(0.5);
    backdrop.rect(0, 0, 1000, 1000, 0xff000000);
    
    var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[-100.0f,0.0f,0.0f]}}},BodyParts:[{R:[180.0f,0.0f,180.0f],T:[0.0f,0.5f,-0.0f],Limb:\"cube\",Morph:{Lighting:0b,Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Animates:1b,Duration:200},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{R:[-100.0f,360.0f,0.0f]}}},BodyParts:[{R:[180.0f,0.0f,180.0f],T:[0.0f,0.5f,-0.0f],Limb:\"cube\",Morph:{Lighting:0b,Name:\"item\",Stack:{id:\""+itemID+"\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:200.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
    var morph_background = ui.morph(morph);
    morph_background.position(0.62, -0.4, 0).rotation(0, 0).distance(2).fov(70);
    morph_background.enabled(false).wh(1280, 720);
    
    var item_title = "";
    var item_desc = "";
    if (itemID == "ht:edbookchef")
    {
        item_title = "[eКулинарная книга"
        item_desc = "Можно изучить для приготовления еды."
    }
    else if (itemID == "ht:edbookmaster")
    {
        item_title = "[eКнига \"Как пользоваться верстаком\""
        item_desc = "Можно изучить для создания предметов."
    }
    else if (itemID == "ht:edbookhack")
    {
        item_title = "[eРуководство по взлому"
        item_desc = "Можно изучить для взлома замков."
    }
    
    var text_title = ui.label(""+item_title+"").id("text_title");
    text_title.rx(0.5).ry(0.64).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var text_description = ui.label(""+item_desc+"").id("text_description");
    text_description.rx(0.5).ry(0.66).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var blackscreen = mappet.createMorph("{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:8},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:8.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
    var morph_blackscreen = ui.morph(blackscreen);
    morph_blackscreen.position(0.62, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_blackscreen.enabled(false).wh(1280, 720);
    
    var click = ui.click().id("click");
    click.rxy(0.5, 0.5).wh(300, 200).anchor(0.5);
    
    s.openUI(ui);
    var pos = s.getPosition();
    s.playSound("mp.sounds:ht.interaction.item_found", pos.x, pos.y, pos.z, 0.3, 1.3);
}

function handler(c)
{
    var uiContext = c.getSubject().getUIContext();
    var data = uiContext.getData();
    var s = c.getSubject();
    var itemID = s.getStates().getString("item_find");

    if (uiContext.getLast() === "click")
    {
        s.closeUI();
        var tag = mappet.createCompound("{id:\""+itemID+"\",Count:1b,tag:{display:{Lore:[]},ScriptedItem:{OnUseTick:{Blocks:[]},Pickup:{Blocks:[]},InteractWithEntity:{Blocks:[]},AttackEntity:{Blocks:[]},OnHolderTick:{Blocks:[]},StoppedHolding:{Blocks:[]},BreakBlock:{Blocks:[]},UseStart:{Blocks:[]},UseStop:{Blocks:[]},HitBlock:{Blocks:[]},PickedUp:0b,StartedHolding:{Blocks:[]},InteractWithAir:{Blocks:[{Script:\"book_Interact\",Function:\"\",Type:\"script\",CustomData:\"\",Frequency:1,Inline:0b,Code:\"\"}]},FinishedUsing:{Blocks:[]},InteractWithBlock:{Blocks:[]},FirstPickup:{Blocks:[]},Toss:{Blocks:[]},PlaceBlock:{Blocks:[]}}},Damage:0s}");
        s.giveItem(mappet.createItem(tag));
        s.setupHUD("HUD_blackscreen_out");
        s.closeHUD("HUD_blackscreen");
        s.swingArm();
        s.getStates().setString("item_find", "");
        
        var pos = s.getPosition();
        c.getWorld().playSound("mp.sounds:ht.interaction.book_close", pos.x, pos.y, pos.z, 0.3, 1);
        
        
    }
    
    
}