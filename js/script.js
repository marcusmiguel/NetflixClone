function renderMovieDesc(item) {
    var e = document.getElementById("descricao")
    var e2 = document.getElementById("titulo")
    var e3 = document.getElementById("filme-principal")
    e2.innerText = item.nextSibling.nextSibling.children[0].innerText
    e.innerText = item.nextSibling.nextSibling.children[1].innerText
    e3.setAttribute("background-repeat", "no-repeat")
    e3.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('"+ item.getAttribute("src") +"')"
    e3.style.backgroundRepeat  = "no-repeat"
    e3.style.backgroundSize = "60%"
    e3.style.backgroundPosition = "center right";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("botaoinfo");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("botaovideo");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}