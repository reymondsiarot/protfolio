const skillList = document.getElementById("skillList")
const hobbyList = document.getElementById("hobbyList")
const movieList = document.getElementById("movieList")

const skillBtn = document.getElementById("addSkillBtn")
const hobbyBtn = document.getElementById("addHobbyBtn")
const movieBtn = document.getElementById("addMovieBtn")

const inputSkill = document.getElementById("skillInput")
const inputHobby = document.getElementById("hobbyInput")
const inputMovie = document.getElementById("movieInput")

let skillMList = []
let hobbyMList = []
let MovieMList = []

//for buttons
skillBtn.addEventListener("click", function(){
    if(!!!inputSkill.value) return;

    const result = document.createElement("div");
    const skillResultRemove = document.createElement("div");
    skillResultRemove.innerText = "X"
    skillResultRemove.addEventListener("click",function(e){
        console.log("close click")
        e.target.parentElement.remove()
    });
    result.className ="items"
    result.innerText = inputSkill.value;
    
    result.appendChild(skillResultRemove)
    skillList.appendChild(result)
    inputSkill.value = ""

});

hobbyBtn.addEventListener("click", function(){
    if(!!!inputHobby.value) return;
    const result = document.createElement("div");
    const ResultRemove = document.createElement("div");
    ResultRemove.innerText = "X"
    ResultRemove.addEventListener("click",function(e){
        console.log("close click")
        e.target.parentElement.remove()
    });
    result.className ="items"
    result.innerText = inputHobby.value;
    result.appendChild(ResultRemove)
    hobbyList.appendChild(result)
    inputHobby.value = ""
});
movieBtn.addEventListener("click", function(){
    if(!!!inputMovie.value) return;
    const result = document.createElement("div");
    const ResultRemove = document.createElement("div");
    ResultRemove.innerText = "X"
    ResultRemove.addEventListener("click",function(e){
        console.log("close click")
        e.target.parentElement.remove()
    });
    result.className ="items"
    result.innerText = inputMovie.value;
    result.appendChild(ResultRemove)
    movieList.appendChild(result)
    inputMovie.value = ""
});

//for enter

inputSkill.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        if(!!!inputSkill.value) return;
        const result = document.createElement("div");
        const skillResultRemove = document.createElement("div");
        skillResultRemove.innerText = "X"
        skillResultRemove.addEventListener("click",function(e){
            console.log("close click")
            e.target.parentElement.remove()
        });
        result.className ="items"
        result.innerText = inputSkill.value;
        
        result.appendChild(skillResultRemove)
        skillList.appendChild(result)
        inputSkill.value = ""
    }
})
inputHobby.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        if(!!!inputHobby.value) return;
        const result = document.createElement("div");
        const ResultRemove = document.createElement("div");
        ResultRemove.innerText = "X"
        ResultRemove.addEventListener("click",function(e){
            console.log("close click")
            e.target.parentElement.remove()
        });
        result.className ="items"
        result.innerText = inputHobby.value;
        result.appendChild(ResultRemove)
        hobbyList.appendChild(result)
        inputHobby.value = ""
    }
})
inputMovie.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        if(!!!inputMovie.value) return;
        const result = document.createElement("div");
        const ResultRemove = document.createElement("div");
        ResultRemove.innerText = "X"
        ResultRemove.addEventListener("click",function(e){
            console.log("close click")
            e.target.parentElement.remove()
        });
        result.className ="items"
        result.innerText = inputMovie.value;
        result.appendChild(ResultRemove)
        movieList.appendChild(result)
        inputMovie.value = ""
    }
})