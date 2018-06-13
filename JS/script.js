$(document).ready(function(){

$('.kolko').mouseenter(function(){
    $(this).addClass('najechane');
    $(this).prevAll().addClass('najechane');
    });   
$('.kolko').mouseleave(function(){
    $(this).removeClass('najechane');
    $(this).prevAll().removeClass('najechane');
    });   




    
    // $('.kolko').dbclick(function(){
    //     (target).prevAll().removeClass('wybrane');
    //     (target).removeClass('wybrane');
    
  
$('.kolko').click(function(){
    var isClick = $(this).attr('atrybut');
    $('.kolko').removeClass('wybrane');
    $('.kolko').removeAttr('atrybut');
    var target=$(this);
    var miarka=$('.miarka');

    if(isClick != 'ok')
    {
        var index=miarka.children().index(target);
        var pozycja=miarka.children().get(index);
        var pozycjaValid= $(pozycja);
        pozycjaValid.prevAll().addClass('wybrane');
        target.addClass('wybrane');
        target.attr('atrybut','ok');
    }

});
    

   
    



  

    // $('#display').text('numer'+ (index+1));



//     $(this).addClass('wybrane');
//     $(this).prevAll().addClass('wybrane');
//     });
// $('.kolko').doubleclick(function(){
//     $(this).removeClass('wybrane');
//     $(this).prevAll().removeClass('wybrane');
  
    
    
//  $('.najechane').click(function(){
//  $(this).removeClass('najechane');

// $('.kolko').toggle(function(){
//     $('.najechane').attr('style','background-color:green');
//     }), function(){
//      $('.najechane').attr('style','background-color:none');   
//     };
// $('.kolko').mouseleave(function(){
//     $(this).attr('style','background-color: none');
//     });

});
