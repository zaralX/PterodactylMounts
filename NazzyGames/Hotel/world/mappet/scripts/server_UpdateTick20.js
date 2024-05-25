function main(c)
{
    // Code...
    var states = c.getServer().getStates();
    var stage = states.getNumber("stage");
    var taskNumber = states.getNumber("taskNumber");
    
//global triggers
    if (states.getString("g_trigger") == "stage_next")
    {
        states.setString("g_trigger", "none");
        
        states.setNumber("stage", stage + 1);
        c.getServer().executeScript("server_Stages");
        c.executeCommand("/mp script exec @a[mpe=demon==1] UI_demon_stages");
    }
    
    if (states.getString("g_trigger") == "task_next")
    {
        states.setString("g_trigger", "none");
        
        states.setNumber("taskNumber", taskNumber + 1);
        c.getServer().executeScript("server_Tasks");
        c.executeCommand("/mp script exec @a[mpe=demon!=1] HUD_task");
        c.executeCommand("/playsound mp.sounds:ht.interaction.item_found ambient @a[mpe=demon!=1] ~ ~100 ~ 500 2");
    }
    
    
//ticks
    if (states.getNumber("pool_portal") > 0)
    {
        c.executeCommand("/playsound mp.sounds:ht.misc.portal_loop ambient @a -7 11 -31");
        var pool_portal = states.getNumber("pool_portal");
        states.setNumber("pool_portal", pool_portal - 1);
        
        var morph = mappet.createMorph("{Scheme:\"hotelblackspot_particle\",Name:\"snowstorm\"}");
        c.getServer().getWorld(0).displayMorph(morph, 20, -6.5, 12, -30.5);
        var morph = mappet.createMorph("{Scheme:\"hotel_portalDust\",Name:\"snowstorm\"}");
        c.getServer().getWorld(0).displayMorph(morph, 20, -6.5, 12, -30.5);
        
        if (taskNumber == 9 && (states.getNumber("pool_portal") > 2 && states.getNumber("pool_portal") < 6))
        {
           c.executeCommand("/mp hud setup @a[x=-7,y=11,z=-31,r=11] HUD_flickering");
           c.executeCommand("/playsound mp.sounds:ht.events.camera_glitch ambient @a -7 13 -31 0.3 2");
        }
    }
    else if (states.getNumber("pool_portal") == 0)
    {
        c.executeCommand("/modelblock morph -7 16 -31 {Skin:\"b.a:empty/skins/texture.png\",Settings:{Hands:1b},Name:\"blockbuster.empty\"}")
        c.executeCommand("/modelblock morph -7 17 -31 {Pose:{R:[90.0f,0.0f,0.0f],S:[2.0f,2.0f,2.0f]},Texture:\"b.a:1_HOTEL/sprites/blackspot.png\",Name:\"blockbuster.image\"}")
        c.executeCommand("/setblock -7 11 -31 chiselsandbits:chiseled_rock 1")
        c.executeCommand("/blockdata -7 11 -31 {b:1279,s:62,nc:0b,x:-7,X:[B;120B,-38B,99B,96B,98B,-8B,-49B,41B,-16B,-127B,-7B,63B,26B,96B,64B,3B,-93B,-14B,-61B,75B,30B,0B,-104B,-99B,1B,29B],y:11,z:-31,lv:0,id:\"minecraft:mod.chiselsandbits.tileentitychiseled\"}")
        states.setNumber("pool_portal", -1);
        c.executeCommand("/mp hud setup @a[x=-7,y=11,z=-31,r=11] HUD_flickering");
        c.executeCommand("/playsound mp.sounds:ht.misc.portal_jump ambient @a[mpe=poolTeleport==0] -7 11 -31 0.5 1.5");
        
    }
    
    if (states.getNumber("oven_time") > 0) //OVEN START
    {
        var oven_time = states.getNumber("oven_time");
        var oven_sound = states.getNumber("oven_sound");
        states.setNumber("oven_time", oven_time - 1);
        states.setNumber("d_cooldown", 20);
        var morph = mappet.createMorph("{Scheme:\"hotel_fryingpan\",Name:\"snowstorm\"}");
        c.getServer().getWorld(0).displayMorph(morph, 20, 15.78, 15.05, -2.75);

        
        if (oven_sound == 0)
        {
           states.setNumber("oven_sound", 1);
           c.executeCommand("/playsound mp.sounds:ht.misc.frying_loop block @a 16 15 -3 0.6");
        }
        else if (oven_sound == 1)
        {
           states.setNumber("oven_sound", 2);
        }
        else if (oven_sound == 2)
        {
           states.setNumber("oven_sound", 3);
           c.executeCommand("/playsound mp.sounds:ht.misc.frying_loop2 block @a 16 15 -3 0.6");
        }
        else if (oven_sound == 3)
        {
           states.setNumber("oven_sound", 0);
        }
    }
    else if (states.getNumber("oven_time") == 0)
    {
        states.setNumber("oven_time", -1);
        c.executeCommand("/playsound mp.sounds:ht.misc.frying_stop block @a 16 15 -3 0.4");
        c.executeCommand("/setblock 15 15 -3 ht:pan_egg2 5");
        states.setNumber("d_cooldown", 200);
    } //OVEN END
    
    //Discharger
    var discharger_time = states.getNumber("discharger_time");
    if (states.getNumber("discharger_time") > 0) //OVEN START
    {
        //c.send(discharger_time)
        states.setNumber("discharger_time", discharger_time - 1);
        c.getServer().getWorld(0).playSound("mp.sounds:ht.events.discharger_tick", -3, 14, 18, 0.5, 1);
    }
    else if (states.getNumber("discharger_time") == 0) //OVEN START
    {
        states.setNumber("discharger_time", -1);
        c.getServer().getWorld(0).setBlock(mappet.createBlockState("ht:dischargercapacitor", 4), -3, 14, 18);
        c.getServer().getWorld(0).playSound("mp.sounds:ht.events.discharger_end", -3, 14, 18, 0.5, 1);
    }
    
//Demon points
    var players = c.getServer().getAllPlayers();
    var d_points = states.getNumber("d_points");
    var d_points_multiplier = states.getNumber("d_points_multiplier"); //default 2
    for (var i in players)
    {
        if (players[i].getStates().getNumber("sanity") > 0 && players[i].getStates().getNumber("demon") != 1 && players[i].getStates().getNumber("death") != 1)
        {
            states.setNumber("d_points", d_points + d_points_multiplier);
        }
        
    }
    
//Stages
   
    if (stage == 2 && states.getNumber("symbolsFoundCount") == 4) //stage 3
    {
        states.setNumber("symbolsFoundCount", 0);
                        c.scheduleScript(40, function (context)
                        {
                            c.executeCommand("/mp hud setup @a HUD_blackscreen");
                            c.executeCommand("/mp hud morph @a HUD_blackscreen 0 {List:[{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:20},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:20},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:20.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
                        });
                        c.scheduleScript(59, function (context)
                        {
                        states.setString("cutScene_trigger", "scene3"); //cutscene_play
                        c.executeCommand("/mp script exec ~ cutScene_play");
                        });
    }
    
}