//initial settings

const container = document.getElementById('container');
const scroll = document.getElementById('scroll')
const card = container.childNodes[1];
console.log("before: "+container.scrollLeft)
let offset = -(container.offsetWidth - card.offsetWidth) / 2;
container.scrollLeft = offset;
console.log("after: "+container.scrollLeft)
let isMobile = true


//window resize event listener
function updateWindowSize() {
    let width = window.innerWidth;
    offset = -(container.offsetWidth - card.offsetWidth) / 2;
    container.scrollLeft = offset;
    console.log(offset/width)
    
  }
   window.addEventListener("resize", updateWindowSize);
  
  
  
  const card01 = document.getElementById("c01")
  const card02 = document.getElementById("c02")
  const card03 = document.getElementById("c03")
  cards = [card01, card02, card03]


  let cardScaleBase = 0;
  let normalize = (base) => {
    let reBase = Math.round(Math.abs(base)*1000)/1000
    return 1 - (reBase/10)
  }

// crazy state code
function mainLoop(fps){
    cardScaleBase = (container.scrollLeft/container.offsetWidth*1.19*2)-1
    card01scale = normalize(cardScaleBase+1)
    card02scale = normalize(cardScaleBase)
    card03scale = normalize(cardScaleBase-1)

    console.log(container.scrollLeft/container.offsetWidth)

    // console.log("base: "+ cardScaleBase)
    // console.log("card01: "+ card01scale)
    // console.log("card02: "+ card02scale)
    // console.log("card03: "+ card03scale)
    // console.log("---------")

    card01.style.transform = (`scale(${card01scale+0.01})`)
    card02.style.transform = (`scale(${card02scale+0.03})`)
    card03.style.transform = (`scale(${card03scale+0.01})`)
    
    
    
    setTimeout(() => mainLoop(fps), 1000/fps)
}
mainLoop(30)