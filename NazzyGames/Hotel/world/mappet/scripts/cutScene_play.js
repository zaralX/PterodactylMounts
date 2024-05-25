function main(c)
{
    // Code...
    var gStates = c.getServer().getStates();
    gStates.setNumber("game_cutsceneIn", 1);
    
    var players = c.getServer().getAllPlayers();
    for (var i in players)
    {
        var states = players[i].getStates();
        var pos = players[i].getPosition();
        var rot = players[i].getRotations();
        states.setString("cutScene_pos", ""+pos.x+" "+pos.y+" "+pos.z+" "+rot.z+" "+rot.x+"");
    }
    
    var tickTime = 0
    if (gStates.getString("cutScene_trigger") == "test")
    {
        tickTime = 92
        c.executeCommand("/scene play test");
        c.executeCommand("/aperture play test @a");
    }
    if (gStates.getString("cutScene_trigger") == "scene1")
    {
        tickTime = 202
        c.executeCommand("/scene play scene1");
        c.executeCommand("/aperture play scene1 @a");
    }
    if (gStates.getString("cutScene_trigger") == "scene2")
    {
        tickTime = 119
        c.executeCommand("/scene play scene2");
        c.executeCommand("/aperture play scene2 @a");
    }
    if (gStates.getString("cutScene_trigger") == "scene3")
    {
        tickTime = 148
        c.executeCommand("/scene play scene3");
        c.executeCommand("/aperture play scene3 @a");
    }
    
    c.scheduleScript(tickTime + 1, function (context)
    {
        //c.send(""+tickTime+" Ticks left");
        for (var i in players)
        {
            var cutScene_pos = players[i].getStates().getString("cutScene_pos");
            players[i].executeCommand("/tp @s "+cutScene_pos+"");
            gStates.setNumber("game_cutsceneIn", 0);
        }
    });
}