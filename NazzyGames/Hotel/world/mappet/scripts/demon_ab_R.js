function main(c)
{
    // Code...
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var states = s.getStates();
    var d_ab_VisibleCooldown = gStates.getNumber("d_ab_VisibleCooldown");
    var d_ab_VisibleCount = gStates.getNumber("d_ab_VisibleCount");
    var d_huntTime = gStates.getNumber("d_huntTime");
    var elevator_on = gStates.getNumber("elevator_on");
    var stage = gStates.getNumber("stage");
    var pitch = s.getPitch();
    var pos = s.getPosition();

    if (d_huntTime > 0 || stage < 1 || gStates.getNumber("d_visible") == 1 || d_ab_VisibleCount < 1)
    {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Способность [cнедоступна\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
    }
    else if (d_ab_VisibleCooldown <= 0 && d_ab_VisibleCount > 0)
    {
    
       var light = c.getSubject().getCombinedLight();
       var torchLight = light % 65536 / 15;
         if (torchLight < 5)
         {
             gStates.setString("d_trigger", "visible");
             gStates.setNumber("d_ab_VisibleCount", d_ab_VisibleCount - 1);
         }
         else
         {
            s.playSound("mp.sounds:ht.misc.zippo_light", pos.x, pos.y, pos.z, 1, 2);
            s.setupHUD("text_info");
            var HUDmorph = mappet.createMorph("{Background:1358954496,Label:\"Здесь слишком [cсветло\",Name:\"label\"}")
            s.changeHUDMorph("text_info", 0, HUDmorph)
         }

    }
    
}
/*
+++++++++++++++++++++++++++++++++++++++++++++++*####*+++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++*%@@@@@@@@%*+++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++*##@@@@@@@@@@@@@@@#+++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++#@@@@@@@@@@@@@@@@@@%++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++#@@@@@@@@@@@@@@@@@@@@@#+++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++*#@@@@@@@@@@@%%%%@@@@@@@@#++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++%@@@@@@@@@@@@@@@@@@@@@@@@@*++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++%%%@@@#******%%@@@@@@@@@@@+++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++*@%%%@#*******#%%@%%@@@@@@#+++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++*+++@@@@#%********#%@%@%#@@@@@++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++*%#++%@@@@%@@%%##%%@@%%@@@%%@@%%#######*++++++++++++++++++++++
++++++++++++++++++++++++++++*#+*+%@@*@@@@@@%###@@@@@@@@@%%%%######*#++++++++++++++++++++++
++++++++++++++++++++++++++++++%+#@@@+#%%%%%######%%%#%@@%%%%#######%@+++++++++++++++++++++
+++++++++++++++++++++++++++++++*#@@@*%%###############%@%####@%####%#+++++++++++++++++++++
+++++++++++++++++++++++++++++*+%+#@@@%%#***##*#*****##@@#+#########%**++++++++++++++++++++
+++++++++++++++++++++++++++++++#+++#@@#****#####***##%@@**%@%######%##++++++++++++++++++++
++++++++++++++++++++++++++++++++++++#@%#+***###***#%%@@#**%######%%@@@++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++%%**+*%#####%##@@%*+*%####%@@@@@@*+++++++++++++++++++
++++++++++++++++++++++++++++++++****+%%*+%@@@%######@@@%%%@%%%%@@@%@@@#+++++++++++++++++++
+++++++++++++++++++++++++++++*#%%##%%%@@@@@@%%######@@@@@@%##%@@@@@@@%%+++++++++++++++++++
++++++++++++++++++++++++++**%@@@@@@%###@@@@%###%####%@@@@%%#*%@@@@@@%#*#++++++++++++++++++
+++++++++++++++++++++++*%@%@@@@@@@##%@#%%%%#####****#@@@@%%#*%@@@@@@@%@@%+++++++++++++++++
++++++++++++++++++++++#@@%@@@@@@%####%##*************%@%%@%#*%@@@@@@@@@@#+++++++++++++++++
+++++++++++++++++++++%@@@@@@@@@@#####*********#******#%@%@@##@@@@@@@@@@@@#++++++++++++++++
++++++++++++++++++++*@@@@@@@@@@%###**********##*******#%@@@##@@%#@@@@@%%@*++++++++++++++++
++++++++++++++++++++%@@@@@@@@%#***********###**********%@@@@@%#*%@@@@%%@@#++++++++++++++++
+++++++++++++++++++*@@@@@@@%###**********##***####*****#@@@@@%%%@@@@@@@%@+++++++++++++++++
+++++++++++++++++++@@@@@@@@####*********##***######****#@@@@@@@@@@@@@@@@%#++++++++++++++++
++++++++++++++++++#@@@@@@@%###**********##***######****#@@@@@@@@@@@@@@@@@#++++++++++++++++
++++++++++++++++++@@%%@@@@@#**********#####****#*******#@@@@%@@@@@%%%@@@@*++++++++++++++++
+++++++++++++++++%@@@%@@@@@@%##########**#####*******##%@%@@%@@@@@@@@@@@@#++++++++++++++++
++++++++++++++++*@@@@@@@@@@@@@%###%##*****#############%@%@@%@@@@@@@%%@@@%++++++++++++++++
++++++++++++++++#@@@%@@@@@@@@@@#####********#********#%@@@@@%%@@@@@%@@@@%+++++++++++++++++
++++++++++++++++*@@@@@@@@@@@@@@%###****#*****#*******#@@@@@@@@%+#@@@@@@#++++++++++++++++++
+++++++++++++++++%@@@@@@@@@@@@@@###****#************####%@%@@@%++*%@@#++++++++++++++++++++
++++++++++++++++++@@@@@@@@@@@@++%##****#***********#%++++*@@@%#+++++++++++++++++++++++++++
++++++++++++++++++*##*++++%@@@*+####****#************#*+++@@@+++++++++++++++++++++++++++++
++++++++++++++++++++++++++*@#+++####****##*************#*+*%%+++++++++++++++++++++++++++++
+++++++++++++++++++++++++++@@+++%**##****#******************#@#*++++++++++++++++++++++++++
+++++++++++++++++++++++++++#@++*#***#****##*****************##*+++++++++++++++++++++++++++
+++++++++++++++++++++++++++#*++#****#****##*******************#*++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++#****#**************************#*+++++++++++++++++++++++++
+++++++++++++++++++++++++++++++#*****#***************************#++++++++++++++++++++++++
+++++++++++++++++++++++++++++++#**********************************#+++++++++++++++++++++++
+++++++++++++++++++++++++++++++%**************************#********#++++++++++++++++++++++
+++++++++++++++++++++++++++++#%#***********************###*********#*+++++++++++++++++++++
+++++++++++++++++++++++++++*##***********************##*************#+++++++++++++++++++++
++++++++++++++++++++++++++##***********************###****+++*******#*++++++++++++++++++++
++++++++++++++++++++++++*#***************##*******###*****++****+****#++++++++++++++++++++
+++++++++++++++++++++++##*****************###****###******+**********#++++++++++++++++++++
++++++++++++++++++++++#*********************###%#%#******************#++++++++++++++++++++
+++++++++++++++++++++#*********************####*###*****************##++++++++++++++++++++
++++++++++++++++++++#********************##%*++*##******************#*++++++++++++++++++++
+++++++++++++++++++#*******************####++++%##******************#+++++++++++++++++++++
*/