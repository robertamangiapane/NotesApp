(function create_a_string_with_HTML_text() {
  var noteListView = new NoteListView()
  noteListView.noteList.addNote("some text inside the note")
  var htmlString = "<ul><li><div>some text inside the note</div></li></ul>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})()
