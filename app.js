const box = document.querySelectorAll('.box');
const change = document.querySelector('#change');

// boxは配列であるためそれぞれにイベントリスナーをかける
box.forEach(box => {
    box.addEventListener('click', () => {
        const circle = change.classList.toggle('.circle');
        // changeのクラスがcircleの時○.それ以外で×.
        if(circle) {
            box.innerHTML = "○"
        } else {
            box.innerHTML = "×"
        }
    })
});