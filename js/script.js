


//header verandert wanneer je scrollt//
var headerUl = document.querySelector("header ul")
var logo = document.querySelector("#block1")
var h1 = document.querySelector("#home h1")
var portfolioJaar = document.querySelector("#h1-wrapper2")
var p = document.querySelector("#scrolldown")
var arrow = document.querySelector("#pijl-btn")
var ctaBtn = document.querySelector("#cta-pijl")
var scrollTrigger1 = 100

function opzij() {
  if (window.scrollY >= scrollTrigger1 || window.pageYOffset >= scrollTrigger1) {

     headerUl.classList.add("opzij")
     ctaBtn.style.display="none"
     h1.style.display="none"
     p.style.display="none"
     logo.classList.add("verplaatsen")
     arrow.style.display="block"
     portfolioJaar.style.display="none"
    

    } else {
      headerUl.classList.remove("opzij")
      ctaBtn.style.display="block"
      logo.classList.remove("verplaatsen")
      h1.style.display="block"
      arrow.style.display="none"
      portfolioJaar.style.display="block"
      p.style.display="block"
    }
  }

window.addEventListener("scroll", opzij)




//call to action button//
var ctaBtn = document.querySelector("#cta-pijl")
var firstSection = document.querySelector("#aboutme")

function openPortfolio() { 
  firstSection.scrollIntoView({behavior: 'smooth'})
}

ctaBtn.addEventListener("click", openPortfolio)



//next button aboutme//
var aboutmeBtn = document.querySelector("#aboutme-pijl")
var sectionSkills = document.querySelector("#skills")

function naarSkills() { 
  sectionSkills.scrollIntoView({behavior: 'smooth'})
}

aboutmeBtn.addEventListener("click", naarSkills)









//huidigepagina scrolltriggers//
var a1 = document.querySelector("header nav ul li a:first-of-type")

var scrollTrigger3 = 100
var scrollTrigger4 = 2000

function veranderClr() {  
  if (window.scrollY >= scrollTrigger3) {
  a1.style.color="#d8eee8"
  }

  if (window.scrollY >= scrollTrigger4) {
    a1.style.color="#d9cdbb"

    }
}

window.addEventListener("scroll", veranderClr)






//foto van mezelf omhoog laten komen wanneer je scrollt//
var ik = document.querySelector("#ik")
var scrollTrigger2 = 10

function omhoog() {

    if (window.scrollY >= scrollTrigger2 ||  window.pageYOffset >= scrollTrigger2) {

       ik.classList.add("peekaboo")
      } else {
        ik.classList.remove("peekaboo")
      }
    }
  
  window.addEventListener("scroll", omhoog)




//uitklapmenu

var nav = document.querySelector("header nav ul")
var menuKop = document.querySelector("header nav ul li:last-of-type")

function uitBeeld() {

  nav.classList.toggle("inklappen")
  arrow.classList.toggle("draaien")
  logo.classList.toggle("krimpen")
  menuKop.classList.toggle("verschijnen")
  menuState = dicht

  }
  

arrow.addEventListener("click", uitBeeld)
nav.addEventListener("click", uitBeeld)



//uitklapmenu responsive (zodat het menu weer is uitgeklapt als je naar de top van de page scrollt en weer terug. want anders doet logo weird)

function autoKlapUit() {
  if (window.scrollY <= scrollTrigger1 || window.pageYOffset <= scrollTrigger1) {

    nav.classList.remove("inklappen")
    arrow.classList.remove("draaien")
    logo.classList.remove("krimpen")
    menuKop.classList.remove("verschijnen")
}
}

window.addEventListener("scroll", autoKlapUit)






//toolbox
var toolbox = document.querySelector("#toolkit") 
var boxState = open
var toolboxVoorkant = document.querySelector("#voorkant-kist")
var ai = document.querySelector("#ai")
var ps = document.querySelector("#ps")
var xd = document.querySelector("#xd")
var code = document.querySelector("#code")

function close() {
  if(boxState === open) {
    toolbox.src = "../images/toolkit-dicht.svg"
    toolbox.style.marginTop = "12.4em"
    boxState = closed
    console.log("clicked")
    toolboxVoorkant.style.display="none"
    ai.style.display="none"
    ps.style.display="none"
    xd.style.display="none"
    code.style.display="none"
    aiP.style.display="none"
    psP.style.display="none"
    xdP.style.display="none"
    codeP.style.display="none"

} else {
  boxState = open
  toolbox.style.marginTop = "0em"
  toolbox.src = "../images/toolboxx.svg"
  toolboxVoorkant.style.display="block"
  toolboxVoorkant.style.top="15.7em"
  ai.style.display="block"
  ps.style.display="block"
  xd.style.display="block"
  code.style.display="block"
  aiP.style.display="block"
  psP.style.display="block"
  xdP.style.display="block"
  codeP.style.display="block"
  toolbox.style.top="3em"
}
}

toolbox.addEventListener("click", close)
toolboxVoorkant.addEventListener("click", close)


//tools toelichting in beeld brengen
var aiP = document.querySelector("#ai-p")
var psP = document.querySelector("#ps-p")
var xdP = document.querySelector("#xd-p")
var codeP = document.querySelector("#code-p")

function toelichtingai() {
  ai.src="../images/ai-reverse.svg"
  ps.src="../images/ps.svg"
  xd.src="../images/xd.svg"
  code.src="../images/code.svg"
  aiP.style.display = "block"
  xdP.style.display = "none"
  codeP.style.display = "none"
  psP.style.display = "none"
}

ai.addEventListener("click", toelichtingai)


function toelichtingps() {
  ps.src="../images/ps-reverse.svg"
  ai.src="../images/ai.svg"
  xd.src="../images/xd.svg"
  code.src="../images/code.svg"
  psP.style.display = "block"
  aiP.style.display = "none"
  xdP.style.display = "none"
  codeP.style.display = "none"
}

ps.addEventListener("click", toelichtingps)



function toelichtingxd() {
  xd.src="../images/xd-reverse.svg"
  ps.src="../images/ps.svg"
  ai.src="../images/ai.svg"
  code.src="../images/code.svg"
  xdP.style.display = "block"
  codeP.style.display = "none"
  aiP.style.display = "none"
  psP.style.display = "none"
}

xd.addEventListener("click", toelichtingxd)


function toelichtingcode() {
  code.src="../images/code-reverse.svg"
  xd.src="../images/xd.svg"
  ps.src="../images/ps.svg"
  ai.src="../images/ai.svg"
  codeP.style.display = "block"
  xdP.style.display = "none"
  aiP.style.display = "none"
  psP.style.display = "none"
}

code.addEventListener("click", toelichtingcode)