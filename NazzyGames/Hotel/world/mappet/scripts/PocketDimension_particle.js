function main(c)
{
    var players = c.getServer().getEntities("@e[mpe=inDimension==1]");
    var morph = mappet.createMorph("{Scheme:\"hotelpocketdimension_particle\",Name:\"snowstorm\"}");
    var morph2 = mappet.createMorph("{Scheme:\"hotel_basementDust\",Vars:{variable.boxsizex:\"2\",variable.rate:\"100\",variable.maxage:\"3\",variable.boxsizez:\"2\",variable.particlesize:\"0.2\",variable.speed:\"1\"},Name:\"snowstorm\"}");
    
  for (var i in players)
  {
    players[i].displayMorph(morph, 100, 0, 0, 0, 0, false, players[i]);
    players[i].displayMorph(morph2, 100, 0, 0, 0, 0, false, players[i]);
  }
}