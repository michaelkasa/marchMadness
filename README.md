# marchMadness
Contains the code to run a friendly March Madness competition.

## Setup
Follow these steps to create the website.

### Create Digital Ocean droplet
Create a droplet on Digital Ocean with at least 1 GB memory (in 2024, it meant
upgrading to the _second_ cheapest option).

### Sign up for a domain on GoDaddy and link
Most domains are less than $10 for a year.  Link it to your droplet following
[this guide](https://medium.com/@seanconrad_25426/connecting-a-godaddy-domain-to-a-digitalocean-droplet-cb1ed5662d58).

### Install the required software on your droplet
These commands were in my bash history.
```
sudo apt update && sudo apt upgrade && sudo apt install apache2
sudo reboot
sudo ufw allow 'Apache Full's
sudo systemctl status apache2
sudo apt install mysql-server
sudo service mysql status
sudo apt install php libapache2-mod-php
sudo apt install gh
gh auth login
```

### Clone the repo and do final setup
Again from my bash history
```
cd \var\www\html
gh repo clone michaelkasa/marchMadness
cd marchMadness/
touch userbrackets.dat
chmod a+rw userbrackets.dat 
```

Update `teamnames.txt` with this year's teams.

After some games happen, update `gameResults.dat` and run
`python3 genResults.py` to get updated scores and highlighting. Also update
`marchmadness.php` to show the time the results were updated.

