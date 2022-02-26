
window.onload = function () {

  // Definitions
  let canvas = document.getElementById("app");
  let context = canvas.getContext("2d");
  let boundings = canvas.getBoundingClientRect();
  let mouseX=0
  let mouseY=0
  context.strokeStyle = 'black'
  context.lineWidth = 1
  let isDrawing = false

 let color = document.getElementsByClassName('colors')[0]
 color.addEventListener('click',(e)=>{
  context.strokeStyle = e.target.value || 'black'
  console.log(e.target.value );

 }) 
 
  let brush = document.getElementsByClassName('brushes')[0]
  brush.addEventListener('click',(e)=>{
    context.lineWidth =  e.target.value || 1
  })

  let clear = document.getElementById('clear')
  clear.addEventListener('click',()=>{
    context.clearRect(0,0,canvas.width,canvas.height)
  })
  let save = document.getElementById('save')
  save.addEventListener('click',()=>{
    let imgName = prompt('please enter image name')
    let canvasDataURL = canvas.toDataURL()
    let a = document.createElement('a')
    a.href=canvasDataURL
    a.download = imgName || 'drawing'
    a.click()

  })
  canvas.addEventListener('mousedown',(e)=>{
    mouseLocation(e)
    isDrawing=true

    context.beginPath()
    moveTo(mouseX,mouseY)
  })
  canvas.addEventListener('mousemove',(e)=>{
    mouseLocation(e)
    if(isDrawing){
   
      context.lineTo(mouseX,mouseY)
      context.stroke()
    }
  })
  canvas.addEventListener('mouseup',(e)=>{
    mouseLocation(e)
    isDrawing=false
  })
 function  mouseLocation(e){
    mouseX= e.clientX - boundings.left 
    mouseY= e.clientY - boundings.top
  }
};
