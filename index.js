$(function(){
  $( "#aboutbtn" ).hover( btnhover, btnmouseleave )
})

function btnhover(){ 
  $("#aboutbtn").append(`<div id="aboutdivone" class="menua"> <a href="">Introduction</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivtwo" class="menu"> <a href="">Facts & History</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivthree" class="menu"> <a href="">CUI Leadership</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivfour" class="menu"> <a href="">Ranking</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivfive" class="menu"> <a href="">Offices and Administration</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivsix" class="menu"> <a href="">CUI statutory Information</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivseven" class="menu"> <a href="">Visitors Information</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdiveight" class="menu"> <a href="">Campus Map</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivnine" class="menu"> <a href="">Career</a> </div>`);
  $("#aboutbtn").append(`<div id="aboutdivten" class="menu"> <a href=""><img src="./images/aboutCUI.jpg" " alt=""></a> </div>`);
  $("#myslides").addClass("slides")
}
function btnmouseleave(){ 
  $("#aboutdivone").remove()
  $("#aboutdivtwo").remove()
  $("#aboutdivthree").remove()
  $("#aboutdivfour").remove()
  $("#aboutdivfive").remove()
  $("#aboutdivsix").remove()
  $("#aboutdivseven").remove()
  $("#aboutdiveight").remove()
  $("#aboutdivnine").remove()
  $("#aboutdivten").remove()
  $("#myslides").removeClass("slides")
}

function aboutfunc(){
  console.log("hhaha")
}
