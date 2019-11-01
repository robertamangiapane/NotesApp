(function(exports) {
  function NoteList() {
    this.countId = 0
    this.list = []
  }

  NoteList.prototype.addNote = function(note) {
    note.id = this.countId
    this.countId += 1
    this.list.push(note)
  }

  NoteList.prototype.seeNotes = function() {
    return this.list
  }

  NoteList.prototype.getNote = function(id) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        return this.list[i]
      }
    }
  }

  exports.NoteList = NoteList
})(this)
