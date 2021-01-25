$(document).ready(function(){
    var count, rotateX;
    rotateX = 0;
    count = 0;
    $(".container").on("mousedown", function(){
        rotateX += 180;
        $("body").css("transform", "scale(1.2)");
        if (count % 2 === 0) {
            $(".container").css("box-shadow", "0px 32px 56px #180120");
        } else {
            $(".container").css("box-shadow", "0px -32px 56px #011f04");
        }
    });
    $(".container").on("mouseup", function(){
        $(this).css("transform", `rotateX(${rotateX}deg)`);
        $("body").css("transform", "scale(1)");
        if (count % 2 === 0) {
            $("body").css("background", "#daf2dc");
            $(".container").css("box-shadow", "000px -2px 4px #011f04");
        } else {
            $("body").css("background", "#ffcce7");
            $(".container").css("box-shadow", "0px 2px 4px #180120");
        }
        return count++;
    });
});