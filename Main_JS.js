$(document).ready(function() {
    var RBStickyNav = $('#nav').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > RBStickyNav) {
            $('#nav').css("top","0");
            $('#nav').addClass('RBSticky');
        } else {
            $('#nav').removeClass('RBSticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});

function down()
{
  var a = document.getElementById('submenu');
  if ( a.style.display == 'none' )
    a.style.display = 'block';
  else
    if ( a.style.display == 'block' )
    a.style.display = 'none';
};

function shadow(id){
var el=document.getElementById(id);
if(el.style.display == "block")
el.style.display="none";
else
el.style.display="block";
}
        function show(state)
        {
    document.getElementById('window').style.display = state;
     document.getElementById('gray').style.display = state   }
     function show2(state)
     {
 document.getElementById('maps').style.display = state;
  document.getElementById('gray2').style.display = state   }

var audio = document.createElement('audio');
audio.innerHTML = "<source src=\"mixail.mp3\" type=\"audio/mpeg\">";

function shadow2(id){
    var el=document.getElementById(id);
    document.body.appendChild(audio);
    if(el.style.display == "block"){
     audio.pause();
    el.style.display="none";
    }
    else{
    el.style.display="block";
    audio.play();}
}


    function test(){
        var audio = document.createElement('audio');
        audio.setAttribute("autoplay","true");
        audio.innerHTML = "<source src=\"Main/muzic/Sound_22358.mp3\" type=\"audio/mpeg\">";
        document.body.appendChild(audio);
    }

    function fun1() {
        alert("                                        "+"Добро пожаловать!"+"\n"+document.forms[0].name1.value+" "+document.forms[0].name2.value+","+"ваша регистрация прошла успешно, в течении некоторого времени вы сможете зайти на сайт, как зарегестрированный пользователь.");
        }