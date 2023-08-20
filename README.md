# ExpiryNotification

ExpiryNotification is a NodeJS application that reads data from an Excel file and sends email notifications using SMTP for the expiry date of products. This document provides an overview of how to install, configure, and automate the application.

## Prerequisites

Before you begin, make sure you have NodeJS installed on your device.

### Installation Steps

1. **Create a Node Project:**
   ```
   npm init -y
   ```

2. **Install xlsx Dependency:**
   ```
   npm install xlsx
   ```
   This will allow you to read xlsx files.

3. **Install Nodemailer Dependency:**
   ```
   npm install nodemailer
   ```
   This will enable you to send emails.

4. **Run the File:**
   ```
   node fileName.js
   ```

## Automating the File Execution

To make this file run daily, use the task manager and follow these steps:

1. **Open Task Scheduler:**
   Press Windows + R, type `taskschd.msc`, and press Enter.

2. **Create a New Task:**
   In the right-hand panel, click on "Create Basic Task..."

3. **Name the Task:**
   Provide a name and description for the task, then click "Next."

4. **Set the Trigger:**
   Choose "Daily" and specify the time you want the task to run each day. Click "Next."

5. **Set the Action:**
   Choose "Start a program" as the action, then click "Next."

6. **Specify the Program:**
   - In the "Program/script" field, enter the path to your Node.js executable (e.g., `C:\Program Files\nodejs\node.exe`).
   - In the "Add arguments" field, enter the path to your `fileName.js` script (e.g., `C:\path\to\your\fileName.js`).
   - In the "Start in" field, enter the directory containing your `fileName.js` file (e.g., `C:\path\to\your\`).

7. **Finish the Setup:**
   Click "Next" and then "Finish."

---

Please ensure that you have the necessary permissions and that the paths are correct for your system.

Feel free to reach out if you need additional support or documentation!
