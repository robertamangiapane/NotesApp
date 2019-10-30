(function noteList_has_empty_array_by_default() {
  var noteList = new NoteList()
  assert.isEqual(noteList.list.length, 0)
})();

(function create_a_new_note_and_add_it_to_a_list() {
  var noteList = new NoteList()
  noteList.addNote("some text inside the note")
  assert.arrayIncludeObject(noteList.seeNotes(note), note)
})();
