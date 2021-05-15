# For Docker
**Steps for running the App on Docker : 2 Options**

**Option 1:** Download the code from Github and unzip the files

**Option 2:** Run App directly from DockerHub


_**Steps for Option 1**_

1.Unzip code from Github.  Once unzipped the files,  Move inside the folder until you find DockerFile,  Now open Powershell or Terminal in the same directory.
2.Run the following commands

> Building Docker Image
````
docker build -t nileshacharya9047/basicnodeserve:v1 .
````
> Containerizing Docker Image
````
docker run -d --name node_server -p 9000:9000 --rm --pull missing nileshacharya9047/basicnodeserve:v1
````
> Adding more tags to Docker image (Optional)
````
docker tag nileshacharya9047/basicnodeserver:v1 samplenodeserver:latest
`````


_**Steps for Option 2**_         
       
1 & 2 .Execute the following On Powershell or Terminal
> Pulling DockerImage from DockerHub
````` 
docker pull nileshacharya9047/basicnodeserver:v1
````` 
> Containerizing Docker Image
````` 
docker run -d --name node_server -p 9000:9000 --rm --pull missing nileshacharya9047/basicnodeserve:v1
`````

**NOTE : Below commands are same for Option 1 and 2. Complete either one of the above options and then execute the below instructions**


3.Open the Browser and enter the URL : 
`````
http://localhost:9000/ 
`````
or 
`````
http://localhost:9000/date 
`````
It should reply with "Hii, Welcome to Basic Nodejs Docker and Kubernetes Application" or "Hii Today is Sat May 15 2021 18:40:29 GMT+0000 (Coordinated Universal Time)"

4.Now you application is Up and Running. 

You can also perform Post call via postman with Following URL with any json body
`````
http://localhost:9000/post
``````
You can find more commands in [Docker.txt](./Commands/docker.txt)

