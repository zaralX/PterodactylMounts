function main(c)
{
    // Code...
    var s = c.getSubject();
    var states = s.getStates();
    var gStates = c.getServer().getStates(); 
    
    var taskString = gStates.getString("taskString");
    var morph = mappet.createMorph("{List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{S:[1.0f,0.0f,1.0f]}}},BodyParts:[{Limb:\"cube\",Morph:{Color:16556817,Label:\"Текущее задание:\",Shadow:1b,Name:\"label\"}},{T:[0.0f,0.3f,0.0f],Limb:\"cube\",Morph:{Max:300,Label:\""+taskString+"\",Name:\"label\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{}}},BodyParts:[{Limb:\"cube\",Morph:{Color:16556817,Label:\"Текущее задание:\",Shadow:1b,Name:\"label\"}},{T:[0.0f,0.3f,0.0f],Limb:\"cube\",Morph:{Max:300,Label:\""+taskString+"\",Name:\"label\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:10.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{}}},BodyParts:[{Limb:\"cube\",Morph:{Color:16556817,Label:\"Текущее задание:\",Shadow:1b,Name:\"label\"}},{T:[0.0f,0.3f,0.0f],Limb:\"cube\",Morph:{Max:300,Label:\""+taskString+"\",Name:\"label\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:40.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:5},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{S:[1.0f,0.0f,1.0f]}}},BodyParts:[{Limb:\"cube\",Morph:{Color:16556817,Label:\"Текущее задание:\",Shadow:1b,Name:\"label\"}},{T:[0.0f,0.3f,0.0f],Limb:\"cube\",Morph:{Max:300,Label:\""+taskString+"\",Name:\"label\"}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:5.0f,EndPoint:0b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}")
    
    s.setupHUD("task");
    s.changeHUDMorph("task", 0, morph);
    
    var pos = s.getPosition();
    s.playSound("mp.sounds:ht.interaction.task_setup", pos.x, pos.y, pos.z, 0.5, 1);

    //block press spam
    states.setString("TaskBlocked", "true")
    c.scheduleScript(55, function (context)
    {
         states.setString("TaskBlocked", "false")
    });
    
}