let  CountdownDate = document.getElementById('downDate')
let  CountdownTime = document.getElementById('downTime')
let ok = (parm) =>{
  downTime.disabled = !parm;
   return parm
}
let day  = document.getElementById('day')
let hr  = document.getElementById('hr')
let min  = document.getElementById('min')
let sec  = document.getElementById('sec')
CountdownDate.addEventListener('input',(e)=>{
  ok(true)
})
CountdownTime.addEventListener('input',(e)=>{
  setInterval(()=>{
    let EnteredTime = new Date(`${(CountdownDate.value)} ${(CountdownTime.value)}`).getTime()
    let now = new Date().getTime()
    distance = EnteredTime - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))   
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))   
    let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60)) 
    let seconds = Math.floor(distance % (1000 * 60 ) / 1000)   
    
   
    hr.innerText = hours 
    day.innerText = days
    min.innerText = minutes 
    sec.innerText = seconds 
  },1000)
})