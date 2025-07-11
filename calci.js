const operand=document.querySelectorAll('.operand');
const operator=document.querySelectorAll('.operator');
const screen=document.querySelector('#screen');
const Equal_btn=document.querySelector('.Equals');
const Clear_btn=document.querySelector('#clear-button');
const Delete_button=document.querySelector('#delete-button');
const Calci=document.querySelector('#calculator');
let a='';
let b='';//(a o b => 'a','b' are operands and 'o' is operator)
let o=0;
let x=0;
function operate(){
switch(o){
    case '+':
        screen.textContent=`${Number(a)+Number(b)}`;
        break;
    case '-':
        screen.textContent=`${Number(a)-Number(b)}`;
        break;
    case '*':
        screen.textContent=`${(Number(a)*Number(b)).toFixed(3)}`;
        break;
    case '/':
        if(b===0){
            alert('error: cannot divide by 0');

            return;
        }
        screen.textContent=`${(Number(a)/Number(b)).toFixed(3)}`;
        break;}
    a='';
    b='';
    x=0;
        
}

function clear(){
    screen.textContent='';
    a='';
    b='';
    x=0;
}

function Delete(){
    if(screen.textContent.trimEnd().at(-1)=='+'||screen.textContent.trimEnd().at(-1)=='-'||screen.textContent.trimEnd().at(-1)=='*'||screen.textContent.trimEnd().at(-1)=='/'){
        x=x^1;
        console.log(x);
        screen.textContent=screen.textContent.trimEnd().slice(0,-1);
        return;
    }
    if(x==1){
        b=b.slice(0,-1);
        screen.textContent=screen.textContent.slice(0,-1);
    }
    else{
        a=a.slice(0,-1);
        console.log(a);
        screen.textContent=screen.textContent.trimEnd().slice(0,-1);
    }
}
// FOR INPUT THROUGH BUTTON CLICKS 
operand.forEach((item)=>
item.addEventListener('click',(e)=>{if(x==0){
    a=a+e.target.textContent;
    screen.textContent= a;
}
else{
    b=b+`${e.target.textContent}`;
    screen.textContent=screen.textContent+" "+e.target.textContent;
    
}}));

operator.forEach((item)=>
item.addEventListener('click',(e)=>{if(x==0){
    if(a===''){
        a=screen.textContent;
    }
    o=`${e.target.textContent}`;
   screen.textContent=screen.textContent+" "+o;
   x=x^1;
}
else{
    if(b==''){}    
    else{operate();
    o=`${e.target.textContent}`;
    screen.textContent=screen.textContent+" "+o;
    x=x^1;}

}}
));


Equal_btn.addEventListener('click',(e)=>{if(x==1){
    operate();
}});
Clear_btn.addEventListener('click',clear);
Delete_button.addEventListener('click',Delete);

