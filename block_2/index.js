const notesContainer = document.querySelector('.notes');

fetch('notes/notes.php', {
    method: 'GET'
}).then((res) => {
    console.log(res)
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}).then((res) => {
    res.forEach(noteData => {
        const newNote = document.querySelector('.note-template').content.cloneNode(true);
        newNote.querySelector('.note__title').textContent = noteData.title;
        newNote.querySelector('.note__info').textContent = noteData.description;
        notesContainer.append(newNote)
    });
    console.log(res);
})