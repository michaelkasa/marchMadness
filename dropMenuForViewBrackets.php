//--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
//                                                                             >
//  Name:  Michael Kasa                                                        >
//  Date:  20 Mar 2016                                                         >
//  File:  dropMenuForViewBrackets.php                                         >
//  Description:  This PHP code sets the drop menu for viewBrackets.php.       >
//                  Note that the user's picks and results (that is, right     >
//                  versus wrong picks) are also loaded and stored for         >
//                  Javascript use.                                            >
//                                                                             >
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

<?php
  $myfile = fopen("userbrackets.dat","r")
      or die("Can't open userbrackets.dat!");
  $resFile = fopen("userResultsPy.dat","r")
      or die("Can't open userResultsPy.dat");
  $i = 0;
  while(!feof($myfile)) {
    $nameStr = substr(fgets($myfile),0,-1);
    $resStr = substr(fgets($resFile),0,-1);
    if ($nameStr != '') {
      $l = '    <option value="Entry'.strval($i).
           '" id="Entry'.strval($i).'">'.$nameStr.'</option>'."\n";
           $nameStr.'</option>'."\n";
      echo $l;
      $l = '    <script> document.getElementById("Entry'.strval($i).
           '").choices = "'.substr(fgets($myfile),0,-1).'"</script>'."\n";
      echo $l;
      $i++;
    }
    if ($resStr != '') {
      $l = '    <script> document.getElementById("Entry'.strval($i-1).
      '").results = "'.$resStr.'"</script>'."\n";
      echo $l;
    }
  }
  fclose($myfile);
  fclose($resFile);
?>

