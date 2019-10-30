(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNote = function(note) {
    this.list.push(note)
  }

  NoteList.prototype.seeNotes = function() {
    return this.list
  }

  exports.NoteList = NoteList
})(this)
