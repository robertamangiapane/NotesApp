(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.noteHTML = function () {
    htmlstring = "<div>" + this.note.text + "</div>"
    return htmlstring
  }

  exports.SingleNoteView = SingleNoteView
})(this)
