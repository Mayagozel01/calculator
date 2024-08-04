
let numbers = [0,1,2,3,4,5,6,7,8,9];
let operators = ['+','-','/','*'];
let precendence = [2,2,3,3]
let oupQueue = [];
let stack = [];
let queue=[];
let s='';
let calculation = 0;
let operating = document.getElementById("operating");
function Calculate(s){
    s=s+'=';
    let k='';
for (let i=0; i<s.length;i++){
    if (numbers.includes(parseInt(s[i]))) k=k+s[i];
    else{
        oupQueue.push(k);
        k='';
        if (stack.length===0) stack.push(s[i])
        else
        if (precendence[operators.indexOf(s[i])]>precendence[operators.indexOf(stack[stack.length-1])]){ 
            stack.unshift(s[i]);
            // eger gelyan operator prioriteti bcha stack-yn yokarsynnakydan uly bolanna
        }
        else{
            oupQueue.push(...stack);
            stack=[];
            stack.push(s[i]);
            // eger gelyan operator prioriteti bcha stack-yn yokarsynnakydan kichi ya-da den bolanna
            }
    }
            console.log(stack);
            console.log(oupQueue);


        }
        while(oupQueue.length>1){
         for (let i = 0;  i<oupQueue.length; i++){
            let elem = oupQueue[i];
            if (operators.includes(elem)){
                let a = parseInt(oupQueue[i-2]);
                let b = parseInt(oupQueue[i-1]);
                switch(elem) {
                    case '+': 
                      oupQueue.splice(i-2,3,a+b)
                      break;
                    case '-': 
                      oupQueue.splice(i-2,3,a-b)
                      break;
                    case '*': 
                      oupQueue.splice(i-2,3,a*b)
                      break;
                    case '/': 
                      oupQueue.splice(i-2,3,a/b)
                      break;
                  }
                  break 
            }
        }
    }
    return oupQueue[0];
}
const Evaluate = (key)=>{
    let num = numbers[parseInt(key)];
    let operator = operators.includes(key);
    let lastElem = operators.includes(s[s.length-1]);

    if (num) {
        s=s+key;
        calculation = eval(s);}
    else{
        if (operator)
        lastElem ? s = s.slice(0, -1) + key:s=s+key;
    }
    operating.innerHTML=s;
    
    
    if (key==='=') 
    document.getElementById("answer").innerHTML=Calculate(s);
}



const clearLast=(operating)=>{
    operating.innerHTML =  operating.innerHTML.slice(0, -1);
}

const chooseFunction = (key, operating)=>{
    key==='Backspace'?clearLast(operating):Evaluate(key);
}



document.body.addEventListener("keydown",  e=>chooseFunction(e.key, operating));
// for keydown events

let buttons = document.querySelector(".buttons");
buttons.onclick = (event)=>Evaluate(event.target.textContent);

// for click events

function percentage(percent, total) {
    console.log("helo");
    return ((percent/ 100) * total).toFixed(2);
}
