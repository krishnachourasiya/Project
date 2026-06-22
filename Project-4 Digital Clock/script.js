let currentTime = ()=>{
    let date = new Date();

    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2,"0")
    let seconds = String(date.getSeconds()).padStart(2,"0")

    let period = hours >= 12 ? "PM":"AM"
    
    hours = hours % 12 || 12
    hours = String(hours).padStart(2,"0")
    document.querySelector('.clock').innerText = `${hours}:${minutes}:${seconds} ${period}`;
}
currentTime();
setInterval(()=>{
    currentTime();
},1000)