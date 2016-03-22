//--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
//                                                                             >
//  Name:  Michael Kasa                                                        >
//  Date:  20 Mar 2016                                                         >
//  File:  setTeamnames.php                                                    >
//  Description:  This PHP code sets the names of the teams in the first round >
//                  based on the contents of the file "teamnames.txt".         >
//                                                                             >
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->

<?php
$myfile = fopen("teamnames.txt","r") or die("Can't open teamnames.txt!");
for ($g=32; $g<64; $g++) {
  for ($t=1; $t<3; $t++) {
    echo 'document.getElementById("G';
    echo $g;
    echo 'T';
    echo $t;
    echo '").label.innerHTML = "';
    echo substr(fgets($myfile), 0, -1);
    echo '";';
    echo "\n";
  }
}
?>
