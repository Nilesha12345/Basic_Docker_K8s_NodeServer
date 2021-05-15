# For Kubernetes
**Steps for running the App on Kubernetes : 2 Options**

**Option 1:** Download the code from Github and unzip the files

**Option 2:** Run App directly from Github


_**Steps for Option 1**_

1. Unzip code from Github.  Once unzipped the files,  Move inside the folder until you find DockerFile,  Now open Powershell or Terminal in the same directory.

2. Run the following commands

> Creating namespace
````
kubectl create ns nodeserver
````
> Creating Kubernetes deployment/pods
````
kubectl apply -f .\K8s\Node\deployment.yaml --namespace=nodeserver
````
> Creating Kubernetes service
````
kubectl apply -f .\K8s\Node\service.yml --namespace=nodeserver
`````


_**Steps for Option 2**_         
       
1 & 2. Execute the following commands On Powershell or Terminal
> Creating namespace
````
kubectl create ns nodeserver
````
> Creating Kubernetes deployment/pods
````
kubectl apply -f https://raw.githubusercontent.com/Nilesha12345/Basic_Docker_K8s_NodeServer/master/K8s/Node/deployment.yaml --namespace=nodeserver
````
> Creating Kubernetes service
````
kubectl apply -f https://raw.githubusercontent.com/Nilesha12345/Basic_Docker_K8s_NodeServer/master/K8s/Node/service.yml --namespace=nodeserver
`````

**NOTE : Below commands are same for Option 1 and 2. Complete either one of the above options and then execute the below instructions**

3. Check if Deployment, Pod and Services are Up and Running : 

> To check deployment, pod and services
`````
kubectl get all -n nodeserver
`````

4. Open the Browser and enter the URL : 
`````
http://localhost:9000/ 
`````
or 
`````
http://localhost:9000/date 
`````
It should reply with "Hii, Welcome to Basic Nodejs Docker and Kubernetes Application" or "Hii Today is Sat May 15 2021 18:40:29 GMT+0000 (Coordinated Universal Time)"

5. Now your Application is Up and Running. 

You can also perform Post call via postman with Following URL with any json body
`````
http://localhost:9000/post
``````


You can find more commands in [Kubernetes](./Commands/kubernetes.txt)
