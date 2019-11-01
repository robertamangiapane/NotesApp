(function view_one_note_with_HTML_text() {
  var note = new Note("some text inside the note")
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  noteList.addNote(note)
  var htmlString = "<ul><li><div>" + note.text.substring(0, 20) + "...</div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function view_two_notes_with_HTML_text() {
  var note1 = new Note("some text inside the note")
  var note2 = new Note("some other text inside different note")
  var noteList = new NoteList()
  noteList.addNote(note1)
  noteList.addNote(note2)
  var noteListView = new NoteListView(noteList)
  var htmlString = "<ul><li><div>" + note1.text.substring(0, 20) + "...</div></li><li><div>" + note2.text.substring(0, 20) + "...</div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function view_zero_notes_with_HTML_text() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  var htmlString = "<ul><li><div></div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})()
