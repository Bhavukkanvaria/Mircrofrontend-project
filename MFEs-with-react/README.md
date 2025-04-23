# Microfrontends demo application
As a part of this demo we have created three diffrent applications and they are working on diffrent ports as below
1. host (This is micro frontends host application and will run on port 4010)
2. shared (This is first remote/child application and will run on port 4011)
3. todolist (This is second remote/child application and will run on port 4012)

We are using components from both the remotes applications in host application.

## Steps to run
1. First go to shared folder, do npm install and then npm start (App will open in port 4011).
2. Now go to todolist folder in another tab and do npm install and then npm start (App will open in port 4012).
3. Now go to host folder in third tab and do npm install and then npm start (App will open in port 4010).
4. You will see components from both the child applications are used in host application.
