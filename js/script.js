


//header verandert wanneer je scrollt//
var header = document.querySelector("header ul")
var main = document.querySelector("main")
var logo = document.querySelector("#block1")
var h1 = document.querySelector("#home h1")
var scrollTrigger1 = 50

function opzij() {
  if (window.scrollY >= scrollTrigger1 || window.pageYOffset >= scrollTrigger1) {

     header.classList.add("opzij")
     main.classList.add("omhoog")
     logo.classList.add("verplaatsen")
     h1.style.display="none"

    } else {
      header.classList.remove("opzij")
      main.classList.remove("omhoog")
      logo.classList.remove("verplaatsen")
      h1.style.display="block"
    }
  }

window.addEventListener("scroll", opzij)


//foto van mezelf omhoog laten komen wanneer je scrollt//


var ik = document.querySelector("#ik")
var scrollTrigger2 = 50

function omhoog() {

    if (window.scrollY >= scrollTrigger2 || window.pageYOffset >= scrollTrigger2) {

       ik.classList.add("peekaboo")
      } else {
        ik.classList.remove("peekaboo")
      }
    }
  
  window.addEventListener("scroll", omhoog)
