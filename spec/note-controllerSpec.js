(function note_controller_diplay_html() {
  var noteController = new NoteController();

  function DocumentDouble() {}
  function ElementDouble() {}

  DocumentDouble.prototype = {
    getElementById: function() {return new ElementDouble()}
  }

  ElementDouble.prototype = {
    innerHTML: function() {return "Favourite food: pesto"}
  }

  var docDouble = new DocumentDouble()
  var htmlString = '<div id="0"><a href="#notes/0" id="0">' + noteController.noteList.list[0].text.substring(0, 20) + "...</a></div>"
  assert.isEqual(noteController.getAndDisplayHTML(htmlString, docDouble), htmlString)
})()
