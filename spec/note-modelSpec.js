(function create_new_note_and_assign_to_a_variable() {
    var note = new Note("some text inside the note")
    assert.isEqual(note.text, "some text inside the note")
  })();

(function view_note_content() {
  var note = new Note("some text inside the note")
  assert.isPrintOut(note.seeNote(), "some text inside the note")
})();
