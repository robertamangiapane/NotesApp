(function create_one_note_with_HTML_text() {
  var note = new Note("some text inside the note")
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  noteList.addNote(note)
  var htmlString = "<ul><li><div>some text inside the note</div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function create_two_notes_with_HTML_text() {
  var note1 = new Note("some text inside the note")
  var note2 = new Note("some text")
  var noteList = new NoteList()
  noteList.addNote(note1)
  noteList.addNote(note2)
  var noteListView = new NoteListView(noteList)
  var htmlString = "<ul><li><div>some text inside the note</div></li><li><div>some text</div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function create_zero_notes_with_HTML_text() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  var htmlString = "<ul><li><div></div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})()
