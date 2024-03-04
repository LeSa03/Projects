//$("h1").addClass("big-title margin-50"); // dodaje klase na element H1

//$("h1").text("Bye"); // menja tekst ( textContent/innerHTML ) od elementa H1
// $("button") --> selektovace sve elemente koji su button, ako hhocemo odredjeni moramo da ga definisemo
// klasom ili ID-jem da bi izbegli menjanje svih elemenata...

// KADA KORISTIS JQuery moras umesto innerHTML da koristis --> html --> $("button").html("<em>Hey</em>");

// KADA KORISTIS JQuery moras umesto textContent da koristis --> text --> $("button").text("BlaBla");

/*  ON CLICK FUNCTION
$("h1").click(function () {
  $("h1").css("color", "pink");
});
*/

/*$("input").keydown(function (event) {
  console.log(event.key);
});*/

$(document).keydown(function (event) {
  $("h1").text(event.key);
});
