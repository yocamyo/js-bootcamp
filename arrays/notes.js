const notes = [{
    title:'My next trip',
    body: 'I would like to go Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatchtitle = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatchtitle || isBodyMatch
    })
}


// const note = findNote(notes, 'office modification')
// console.log(note);

// console.log(notes.length);
// console.log(notes)

// const index = notes.findIndex(function(note, index) {
//     console.log(note);
//     return note.title === 'Habits to work on'
// })
// console.log(index);

sortNotes(notes)
console.log(notes)