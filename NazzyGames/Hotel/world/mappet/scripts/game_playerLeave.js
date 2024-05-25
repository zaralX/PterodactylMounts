function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates()
    var states = s.getStates();
    var game_in = gStates.getNumber("game_in");
    var game_demonLock = gStates.getNumber("game_demonLock");
    
    if (game_in == 0)
    {
        if (states.getNumber("demon") == 1)
        {
            states.setNumber("demon", 0);
            gStates.setNumber("game_demonLock", 0);
        }
    }
    
}