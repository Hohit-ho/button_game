// 숫자 1을 눌렀을 때 1이 눌렸는지 확인하기
// 사용자 입장에서 확인을 해야 편안함을 느끼기 때문이다. 

// window를 이벤트 대상으로 잡는다. 
// 누군가  keydown 했을 때 실행
window.addEventListener('keydown', (e)=>{
    // 남들에게도 보이니 아래 코드를 주석 처리 한다. 
    // console.log('keydown event',e.key)

    // 만약에 e.key값 1을 누루면, 1, 2를 누루면 2, 3을 누루면 3
    if(e.key == '1' || e.key == '2' || e.key == '3'){

// 실행을 하고 바탕화면을 클릭하고 키보드로 자판을 누루면 keydown event 올라간다. 
//  내가 무엇을 눌렀는지 착기 위해서는 이벤트 객체를 해준다. 'e'를 입력
//  window.addEventListener('keydown', (e)=>{ <= e 를 입력
//    console.log('keydown event',e.key)      <= e 를 입력

// 나는 문서에서 사용자가 누룬것을 가져오는 것
    const div = document.getElementById(e.key)
    div.classList.add('pressed') }
// 위 코드로 입력하고 번호를 누루면 눌린 버튼이 색이 변한다. 
})

// 눌렀을 때는 색이 변하고, 누루지 않으면 원상태로 돌아오는 코드
// keydown => keyup , add => remove 변경
window.addEventListener('keyup', (e)=>{
    if(e.key == '1' || e.key == '2' || e.key == '3'){
    const div = document.getElementById(e.key)
    div.classList.remove('pressed')
    }
})
// 우 코드를 입력하고 페이지 클릭 후 자판으로 번호를 입력하면 색이 변하고, 다시 돌아온다. 



