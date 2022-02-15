function myFunction() {

  var ss = SpreadsheetApp.getActiveSheet();

  var label = GmailApp.getUserLabelByName("abc");
  var threads = label.getThreads();

  for (var i=0; i<threads.length; i++)
  {
    var messages = threads[i].getMessages();

    for (var j=0; j<messages.length; j++)
    {
      var msg = messages[j].getPlainBody().substring(0,500);
      var sub = messages[j].getSubject();
      var dat = messages[j].getDate();

      ss.appendRow([msg, sub, dat])
    }
     
  }
}
