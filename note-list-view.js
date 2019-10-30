(function(exports) {
  function NoteListView(noteList = new NoteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {

    var note = ""

    function html_function(item) {
      note += "<li><div>" + item.text + "</div></li>"
    }

    this.noteList.list.forEach(html_function)

    var string = "<ul>" + note + "</ul>"


    return string
  }

  exports.NoteListView = NoteListView
})(this)
