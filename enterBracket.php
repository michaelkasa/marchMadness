<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
<                                                                              >
<   Name:  Michael Kasa                                                        >
<   Date:  20 Mar 2016                                                         >
<   File:  marchmadness.php                                                    >
<   Description:  Page where the user enters his or her bracket picks!         >
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

  <form action="submitBracket.php" method="post" 
    onsubmit="return validateInputs(games)" onclick="updateNames()">

    <p style="text-align:center">Please enter your name: 
      <input type="text" name="username" id="username"></p>
    <p style="text-align:center" >
      Your national champ is  <span style="color:#EC583A" id="natchamp">
      UNSET</span>!.</p>  
    <p style="text-align:center">
      <input type="submit" value="Submit your bracket!"></p>

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
  </script>

</body>
</html>
