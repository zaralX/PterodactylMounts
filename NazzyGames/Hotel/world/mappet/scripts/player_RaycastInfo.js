function main(c)
{
    // Code...
    var s = c.getSubject();
    var mirror_scare = s.getStates().getNumber("mirror_scare");
    var ray = s.rayTrace(1.9);
    
    if (ray.isBlock())
    {
        var pos = ray.getBlock();
        var blockID = c.getWorld().getBlock(pos.x, pos.y, pos.z).getBlockId();
        
        if (blockID == "minecraft:stone")
        {
            var text = "[c\stone"
            var morph = "{Background:1090519040,Label:\""+text+"\",Name:\"label\"}"
        }
        else if (blockID == "ht:vending")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Требуется [eмонета\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:doorkitchen")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Нужна [eключ-карта\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "minecraft:barrier" && pos.x == 1 && pos.y == 9 && pos.z == -1)
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Щиток питания [eлифтов\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bwallsign2" && pos.x == 10 && pos.y == 9 && pos.z == -2)
        {
            var morph = "{Background:1090519040,Max:120,Label:\"НА БОЙЛЕРЫ ПРЕДМЕТЫ НЕ СТАВИТЬ!\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bwallsign3" && pos.x == 5 && pos.y == 9 && pos.z == 3)
        {
            var morph = "{Background:1090519040,Max:130,Label:\"ОСТОРОЖНО! ВЫСОКОЕ НАПРЯЖЕНИЕ!\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bwallsign3" && pos.x == -4 && pos.y == 9 && pos.z == -3)
        {
            var morph = "{Background:1090519040,Max:150,Label:\"ПОЖАЛУЙСТА, НЕ ЗАХЛАМЛЯЙТЕ ПРОХОДЫ ПРЕДМЕТАМИ!\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:libdoor" && pos.x == 0 && pos.y == 21 && pos.z == -14)
        {
            var morph = "{Background:1090519040,Max:130,Label:\"Нужен [eключ библиотеки\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:libdoor" && pos.x == 0 && pos.y == 21 && pos.z == -31)
        {
            var morph = "{Background:1090519040,Max:130,Label:\"Нужен [eключ библиотеки\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:libdoor")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Можно [eвзломать\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:roomdoor")
        {
            var morph = "{Background:1090519040,Max:110,Label:\"Нужна [eключ-карта\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:elevatorpanel")
        {
            var morph = "{Background:1090519040,Max:90,Label:\"Панель лифта\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:computer" && pos.x == -5 && pos.y == 15 && pos.z == 15)
        {
            var morph = "{Background:1090519040,Max:140,Label:\"Компьютер ресепшена\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:nfc")
        {
            var morph = "{Background:1090519040,Max:140,Label:\"Программатор ключ-карт\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:pan_empty")
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Сковорода\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if ((blockID == "ht:biblbookshelf1" || blockID == "ht:biblbookshelf2" || blockID == "ht:biblbookshelfopen") && s.getStates().getNumber("book_canfind") == 1)
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Книжная полка\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == -3 && pos.y == 15 && pos.z == 15)
        {
            var morph = "{Background:1090519040,Max:300,Label:\"- Администратор библиотеки не отвечает на звонки. Перезвонить +13(213)446-17-62.                               - Отмыть чёрное пятно на дне бассейна.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bloodynote" && pos.x == -5 && pos.y == 14 && pos.z == 21)///////
        {
            var morph = "{Background:1090519040,Max:330,Label:\"Серебряный клинок оказался [cнеэффективен [fпротив демона... Ищите его другую слабость.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bloodynote" && pos.x == -6 && pos.y == 20 && pos.z == -32)
        {
            var morph = "{Background:1090519040,Max:270,Label:\"Оно забрало какую-то [lкнигу [fв своё [cизмерение[f. Зачем ей там книга из библиотеки?\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bloodynote" && pos.x == -3 && pos.y == 20 && pos.z == 23)
        {
            var morph = "{Background:1090519040,Max:200,Label:\"Оно одержимо символами.           Значит [cслабость [fзаключена в них.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bloodynote" && pos.x == 13 && pos.y == 14 && pos.z == -26)
        {
            var morph = "{Background:1090519040,Max:400,Label:\"Пятно в бассейне - это своего рода [cпортал[f, который демон открывает. Только неизвестно, куда он ведёт...\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:bloodynote" && pos.x == 7 && pos.y == 41 && pos.z == 9)
        {
            var morph = "{Background:1090519040,Max:150,Label:\"Её слабость - это её [cимя\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:wallsigntext" && pos.x == -5 && pos.y == 9 && pos.z == 18)
        {
            var morph = "{Background:1090519040,Max:270,Label:\"Находясь в [lмастерской [fсоблюдайте технику безопасности!\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:workbench" && s.getMainItem().getItem().getId() === "minecraft:air")
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Верстак\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:metalmat" && s.getMainItem().getItem().getId() != "ht:pliers")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Нужны [cплоскогубцы\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:jar" && s.getMainItem().getItem().getId() != "ht:reagent" && pos.x == -1 && pos.y == 9 && pos.z == 21)
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Нужен [cреагент\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:minifridge" && s.getMainItem().getItem().getId() == "minecraft:air")
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Холодильник\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == -8 && pos.y == 12 && pos.z == -30)
        {
            var morph = "{Background:1090519040,Max:250,Label:\"Пятно реагирует на демона и его [eличные вещи[f. НЕ ВСТАВАЙТЕ НА ПЯТНО!\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 18 && pos.y == 15 && pos.z == 21)///////
        {
            var morph = "{Background:1090519040,Max:250,Label:\"Кто-то оставил [eключ-карту [fв туалете. Отнесите её в офис после смены.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 13 && pos.y == 21 && pos.z == 15)///////
        {
            var morph = "{Background:1090519040,Max:260,Label:\"Уважительная просьба для тех. персонала... ХВАТИТ ОСТАВЛЯТЬ ПЛОСКОГУБЦЫ В ВАННОЙ КОМНАТЕ.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 2 && pos.y == 9 && pos.z == 2)///////
        {
            var morph = "{Background:1090519040,Max:360,Label:\"Пожалуйста, кладите в ящики с инструментами только инструменты. Там не должны лежать всякие металлические материалы...\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 11 && pos.y == 27 && pos.z == 18)///////
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Можно прочесть...\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 8 && pos.y == 27 && pos.z == 12)///////
        {
            var morph = "{Background:1090519040,Max:120,Label:\"[eTAB [f- [lОткрыть меню\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (pos.x == -7 && pos.y == 11 && pos.z == -31)
        {
            var morph = "{Background:1090519040,Max:50,Label:\"Пятно.\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:gamecard" && pos.x == -7 && pos.y == 12 && pos.z == -31)
        {
            var morph = "{Background:1090519040,Max:90,Label:\"Можно поджечь\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:candlesoff" && s.getMainItem().getItem().getId() != "ht:lighter")
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Можно зажечь\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:document" && pos.x == 20 && pos.y == 15 && pos.z == -14)
        {
            var morph = "{Background:1090519040,Max:200,Label:\"Пока кухня работает - всё спокойно. Стоит закончить смену и начинается какая-то чертовщина...\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:techdoor" && pos.x == 19 && pos.y == 15 && pos.z == -25) //techdoor
        {
            var morph = "{Background:1090519040,Max:130,Label:\"Нужен [eключ от бассейна\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:techdoor" && pos.x == 19 && pos.y == 15 && pos.z == -33) //techdoor
        {
            var morph = "{Background:1090519040,Max:130,Label:\"Нужен [eключ от бассейна\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        //if need more interaction with techdoor
        else if (blockID == "ht:techdoor") //techdoor
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Можно [eвзломать\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:officedoor" && pos.x == -4 && pos.y == 9 && pos.z == 19)
        {
            var morph = "{Background:1090519040,Max:140,Label:\"Нужен [eключ от мастерской\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        //if need more interaction with officedoor
        else if (blockID == "ht:officedoor")
        {
            var morph = "{Background:1090519040,Max:90,Label:\"Можно [cвзломать\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:toolbox")
        {
            var morph = "{Background:1090519040,Max:120,Label:\"Ящик с инструментами\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:pills")
        {
            var morph = "{Background:1090519040,Max:60,Label:\"Таблетки\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:symbol1" || blockID == "ht:symbol2" || blockID == "ht:symbol3" || blockID == "ht:symbol4")
        {
            var morph = "{Background:1090519040,Max:80,Label:\"Символ имени\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:symbol_t1" || blockID == "ht:symbol_t2")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Символ времени\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:keylibrary")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Ключ библиотеки\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:radio")
        {
            var morph = "{Background:1090519040,Max:50,Label:\"Радио\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:dischargercapacitor" || blockID == "ht:dischargerempty")
        {
            var morph = "{Background:1090519040,Max:120,Label:\"Разрядное устройство\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:demonbook")
        {
                s.setupHUD("Raycast_info");
                if (pos.x = -7, pos.y = 12, pos.z = -1)
                {
                    var morph = "{Background:1090519040,Max:100,Label:\"Можно поджечь\",Name:\"label\"}"
                }
                else
                {
                    var morph = "{Background:1090519040,Max:100,Label:\"[lКНИГА ДЕМОНА\",Name:\"label\"}"
                }
        }
        else if (blockID == "ht:reagent")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Реагент\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:katana")
        {
            if (c.getServer().getStates().getNumber("taskNumber") >= 10) {
               var morph = "{Background:1090519040,Max:70,Label:\"[lКатана\",Name:\"label\"}"
            }
            else {
               var morph = "{Background:1090519040,Max:120,Label:\"Меч пока [cбесполезен\",Name:\"label\"}"
            }
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:mirror" && mirror_scare > 0)
        {
            s.getStates().setNumber("mirror_scare", 0);
            s.getStates().setNumber("sanity", 45);
            s.executeCommand("/playsound mp.sounds:ht.jumpscare.scare"+Math.floor(mappet.random(1,4))+" ambient @s ~ ~8000 ~ 1000")
            s.executeCommand("/playsound mp.sounds:ht.events.camera_glitch ambient @s ~ ~1000 ~ 1000 0.8");
            s.setupHUD("HUD_flickering");
            s.setupHUD("mirror_demon");
        }
        else if (blockID == "ht:barfaucetcupempty")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Барный кран\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        else if (blockID == "ht:barfaucetcupbeer")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Разливное пиво\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        
        s.changeHUDMorph("Raycast_info", 0, mappet.createMorph(morph));
        //{Background:1090519040,Max:100,Label:"Нужна [eключ-карта",Name:"label"} 
        
    }
    else if (ray.isEntity())
    {
        if (ray.getEntity().getNpcId() == "item")
        {
            var morph = "{Background:1090519040,Max:100,Label:\"Можно подобрать\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        if (ray.getEntity().getNpcId() == "puddle")
        {
            var morph = "{Background:1090519040,Max:70,Label:\"Пятно\",Name:\"label\"}"
            s.setupHUD("Raycast_info");
        }
        
        s.changeHUDMorph("Raycast_info", 0, mappet.createMorph(morph));
    }
    
}