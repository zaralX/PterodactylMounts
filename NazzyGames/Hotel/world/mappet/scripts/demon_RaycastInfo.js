function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var d_RayDistance = gStates.getNumber("d_RayDistance")
    var ray = s.rayTrace(d_RayDistance);
    var demon = states.getNumber("demon");
    var d_points = gStates.getNumber("d_points");
    var d_cooldown = gStates.getNumber("d_cooldown");
    var d_morphCount = gStates.getNumber("d_morphCount");
    
    
    if (ray.isBlock())
    {
        var pos = ray.getBlock();
        var blockID = c.getWorld().getBlock(pos.x, pos.y, pos.z).getBlockId();
        var influence = 0;
        var name = "";
        var color = "";
        var length = 90;
        
           if (d_cooldown > 0)
           {
              color = "[c";
           }
        
        if (blockID == "ht:computeroff")
        {
                 s.setupHUD("d_info");
                 
                 name = "Компьютер";
                 influence = 2;
        }
        if (blockID == "ht:computer")
        {
                 s.setupHUD("d_info");
                 
                 name = "Компьютер";
                 influence = 3;
        }
        if (blockID == "ht:tvwall")
        {
                 s.setupHUD("d_info");
                 
                 name = "Телевизор";
                 influence = 3;
        }
        if (blockID == "ht:vending")
        {
                 s.setupHUD("d_info");
                 
                 name = "Вендинг";
                 influence = 2;
        }
        if (blockID == "ht:phone")
        {
                 s.setupHUD("d_info");
                 
                 name = "Телефон";
                 influence = 2;
        }
        if (blockID == "ht:printeroff")
        {
                 s.setupHUD("d_info");
                 
                 name = "Принтер";
                 influence = 1;
        }
        if (blockID == "ht:microwave")
        {
                 s.setupHUD("d_info");
                 
                 name = "Микроволновка";
                 influence = 1;
        }
        if (blockID == "ht:washingmachine_off")
        {
                 s.setupHUD("d_info");
                 
                 name = "Стиральная машина";
                 influence = 1;
                 length = 120;
        }
        if (blockID == "ht:convectionheater")
        {
                 s.setupHUD("d_info");
                 
                 name = "Конвектор";
                 influence = 1;
        }
        if (blockID == "ht:trashcan")
        {
                 s.setupHUD("d_info");
                 
                 name = "Урна";
                 influence = 1;
        }
        if (blockID == "ht:cardboard1" || blockID == "ht:cardboard2" || blockID == "ht:cardboard3")
        {
                 s.setupHUD("d_info");
                 
                 name = "Коробка";
                 influence = 1;
        }
        if (blockID == "ht:filecabinet" || blockID == "ht:poollocker")
        {
                 s.setupHUD("d_info");
                 
                 name = "Металлический шкаф";
                 influence = 2;
                 length = 120;
        }
        if (blockID == "ht:candleson")
        {
                 s.setupHUD("d_info");
                 
                 name = "Свечи";
                 influence = 1;
        }
        if (blockID == "ht:barell1" || blockID == "ht:barell1r" || blockID == "ht:barell1l" || blockID == "ht:barell2")
        {
                 s.setupHUD("d_info");
                 
                 name = "Бочка";
                 influence = 1;
        }
        if (blockID == "ht:muspiano")
        {
                 s.setupHUD("d_info");
                 
                 name = "Пианино";
                 influence = 2;
        }
        if (blockID == "ht:lamp_drone" || blockID == "ht:lampceiling" || blockID == "ht:lamp_wall2" || blockID == "ht:lamproom" || blockID == "ht:blamp1wall")
        {
                 s.setupHUD("d_info");
                 
                 name = "Лампа";
                 influence = 3;
        }
        
        if (influence > 0)
        {
            if (influence == 1)
            {
                var indicator = "[6▎[7▎▎"
            }
            else if (influence == 2)
            {
                var indicator = "[c▎▎[7▎"
            }
            else if (influence == 3)
            {
                var indicator = "[4▎▎▎[7"
            }
            
            var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Влияние: [e"+indicator+"\",Name:\"label\"}")
            s.changeHUDMorph("d_info", 1, HUDmorph)
        }
        
        var HUDmorph = mappet.createMorph("{Background:1862270976,Max:"+length+",Label:\""+color+""+name+"\",Name:\"label\"}")
        s.changeHUDMorph("d_info", 0, HUDmorph)
        
        if (d_cooldown > 0)
        {
          var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Откат: [c"+Math.floor(d_cooldown / 20)+" [fсек.\",Name:\"label\"}")
          s.changeHUDMorph("d_info", 1, HUDmorph)
        }
        
        if (pos.y == 13 || pos.y == 19 || pos.y == 7)
        {
             var d_puddleCount = gStates.getNumber("d_puddleCount");
             var d_falseCardCount = gStates.getNumber("d_falseCardCount");
             
             if (s.isSneaking() && d_falseCardCount > 0)
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:140,Label:\"Положить [eложную карту\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Осталось: [e"+d_falseCardCount+" [fшт.\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
             else if (d_puddleCount > 0)
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Поставить [eпятно\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Осталось: [e"+d_puddleCount+" [fшт.\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
        }

        
        //{Background:1090519040,Max:100,Label:"Нужна [eключ-карта",Name:"label"} 
        
    }
 if (ray.isEntity())
 {     
          if (ray.getEntity().getStates().getNumber("demon") == 0 && ray.getEntity().isPlayer() && ray.getEntity().getStates().getNumber("death") == 0)
          {
             if (d_cooldown > 0 && d_morphCount > 0)
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1862270976,Max:90,Label:\"[cВселиться\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Откат: [e"+Math.floor(d_cooldown / 20)+" [fсек.\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
             else if (d_cooldown <= 0 && d_morphCount > 0)
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1862270976,Max:90,Label:\"Вселиться\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:100,Label:\"Стоимость: [e"+20+" [fед.\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
          }
          else if (ray.getEntity().getNpcId() == "item" && ray.getEntity().getStates().getNumber("on") == 1)
          {
             if (d_cooldown > 0)
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1862270976,Max:90,Label:\"[cИК-Ловушка\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:90,Label:\"Откат: [e"+Math.floor(d_cooldown / 20)+" [fсек.\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
             else
             {
                 s.setupHUD("d_info");
                 var HUDmorph = mappet.createMorph("{Background:1862270976,Max:90,Label:\"ИК-Ловушка\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 0, HUDmorph)
                 var HUDmorph = mappet.createMorph("{Background:1258291200,Max:90,Label:\"[eОпрокинуть\",Name:\"label\"}")
                 s.changeHUDMorph("d_info", 1, HUDmorph)
             }
          }

    }
    
}