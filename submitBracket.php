<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
<                                                                              >
<   Name:  Michael Kasa                                                        >
<   Date:  20 Mar 2016                                                         >
<   File:  submitBracket.php                                                   >
<   Description:  This page saves the user's bracket data!                     >
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
  <div style="text-align:center">Thank you!</div>

  <?php
    $myfile = fopen("userbrackets.dat","a") or 
        die("Can't open userbrackets.dat!");
    fwrite($myfile, htmlspecialchars($_POST["username"])."\n");
    $pickStr = '';
    for ($i=1; $i<64; $i++) {
      $pickStr = $pickStr.substr($_POST["G".strval($i)],4); 
    }
    fwrite($myfile, $pickStr."\n");
    fclose($myfile);
  ?>

</body>
</html>
