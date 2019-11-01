(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {

    var notes = []

    function html_function(item) {
      notes.push(item.text.substring(0, 20) + "...")
    }

    this.noteList.list.forEach(html_function)

    notesString = notes.join("</div></li><li><div>")

    return "<ul><li><div>" + notesString + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView
})(this)
