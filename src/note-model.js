setId = function() {
  for (id = 0; id >= 0; id++) {
    if (document.getElementById(id) === null) {
      return id
    }
  }
};

(function(exports) {
  function Note(text) {
    this.text = text
    this.id = setId()
  };

  Note.prototype.seeNote = function() {
    return this.text
  };

  exports.Note = Note
})(this);
