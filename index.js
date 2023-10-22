const computerchoice = document.querySelector(".choice1");
const user = document.querySelector(".choice2");
const resultDis = document.querySelector(".result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

paper.addEventListener("click", () => {
    user.setAttribute("src","hello_2165920.png");
    user.setAttribute("id","paperr");
    generateRandomNumber();
    getResult();
})
rock.addEventListener("click", () => {
    user.setAttribute("src","./plutonium_3872826.png");
    user.setAttribute("id","rockk");
    generateRandomNumber();
    getResult();
})
scissor.addEventListener("click", () => {
    user.setAttribute("src","scissors_2542051.png");
    user.setAttribute("id","scissorr");
    generateRandomNumber();
    getResult();
})



function generateRandomNumber() {

    var random = Math.floor(Math.random()*3);
    
    if (random === 0){
        computerchoice.setAttribute("src", "./plutonium_3872826.png") ;
        computerchoice.setAttribute("id","rockk");
    }
    else if (random === 1){
        computerchoice.setAttribute("src", "hello_2165920.png") ;
        computerchoice.setAttribute("id","paperr");
    }
    else if (random === 2){
        computerchoice.setAttribute("src", "scissors_2542051.png") ;
        computerchoice.setAttribute("id","scissorr");
    }
    }

    function getResult(){
        var a = "You Win! 🥳";
        var b = "You Loose! 😕";
        var c = "It is a draw! 🙃";
 
        if(computerchoice.id === user.id){
            resultDis.innerHTML = c;
        }
        else if ((computerchoice.id === "rockk" && user.id == "paperr")
             || (computerchoice.id === "paperr" && user.id=== "scissorr")
             || (computerchoice.id === "scissorr" && user.id === "rockk")){
          resultDis.innerHTML = a;
    }
    else{
        resultDis.innerHTML = b;
    }

    }