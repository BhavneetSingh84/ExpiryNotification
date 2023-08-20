# ExpiryNotification
This NodeJS application reads data from Excel file and send the email notification using SMTP for expiry date of products

## Prerequistics
0. install a nodejs on you device
1. npm init -y -> to create a node project
2. npm install xlsx -> install xlsx dependecy to read xlsx file
3. npm nodemailer -> depeedency to send email
4. node fileName -> run the file

## For utomation of file 
two make this file run daily 
use the task manager.
Open Task Scheduler: Press Windows + R, type taskschd.msc, and press Enter.

Create a New Task: In the right-hand panel, click on "Create Basic Task..."

Name the Task: Provide a name and description for the task, then click "Next."

Set the Trigger: Choose "Daily" and specify the time you want the task to run each day. Click "Next."

Set the Action: Choose "Start a program" as the action, then click "Next."

Specify the Program:

In the "Program/script" field, enter the path to your Node.js executable (e.g., C:\Program Files\nodejs\node.exe).
In the "Add arguments" field, enter the path to your main.js script (e.g., C:\path\to\your\main.js).
In the "Start in" field, enter the directory containing your main.js file (e.g., C:\path\to\your\).
Finish the Setup: Click "Next" and then "Finish."
