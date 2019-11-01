(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.getAndDisplayHTML = function(doc = document) {
    var element = doc.getElementById("app")
    return element.innerHTML = this.noteListView.returnHTML()
  }

  exports.NoteController = NoteController
})(this)
