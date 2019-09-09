
(function ($) {
    $.fn.ftav = function(options) {

        if(options.amount > options.effects.length) {
            console.log(">>> AMOUNT parameter is bigger then number of effects in EFFECTS ARRAY <<<");
            return;
        }

        // Setup setting
        let settings = $.extend({
            amount: options.amount,
            effects: options.effects
        }, options);

        // Setup main avatar
        $(this).addClass('ftav__avatar');

        //Make sure it is square
        let av_width = $(this).width();
        
        if($(this).height() != av_width) {
            $(this).css('height', av_width+"px");
        }

        

        // Setup avatar container
        let ftavContainer = $(this).parent();
        ftavContainer.addClass('ftav__container');

        let ftavEffects = '';
        

        for(let i=0; i<settings.amount; i++) {
            let max_stroke_width = 10;
            if(max_stroke_width < settings.effects[i].width) {
                max_stroke_width = settings.effects[i].width - 1;
            }
            let r = (i+1)*max_stroke_width + av_width/2;
            let style = "stroke-width: "+ settings.effects[i].width 
            +"px; stroke: "+ settings.effects[i].color 
            +"; stroke-dasharray: "+ settings.effects[i].dasharray 
            +"%; stroke-dashoffset: "+ settings.effects[i].dashopffset 
            +"%; animation-duration: "+ settings.effects[i].duration +"s;";
            ftavEffects += "<circle r='"+ r +"' cx='750' fill='transparent' cy='400' class='ef' style='z-index: 90; "+ style +"'></circle>"
        }

        $('<svg class="stage">' + ftavEffects + '</svg>').insertBefore($(this));
        return; 
    };
}(jQuery));

$(document).ready(function() {
    $('#av').ftav({
        amount: 5,
        effects: [
            {
                width: 8,
                color: '#FF4136',
                dasharray: 15,
                dashopffset: 10,
                duration: 20,
            },  
            {
                width: 5,
                color: '#85144b',
                dasharray: 18,
                dashopffset: 19,
                duration: 25,
            },
            {
                width: 10,
                color: '#85fce9',
                dasharray: 12,
                dashopffset: 18,
                duration: 5,
            },
            {
                width: 6,
                color: '#ff008c',
                dasharray: 28,
                dashopffset: 3,
                duration: 17,
            },
            {
                width: 12,
                color: '#123456',
                dasharray: 16,
                dashopffset: 28,
                duration: 10,
            },  
        ]
    });
})
