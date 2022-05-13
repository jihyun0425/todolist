const btn = document.getElementById('btn'); //버튼
let addValue = document.getElementById('addValue'); //할일 입력
let result = document.getElementById('result');// 추가된 할일


function addTodo(){
    let list = document.createElement("li");
    let del = document.createElement('button');
    list.innerHTML = addValue.value;
    result.appendChild(list);
    list.appendChild(del);
    /*할일 추가할 때마다 삭제버튼도 같이 추가돼기 */
    // list.innerHTML+="<button type='button' id ='remove' onclick='removeList()'><i class='xi-trash xi-2x'></span></i></button>";
    addValue.value = ""; //할일 입력창 초기화
    //할일 완료 후 클릭시 밑줄 표시
    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
    })
}


/* <button type="button" id = "removebtn" onclick="remove()"><span><i class="xi-trash xi-2x"></span></i></button> */
//입력값 한개만 나오는 코드
// function addTodo(){   //+버튼을 누르면
    // const addValue = document.getElementById('addValue').value;
    // document.getElementById("result").innerText = addValue;
// }


//변수지정 방법 : const, let, var
//css에는 꾸미는 기능만, js에서 동적으로 처리하는 기능만 넣은 상태