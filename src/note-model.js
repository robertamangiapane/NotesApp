(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.seeNote = function() {
    return this.text
  }

  exports.Note = Note
})(this)
