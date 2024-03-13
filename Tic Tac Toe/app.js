let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;// playerx , playero
let check=false;
let c=0;


//win pattern

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const showwinner=(message,winner)=>{
    msg.innerText=`${message}  ${winner} `;
    msgcontainer.classList.remove("hide");
      disableBoxes();
    };
const checkdraw=()=>{
    if(check==false){
        showwinner("Match","Draw");
    
    }
};

boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        if(turno){
            box.style.color="#010107";
            // "#ae3eb0";
            box.innerText="X";
            turno=false;
        }
        else{
            box.style.color="#CD0022";

            box.innerText="O";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
        c=c+1;
        if(c==9){
            checkdraw();
        }

    })

})

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame=()=>{
turno=true;
enableBoxes();
msgcontainer.classList.add("hide");
c=0;
check=false;
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};





const checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner("Congratulations, Winner is",pos1val);
                check=true;
            }
        }
        
    }
};

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);


