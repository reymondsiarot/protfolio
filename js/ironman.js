const ironman = document.getElementById("ironman")
ironman.style.marginLeft = "0px";
ironman.style.marginLeft = "800px";


ironman.style.transform = "scaleX(-1)"
const interval1 =  setTimeout(()=>{
    ironman.style.marginLeft = "550px";
    clearTimeout(interval1)
},2000)

function flyironman(){
    const interval = setTimeout(() =>{
        ironman.style.transform = "scaleX(1)"
        const interval1 =  setTimeout(()=>{
            ironman.style.marginLeft = "0px";
            const interval2 =  setTimeout(()=>{
                ironman.style.marginLeft = "2000px";
                ironman.style.marginTop = "-500px";
                const interval3 =  setTimeout(()=>{
                    ironman.remove()
                    clearTimeout(interval3)
                    clearTimeout(interval2)
                    clearTimeout(interval1)
                    clearTimeout(interval)
                    
                },5000);
            },1000);
        },1000)
    },10)
}
ironman.addEventListener("click",function(){
    flyironman()
});

/////create iron man
const createIman = document.querySelector("body")

function createIronMan(){
    const newironMan = document.createElement("img")
    newironMan.src = "https://media.giphy.com/media/ViISfGApLXwPhxrtA6/giphy.gif";
    newironMan.className ="ironman"
    const random = Math.random()*1700;

    newironMan.style.bottom = "0px"
    setTimeout(()=>{
        newironMan.style.bottom = "1100px"
    },10)

    setTimeout(()=>{
        newironMan.remove()
    },3000)
    newironMan.style.marginLeft = random+"px";
    createIman.appendChild(newironMan)
}