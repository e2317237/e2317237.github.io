console.log("Hello, World!");

let q_1 = $("q-1").text();
let q_2 = $("q-2").text();
let q_3 = $("q-3").text();
let q_4 = $("q-4").text();
let q_5 = $("q-5").text();


function kotae1() {
    $("q-1").slideToggle();

}
function kotae2() {

    $("q-2").slideUp();

}
function kotae3() {

    $("q-3").slideUp();

}
function kotae4() {

    $("q-4").slideUp();

}
function kotae5() {

    $("q-5").slideUp();

}


$("button").on("click", function () {
    console.log("答えがクリックされました");
    $(this).next().slideToggle();
});

