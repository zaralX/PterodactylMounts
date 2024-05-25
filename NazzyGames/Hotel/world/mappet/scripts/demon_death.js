function main(c)
{
    // Code...
    var s = c.getSubject();
    var pos = s.getPosition();
    var yaw = s.getYaw();
    var pitch = s.getPitch();
    
    s.getStates().setNumber("demon", 0);
    s.setGameMode(3);
    
    c.executeCommand("/mp state set @a sanity 0");
    
    
    var duration = 161;
    c.getWorld().playSound("mp.sounds:ht.events.demonbook_burn", pos.x, pos.y, pos.y, 2, 1);
    var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Actions:{running:\"running_flying\",sprinting:{Speed:2.0f,Name:\"running_flying\"},idle:\"idle_flying\"},Pose:{Pose:{armRB:{},hairR1:{},skirtF:{},hairR2:{},hairF:{},hairR3:{},hairL1:{},hairL2:{},hairL3:{},head:{SX:0.85f,SY:0.85f,SZ:0.85f},hairB1:{},hairB2:{},armRT:{},feetRB:{},handL:{},skirtB:{},armLB:{},legRB:{},handR:{},legLB:{},armLT:{},feetLB:{},bodyT:{},legRT:{},legLT:{},bodyB:{},feetLT:{},feetRT:{},base:{SX:0.75f,SY:0.75f,SZ:0.75f}}},Transition:{Interp:21,Animates:1b,Duration:150},Skin:\"c.s:hotelgirl1/skins/hotelgirl1.png\",BodyParts:[{R:[0.0f,180.0f,0.0f],T:[0.0f,1.25f,0.0f],Limb:\"base\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}],Name:\"chameleon.hotelgirl1\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Actions:{running:\"running_flying\",sprinting:{Speed:2.0f,Name:\"running_flying\"},idle:\"idle_flying\"},Pose:{Pose:{armRB:{C:16777215,G:1.0f},hairR1:{C:16777215,G:1.0f},skirtF:{C:16777215,G:1.0f},hairR2:{C:16777215,G:1.0f},hairF:{C:16777215,G:1.0f},hairR3:{C:16777215,G:1.0f},hairL1:{C:16777215,G:1.0f},hairL2:{C:16777215,G:1.0f},hairL3:{C:16777215,G:1.0f},head:{C:16777215,SX:0.85f,SY:0.85f,SZ:0.85f,G:1.0f},hairB1:{C:16777215,G:1.0f},hairB2:{C:16777215,G:1.0f},armRT:{C:16777215,G:1.0f},feetRB:{C:16777215,G:1.0f},handL:{C:16777215,G:1.0f},skirtB:{C:16777215,G:1.0f},armLB:{C:16777215,G:1.0f},legRB:{C:16777215,G:1.0f},handR:{C:16777215,G:1.0f},legLB:{C:16777215,G:1.0f},armLT:{C:16777215,G:1.0f},feetLB:{C:16777215,G:1.0f},bodyT:{C:16777215,G:1.0f},legRT:{C:16777215,G:1.0f},legLT:{C:16777215,G:1.0f},bodyB:{C:16777215,G:1.0f},feetLT:{C:16777215,G:1.0f},feetRT:{C:16777215,G:1.0f},base:{SX:0.75f,SY:0.75f,SZ:0.75f}}},Transition:{Interp:25,Animates:1b,Duration:"+duration+"},Skin:\"c.s:hotelgirl1/skins/hotelgirl1.png\",BodyParts:[{R:[0.0f,180.0f,0.0f],T:[0.0f,1.25f,0.0f],Limb:\"base\",Morph:{List:[{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[1.1f,-1.0f,1.0f]},Bottom:-90,Billboard:1b,OffsetY:50.0f,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{RemoveParentSpace:1b,Top:-160,Lighting:0b,Color:1979711487,Pose:{S:[-1.0f,1.0f,1.0f]},Bottom:-90,Billboard:1b,Texture:\"b.a:1_HOTEL/sprites/glitch.png\",Shaded:0b,Name:\"blockbuster.image\"},Duration:2.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}}],Name:\"chameleon.hotelgirl1\"},Duration:"+duration+".0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
    c.getServer().getWorld(0).displayMorph(morph, 160, pos.x, pos.y, pos.z, yaw, pitch);
    var morph = mappet.createMorph("{Scheme:\"hotel_portalDustFinal\",Name:\"snowstorm\"}");
    c.getServer().getWorld(0).displayMorph(morph, 150, pos.x, pos.y, pos.z);
    var morph = mappet.createMorph("{LightValue:8,Name:\"light\"}");
    c.getServer().getWorld(0).displayMorph(morph, 160, pos.x, pos.y + 1, pos.z);
    
    c.scheduleScript(70, function (context)
    {
        var morph = mappet.createMorph("{Scheme:\"hotel_symbols\",Name:\"snowstorm\"}");
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.default1", pos.x, pos.y, pos.y, 5, 0);
        c.getServer().getWorld(0).displayMorph(morph, 70, pos.x, pos.y + 1, pos.z);
        
    });
    
    c.scheduleScript(160, function (context)
    {
        var morph = mappet.createMorph("{Scheme:\"hotel_portalDust\",Name:\"snowstorm\"}");
        c.getWorld().playSound("mp.sounds:ht.voicelines.demon.basement22", pos.x, pos.y, pos.y, 5, 1);
        c.getServer().getWorld(0).displayMorph(morph, 1, pos.x, pos.y + 0.5, pos.z);
    });
    
    c.scheduleScript(200, function (context)
    {
        c.getServer().getStates().setNumber("lights", 1);
        c.getServer().executeScript("lights_control");
    });
    
c.scheduleScript(300, function (context)
{
    var players = c.getServer().getAllPlayers();
    for (var i in players)
    {
        players[i].executeScript("UI_hunterwin_gameStats");
    }
});
    
    
}
/*
                                                                                          
                                                                                          
                                           --==:.**-                                      
                                        .=##%%@@@@%#=                                     
                                       -@@@###@@@@@%+                                     
                                      :@@@%%##%%%%%##.                                    
                                      *@@%###*++***=*%*:                                  
                                      #@%#############%%+:                                
                                      *@@%###########%::=*#+=:.                           
                                      *@@@####%%%###@@    .+###*=:                        
                                      %@@@%####%@%#*@@:    .-*####*.                      
                                     :@@@@@%#####%%#*%*++*########+.                      
                                     #@@@@@@%#%%#%@@@@@%%%###*=-:                         
                                     @@@@@@@@%%##@@@@@@@@@%:                              
                                     @@@@@@@@@%@@@@@@@@@@@#:                              
                                     #@@@@@@@@*@%##*+++++-                                
                                     :%#*@@@%+-#+ #######.                                
                                          .--   .=**####*                                 
                                           :+#%@@@%%#**#-                                 
                                         .*#@%%#####%%%*                                  
                                        .*#@%###########                                  
                                        +*+%%###########                                  
                                       -#.:%%%##########                                  
                                      .#:  ############+                                  
                       .             .*:   *%##########-                                  
                       -%#+-        -*.    -%#########*                                   
                         =%@#.   .-+-       +#########:                                   
                           :::----.          =#######=                                    
                                              *######                                     
                                              *######.                                    
                                            .=#######.                                    
                                           :#######+.                                     
                                          .######*.                                       
                                          *%#####.                                        
                                         +%%####=                                         
                                        =%%%####                                          
                                       +%%%%###-                                          
                                     :+%%%%%%##                                           
                                    #%%%%%#%%%=                                           
                                    :%%%%+#%%%:                                           
                                     -%%#=%%%%+                                           
                                      *%*#%%%%%#+:.                                       
                                       -+######%%%%#.                                     
*/                                                                 