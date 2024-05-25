function main(c)
{
    var ui = mappet.createUI(c, "handler").background();
    
    var backdrop = ui.graphics().id("backdrop");
    backdrop.rxy(0.5, 0.48).wh(80, 110).anchor(0.5);
    backdrop.rect(0, 0, 80, 110, 0x88000000);
    
    var text = ui.label("\u0412\u042b\u0411\u041e\u0420 \u042d\u0422\u0410\u0416\u0410").id("label");
    text.rx(0.5).ry(0.358, 25).wh(160, 20).anchor(0.5).labelAnchor(0.5);
    
    var first = ui.button("1").id("1").background(0x424242);
    var zero = ui.button("0").id("0").background(0x424242);
    var basement = ui.button("-1").id("-1").background(0x424242);
    
      var elevator_currentFloor = c.getServer().getStates().getNumber("elevator_currentFloor");
      if (elevator_currentFloor == 1)
      {
          var first = ui.button("1").id("1").background(0x424242).enabled(false);
      }
      else if (elevator_currentFloor == 0)
      {
          var zero = ui.button("0").id("0").background(0x424242).enabled(false);
      }
      else if (elevator_currentFloor == -1)
      {
          var basement = ui.button("-1").id("-1").background(0x424242).enabled(false);
      }

    first.rxy(0.5, 0.45).wh(60, 20).anchor(0.5);
    zero.rxy(0.5, 0.50).wh(60, 20).anchor(0.5);
    basement.rxy(0.5, 0.55).wh(60, 20).anchor(0.5);
    c.getSubject().openUI(ui);
}

