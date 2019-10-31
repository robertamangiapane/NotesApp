(function single_note_HTML_view() {
  var note = new Note("some text inside the note")
  var singleNoteView = new SingleNoteView(note)
  var htmlString = "<div>some text inside the note</div>"
  assert.isEqual(singleNoteView.noteHTML(), htmlString)
})()
