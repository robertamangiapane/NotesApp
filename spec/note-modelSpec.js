(function create_new_note_and_assign_to_a_variable() {
    var note = new Note("some text inside the note")
    assert.isEqual(note.text, "some text inside the note")
  })();

(function view_note_content() {
  var note = new Note("some text inside the note")
  assert.isPrintOut(note.seeNote(), "some text inside the note")
})();

(function new_note_as_unique_id() {
  var note1 = new Note("this note1 has id equal 1")
  var note2 = new Note("this note2 has id equal 2")
  var noteList = new NoteList()
  noteList.addNote(note1)
  noteList.addNote(note2)

  assert.isEqual(note1.id, 0)
  assert.isEqual(note2.id, 1)
})()
