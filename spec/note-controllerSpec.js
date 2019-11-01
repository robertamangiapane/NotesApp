(function note_controller_diplay_html() {
  var note = new Note("Favourite drink: seltzer.")
  var noteList = new NoteList()
  noteList.addNote(note)
  var noteController = new NoteController(noteList);

  function DocumentDouble() {}
  function ElementDouble() {}

  DocumentDouble.prototype = {
    getElementById: function() {return new ElementDouble()}
  }

  ElementDouble.prototype = {
    innerHTML: function() {return "Favourite food: pesto"}
  }

  var docDouble = new DocumentDouble()
  var htmlString = "<ul><li><div>" + note.text.substring(0, 20) + "...</div></li></ul>"
  assert.isEqual(noteController.getAndDisplayHTML(docDouble, "app"), htmlString)
})()
