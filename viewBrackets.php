<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
<                                                                              >
<   Name:  Michael Kasa                                                        >
<   Date:  20 Mar 2016                                                         >
<   File:  viewBrackets.php                                                    >
<   Description:  Page displaying user submitted brackets.  Correct picks are  >
<                   shown in green, incorrect picks are shown in red.          >
<                                                                              >
<++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="navBarStyle.css">
  <link rel="stylesheet" type="text/css" href="pageStyle.css">
  <script type="text/javascript" src="bracketFunctions.js"></script>
  <title>March Madness!</title>
</head>

<body>
  <script> titleAndNavMenu(); </script>

  <div style="text-align:center">Choose a bracket to view: 
    <form action="" onclick= "loadBracket(games,teams)" 
		    onchange="loadBracket(games,teams)">
      <select name="brackets" id="bracketMenu">
      <?php include 'dropMenuForViewBrackets.php'; ?>
  </select></form></div>

  <form action="" onclick="updateNames()">

    <p style="text-align:center" >
      <span id="usernamedisplayed">User's</span>'s national champ is  
      <span style="color:#EC583A;font-weight:bolder" id="natchamp">
	  UNSET</span></p>
    <table class="center" style="width:1200px"><tr>

      <td><table style="width:200px">
	<script> printGames(32,32); </script>
      </table></td>
      <td><table style="width:200px">
	<script> printGames(16,16); </script>
      </table></td>
      <td><table style="width:200px">
	<script> printGames(8,8); </script>
      </table></td>
      <td><table style="width:200px">
	<script> printGames(4,4); </script>
      </table></td>
      <td><table style="width:200px">
	<script> printGames(2,2); </script>
      </table></td>
      <td><table style="width:200px">
	<script> printGames(1,1); </script>
      </table></td>

    </tr></table>
  </form>

  <script>
    var labels = getLabels();
    var teams =  getTeams ();
    var games =  getGames ();
    <?php include 'setTeamnames.php'; ?> 
    formatGames();
    loadBracket(games,teams);
  </script>

</body>
</html>

