# ToDo-Application
This is a Todo-Application developed using react, node, express, mysql.

                                                ****  DIRECTION FOR RUNNING TODO APPLICATION   ****
There are two folders called TodoFrontend and TodoBackend that comprise files for the front end (React, Javascript, Css, Bootstrap) and the back end (Nodejs, Express, Mysql) Import them.

                                                     **** Prerequisites ****
==> BACKEND :

Install mysql and create database named 'varundb' and a table with following attributes

1.  TABLE NAME:  todolist

2.  COLUMNS:

     id (int) PRIMARY KEY (auto_increment)
     
     Task (varchar(1000)) NOTNULL 
    
     Priority (varchar(10)) NOTNULL
     
     Completestatus (int)   NOTNULL DEFAULTVALUE:0

3.  To start server Run 'node server.js' command  

      """ Server listening in port 3500
         
         Database connection successful! """
    
    If console outputs the above lines then your database is connected successfully

==> FRONTEND:

Just Run ' npm start ' command and this will start the server

                                                   *** How to Use ***

After Starting the server you will be directed to landing page i.e., the all tasks page click on AllTasks option to see all your tasks.

=> Add New task:
     
     To add new Task enter the task in the input field provided (on top of page) and select the priority of task in the dropdown provided(it is low by default) and click on add task button to add the newly entered task. The newly entered task will appear in the incomplete tasks section.(If not appeared reload the page)

=> See Incomplete/Complete Tasks:
     
     click on Incomplete/Complete button to expand/hide the incomplete/complete block respectively.

=> Check a incomplete task To complete or vice versa:
     
     Simply click the checkbox next to each job to complete the one that isn't finished and vice versa.(if it doesnot happen just reload the page)

=> See only High Priority Tasks:
     
     Just click on the High Priority option in the sidebar and it will show all the High Priority tasks.

=> See only Medium Priority Tasks:
     
     Just click on the Medium Priority option in the sidebar and it will show all the Medium Priority tasks.

=> See only Low Priority Tasks:
     
     Just click on the Low Priority option in the sidebar and it will show all the Low Priority tasks.
