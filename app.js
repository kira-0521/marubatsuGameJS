const box = document.querySelectorAll('.box');
const turn = document.querySelector('#turn');
const change = document.querySelector('#change');
const clearBtn = document.querySelector('#clear');


// マルバツ入力
box.forEach((box) => {
    box.addEventListener('click', () => {
        const circle = change.classList.toggle('.circle');
            if(circle) {
                box.innerHTML = "○";
                turn.innerHTML = "Turn: ×";
                // ローカルストレージへ記録を保存
                localStorage.setItem(box, "○");
            } else {
                box.innerHTML = "×";
                turn.innerHTML = "Turn: ○";
                localStorage.setItem(box, "×");
            }
    })
});


// オールクリアーボタン
clearBtn.addEventListener('click', () => {
    for(let i = 0; i < box.length; i++) {
        box[i].innerHTML = "";
    }
    // リセット後に○から始まるように
    change.classList.remove('.circle');
    turn.innerHTML = "Turn: ◯";
});

// 勝敗決定ができない

// ターン表示


