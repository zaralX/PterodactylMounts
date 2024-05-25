function main(c)
{
    // Code...
    var s = c.getSubject();
    var ray = s.rayTrace(2);

    
    if (ray.isBlock())
    {
       var gStates = c.getServer().getStates();
       var symbolsFound = gStates.getString("symbolsFound").split(",");
       var symbolsFoundCount = gStates.getNumber("symbolsFoundCount");
       var symbol1 = false;
       var symbol2 = false;
       var symbol3 = false;
       var symbol4 = false;
       
       for (var i = 0; i < symbolsFound.length; i++) //skills
       {
          if (symbolsFound[i] == "1")
          {
            symbol1 = true;
          }
          if (symbolsFound[i] == "2")
          {
            symbol2 = true;
          }
          if (symbolsFound[i] == "3")
          {
            symbol3 = true;
          }
          if (symbolsFound[i] == "4")
          {
            symbol4 = true;
          }
       }
    
       var corpseFound = gStates.getString("corpseFound").split(",");
       var corpseFoundCount = gStates.getNumber("corpseFoundCount");
       var corpse1 = false;
       var corpse2 = false;
       var corpse3 = false;
       var corpse4 = false;
    
       for (var i = 0; i < corpseFound.length; i++) //skills
       {
          if (corpseFound[i] == "1")
          {
            corpse1 = true;
          }
          if (corpseFound[i] == "2")
          {
            corpse2 = true;
          }
          if (corpseFound[i] == "3")
          {
            corpse3 = true;
          }
          if (corpseFound[i] == "4")
          {
            corpse4 = true;
          }
       }
       
       var bloodynotesFound = gStates.getString("bloodynotesFound").split(",");
       var bloodynote1 = false;
       var bloodynote2 = false;
       var bloodynote3 = false;
       var bloodynote4 = false;
       var bloodynote5 = false;
       
       for (var i = 0; i < bloodynotesFound.length; i++) //skills
       {
          if (bloodynotesFound[i] == "1")
          {
            bloodynote1 = true;
          }
          if (bloodynotesFound[i] == "2")
          {
            bloodynote2 = true;
          }
          if (bloodynotesFound[i] == "3")
          {
            bloodynote3 = true;
          }
          if (bloodynotesFound[i] == "4")
          {
            bloodynote4 = true;
          }
          if (bloodynotesFound[i] == "5")
          {
            bloodynote5 = true;
          }
       }
       
        var pos = ray.getBlock();
        var blockID = c.getWorld().getBlock(pos.x, pos.y, pos.z).getBlockId();
        
        //symbols
        
        if (blockID == "ht:symbol1" && symbol1 == false)
        {
            gStates.setString("symbolsFound", ""+symbolsFound+",1");
            _symbolFound()
        }
        if (blockID == "ht:symbol2" && symbol2 == false)
        {
            gStates.setString("symbolsFound", ""+symbolsFound+",2");
            _symbolFound()
        }
        if (blockID == "ht:symbol3" && symbol3 == false)
        {
            gStates.setString("symbolsFound", ""+symbolsFound+",3");
            _symbolFound()
        }
        if (blockID == "ht:symbol4" && symbol4 == false)
        {
            gStates.setString("symbolsFound", ""+symbolsFound+",4");
            _symbolFound()
        }
        
        //corpses
        
        if (blockID == "ht:corpse1" && corpse1 == false)
        {
            gStates.setString("corpseFound", ""+corpseFound+",1");
            _corpseFound()
        }
        if (blockID == "ht:corpse2" && corpse2 == false)
        {
            gStates.setString("corpseFound", ""+corpseFound+",2");
            _corpseFound()
        }
        if (blockID == "ht:corpse3" && corpse3 == false)
        {
            gStates.setString("corpseFound", ""+corpseFound+",3");
            _corpseFound()
        }
        if (blockID == "ht:corpse4" && corpse4 == false)
        {
            gStates.setString("corpseFound", ""+corpseFound+",4");
            _corpseFound()
        }
        
        if (blockID == "ht:bloodynote")
        {
           if ((pos.x == -5 && pos.y == 14 && pos.z == 21) && bloodynote1 == false)
           {
               gStates.setString("bloodynotesFound", ""+bloodynotesFound+",1");
               _bloodynoteFound()
           }
           if ((pos.x == -3 && pos.y == 20 && pos.z == 23) && bloodynote2 == false)
           {
               gStates.setString("bloodynotesFound", ""+bloodynotesFound+",2");
               _bloodynoteFound()
           }
           if ((pos.x == -6 && pos.y == 20 && pos.z == -32) && bloodynote3 == false)
           {
               gStates.setString("bloodynotesFound", ""+bloodynotesFound+",3");
               _bloodynoteFound()
           }
           if ((pos.x == 7 && pos.y == 41 && pos.z == 9) && bloodynote4 == false)
           {
               gStates.setString("bloodynotesFound", ""+bloodynotesFound+",4");
               _bloodynoteFound()
           }
           if ((pos.x == 13 && pos.y == 14 && pos.z == -26) && bloodynote5 == false)
           {
               gStates.setString("bloodynotesFound", ""+bloodynotesFound+",5");
               _bloodynoteFound()
           }
        }
        
    }
    
  function _symbolFound()
  {
        gStates.setNumber("symbolsFoundCount", symbolsFoundCount + 1);
        gStates.setString("taskString", "НАЙТИ ДЕМОНИЧЕСКИЕ СИМВОЛЫ ([e"+gStates.getNumber("symbolsFoundCount")+"[f/4)");
        s.playSound("mp.sounds:ht.events.symbol_pickup", pos.x, pos.y, pos.z, 2, 1);
        s.setupHUD("symbols");
        s.executeScript("HUD_task");
        
        s.getStates().setNumber("obsessionPoints", s.getStates().getNumber("obsessionPoints") + 1);
  }
  function _corpseFound()
  {
        gStates.setNumber("corpseFoundCount", corpseFoundCount + 1);
        s.getStates().setNumber("sanity", s.getStates().getNumber("sanity") + 10);
        s.setupHUD("text_info");
        var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Останков найдено: [e"+(corpseFoundCount + 1)+"[f / 4 \",Name:\"label\"}")
        s.changeHUDMorph("text_info", 0, HUDmorph)
        
        s.getStates().setNumber("obsessionPoints", s.getStates().getNumber("obsessionPoints") + 1);
        
        if (gStates.getNumber("corpseFoundCount") == 4)
        {
            gStates.setNumber("d_hp", gStates.getNumber("d_hp") - 1);
            s.playSound("mp.sounds:ht.events.demon_hp", pos.x, pos.y, pos.z, 5, 0.8);
            s.setupHUD("HUD_flickering");
        }
        else
        {
            s.playSound("mp.sounds:ht.events.cutsene", pos.x, pos.y, pos.z, 5, 1.5);
            s.setupHUD("itemFound");
        }
  }
  function _bloodynoteFound()
  {
        s.playSound("mp.sounds:ht.events.cutsene", pos.x, pos.y, pos.z, 5, 1.5);
        s.setupHUD("itemFound");
        
        var bloodynotesFoundCount = gStates.getNumber("bloodynotesFoundCount");
        
        gStates.setNumber("bloodynotesFoundCount", bloodynotesFoundCount + 1);
        s.getStates().setNumber("obsessionPoints", s.getStates().getNumber("obsessionPoints") + 1);
  }
    
}