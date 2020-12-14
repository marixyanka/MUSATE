function readMore(arr1,arr2,arr3){
    var more = document.getElementById(arr1);
    var more2 = document.getElementById(arr2);
    var btn = document.getElementById(arr3);
    if(more.style.display ==="inline"){
        btn.innerHTML="Подробнее";
        more.style.display="none";
        more2.style.display="none";
    }
    else{
        btn.innerHTML="Скрыть";
        more.style.display="inline";
        more2.style.display="inline";
    }
}
function show(ar1,arr2,state)
{
document.getElementById("window").style.display = state;
document.getElementById(arr2).style.display = state;
document.getElementById(ar1).style.display = state;
document.getElementsByClassName("close").style.display = state;

}
function show22(ar2,ar1,arr2,state)
{
document.getElementById("window").style.display = state;
document.getElementById(arr2).style.display = state;
document.getElementById(ar1).style.display = state;
document.getElementById(ar2).style.display = "block";

}

                 
$(document).ready(function() {
    var RBStickyNav = $('#nav').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > RBStickyNav) {
            $('#nav').css("top","0");
            $('#nav').addClass('RBSticky');
            $('.burger-menu_nav').css('position','fixed');
        } else {
            $('#nav').removeClass('RBSticky');
            $('.burger-menu_nav').css('position','absolute');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});


function burgerMenu(selector) {
    let menu = $(selector);
    let button = $('.burger-menu_button');
    let links = $('.burger-menu_link');
    let overlay = $('.burger-menu_overlay');
    button.on('click',(e)=>{
        e.preventDefault();
        toggleMenu();
    });
  if(button.onclick){
      links.css('display','flex')
  }
    function toggleMenu(){
        menu.toggleClass('burger-menu_active');

        if(menu.hasClass('burger-menu_active')){
            
            $('.burger-menu_nav').css('display','flex');

        }else{
           
            $('.burger-menu_nav').css('display','none');
        }

    }
}
burgerMenu('.burger-menu');
function show2(state)
{
document.getElementById('maps').style.display = state;
document.getElementById('gray2').style.display = state   }




    var RBStickyNav1 = $('#begin').offset().top;
    var RBStickyNav2 = $('#begin2').offset().top;
    var RBStickyNav3 = $('#begin3').offset().top;
    var RBStickyNav4 = $('#begin4').offset().top;
    $(document).ready(function() {

        var RBStickyNav1 = $('.begin').offset().top;
        var RBStickyNav2 = $('.begin2').offset().top;
        var RBStickyNav3 = $('.begin3').offset().top;
        var RBStickyNav4 = $('.begin4').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >RBStickyNav1-100 ) {
                $('.burger-menu_nav').css('background-color','rgb(250, 128, 114)');
                $('.burger-menu_link').css('color','rgb(139, 0, 0)');
            } if (scrollTop>RBStickyNav2-100) {
                $('.burger-menu_nav').css('background-color','rgb(139, 0, 0)');
                $('.burger-menu_link').css('color','rgb(250, 128, 114)');
            } 
            if (scrollTop > RBStickyNav3-100) {
                $('.burger-menu_nav').css('background-color','rgb(245, 245, 245)');
                $('.burger-menu_link').css('color','rgb(139, 0, 0)');
            } 
            if (scrollTop > RBStickyNav4-100) {
                $('.burger-menu_nav').css('background-color','black');
                $('.burger-menu_link').css('color','rgb(250, 128, 114)');
            } 
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });