function main(c)
{
    // Code...
    var ui = mappet.createUI(c, "handler").background().closable(false);
    var s = c.getSubject();
    var gStates = c.getServer().getStates();
    var stage = gStates.getNumber("stage");

    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.2).wh(1000, 1000).anchor(0.5);
    backdrop.rect(0, 0, 1000, 1000, 0xff000000);
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.5).wh(300, 150).anchor(0.5);
    backdrop.rect(0, 0, 300, 150, 0xff151515);
    
    var pos = s.getPosition();
    s.playSound("mp.sounds:ht.interaction.item_found", pos.x, pos.y, pos.z, 0.3, 1.3);
    
    
    if (stage == 1)
    {
       var text_title = ui.label("ПЕРВАЯ СТАДИЯ").id("text_title").background(0xff303030);
       text_title.rx(0.5).ry(0.4, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_description = ui.label("Выбор улучшения").id("text_title");
       text_description.rx(0.5).ry(0.41).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var skill1 = ui.column(5, 10);
       skill1.getCurrent().scroll().rxy(0.35, 0.43).w(240).rh(0.8);
       var text1 = skill1.text("Взаимодействие [f([a-5 сек.[f)              [7Уменьшает время отката взаимодействия c окружением");
       
       var skill2 = ui.column(5, 10);
       skill2.getCurrent().scroll().rxy(0.35, 0.52).w(250).rh(0.8);
       var text2 = skill2.text("Взаимодействие [f([a+1 ед.[f)                    [7Дополнительное очко взаимодействия перед откатом");
       
       var text_bonus = ui.label("+ Взаимодействие с электроприборами").id("text_title").background(0xff303030);
       text_bonus.rx(0.45).ry(0.66).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var text_bonus2 = ui.label("+ Возможность один раз появиться до охоты").id("text_title").background(0xff303030);
       text_bonus2.rx(0.465).ry(0.69).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var button1 = ui.button("Ок").id("button1").background(0x303030);
       button1.rxy(0.63, 0.47).wh(40, 20).anchor(0.5);
       
       var button2 = ui.button("Ок").id("button2").background(0x303030);
       button2.rxy(0.63, 0.56).wh(40, 20).anchor(0.5);
       
       gStates.setString("d_skills", "electric");
       gStates.setNumber("d_ab_VisibleCount", 1);
    }
    if (stage == 2)
    {
       var text_title = ui.label("ВТОРАЯ СТАДИЯ").id("text_title").background(0xff303030);
       text_title.rx(0.5).ry(0.4, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_description = ui.label("Выбор улучшения").id("text_title");
       text_description.rx(0.5).ry(0.41).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var skill1 = ui.column(5, 10);
       skill1.getCurrent().scroll().rxy(0.35, 0.43).w(240).rh(0.8);
       var text1 = skill1.text("Радиус звуков [f([a+3 м.[f)              [7Увеличивает радиус воспроизводимых звуков окружения");
       
       var skill2 = ui.column(5, 10);
       skill2.getCurrent().scroll().rxy(0.35, 0.52).w(240).rh(0.8);
       var text2 = skill2.text("Дистанция [f([a+2.5 м.[f)                 [7Увеличивает дистанцию взаимодействия с окружением");
       
       var text_bonus = ui.label("+ Возможность воспроизводить фразы.").id("text_title").background(0xff303030);
       text_bonus.rx(0.45).ry(0.66).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_bonus2 = ui.label("+ Возможность [cвселяться [fв охотников").id("text_title").background(0xff303030);
       text_bonus2.rx(0.45).ry(0.69).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var button1 = ui.button("Ок").id("button1").background(0x303030);
       button1.rxy(0.63, 0.47).wh(40, 20).anchor(0.5);
       
       var button2 = ui.button("Ок").id("button2").background(0x303030);
       button2.rxy(0.63, 0.56).wh(40, 20).anchor(0.5);
       
       gStates.setNumber("d_huntStartTime", gStates.getNumber("d_huntStartTime") + 200); //huntStartTime
       gStates.setNumber("d_morphCount", 1)
    }
    if (stage == 3)
    {
       var text_title = ui.label("ТРЕТЬЯ СТАДИЯ").id("text_title").background(0xff303030);
       text_title.rx(0.5).ry(0.4, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_description = ui.label("Выбор улучшения").id("text_title");
       text_description.rx(0.5).ry(0.41).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var skill1 = ui.column(5, 10);
       skill1.getCurrent().scroll().rxy(0.35, 0.43).w(220).rh(0.8);
       var text1 = skill1.text("Стресс [f([a+1 ед.[f)                     [7Увеличивает получение очков стресса с охотников");
       
       var skill2 = ui.column(5, 10);
       skill2.getCurrent().scroll().rxy(0.35, 0.52).w(230).rh(0.8);
       var text2 = skill2.text("Взаимодействие [f([a-10 сек.[f)                  [7Уменьшает время отката взаимодействия c окружением");
       
       var text_bonus = ui.label("+ Ускорение [cиссушения [fохотников в карманном измерении").id("text_title").background(0xff303030);
       text_bonus.rx(0.505).ry(0.66).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_bonus2 = ui.label("+ Возможность два раза появиться до охоты").id("text_title").background(0xff303030);
       text_bonus2.rx(0.465).ry(0.69).wh(160, 20).anchor(0.5).labelAnchor(0.5);

       var button1 = ui.button("Ок").id("button1").background(0x303030);
       button1.rxy(0.63, 0.47).wh(40, 20).anchor(0.5);
       
       var button2 = ui.button("Ок").id("button2").background(0x303030);
       button2.rxy(0.63, 0.56).wh(40, 20).anchor(0.5);
       
       gStates.setNumber("wither_startTime", gStates.getNumber("wither_startTime") - 100); //withering time
       gStates.setNumber("d_huntStartTime", gStates.getNumber("d_huntStartTime") + 200); //huntStartTime
       gStates.setNumber("d_ab_VisibleCount", 2);
    }
    if (stage == 4)
    {
       var text_title = ui.label("ЧЕТВЁРТАЯ СТАДИЯ").id("text_title").background(0xff303030);
       text_title.rx(0.5).ry(0.4, -10).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       var text_description = ui.label("Выбор улучшения").id("text_title");
       text_description.rx(0.5).ry(0.41).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var skill1 = ui.column(5, 10);
       skill1.getCurrent().scroll().rxy(0.35, 0.43).w(240).rh(0.8);
       var text1 = skill1.text("Взаимодействие [f([a-5 сек.[f)              [7Уменьшает время отката взаимодействия c окружением");
       
       var skill2 = ui.column(5, 10);
       skill2.getCurrent().scroll().rxy(0.35, 0.52).w(250).rh(0.8);
       var text2 = skill2.text("Взаимодействие [f([a+1 ед.[f)                    [7Дополнительное очко взаимодействия перед откатом");
       
       var text_bonus = ui.label("+ Возможность [cубивать [fво время охоты").id("text_title").background(0xff303030);
       text_bonus.rx(0.45).ry(0.66).wh(160, 20).anchor(0.5).labelAnchor(0.5);
       
       var button1 = ui.button("Ок").id("button1").background(0x303030);
       button1.rxy(0.63, 0.47).wh(40, 20).anchor(0.5);
       
       var button2 = ui.button("Ок").id("button2").background(0x303030);
       button2.rxy(0.63, 0.56).wh(40, 20).anchor(0.5);
       
       gStates.setNumber("d_huntStartTime", gStates.getNumber("d_huntStartTime") - 200); //huntStartTime
    }
    
    var blackscreen = mappet.createMorph("{Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Color:-16777216,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:0},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Color:0,Pose:{S:[15.0f,15.0f,15.0f]},Animation:{Animates:1b,Duration:8},Texture:\"blockbuster:textures/gui/icon.png\",Name:\"blockbuster.image\"},Duration:8.0f,EndPoint:1b}],Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
    var morph_blackscreen = ui.morph(blackscreen);
    morph_blackscreen.position(0.62, 0, 0).rotation(0, 0).distance(2).fov(70);
    morph_blackscreen.enabled(false).wh(1280, 720);
    
    s.openUI(ui);
}

function handler(c)
{

    var uiContext = c.getSubject().getUIContext();
    var data = uiContext.getData();
    var s = c.getSubject();
    var pos = s.getPosition();
    var gStates = c.getServer().getStates();
    var stage = gStates.getNumber("stage");
    
    
    if (uiContext.getLast() === "button1")
    {
        if (stage == 1)
        {
            gStates.setNumber("d_cooldown_start", gStates.getNumber("d_cooldown_start") - 100);
        }
        else if (stage == 2)
        {
            gStates.setNumber("d_soundRadius", gStates.getNumber("d_soundRadius") + 3);
        }
        else if (stage == 3)
        {
            gStates.setNumber("d_points_multiplier", gStates.getNumber("d_points_multiplier") + 1);
        }
        else if (stage == 4)
        {
            gStates.setNumber("d_cooldown_start", gStates.getNumber("d_cooldown_start") - 100);
        }
    }
    
    if (uiContext.getLast() === "button2")
    {
        if (stage == 1)
        {
            gStates.setNumber("d_cooldown_pointsStart", gStates.getNumber("d_cooldown_pointsStart") + 1);
        }
        else if (stage == 2)
        {
            gStates.setNumber("d_RayDistance", gStates.getNumber("d_RayDistance") + 2.5);
        }
        else if (stage == 3)
        {
            gStates.setNumber("d_cooldown_start", gStates.getNumber("d_cooldown_start") - 200);
        }
        else if (stage == 4)
        {
            gStates.setNumber("d_cooldown_pointsStart", gStates.getNumber("d_cooldown_pointsStart") + 1);
        }
    }
    
    s.closeUI();
    s.setupHUD("HUD_blackscreen_out");
    
    
}