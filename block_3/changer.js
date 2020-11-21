const btnContainer = document.querySelector('.buttons-list');
const createBtn = document.querySelector('.btnget');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createBtn.addEventListener('click', () => {
    const newBtn = document.createElement('button');
    newBtn.style.backgroundColor = getRandomColor();
    newBtn.textContent = Math.round(Math.random() * 10);
    newBtn.classList.add('randbtn')
    newBtn.addEventListener('click', (event) => {
        btnContainer.removeChild(event.target);
    }, { once: true });

    btnContainer.append(newBtn);

})