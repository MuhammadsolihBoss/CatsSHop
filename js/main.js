$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.main-menu').css('display' , 'block');
    })
    $('.fa-times').click(function(){
        $('.main-menu').css('display' , 'none');
    })
    $('.card-like').click(function(){
        $(this).toggleClass('card-like-1');
    })

    $('.totop').tottTop({
        duration: 1000 ,
        scrtollTopBtnDuration: 400,
        scrollTop: 100
    });


    $("select#cost").change(function(){
        let  costCalculation = $(this).children("option:selected").val();
        let sum = $('.sum').text();
        
        // $('.sum').each(function(index){
        //     let sumText = $('.sum').text();
        //     let sumTextIndex = sumText[0];
        //     if(costCalculation == sumTextIndex ) console.log('ishladi')
        //     else console.log('none')
        // })

        // let arrayCost = [];

        // $('.sum').each(function(){
        //     let sumText = $(this).text();
        //     let sumTextIndex = sumText[0];
        //     arrayCost.push(sumTextIndex);
        // })
        
        // for(let key of arrayCost){
        //     if(costCalculation == key ){
        //         let a = $('.card');
        //         let b = $(key).parent();
        //         if(a.has(b)) console.log('ishladi')
        //         else console.log('none')
        //     }
        // }
        


        // if(costCalculation == sum) console.log('ishladi')
        // else console.log('ishlamadi')
    });
        
})