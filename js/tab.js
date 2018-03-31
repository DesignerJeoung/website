$(document).ready(function(){
    'use strict';
    
    $('ul li').on('click', function(){
        var tab_data = $(this).data('tab');
        $(this).addClass('active').siblings().removeClass('active');
        
        $(tab_data).show().siblings().hide();
    })
    
    $('.tabs-menu li:nth-child(1)').mouseover(function(){
        $('.nav-underline').css('left','24px')  
    })
    
    $('.tabs-menu li:nth-child(2)').mouseover(function(){
        $('.nav-underline').css('left','122px')  
    })
    
    $('.tabs-menu li:nth-child(3)').mouseover(function(){
        $('.nav-underline').css('left','230px')  
    })
    
    $('.tabs-menu li:nth-child(4)').mouseover(function(){
        $('.nav-underline').css('left','330px')  
    })
    
    
    
})