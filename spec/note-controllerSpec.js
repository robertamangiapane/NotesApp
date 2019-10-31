(function note_controller_diplay_html() {
  var note = new Note("Favourite drink: seltzer.")
  var noteList = new NoteList()
  var noteController = new NoteController(noteList, note);

  function DocumentDouble() {}
  function ElementDouble() {}

  DocumentDouble.prototype = {
    getElementById: function() {return new ElementDouble()}
  }

  ElementDouble.prototype = {
    innerHTML: function() {return "Favourite food: pesto"}
  }

  var docDouble = new DocumentDouble()
  var htmlString = "<ul><li><div>Favourite drink: seltzer.</div></li></ul>"
  assert.isEqual(noteController.getAndDisplayHTML(docDouble), htmlString)
})()
