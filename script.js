const board = document.getElementById("chessboard");
const startingPosition = {a8:"black-r",b8:"black-n",c8:"black-b",d8:"black-q",e8:"black-k",f8:"black-b",g8:"black-n",h8:"black-r",a7:"black-p",b7:"black-p",c7:"black-p",d7:"black-p",e7:"black-p",f7:"black-p",g7:"black-p",h7:"black-p",a2:"white-p",b2:"white-p",c2:"white-p",d2:"white-p",e2:"white-p",f2:"white-p",g2:"white-p",h2:"white-p",a1:"white-r",b1:"white-n",c1:"white-b",d1:"white-q",e1:"white-k",f1:"white-b",g1:"white-n",h1:"white-r"};
const files=["a","b","c","d","e","f","g","h"];
let position={...startingPosition}, flipped=false, selectedSquare=null, themeIndex=0;
const themes=[{name:"Green & White",light:"#f0ead5",dark:"#5d934f"},{name:"Black & White",light:"#f2f2f2",dark:"#33363a"},{name:"3D / Premium",light:"#d8b27a",dark:"#6f4724"}];
function renderBoard(){board.innerHTML="";const ranks=flipped?[1,2,3,4,5,6,7,8]:[8,7,6,5,4,3,2,1];const boardFiles=flipped?[...files].reverse():files;ranks.forEach((rank,row)=>boardFiles.forEach((file,col)=>{const sq=file+rank;const el=document.createElement("button");el.type="button";el.className="square "+((row+col)%2===0?"light":"dark");if(selectedSquare===sq)el.classList.add("selected");const piece=position[sq];if(piece){const img=document.createElement("img");img.className="piece-image";img.src=`pieces/${piece}.svg`;img.alt=piece.replace("-"," ");el.appendChild(img)}el.addEventListener("click",()=>{selectedSquare=selectedSquare===sq?null:sq;renderBoard()});board.appendChild(el)}));applyTheme()}
function flipBoard(){flipped=!flipped;renderBoard()}
function resetBoard(){position={...startingPosition};flipped=false;selectedSquare=null;renderBoard()}
function undoMove(){alert("Move history will be connected next.")}
function redoMove(){alert("Move history will be connected next.")}
function cycleTheme(){themeIndex=(themeIndex+1)%themes.length;applyTheme()}
function applyTheme(){const t=themes[themeIndex];document.documentElement.style.setProperty("--light-square",t.light);document.documentElement.style.setProperty("--dark-square",t.dark);document.querySelector(".theme-button").textContent=t.name}
renderBoard();