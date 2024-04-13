<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
<                                                                              >
<   Name:  Michael Kasa                                                        >
<   Date:  20 Mar 2016                                                         >
<   File:  marchmadness.php                                                    >
<   Description:  Homepage for the March Madness site.  This page displays     >
<                   the rules and the leaderboard.                             >
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
  <table class="center" style="background-color:#F5F5F5;width:578px">
    <tr><td>
      <h2 style="color:#EC583A"> Welcome! </h2>
    </td></tr>
    <tr><td>
      Welcome to Ballin' with the Kasa family!
      Submit your bracket using the buttons above.
      Let me know if you have any comments or questions!
    </td></tr>
    <tr><td>
      <h2 style="color:#EC583A"> Leader board (Final scores 2024) </h2>
    </td></tr>
    <tr><td>
      <ol><?php include 'printLeaderBoard.php'; ?></ol>
    </td></tr>
    <tr><td>
      <h2 style="color:#EC583A"> Scoring </h2>
    </td></tr>
    <tr><td>
      We will use the same scoring system we used last year on CBS.
    </td></tr>
    <tr><td style="padding:15px 0px">
      (For those who are interested,  
      a correct pick of an <em>i</em>-th seeded team in round <em>n</em> 
      will earn you <em>i + 2^(n-1)</em> points.  
      For example, suppose you correctly pick #7 Iowa to win 
      in the second round. 
      This pick will earn you <em>7 + 2^(2-1) = 9</em> points.)
    </td></tr>
  </table>
</body>
</html>

