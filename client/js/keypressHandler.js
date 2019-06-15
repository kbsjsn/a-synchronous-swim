


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    //SwimTeam.move(direction.toLowerCase());
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000',
      data: JSON.stringify(direction.toLowerCase()),
      success: (data) => console.log(data)
      //SwimTeam.move(data),
      // complete: () => setTimeout(getSwimCommand, 1000)
    })
  }
});


console.log('Client is running in the browser!');
