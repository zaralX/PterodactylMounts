function main(c)
{
    // Code...
    var s = c.getSubject();
    var hp = s.getHp();
    
    if (s.isPlayer())
    {
        c.cancel();
        s.setHp(s.getMaxHp());
    }
}