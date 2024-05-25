function main(c)
{
    // Code...
    var s = c.getSubject();
    
    if (s.getGameMode() != 1)
    {
        s.closeUI();
    }
}