(function(exports) {
  function Note(text) {
    this.text = text
    this.id = null
  };

  Note.prototype.seeNote = function() {
    return this.text
  };

  exports.Note = Note
})(this);
