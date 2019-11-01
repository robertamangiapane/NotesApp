(function(exports) {

  function NoteController(noteList = new NoteList()) {
    var note = new Note("Favourite food: pesto")

    this.noteList = noteList
    noteList.addNote(note)

    this.noteListView = new NoteListView(noteList)
    window.addEventListener("hashchange", this.getHash())
  }

  NoteController.prototype.getAndDisplayHTML = function(content, doc = document) {
    var element = doc.getElementById("app")
    return element.innerHTML = content
  }

  NoteController.prototype.getHash = function() {
    var noteId = this.getNotefromUrl(window.location)
    if (noteId !== undefined) {
      this.viewSingleNote(noteId)
    }
  }

  NoteController.prototype.getNotefromUrl = function(location) {
    var hash = location.hash.split("#")[1]
    if (hash !== undefined) {
      return location.hash.split("#")[1].split("notes/")[1];
    }
  }

  NoteController.prototype.viewSingleNote = function(id) {
    singleNote = new SingleNoteView(this.noteList.getNote(id))
    this.getAndDisplayHTML(singleNote.noteHTML())
  };

  exports.NoteController = NoteController
})(this)
