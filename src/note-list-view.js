(function(exports) {
  function NoteListView(noteListModel) {
    this.noteList = noteListModel
  }

  NoteListView.prototype.returnHTML = function() {

    var notes = []

    function html_function(item) {
      notes.push(item.text)
    }

    this.noteList.list.forEach(html_function)

    notesString = notes.join("</div></li><li><div>")

    return "<ul><li><div>" + notesString + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView
})(this)
