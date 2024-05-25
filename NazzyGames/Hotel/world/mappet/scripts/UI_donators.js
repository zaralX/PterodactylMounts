function main(c)
{
    var ui = mappet.createUI().background();
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.48).wh(170, 300).anchor(0.5);
    backdrop.rect(0, 0, 170, 300, 0x88000000);
    
    var text = ui.label("[c♥ [eСПИСОК ДОНАТЕРОВ [c♥").id("label");
    text.rx(0.5).ry(0.18, 25).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var scroll = ui.column(5, 5);
    scroll.getCurrent().scroll().rxy(0.5, 0.5).w(170).rh(0.5).anchor(0.5);

    //Заполнял вручную... каждого проговорил, когда записывал :D

    var text = scroll.text(
    "[c⚡ [e[lГнарррр [f- 80 000 р. \n" +
    "\n" +
    "[e☢ [dTheWarklonStudio [f- 39 625 р.\n" +
    "\n" +
    "[cАнонимные донаты [f- 17 022 р. \n" +
    "\n" +
    "[6Мандаринчик [f- 8 450 р. \n" +
    "[6Надежда [f- 4 000 р. \n" +
    "[6MrBurNikOff [f- 3 000р. \n" +
    "\n" +
    "[2windows420 [f- 2 500 р.  \n" +
    "[c♥[2Jijikinji(Джиджи) [f- 2 000 р.  \n" +
    "[2Quincy_Ixatoki [f- 1 500 р.  \n" +
    "[c♥[2Ветерок [f- 1 450 р.  \n" +
    "[2solandsof [f- 1 350 р.  \n" +
    "[2Scared_cat [f- 1 300 р.  \n" +
    "[2Jackeilo [f- 1 150 р.  \n" +
    "[2NotSH0W [f- 1 147 р.  \n" +
    "[2LaNGeR [f- 1 050 р.  \n" +
    "[2Туми [f- 1 000 р.  \n" +
    "[2artemmouf2002 [f- 1 000 р.  \n" +
    "[2Картавый Эльф [f- 1 000 р.  \n" +
    "[2kirspacemar [f- 1 000 р.  \n" +
    " \n" +
    "[3Dremium [f- 950 р.  \n" +
    "[3Minako [f- 900 р.  \n" +
    "[3Positive [f- 750 р.  \n" +
    "[3Alex_Fox [f- 750 р.  \n" +
    "[3GMigami [f- 750 р.  \n" +
    "[3Agent 008 [f- 750 р.  \n" +
    "[3Кира [f- 750 р.  \n" +
    "[3madstein [f- 666 [k.  \n" +
    "[3Ехали_татары [f- 633 р.   \n" +
    "[3Андрей [f- 600 р.  \n" +
    "[3Yato [f- 600 р.  \n" +
    "[c♥[3MoralFuck [f- 600 р.  \n" +
    "[c♥[3Виргуша [f- 500 р.  \n" +
    "[3Пончи [f- 450 р.  \n" +
    "[3Destra [f- 450 р.  \n" +
    "[3Шаловливый орешек [f- 400 р.  \n" +
    "[3AndreiAndroidOS [f- 400 р.  \n" +
    "[3Демон [f- 350 р.  \n" +
    "[3Dinawer [f- 350 р.  \n" +
    "[3Ozvychkin [f- 350 р.  \n" +
    "[3pesik_pos [f- 300 р.  \n" +
    "[3Бадабум [f- 300 р.  \n" +
    "[8☠[3Драник [f- 300 р.  \n" +
    "[3Sam111 [f- 300 р.  \n" +
    "[3Mopps [f- 300 р.  \n" +
    "[3ИваниО [f- 300р.  \n" +
    "[3Neviling [f- 300 р.  \n" +
    "[3Undertaker [f- 300р.  \n" +
    "[3312 [f- 300 р.  \n" +
    "[3Дейвик [f- 300 р.  \n" +
    "[3Deremito [f- 300 р.  \n" +
    "[3Zeykr [f- 300 р.  \n" +
    "[3Awerse [f- 300 р.  \n" +
    "[3raikrav [f- 300 р.  \n" +
    "[3Feres [f- 300 р.  \n" +
    "[3Prostooya [f- 300 р.  \n" +
    "[3A?? [f- 300 р.  \n" +
    "[3skyer [f- 300 р.  \n" +
    "[3GLAnceLoT [f- 300 р.  \n" +
    "[3MozoRzy [f- 300 р.  \n" +
    "[3Дядя Павел [f- 300 р.  \n" +
    "[3Top4ik_1983 [f- 300 р.  \n" +
    "[c♥[3Виннóл [f- 300 р.  \n" +
    "[3Fereta [f- 300 р.  \n" +
    "[3kvaka [f- 300 р.  \n" +
    "[c♥[3Risarri [f- 300 р.  \n" +
    "[3Алина Ф(Ш)изик [f- 300 р.  \n" +
    "[3ivan_sluap [f- 300 р.  \n" +
    "[3AzazaV01 [f- 299 р.  \n" +
    "[3Hzsher [f- 232 р.  \n" +
    "[3DOFRES [f- 222 р.  \n" +
    "[3Хлеб [f- 220 р.  \n" +
    "[3... [f- 200 р.  \n" +
    "[3ArkTonio [f- 200 р.  \n" +
    "[3Башмак [f- 200 р.  \n" +
    "[3TheBendy [f- 200 р.  \n" +
    "[3Naki [f- 200 р.  \n" +
    "[3xitrez_schuler [f- 200 р.  \n" +
    "[3Дианочка [f- 200 р.  \n" +
    "[3Кувалдавич [f- 200 р.  \n" +
    "[3Pampers [f- 161 р.  \n" +
    "[3XleByss [f- 152 р.  \n" +
    "[3Dinonator [f- 150 р.  \n" +
    "[3Жена Морозовой [f- 150 р.  \n" +
    "[3sponkybtw [f- 150 р.  \n" +
    "[3qsermu34 [f- 150 р.  \n" +
    "[3Danil vey [f- 150 р.  \n" +
    "[3Сэра [f- 150 р.  \n" +
    "[3Маро [f- 150 р.  \n" +
    "[3Uropi [f- 150 р.  \n" +
    "[3Влада [f- 150 р.  \n" +
    "[3Кисель [f- 150 р.  \n" +
    "[6♂ [eMyNeoshaYT [f- 150 р.  \n" +
    "[3TestyToxic [f- 150 р.  \n" +
    "[3Twixe [f- 150 р.  \n" +
    "[3Аква [f- 150 р.  \n" +
    "[3ReDDiE [f- 150 р.  \n" +
    "[3-_siesta_- [f- 150 р.  \n" +
    "[3Lenikslonik201 [f- 150 р.  \n" +
    "[3Мегустооо [f- 150 р.  \n" +
    "[3БеГерешка [f- 150 р.  \n" +
    "[3Assassin_Asin [f- 150 р.  \n" +
    "[3S.M. [f- 150 р.  \n" +
    "[3таварищь (человек) [f- 150 р.  \n" +
    "[3Ы [f- 150 р.  \n" +
    "[3Асечка [f- 150 р.  \n" +
    "[3Hame [f- 150 р.  \n" +
    "[3Miksam [f- 150 р.  \n" +
    "[3кикимора [f- 150 р.  \n" +
    "[3FBI2023 [f- 150 р.  \n" +
    "[3Greh [f- 150 р.  \n" +
    "[3मेरा नाम अशोत है [f- 150 р. \n" +
    "[3LayBren [f- 150 р.  \n" +
    "[3RISHA [f- 150 р.  \n" +
    "[3br_Vnia3828 [f- 150 р.  \n" +
    "[3what_Millyy (милли) [f- 150 р.  \n" +
    "[3Assassin_Recon [f- 150 р.  \n" +
    "[3Джон Эванс [f- 150 р.  \n" +
    "[3Vermileon [f- 150 р.  \n" +
    "[3Pitek [f- 150 р.  \n" +
    "[3KAKTUS [f- 150 р.  \n" +
    "[3Капля [f- 150 р.  \n" +
    "[3Reter1000 [f- 150 р.  \n" +
    "[3Lopotik [f- 150 р.  \n" +
    "[3advester [f- 150 р.  \n" +
    "[3Podaro4ek22 [f- 150 р.  \n" +
    "[3Дрон-убийца [f- 150 р.  \n" +
    "[3_Smaili_ [f- 150 р.  \n" +
    "[3lin4uk [f- 150 р.  \n" +
    "[3Артур [f- 150 р.  \n" +
    "[3Dont [f- 150 р.  \n" +
    "[3Лирс [f- 150 р.  \n" +
    "[3maymyae [f- 150 р.  \n" +
    "[3Trin [f- 150 р.  \n" +
    "[c☠ [3Gimad pley [f- 150 р.  \n" +
    "[3Чувырла [f- 150 р.  \n" +
    "[3Рене [f- 150 р.  \n" +
    "[3Лёха Псих [f- 150 р.  \n" +
    "[3Warprite [f- 150 р.  \n" +
    "[3Paranormal [f- 150 р.  \n" +
    "[3sevEral [f- 150 р.  \n" +
    "[3Gobert [f- 150 р.  \n" +
    "[3KING [f- 150 р.  \n" +
    "[3Winux [f- 150 р.  \n" +
    "[3Боярышник [f- 150 р.  \n" +
    "[3KreAmm [f- 150 р.  \n" +
    "[3Катя [f- 150 р.  \n" +
    "[3Catcof [f- 150 р.  \n" +
    "[3Чокопай [f- 150 р.  \n" +
    "[3Sedbanny127 [f- 150 р.  \n" +
    "[3e [f- 150 р.  \n" +
    "[3Laughing_Fox [f- 150 р.  \n" +
    "[3Altosik [f- 150 р.  \n" +
    "[3Felix [f- 150 р.  \n" +
    "[3DKSS [f- 150 р.  \n" +
    "[3ivanich [f- 150 р.  \n" +
    "[3Evgen1005 [f- 150 р.  \n" +
    "[3GoodInk4590 [f- 150 р.  \n" +
    "[3Miledi [f- 150 р.  \n" +
    "[3Жаба) [f- 150 р.  \n" +
    "[3HAPTAN [f- 150 р.  \n" +
    "[3Daniil [f- 150 р.  \n" +
    "[3ППЧ [f- 150 р.  \n" +
    "[3_Senix_ [f- 150 р.  \n" +
    "[3poplokk [f- 150 р.  \n" +
    "[3ДикийДима [f- 150 р.  \n" +
    "[3Кальян [f- 150 р.  \n" +
    "[3Владос [f- 150 р.  \n" +
    "[3$Modnik$ [f- 150 р.  \n" +
    "[3Deron [f- 150 р.  \n" +
    "[3Pixu [f- 150 р.  \n" +
    "[3Тимур118 [f- 150 р.  \n" +
    "[3Amit_Raze [f- 150 р.  \n" +
    "[c♥[dШиро [f- 93 р.  \n" +
    "[3Dauer [f- 93 р.  \n" +
    "[3Commandik [f- 93 р." +
    " \n" +
    " \n" +
    "Спасибо всем, кто поддерживал и помогал! [c♥");

    c.getSubject().openUI(ui);
}