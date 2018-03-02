formnum = 0
num = 1
age = "";knows="";gender="";dating="";education="";condom="";
socialmedia="";handle="";
q1 = false;q2=false;q3=false;q4=false;q5=false;q6=false;q7=false;
q8=false;q9=false;q10=false;q11=false;
$("#startbtn").click(function(){
    $("#welcome").hide(1000);
    $("#form").show("slow");
    showcomponent(0);
});


function showcomponent(num){
    switch(num){
        case 0:
            let rr = '<div class="form-frame">';
            rr += '<div class="form-cell">';
            rr += '<p class="input-text">What is your first name?</p>';
            rr += '<input type="text" class="response" id="name"/>';
            rr += '</div>';
             rr += '</div>';
            $('#form').append(rr);
            $("#name").focus();
            break;
        case 1:
            var x = $('#name').val();
            if(q1){
                 var rrr = '<div class="form-frame"  id="1" style="display: none">';
            rrr += '<div class="form-cell">';
            rrr += '<p class="input-text">' +'<span id = first>' + x +'</span>' + ', what is your last name?</p>';
            rrr += '<input type="text" class="response" id="lastname"/>';
            rrr += '</div>';
             rrr += '</div>';
                $("#1").replaceWith(rrr);
                $("#1").show();
            }else
            {
            
                var rrr = '<div class="form-frame"  id="1" style="display: none">';
            rrr += '<div class="form-cell">';
            rrr += '<p class="input-text">' +'<span id = first>' + x +'</span>' + ', what is your last name?</p>';
            rrr += '<input type="text" class="response" id="lastname"/>';
            rrr += '</div>';
             rrr += '</div>';
            $('#form').append(rrr);
            $("#1").show(1000);
            }
            $("#lastname").focus();
        break;
        case 2:
            var y = $('#lastname').val();
            var x = $('#name').val();
            if(q2){
                var rrrr = '<div class="form-frame" id="2" style="display: none">';
            rrrr += '<div class="form-cell">';
            rrrr += '<p class="input-text">'+y.toUpperCase()+','+x+' what is your email?</p>';
            rrrr += '<input type="email" class="response" id="mail"/>';
            rrrr += '</div>';
             rrrr += '</div>';
            $('#2').replaceWith(rrrr);
               $("#2").show(1000);
            }else
            {
                var rrrr = '<div class="form-frame" id="2" style="display: none">';
            rrrr += '<div class="form-cell">';
            rrrr += '<p class="input-text">'+y.toUpperCase()+','+x+' what is your email?</p>';
            rrrr += '<input type="email" class="response" id="mail"/>';
            rrrr += '</div>';
             rrrr += '</div>';
            $('#form').append(rrrr);
                $("#2").show(1000);
                q2=true
            }
            $("#mail").focus();
            break;
        case 3:
            if(q3){
                var rwr = '<div class="form-frame" id="3" style="display: none">';
            rwr += '<div class="form-cell">';
            rwr += '<p class="input-text">Select your age group</p>';
            rwr += ' <input type="radio" name="age" value="child">0-16';
            rwr += ' <input type="radio" name="age" value="adult">17+';
            rwr += '</div>';
             rwr += '</div>';
            $('#3').replaceWith(rwr);
               $("#3").show(1000); 
            }else
            {
                var rwr = '<div class="form-frame" id="3" style="display: none">';
            rwr += '<div class="form-cell">';
            rwr += '<p class="input-text">Select your age group</p>';
            rwr += ' <input type="radio" name="age" value="child">0-16';
            rwr += ' <input type="radio" name="age" value="adult">17+';
            rwr += '</div>';
             rwr += '</div>';
            $('#form').append(rwr);
               $("#3").show(1000);
                q3=true;
            }
            $("#3").focus();
            break;
        case 4:
            if(q4){
                var mm = '<div class="form-frame" id="4" style="display: none">';
                mm+='<div class="form-cell">';
                mm+='<p class="input-text">Gender</p>';
                mm+='<input type="radio" name="gender" value="male">Male  ';
                mm+='<input type="radio" name="gender" value="female">Female';
                mm+='</div>';
                mm+='</div>';
                $("#4").replaceWith(mm);
                $("#4").show(1000);
            }else
                {
                var mm = '<div class="form-frame" id="4" style="display: none">';
                mm+='<div class="form-cell">';
                mm+='<p class="input-text">Gender</p>';
                mm+='<input type="radio" name="gender" value="male">Male  ';
                mm+='<input type="radio" name="gender" value="female">Female';
                mm+='</div>';
                mm+='</div>';
                $("#form").append(mm);
                $("#4").show(1000);
                q4=true;
                }
            $("#4").focus();
            break;
        case 5:
                 if(q5){
               if(age=="child"){
                let rwwr = '<div class="form-frame" id="5" style="display: none">';
            rwwr += '<div class="form-cell">';
            rwwr += '<p class="input-text">Do you know how babies are made?</p>';
            rwwr+='<input type="radio" name="knows" value="yes">Yes ';
            rwwr+='<input type="radio" name="knows" value="no">No';
            rwwr += '</div>';
             rwwr += '</div>';
            $('#5').replaceWith(rwwr);
            }else{
             let rqqr = '<div class="form-frame" id="5" style="display: none">';
            rqqr += '<div class="form-cell">';
            rqqr += '<p class="input-text">Have you had sex before?</p>';
            rqqr+='<input type="radio" name="knows" value="yes">Yes ';
            rqqr+='<input type="radio" name="knows" value="no">No';
            rqqr += '</div>';
             rqqr += '</div>';
            $('#5').replaceWith(rqqr);
            }
            $("#5").show(1000); 
            }else
            {
                if(age=="child"){
                let rwwr = '<div class="form-frame" id="5" style="display: none">';
            rwwr += '<div class="form-cell">';
            rwwr += '<p class="input-text">Do you know how babies are made?</p>';
            rwwr+='<input type="radio" name="knows" value="yes">Yes ';
            rwwr+='<input type="radio" name="knows" value="no">No';
            rwwr += '</div>';
             rwwr += '</div>';
            $('#form').append(rwwr);
            }else
            {
             let rqqr = '<div class="form-frame" id="5" style="display: none">';
            rqqr += '<div class="form-cell">';
            rqqr += '<p class="input-text">Have you had sex before?</p>';
            rqqr+='<input type="radio" name="knows" value="yes">Yes ';
            rqqr+='<input type="radio" name="knows" value="no">No';
            rqqr += '</div>';
             rqqr += '</div>';
            $('#form').append(rqqr);
            }
            $("#5").show(1000);
            q5=true;
            }
           $("#5").focus();
            break;
        case 6:
            if(q6){
                if(age=="adult"&&knows=="yes"){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">How many sex partners do you have?</p>';
                mmm+='<input type="number" id="partners">';
                mmm+='</div>';
                mmm+='</div>';
                }else if(age=="adult"&&knows=="no"){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">Do you have a boyfriend/girlfriend?</p>';
                mmm+='<input type="radio" name="dating" value="yes">Yes ';
                mmm+='<input type="radio" name="dating" value="no">No';
                mmm+='</div>';
                mmm+='</div>';
                }else if(age=="child"&&(knows=="yes"||knows=="no")){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">Have you recieved sex education?</p>';
                mmm+='<input type="radio" name="education" value="yes">Yes ';
                mmm+='<input type="radio" name="education" value="no">No';
                mmm+='</div>';
                mmm+='</div>';
                }
                $("#6").replaceWith(mmm);
                $("#6").show(1000);
            }else{
                 if(age=="adult"&&knows=="yes"){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">How many sex partners do you have?</p>';
                mmm+='<input type="number" id="partners">';
                mmm+='</div>';
                mmm+='</div>';
                
                }else if(age=="adult"&&knows=="no"){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">Do you have a boyfriend/girlfriend?</p>';
                mmm+='<input type="radio" name="dating" value="yes">Yes ';
                mmm+='<input type="radio" name="dating" value="no">No';
                mmm+='</div>';
                mmm+='</div>';
                
                }else if(age=="child"&&(knows=="yes"||knows=="no")){
                var mmm='<div class="form-frame" id="6" style="display: none">';
                mmm+='<div class="form-cell">';
                mmm+='<p class="input-text">Have you recieved sex education?</p>';
                mmm+='<input type="radio" name="education" value="yes">Yes ';
                mmm+='<input type="radio" name="education" value="no">No';
                mmm+='</div>';
                mmm+='</div>';
                }
                $("#form").append(mmm);
                $("#6").show(1000);
                
                q6=true;
            }
            $("#6").focus();
            break;
        case 7:
            if(q7){
            if(dating=="yes"||dating=="no"){
            var mr ='<div class="form-frame" id="7" style="display: none">';
                mr+='<div class="form-cell">'; 
                mr+='<p class="input-text">do you know about condoms?</p>';
                mr+='<input type="radio" name="condom" value="yes">Yes  ';
                mr+='<input type="radio" name="condom" value="no">No'
                mr+='</div>';
                mr+='</div>';
                $("#7").replaceWith(mr);
                } 
                else if(Number($("#partners").val())>=1){
                var mr ='<div class="form-frame" id="7" style="display: none">';
                mr+='<div class="form-cell">'; 
                mr+='<p class="input-text">do you use condom during sex?</p>';
                mr+='<input type="radio" name="condom" value="yes">Yes  ';
                mr+='<input type="radio" name="condom" value="no">No'
                mr+='</div>';
                mr+='</div>';
                $("#7").replaceWith(mr);
                }
                else if(education=="yes"||education=="no")
                {
                var res = '<div class="form-frame" id="7" style="display: none">';
        res+='<div class="form-cell"> ';
        res+='<p class="input-text">Where did you hear of the survey from?</p>' ;
        res+= '<input type="radio" name="socialmedia" value="fb">Facebook<br><br>';
            res+='<input type="radio" name="socialmedia" value="tweet">Twitter<br><br>';
            res+='<input type="radio" name="socialmedia" value="ig">Instagram<br><br>';
        res+='</div>';
        res+='</div>';
             $("#7").replaceWith(res);   
            }
            $("#7").show(1000);
            }else
            {
                 if(dating=="yes"||dating=="no"){
            var mr ='<div class="form-frame" id="7" style="display: none">';
                mr+='<div class="form-cell">'; 
                mr+='<p class="input-text">do you know about condoms?</p>';
                mr+='<input type="radio" name="condom" value="yes">Yes  ';
                mr+='<input type="radio" name="condom" value="no">No';
                mr+='</div>';
                mr+='</div>';
                $("#form").append(mr);
            }else if(Number($("#partners").val())>=1)
            {
                var mr ='<div class="form-frame" id="7" style="display: none">';
                mr+='<div class="form-cell">'; 
                mr+='<p class="input-text">do you use condom during sex?</p>';
                mr+='<input type="radio" name="condom" value="yes">Yes  ';
                mr+='<input type="radio" name="condom" value="no">No';
                mr+='</div>';
                mr+='</div>';
                $("#form").append(mr);
                
            }else if(education=="yes"||education=="no"){
        var res = '<div class="form-frame" id="7" style="display: none">';
        res+='<div class="form-cell">';
        res+='<p class="input-text">Where did you hear of the survey from?</p>'; 
        res+= '<input type="radio" name="socialmedia" value="fb">Facebook<br><br>';
            res+='<input type="radio" name="socialmedia" value="tweet">Twitter<br><br>';
            res+='<input type="radio" name="socialmedia" value="ig">Instagram<br><br>';
        res+='</div>';
        res+='</div>';
                $("#form").append(res);
            }
                
                $("#7").show(1000);
                
                q7=true;
            }
            $("#7").focus();
            break;
        case 8:
            if(q8){
               if(condom=="yes"||condom=="no"){
                    var res = '<div class="form-frame" id="8" style="display: none">';
        res+='<div class="form-cell"> ';
        res+='<p class="input-text">Where did you hear of the survey from?</p>' ;
        res+= '<input type="radio" name="socialmedia1" value="fb">Facebook<br><br>';
            res+='<input type="radio" name="socialmedia1" value="tweet">Twitter<br><br>';
            res+='<input type="radio" name="socialmedia1" value="ig">Instagram<br><br>';
        res+='</div>';
        res+='</div>';
                   $("#8").replaceWith(res);
               }else if(socialmedia=="fb"){
               var sm = '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
           sm+= '<p class="input-text">What is your facebook username?</p>';
        sm+='<input type="text" class="response" name="handles" id="fbpg"/>';
        sm+='</div>'; 
        sm+='</div>';
                $("#8").replaceWith(sm);
            }else if(socialmedia=="tweet"){
             var sm=   '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your twitter handle?</p>';
         sm+=   '<input type="text" class="response" name="handles" id="twtpg"/>';
        sm+='</div>'; 
        sm+='</div>';
               $("#8").replaceWith(sm); 
            }else if(socialmedia=="ig"){
         var sm=     '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your instagram username?</p>';
          sm+=  '<input type="text" class="response" name="handles" id="igpg"/>';
        sm+='</div>'; 
        sm+='</div>';
             $("#8").replaceWith(sm);   
            }
                $("#8").show(1000);
            }else{
                 if(condom=="yes"||condom=="no"){
                    var res = '<div class="form-frame" id="8" style="display: none">';
        res+='<div class="form-cell"> ';
        res+='<p class="input-text">Where did you hear of the survey from?</p>' ;
        res+= '<input type="radio" name="socialmedia1" value="fb">Facebook<br><br>';
            res+='<input type="radio" name="socialmedia1" value="tweet">Twitter<br><br>';
            res+='<input type="radio" name="socialmedia1" value="ig">Instagram<br><br>';
        res+='</div>';
        res+='</div>';
                   $("#form").append(res);
               } 
            if(age=="child"){
                if(socialmedia=="fb"){
               var sm = '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
           sm+= '<p class="input-text">What is your facebook username?</p>';
        sm+='<input type="text" class="response" name="handles" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
            }else if(socialmedia=="tweet"){
             var sm=   '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your twitter handle?</p>';
         sm+=   '<input type="text" class="response" name="handles" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>'; 
            }else if(socialmedia=="ig"){
         var sm=     '<div class="form-frame" id="8" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your instagram username?</p>';
          sm+=  '<input type="text" class="response" name="handles" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
                
            }
             $("#form").append(sm); 
            }
                $("#8").show(1000);

                q8=true;
            }
            $("#8").focus();
            $('[name="handles"]').focus();
            break;
        case 9:
            if(q9){
                    if(socialmedia=="fb"){
               var sm = '<div class="form-frame" id="9" style="display: none">';
        sm+='<div class="form-cell">';
           sm+= '<p class="input-text">What is your facebook username?</p>';
        sm+='<input type="text" class="response" name="handles1" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
            $("#9").replaceWith(sm);    
            }else if(socialmedia=="tweet"){
             var sm=   '<div class="form-frame" id="9" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your twitter handle?</p>';
         sm+=   '<input type="text" class="response" name="handles1" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
            $("#9").replaceWith(sm);    
            }else if(socialmedia=="ig"){
         var sm=     '<div class="form-frame" id="9" style="display: none">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your instagram username?</p>';
          sm+=  '<input type="text" class="response" name="handles1" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
                $("#9").replaceWith(sm);
            }else if(age=="child"){
                var feed ='<div class="form-frame" id="9" style="display: none">';
        feed+='<div class="form-cell">';
            feed+='<p class="input-text">Tell us a bit about what you know about sex education</p>';
            feed+='<textarea rows="3" cols="75" class="response" id="textfeed"></textarea>';
        feed+='</div>';
        feed+='</div>';
            $("#9").replaceWith(feed);
            }
                $("#9").show(1000);
            }else{
             if(age=="adult"){
                    if(socialmedia=="fb"){
               var sm = '<div class="form-frame" id="9" style="display: none">';
        sm+='<div class="form-cell">';
           sm+= '<p class="input-text">What is your facebook username?</p>';
        sm+='<input type="text" class="response" name="handles1" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
                
            }else if(socialmedia=="tweet"){
             var sm=   '<div class="form-frame" id="9" style="display: none" name="handles1">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your twitter handle?</p>';
         sm+=   '<input type="text" name="handles1" class="response" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
                
            }else if(socialmedia=="id"){
         var sm=     '<div class="form-frame" id="9" style="display: none" name="handles1">';
        sm+='<div class="form-cell">';
         sm+=   '<p class="input-text">What is your instagram username?</p>';
          sm+=  '<input type="text" class="response" id="smhand"/>';
        sm+='</div>'; 
        sm+='</div>';
            }
                 $("#form").append(sm);
                }
            if(age=="child"){
                var feed ='<div class="form-frame" id="9" style="display: none">';
        feed+='<div class="form-cell">';
            feed+='<p class="input-text">Tell us a bit about what you know about sex education</p>';
            feed+='<textarea rows="3" cols="75" class="response" id="textfeed"></textarea>';
        feed+='</div>';
        feed+='</div>';
                $("#form").append(feed);
            }
                $("#9").show(1000);
                q9=true;
            }
            $("#9").focus();
            $("#textfeed").focus();
            $('#smhand').focus();
            break;
        case 10:
            if(q10){
                var ends = '<div class="form-frame form-cell" id="10" style="display: none">';
         ends+=   '<input type="checkbox" name="subscription">do you agree to us contacting you further and submit?';
        ends+='</div>';
                $("#10").replaceWith(ends);
                $("#10").show(1000);
            }else
            {
            var ends = '<div class="form-frame form-cell" id="10" style="display: none">';
         ends+=   '<input type="checkbox" name="subscription">do you agree to us contacting you further and submit?';
        ends+='</div>';
                $("#form").append(ends);
                $("#10").show(1000);
                q10=true;
            }
            $("#10").focus();
            break;
    }
    
    $("#name").on({
        keypress: function(e){
            if(e.which == 13){
            let x1 = $("#name").val()
       if(x1.length>3){
        formnum = 1;
      showcomponent(formnum);
       }
            }
        } , mousedown: function(){
            removeComponent(0);
        }
    });
    
    $('#lastname').on({
        change : function(){
        let x2 =  $('#lastname').val();
        if(x2.length > 3){
            formnum = 2;
     showcomponent(formnum); 
        }
        }, mousedown: function(){
            removeComponent(1);
        }
    });
    
    $("#mail").on({
        change : function(){
            var x = $("#mail").val();
            if(x.includes("@")&&x.endsWith(".com")){
                formnum=3;
                showcomponent(formnum);
            }
        }, mousedown: function(){
            age=""
            removeComponent(2);
        }
    });
    
    $('[name ="age"]').on({
    change: function(){
        let v =$('[name ="age"]:checked').val();
        if(age==""){
            age=v;
            formnum=4;
            showcomponent(formnum);
        }else{
            age=v;
            removeComponent(3);
            formnum=4;
            showcomponent(formnum);
        }
      
        
        }
    });
    
        $('[name ="gender"]').on({
    change: function(){
        let v1 =$('[name ="gender"]:checked').val();
        if(gender==""){
            gender=v1;
            formnum=5;
            showcomponent(formnum);
        }else{
            gender=v1;
            removeComponent(4);
            formnum=5;
            showcomponent(formnum);
        }
      
        
        }
    });
    
      $('[name ="knows"]').on({
    change: function(){
        let v2 =$('[name ="knows"]:checked').val();
        if(knows==""){
            knows=v2;
            formnum=6;
            showcomponent(formnum);
        }else{
            knows=v2;
            removeComponent(5);
            formnum=6;
            showcomponent(formnum);
        }
      
        
        }
    });
    
    $("#partners").on({
        keypress: function(e){
            if(e.which == 13){
        formnum = 7;
      showcomponent(formnum);
            }
        } , mousedown: function(){
            removeComponent(6);
        }
    });
    
          $('[name ="dating"]').on({
    change: function(){
        let v3 =$('[name ="dating"]:checked').val();
        if(dating==""){
            dating=v3;
            formnum=7;
            showcomponent(formnum);
        }else{
            dating=v3;
            removeComponent(6);
            formnum=7;
            showcomponent(formnum);
        }
      
        
        }
    });
    
              $('[name ="education"]').on({ change: function(){
        let v4 =$('[name ="education"]:checked').val();
        if(education==""){
          education=v4;
            formnum=7;
            showcomponent(formnum);
        }else{
            education=v4;
            removeComponent(6);
            socialmedia="";
            formnum=7;
            showcomponent(formnum);
        }
      
        
        }
    });
    
              $('[name ="condom"]').on({change: function(){
        let v5 =$('[name ="condom"]:checked').val();
        if(condom==""){
            condom=v5;
            formnum=8;
            showcomponent(formnum);
        }else{
            condom=v5;
            removeComponent(7);
            socialmedia="";
            formnum=8;
            showcomponent(formnum);
        }
      
        
        }
    });
    
              $('[name ="socialmedia"]').on({
    change: function(){
        let v6 =$('[name ="socialmedia"]:checked').val();
        if(socialmedia==""){
            socialmedia=v6;
            formnum=8;
            showcomponent(formnum);
        }else{
            socialmedia=v6;
            removeComponent(7);
            formnum=8;
            showcomponent(formnum);
        }
      
        
        }
    });
    
              $('[name ="socialmedia1"]').on({
    change: function(){
        let v7 =$('[name ="socialmedia1"]:checked').val();
        if(socialmedia==""){
            socialmedia=v7;
            formnum=9;
            showcomponent(formnum);
        }else{
            socialmedia=v7;
            removeComponent(8);
            formnum=9;
            showcomponent(formnum);
        }
      
        
        }
    });
    
    $('[name ="handles"]').on({
        keypress: function(e){
            if(e.which == 13){
        formnum = 9;
        handle =$('[name ="handles"]').val();
        showcomponent(formnum)
                console.log(age);
            }
        } , mousedown: function(){
            removeComponent(8);
        }
    });

    $('[name ="handles1"]').on({
        keypress: function(e){
            if(e.which == 13){
        handle =$('[name ="handles1"]').val();
        formnum = 10;
        showcomponent(formnum)
                
            }
        } , mousedown: function(){
            removeComponent(9);
        }
    });
    
    $("#textfeed").on({
        mouseout: function(){
            formnum=10;
            showcomponent(formnum);
        }, mousedown: function(){
            removeComponent(9)
        }
    })
    
     $('[name ="subscription"]').on({
        change: function(){
            $("#form").hide("fast");
            $("#exit").show("slow");
    }
     });
    
                      }
/**remove components below a particular component*/                      
function removeComponent(num){
    var i = num +1;
    var j=num+1
    while(i <= formnum+1){
        s ="#"+i;
        $(s).hide(500)
//        $(s).remove();
        i++;
    }
    formnum=num
    


//$("#lastname").on("click",function(){
//    removeComponent(1);
//});
}


