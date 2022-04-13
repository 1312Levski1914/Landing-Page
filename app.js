
$(document).ready(function(){
    animateBird('.firstBird');
    animateBird('.secondBird');
    animateBird('.tirthBird');
    animateBird('.fourBird');
    animateBird('.fiveBird');
    animateBird('.sixBird');
    animateBird('.sevenBird');

})

function birdFly(){
    let hView = $(window).height() - 50;
    let wView = $(window).width() - 50;
    let nh = Math.floor(Math.random() * hView);
    let nw = Math.floor(Math.random() * wView);
    return [nh,nw];
}
function animateBird(myclass){
    let newDirect = birdFly();
    $(myclass).animate({top: newDirect[0], left: newDirect[1]},
        1000, function(){
            animateBird(myclass);
        });
};
$(".birdOnTarget").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 300
    }, 250);
    $(this).animate({
        left: Math.random() * 300
    }, 250);

});