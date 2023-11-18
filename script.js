//initial settings

const container = document.getElementById('container');
const scroll = document.getElementById('scroll')
const main = document.querySelector('.main')
const card = container.childNodes[1];
console.log("before: "+container.scrollLeft)
let offset = -(container.offsetWidth - card.offsetWidth) / 2;
container.scrollLeft = offset;
console.log("after: "+container.scrollLeft)
let isMobile = window.innerWidth/window.innerHeight < 4/5 && window.innerWidth < 650



// Focus on center card and reset zoom for cards when screen is large
function updateContainerOffset() {
  offset = -(container.offsetWidth - card.offsetWidth) / 2;
  container.scrollLeft = offset;
}
// reset zoom when screen is large
function resetZoom(){
  if(!isMobile){
    card01.style.transform = "scale(1)"
    card03.style.transform = "scale(1)"
    if(window.innerWidth >= 850){
      card02.style.transform = "scale(1.04)"
      }else{
        card02.style.transform = "scale(1)"
      }
    }
}

// Aplly zoom on card in focus
 function updateCardsZoom(){
  if(isMobile){
      cardScaleBase = (container.scrollLeft.toFixed(0)/(container.scrollWidth-container.clientWidth)*2) -1
      card01scale = normalize(cardScaleBase+1)
      card02scale = normalize(cardScaleBase)
      card03scale = normalize(cardScaleBase-1)
      card01.style.transform = (`scale(${card01scale+0.01})`)
      card02.style.transform = (`scale(${card02scale+0.03})`)
      card03.style.transform = (`scale(${card03scale+0.01})`)
  }
}

// Create a Resize Observer
var resize = new ResizeObserver(entries => {
  for (let entry of entries) {
    updateContainerOffset()
    resetZoom()
    isMobile = window.innerWidth/window.innerHeight < 4/5 && window.innerWidth < 650
  }
});

// Observe one or multiple elements
resize.observe(container);
resize.observe(main);






  
  
  const card01 = document.getElementById("c01")
  const card02 = document.getElementById("c02")
  const card03 = document.getElementById("c03")
  cards = [card01, card02, card03]


  let cardScaleBase = 0;
  let normalize = (base) => {
    let reBase = Math.round(Math.abs(base)*1000)/1000
    return 1 - (reBase/9)
  }

container.addEventListener("scroll", updateCardsZoom);


/*
// crazy state code
function mainLoop(fps){
    //cardScaleBase = (container.scrollLeft/container.offsetWidth*1.19*2)-1
    cardScaleBase = (container.scrollLeft.toFixed(0)/(container.scrollWidth-container.clientWidth)*2) -1
    card01scale = normalize(cardScaleBase+1)
    card02scale = normalize(cardScaleBase)
    card03scale = normalize(cardScaleBase-1)

    // console.log(container.scrollLeft.toFixed(0)+" "+container.offsetWidth)
    // console.log( (container.scrollLeft.toFixed(0)/(container.scrollWidth-container.clientWidth)*2) -1)

    // console.log("base: "+ cardScaleBase)
    // console.log("card01: "+ card01scale)
    // console.log("card02: "+ card02scale)
    // console.log("card03: "+ card03scale)
    // console.log("---------")


    
    
    
    setTimeout(() => mainLoop(fps), 1000/fps)
}
mainLoop(100)

*/