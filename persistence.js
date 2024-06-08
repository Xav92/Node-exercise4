let _notes = [
    { id: "2", text: "CPSC 2650" },
    { id: "1", text: "An awesome web dev Note" },
  ];
  
  // TODO: implement addNote and removeNote
  // For fun: why do we export a function instead of notes directly?
    // it means better control of the data 
  const notes = () => _notes;

  const addNote = (id,text) => {
    _notes.push({id,text});
  };

  const removeNote = (id => {
    _notes = _notes.filter(note => note.id !==id);
  })

  const editNote = (id => {
   _notes = _notes.map(note => note.id === id ? {...note,text:newText}:note);
  })
  
  export { notes,addNote,removeNote,editNote };