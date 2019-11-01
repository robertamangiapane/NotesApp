(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {

    var notes = ""

    this.noteList.list.forEach(function(item) {
      var string = item.text.substring(0, 20) + "..."
      var id = item.id

      notes += '<div id="' + id + '"><a href="#notes/' + id + '" id="' + id+ '">' + string + '</a></div>'
    });
    console.log(notes)

    return notes
  }

  exports.NoteListView = NoteListView
})(this)
