console.log("Hello, World!");

// セレクタ
let test_p_1 = $("#test-p-1").text();
console.log(test_p_1);

let test_p_2 = $("#test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123);


function aiueo() {
    // $("#test-p-1").hide();

    // $("#test-p-1").show();

    $("#test-p-1").toggle();
}


// スライドアップダウン
function kaki() {
    // $("#test-p-1").slideDown();

    // $("#test-p-1").slideUp();

    $("#test-p-1").slideToggle();

}



function kake() {
    // $("#test-p-1").fadeIn();

    // $("#test-p-1").fadeOut();

    $("#test-p-1").fadeToggle();
}



function kako() {
    $("#test-p-1").css("color", "red");
    $("#test-p-1").css("fontSize", "64px");

}



function tata() {
    $("#test-p-1").animate({
        "fontSize": "64px",
    }).animate({
        "fontSize": "16px",
    });
}


// イベントハンドラ
// focus
$("#input-1").on("fousus", function () {
    console.log("インプットにフォーカスが当たりました");
});


$("h3").on("click", function () {
    console.log("h3がクリックされました");
    $(this).next().slideToggle();
});