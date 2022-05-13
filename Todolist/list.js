const btn = document.getElementById('btn');
let addValue = document.getElementById('addValue');
let result = document.getElementById('result');
//function 문법

function addTodo(){
    let list = document.createElement("li");
    list.innerHTML = addValue.value;
    result.appendChild(list);
}


//입력값 한개만 나오는 코드
// function addTodo(){   //+버튼을 누르면
    // const addValue = document.getElementById('addValue').value;
    // document.getElementById("result").innerText = addValue;
// }


//변수지정 방법 : const, let, var
//css에는 꾸미는 기능만, js에서 동적으로 처리하는 기능만 넣은 상태이다.