let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset_button");
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let turn = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if(turn == 0){
        box.innerHTML = "X";
        turn = 1;
     }

     else if(turn == 1){
        box.innerHTML = "O";
        turn = 0;
     }

     box.disabled = true;

     checkwinner();
    });
});

const checkwinner =()=>{
   for( let pattern of winpatterns){
  let val1 = boxes[pattern[0]].innerText;
  let val2 = boxes[pattern[1]].innerText;
  let val3 = boxes[pattern[2]].innerText;
  if(val1!=''&&val2!=''&&val3!='')
if(val1 == val2 && val3 == val1){
   alert("player wins")
   };
    }};

    restbtn.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerHTML = "";
            box.disabled = false;
        });
        turn = 0;
    });