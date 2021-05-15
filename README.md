# Basic_Docker_K8s_NodeServer
This is Repo Basic NodeJs WebServer on Docker and Kubernetes


# Steps for running the app from Docker : 2 Options
# Option 1: Download the code from Github and unzip the files
# Option 2: Run App directly from DockerHub

# Steps for Option 1
# 1.Unzip code from Github. once unzipped the files, move inside the folder till you find DockerFile, once found , open Powershell or terminal to the same directory.
# 2.Run the following commands
-- docker build :
  >> docker build -t nileshacharya9047/basicnodeserve:v1 .
-- docker run
  >> docker run -d --name node_server -p 9000:9000 --rm --pull missing nileshacharya9047/basicnodeserve:v1
-- docker add tag (Optional)
  >> docker tag nileshacharya9047/basicnodeserver:v1 samplenodeserver:latest

# Steps for Option 2
# 1 & 2 .Execute the following On Powershell or Terminal
-- docker pull image from DockerHub
  >> docker pull nileshacharya9047/basicnodeserver:v1
-- docker run
  >> docker run -d --name node_server -p 9000:9000 --rm --pull missing nileshacharya9047/basicnodeserve:v1

# NOTE : Below commands are same for Option 1 and 2. Complete either one of the options and then execute the below instructions

# 3.Open the Browser and enter the URL : 
http://localhost:9000/ or http://localhost:9000/date 
It should reply with "Hii, Welcome to Basic Nodejs Docker and Kubernetes Application" or "Hii Today is Sat May 15 2021 18:40:29 GMT+0000 (Coordinated Universal Time)"
# 4.Now you application is Up and Running. 
You can also perform Post call via postman with URL http://localhost:9000/post with any json body

You can find more commands in [docker.txt] ./Commands/docker.txt

