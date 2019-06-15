


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    //SwimTeam.move(direction.toLowerCase());
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000',
      data: direction.toLowerCase(),
      success: (data) => console.log(`${data} command received`),
      error: (data) => console.error(`Failed to send ${data}`)
    })
  }
});


console.log('Client is running in the browser!');
