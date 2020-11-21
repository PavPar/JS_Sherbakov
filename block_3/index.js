const notesContainer = document.querySelector('.notes-list');
const notesBtn = document.querySelector('.btnget');

notesBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'notes.php');

    xhr.send();

    xhr.onload = function () {
        let res = JSON.parse(xhr.response);

        notesContainer.innerHTML = '';
        res.forEach(noteData => {
            const newNote = document.querySelector('.note-template').content.cloneNode(true);
            newNote.querySelector('.note__title').textContent = noteData.title;
            newNote.querySelector('.note__info').textContent = noteData.description;
            notesContainer.append(newNote)
        });
        console.log(res);
    };

    xhr.onerror = function () {
        alert("Запрос не удался");
    };
})






