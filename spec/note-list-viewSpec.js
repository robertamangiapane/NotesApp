(function view_one_note_with_HTML_text() {
  var note = new Note("some text inside the note")
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  noteList.addNote(note)

  var htmlString = '<div id="0"><a href="#notes/0" id="0">' + note.text.substring(0, 20) + "...</a></div>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function view_two_notes_with_HTML_text() {
  var note1 = new Note("some text inside the note")
  var noteList = new NoteList()
  noteList.addNote(note1)
  var noteListView = new NoteListView(noteList)
  var note2 = new Note("some other text inside different note")
  noteList.addNote(note2)
  var htmlString = '<div id="0"><a href="#notes/0" id="0">' + note1.text.substring(0, 20) + '...</a></div><div id="1"><a href="#notes/1" id="1">' + note2.text.substring(0, 20) + "...</a></div>"
  assert.isEqual(noteListView.returnHTML(), htmlString)
})();

(function view_zero_notes_with_HTML_text() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)
  var htmlString = ''
  assert.isEqual(noteListView.returnHTML(), htmlString)
})()