function handler(c)
{
    var s = c.getSubject();
    var pos = s.getPosition();
    var states = c.getServer().getStates();
    var uiContext = c.getSubject().getUIContext();
    s.closeUI();
    s.swingArm();
    
    
    function floor0close()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_close", 5, 14, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_ride", 5, 14, 8, 0.5, 1.0);
        c.executeCommand("/fill 5 15 11 6 15 11 barrier");
        c.executeCommand("/setblock 5 16 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 16 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 16 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 16 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 15 11 ht:elevatordoorr 3");
            context.executeCommand("/setblock 5 15 11 ht:elevatordoorl 3");
            //context.executeCommand("/setblock 5 16 11 air");
            //context.executeCommand("/setblock 6 16 11 air");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 16 11 air");
                 context.executeCommand("/setblock 6 16 11 air");
              });
         });
    }
    function floor0open()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_open", 5, 14, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_bell", 5, 14, 11, 0.5, 1.0);
        c.executeCommand("/fill 5 15 11 6 15 11 barrier");
        c.executeCommand("/setblock 5 16 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 16 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 16 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 16 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 15 11 ht:elevatordoorropen 3");
            context.executeCommand("/setblock 5 15 11 ht:elevatordoorlopen 3");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 16 11 air");
                 context.executeCommand("/setblock 6 16 11 air");
              });
         });
    }
    function floorMinus1open()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_open", 5, 8, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_bell", 5, 8, 11, 0.5, 1.0);
        c.executeCommand("/fill 5 9 11 6 9 11 barrier");
        c.executeCommand("/setblock 5 10 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 10 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 10 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 10 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 9 11 ht:elevatordoorropen 3");
            context.executeCommand("/setblock 5 9 11 ht:elevatordoorlopen 3");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 10 11 air");
                 context.executeCommand("/setblock 6 10 11 air");
              });
         });
    }
    function floorMinus1close()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_close", 5, 8, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_ride", 5, 8, 8, 0.5, 1.0);
        c.executeCommand("/fill 5 9 11 6 9 11 barrier");
        c.executeCommand("/setblock 5 10 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 10 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 10 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 10 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 9 11 ht:elevatordoorr 3");
            context.executeCommand("/setblock 5 9 11 ht:elevatordoorl 3");
            //context.executeCommand("/setblock 5 16 11 air");
            //context.executeCommand("/setblock 6 16 11 air");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 10 11 air");
                 context.executeCommand("/setblock 6 10 11 air");
              });
         });
    }
    function floor1close()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_close", 5, 20, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_ride", 5, 20, 8, 0.5, 1.0);
        c.executeCommand("/fill 5 21 11 6 21 11 barrier");
        c.executeCommand("/setblock 5 22 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 22 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 22 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 22 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 21 11 ht:elevatordoorr 3");
            context.executeCommand("/setblock 5 21 11 ht:elevatordoorl 3");
            //context.executeCommand("/setblock 5 16 11 air");
            //context.executeCommand("/setblock 6 16 11 air");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 22 11 air");
                 context.executeCommand("/setblock 6 22 11 air");
              });
         });
    }
    function floor1open()
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_open", 5, 20, 11, 0.5, 1.0);
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_bell", 5, 20, 11, 0.5, 1.0);
        c.executeCommand("/fill 5 21 11 6 21 11 barrier");
        c.executeCommand("/setblock 5 22 11 blockbuster:model");
        c.executeCommand("/modelblock morph 5 22 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorlopen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.executeCommand("/setblock 6 22 11 blockbuster:model");
        c.executeCommand("/modelblock morph 6 22 11 {Loop:1,List:[{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:0},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[-14.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:0.0f,EndPoint:0b},{Random:0.0f,SetDuration:0b,Morph:{Animation:{Interp:21,Animates:1b,Duration:20},Skin:\"b.a:empty/skins/texture.png\",CustomPose:{Size:[1.0f,1.0f,1.0f],Poses:{cube:{P:[0.0f,-16.0f,0.0f],R:[0.0f,180.0f,0.0f]}}},BodyParts:[{T:[0.0f,-0.5f,0.0f],Limb:\"cube\",Morph:{Name:\"item\",Stack:{id:\"ht:elevatordoorropen\",Count:1b,Damage:0s}}}],Settings:{Hands:1b},Name:\"blockbuster.empty\"},Duration:20.0f,EndPoint:0b}],Settings:{Hands:1b},Name:\"sequencer\",Offset:[0.0f,0.0f,0.0f]}");
        c.scheduleScript(20, function (context)
         {
            context.executeCommand("/setblock 6 21 11 ht:elevatordoorropen 3");
            context.executeCommand("/setblock 5 21 11 ht:elevatordoorlopen 3");
             c.scheduleScript(1, function (context)
              {
                 context.executeCommand("/setblock 5 22 11 air");
                 context.executeCommand("/setblock 6 22 11 air");
              });
         });
    }
    
    
    if (uiContext.getLast() === "1")
    {
      states.setNumber("elevator_nextfloor", 1);
    }
    else if (uiContext.getLast() === "0")
    {
        states.setNumber("elevator_nextfloor", 0);
    }
    else if (uiContext.getLast() === "-1")
    {
        states.setNumber("elevator_nextfloor", -1);
    }


    if (states.getNumber("elevator_nextfloor") == 1)
    {
       c.getWorld().playSound("mp.sounds:ht.elevator.elevator_button", pos.x, pos.y, pos.z, 0.3, 1.0);
       states.setNumber("elevator_nextfloor", -2);
       if (states.getNumber("elevator_currentFloor") == 0)
       {
           floor0close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       else if (states.getNumber("elevator_currentFloor") == -1)
       {
           floorMinus1close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose1 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       c.getServer().getStates().setNumber("elevator_currentFloor", 1)
             c.scheduleScript(80, function (context)
              {
                 teleport();
                 setTableFloor();
              });
             c.scheduleScript(100, function (context)
              {
                 floor1open();
                 setPanelOff();
              });
    }
    else if (states.getNumber("elevator_nextfloor") == 0)
    {
       c.getWorld().playSound("mp.sounds:ht.elevator.elevator_button", pos.x, pos.y, pos.z, 0.3, 1.0);
       states.setNumber("elevator_nextfloor", -2);
       //checkfloor
       if (states.getNumber("elevator_currentFloor") == -1)
       {
           floorMinus1close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       else if (states.getNumber("elevator_currentFloor") == 1)
       {
           floor1close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose2 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       c.getServer().getStates().setNumber("elevator_currentFloor", 0)
             c.scheduleScript(80, function (context)
              {
                 teleport();
                 setTableFloor();
              });
             c.scheduleScript(100, function (context)
              {
                 floor0open();
                 setPanelOff();
              });
    }
    else if (states.getNumber("elevator_nextfloor") == -1)
    {
        c.getWorld().playSound("mp.sounds:ht.elevator.elevator_button", pos.x, pos.y, pos.z, 0.3, 1.0);
        states.setNumber("elevator_nextfloor", -2);
       //checkfloor
       if (states.getNumber("elevator_currentFloor") == 0)
       {
           floor0close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       else if (states.getNumber("elevator_currentFloor") == 1)
       {
           floor1close();
           c.executeCommand("/setblock 5 21 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 5 15 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 5 9 10 ht:elevatorpanelchoose3 5")
           c.executeCommand("/setblock 4 21 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 15 12 ht:elevatorbuttonactive 3")
           c.executeCommand("/setblock 4 9 12 ht:elevatorbuttonactive 3")
       }
       
       c.getServer().getStates().setNumber("elevator_currentFloor", -1)
             c.scheduleScript(80, function (context)
              {
                 teleport();
                 setTableFloor();
              });
             c.scheduleScript(100, function (context)
              {
                 floorMinus1open();
                 setPanelOff();
              });
       
    }
    
    function teleport()
    {
           var nextfloor = states.getNumber("elevator_currentFloor");
           var entity = c.getServer().getEntities("@e");
           for (var i in entity)
           {
              if (entity[i].isInArea(4, 16, 8, 7, 14, 11)) //0 floor
              {
                 var pos = entity[i].getPosition();
                 if (nextfloor == -1)
                 {
                     entity[i].setPosition(pos.x, pos.y-6, pos.z);
                 }
                 else if (nextfloor == 1)
                 {
                     entity[i].setPosition(pos.x, pos.y+6, pos.z);
                 }
              }
              else if (entity[i].isInArea(4, 8, 8, 7, 10, 11)) //-1 floor
              {
                 var pos = entity[i].getPosition();
                 if (nextfloor == 0)
                 {
                     entity[i].setPosition(pos.x, pos.y+6, pos.z);
                 }
                 else if (nextfloor == 1)
                 {
                     entity[i].setPosition(pos.x, pos.y+12, pos.z);
                 }
              }
              else if (entity[i].isInArea(4, 20, 8, 7, 22, 11)) //1 floor
              {
                 var pos = entity[i].getPosition();
                 if (nextfloor == 0)
                 {
                     entity[i].setPosition(pos.x, pos.y-6, pos.z);
                 }
                 else if (nextfloor == -1)
                 {
                     entity[i].setPosition(pos.x, pos.y-12, pos.z);
                 }
              }
           }
    }
    function setTableFloor()
    {
        c.executeCommand("/modelblock morph 6 23 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
        c.executeCommand("/modelblock morph 6 17 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
        c.executeCommand("/modelblock morph 6 11 12 {Lighting:0b,Color:16711680,Label:\""+states.getNumber("elevator_currentFloor")+"\",Settings:{Hands:1b},Name:\"label\"}");
    }
    function setPanelOff()
    {
        c.executeCommand("/setblock 5 21 10 ht:elevatorpanel 5")
        c.executeCommand("/setblock 5 15 10 ht:elevatorpanel 5")
        c.executeCommand("/setblock 5 9 10 ht:elevatorpanel 5")
        c.executeCommand("/setblock 4 21 12 ht:elevatorbutton 3")
        c.executeCommand("/setblock 4 15 12 ht:elevatorbutton 3")
        c.executeCommand("/setblock 4 9 12 ht:elevatorbutton 3")
    }
}