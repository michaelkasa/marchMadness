<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
//                                                                             >
//  Name:  Michael Kasa                                                        >
//  Date:  20 Mar 2016                                                         >
//  File:  printLeaderBoard.php                                                >
//  Description:  This PHP code reads the leaderboards data from the file      >
//                  "userScores.dat"                                           > 
//                                                                             >
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
        
        <?php
          $scorefile = fopen("userScores.dat","r") or
              die("Can't open userScores.dat");
          while(!feof($scorefile)) {
            $thisLine = fgets($scorefile);
            if ($thisLine != '') {
              echo "<li>";
              echo substr($thisLine,0,-1);
              echo "</li>\n";
            }
          }
        ?>

