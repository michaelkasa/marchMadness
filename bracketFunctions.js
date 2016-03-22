//--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
//                                                                             >
//  Name:  Michael Kasa                                                        >
//  Date:  20 Mar 2016                                                         >
//  File:  bracketFunctions.js                                                 >
//  Description:  This file contains many Javascript helper functions to       >
//                  support the March Madness website.                         >
//                                                                             >
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  gameArr                                                   //
//  Inputs:         n  =  game index                                          //
//  Outputs:        a  =  array of html elements forming a single game        //
//  Description:    This function returns an array of html elements which     //
//                    display a game.                                         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
  
function gameArr(n) {
  var nStr = n.toString();
  var a = [];
  a.push('  <tr>');
  a.push('  <td id="G'.concat(nStr.concat('">')));
  var l = '  <input type="radio" name="G'.concat(nStr);
  l = l.concat('" value="team1" id="G');
  l = l.concat(nStr);
  l = l.concat('T1">');
  a.push(l);
  l = '  <label for="G'.concat(nStr);
  l = l.concat('T1"> Game ');
  l = l.concat(nStr);
  l = l.concat(' Team 1  </label><br>');
  a.push(l);
  var l = '  <input type="radio" name="G'.concat(nStr);
  l = l.concat('" value="team2" id="G');
  l = l.concat(nStr);
  l = l.concat('T2">');
  a.push(l);
  l = '  <label for="G'.concat(nStr);
  l = l.concat('T2"> Game ');
  l = l.concat(nStr);
  l = l.concat(' Team 2  </label><br>');
  a.push(l);
  a.push('  </td>');
  a.push('  </tr>');
  return a;
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  printArr                                                  //
//  Inputs:         a  =  array of html elements forming a single game        //
//  Outputs:        None                                                      //
//  Description:    Writes the elements of the array to the document.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function printArr(a) {
  for (var i=0; i<a.length; i++) {
    document.write(a[i]);
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  printGames                                                //
//  Inputs:         n  =  game index of first game                            //
//                  l  =  number of games to print                            //
//  Outputs:        None                                                      //
//  Description:    Prints html code for games of index n to n + l - 1        //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function printGames(n, l) {
  for (var i=n; i<n+l; i++) {
    printArr(gameArr(i));
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  titleAndNavMenu                                           //
//  Inputs:         None                                                      //
//  Outputs:        None                                                      //
//  Description:    Creates the page title and navigation menu                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function titleAndNavMenu() {
  document.write('<h1 style="text-align:center;color:#EC583A">'            );
  document.write("Ballin' with the Kasa family!</h1><br>"                  );
  document.write('<div style="text-align:center">'                         );
  document.write('<ul id="navmen">'                                        );
  document.write('<li><a href="marchmadness.php">Home</a></li>'            );
  document.write('<li><a href="enterBracket.php">Submit a bracket</a></li>');
  document.write('<li><a href="viewBrackets.php">View brackets</a></li>'   );
  document.write('</ul></div><br>'                                         );
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  updateNames                                               //
//  Inputs:         None                                                      //
//  Outputs:        None                                                      //
//  Description:    If the user picks a winner in a game, copy the winning    //
//                    team's name to the next round.  Also make the selected  //
//                    team bold and update the "national championship" line.  //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function updateNames() {

  // Loop 6 times so that a change in the first round will propogate through
  //   the entire backet
  for (var k=0; k<6; k++) {
    for (var i=0; i<teams.length; i++) {
      if (teams[i].checked) {
        teams[i].label.style.fontWeight = "bolder";
      } else {
        teams[i].label.style.fontWeight = "normal";
      }
      // Update the team name based on the picked winner from the last game
      if (teams[i].lastGame != ''){
        for (var j=0; j<teams[i].lastGame.teams.length; j++){
          if (teams[i].lastGame.teams[j].checked) {
            teams[i].label.innerHTML = 
                teams[i].lastGame.teams[j].label.innerHTML;
          }
        }
      }
    }
  }
  // Set the national champ text at the top of the page
  var champG = document.getElementById("G1");
  for (var i=0; i<2; i++) {
    if (champG.teams[i].checked) {
      document.getElementById("natchamp").innerHTML = 
          champG.teams[i].label.innerHTML;
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  loadBracket                                               //
//  Inputs:         games  =  array of games                                  //
//                  teams  =  array of teams                                  //
//  Outputs:        None                                                      //
//  Description:    Load a user's bracket to the screen                       //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function loadBracket(games, teams) {
  // Note that the choices are saved as a string of 1's and 2's representing 
  //   the user's pick of each game by game label.  
  var bM = document.getElementById("bracketMenu");
  document.getElementById("usernamedisplayed").innerHTML = 
      bM.options[bM.selectedIndex].text;
  var myChoices = bM.options[bM.selectedIndex].choices;
  for (var i=0; i<teams.length; i++) {
    teams[i].disabled = false;
  }
  for (var i=1; i<64; i++) {
    // Team array is 0-indexed
    thisC = Number(myChoices.substr(i-1, 1)) - 1;
    games[i-1].teams[thisC].checked = true;
    games[i-1].teams[(thisC+1)%2].disabled = true;
  }
  updateNames();
  updateRes();
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  updateRes                                                 //
//  Inputs:         None                                                      //
//  Outputs:        None                                                      //
//  Description:    Color correct picks green and incorrect picks red.        //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function updateRes() {
  // The results string contains 0s, 1s, and 2s.
  //    * 0 means that the game hasn't been played yet.
  //    * 1 means that the user has the correct team winning.
  //    * 2 means that the user has the wrong team winning. 
  var bM = document.getElementById("bracketMenu");
  var results = bM.options[bM.selectedIndex].results;
  if (results != '' ) {
    for (var iG=1; iG<64; iG++) {
      var gRes = Number(results.substr(iG-1, 1));
      // Right choice
      if (gRes == 1) {
        game = document.getElementById('G'.concat(iG.toString()));
        game.style.backgroundColor = 'green';
      // Wrong choice
      } else if (gRes == 2) {
        game = document.getElementById('G'.concat(iG.toString()));
        game.style.backgroundColor = 'red';
      }
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  formatGames                                               //
//  Inputs:         None                                                      //
//  Outputs:        None                                                      //
//  Description:    Set the height, color, and spacing of the games.          // 
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function formatGames() {
  // First round
  for (var i=32; i<64; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#C7D0D5';
    x.style.height = '100px';
  }
  // Second round
  for (var i=16; i<32; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#93B1C6';
    x.style.height = '150px';
    x.style.border = 'solid #F5F5F5';
    x.style.borderWidth = '27px 0px';
  }
  // Third round
  for (var i=8; i<16; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#C7D0D5';
    x.style.height = '225px';
    x.style.border = 'solid #F5F5F5';
    x.style.borderWidth = '93px 0px';
  }
  // Fourth round
  for (var i=4; i<8; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#93B1C6';
    x.style.height = '390px';
    x.style.border = 'solid #F5F5F5';
    x.style.borderWidth = '220px 0px'
  }
  // Fifth round
  for (var i=2; i<4; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#C7D0D5';
    x.style.height = '780px';
    x.style.border = 'solid #F5F5F5';
    x.style.borderWidth = '450px 0px';
  }
  // Sixth round
  for (var i=1; i<2; i++) {
    var x = document.getElementById('G'.concat(i.toString()));
    x.style.backgroundColor = '#93B1C6';
    x.style.height = '1600px';
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  getLabels                                                 //
//  Inputs:         None                                                      //
//  Outputs:        labels  =  array of labels                                //
//  Description:    This function returns an array of labels; moreover, the   //
//                    labeled elements are linked to their labels.            //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function getLabels() {
  var labels = document.getElementsByTagName('LABEL');
  for (var i =0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
      var elem = document.getElementById(labels[i].htmlFor);
      if (elem)
        elem.label = labels[i];
    }
  }
  return labels;
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  getTeams                                                  //
//  Inputs:         None                                                      //
//  Outputs:        teams  =  array of teams                                  //
//  Description:    This function returns an array of teams;  moreover, the   //
//                    teams are linked to their current and former games.     //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function getTeams() {
  // Here, "team" means spot on the bracket; e.g. Game 3 Team 2.
  // Each team has two attributes:
  //    * thisGame = the current game in which the team lives
  //    * lastGame = the game the current team won to get here ('' if none)
  var teams = [];
  for (var i=1; i<64; i++) {
    teams.push(document.getElementById
        ( 'G'.concat(i.toString()).concat('T1') ));
    teams.push(document.getElementById
        ( 'G'.concat(i.toString()).concat('T2') ));
  }
  for (var i=0; i < teams.length; i++) {
    var teamId = teams[i].id;
    var gameN  = Number(teamId.substr(1,teamId.length-3));
    var teamN  = Number(teamId.substr(teamId.length-1));
    var lastGameN = 2*gameN + (teamN-1);
    teams[i].thisGame = document.getElementById
        ( teamId.substr(0,teamId.length-2) );
    if (gameN > 31) {
      teams[i].lastGame = '';
    } else {
      teams[i].lastGame = document.getElementById( 'G'.concat( lastGameN ) );
    }
  }
  return teams;
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  getGames                                                  //
//  Inputs:         None                                                      //
//  Outputs:        games  =  array of games                                  //
//  Description:    This function returns an array of games; moreover, the    //
//                    games are linked to their teams and its winner.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function getGames() {
  // There are 63 games.  We number them starting at 1 for the CHAMPIONSHIP
  //   GAME, and increment working backwards; e.g. the Final Four games are
  //   games #2 and #3.
  // Note: with this numbering system, the first round games are #32 - #63.
  //   Moreover, the two games feeding into game #N are games #(2*N) and 
  //   #(2*N + 1).
  // Each game has two attributes:
  //    * teams = array of its teams
  //    * winner = the team (space in bracket) where the winning team goes
  //        ('' for the CHAMPIONSHIP GAME).
  var games = [];
  for (var i=1; i<64; i++) {
    games.push(document.getElementById( 'G'.concat(i.toString()) ));
  }
  for (var i=0; i < games.length; i++) {
    var n = Number(games[i].id.substr(1));
    if (n==1) {
      games[i].winner = '';
    } else {
      var nOverTwo = ~~(n/2);
      var nModTwo = ((n-1)%2)+1;
      var winnerId = 'G'.concat( nOverTwo.toString() );
      winnerId = winnerId.concat( 'T'.concat( nModTwo.toString() ) );
      games[i].winner = document.getElementById( winnerId );
    }
    games[i].teams = document.getElementsByName( games[i].id );
  }
  return games;
}


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Function name:  validateInputs                                            //
//  Inputs:         games  =  array of games                                  //
//  Outputs:        boolean, true if the user's inputs are valid              //
//  Description:    Check if the user's inputs are valid.  In this case, the  //
//                    inputs are valid if the name is nonempty and a choice   //
//                    has been made for each game.                            //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function validateInputs(games) {
  // Entered something in the name box
  var username = document.getElementById("username").value;
  if (username == '') {
    alert( 'Please enter a name.' );
    return false;
  }
  // Made a selection for each game
  for (var i=0; i<games.length; i++) {
    if (!(games[i].teams[0].checked || games[i].teams[1].checked)) {
      alert( 'Please make a choice for game '.concat(i.toString()) );
      return false;
    }
  }
  return true;
}

