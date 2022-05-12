
//버튼 변수지정
const btn = document.querySelector(".inputField button");


//function 문법
function addTodo(){   //+버튼을 누르면
    addValue = document.getElementById('addValue').value;
    document.getElementById("result").innerText = addValue;
}


// function addTodo(){   //+버튼을 누르면
    // const addValue = document.getElementById('addValue').value;
    // document.getElementById("result").innerText = addValue;
    
// }



//변수지정 방법 : const, let, var
//css에는 꾸미는 기능만, js에서 동적으로 처리하는 기능만 넣은 상태이다.