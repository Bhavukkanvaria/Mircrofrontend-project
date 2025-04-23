# Microfrontends demo application
As a part of this demo we have created two diffrent applications and they are working on diffrent ports as below
1. shared (This is first remote/child application and will run on port 5011)
2. host (This is micro frontends host application and will run on port 5010).

## Steps to run
1. First go to shared folder, do npm install and then npm start (App will open in port 5011).
As the shared app is consuming store from host app, and host app is not runnning so shared app will throw some Error. once you run the host app, it will run. 
2. Now go to host folder in seccond tab and do npm install and then npm start (App will open in port 5010).
