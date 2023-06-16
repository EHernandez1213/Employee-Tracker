# Employee Tracker

  ## Description

  This project was created because I wanted to create a way to track employees for a company.
  What this does is it stores any departments, roles, and employees for a company and tracks what their departments are, their salaries, and who their managers are.
  What I learned from project was how to use mysql as a database, how to update, delete and view that data, and how to use the data in our applications.

  ## Table of Contents

  [Installation](#installation)

  [Usage](#usage)
  
  [Credits](#credits)

  [License](#license)

  [Badge](#badge)

  [Contribute](#contribute)

  [Test](#test)

  [Questions](#questions)

  ## Installation

  To install inquirer you will have to navigate to where this file is store in a terminal. Then you will type in npm i inquirer@8.2.4.

  ## Usage

  To use this project you will first go into mysql to create the database. To do that you will run "mysql -u root -p" you will then be asked to enter your mysql password. Once you are in mysql you will input "source db/schema.sql". Then you will source the seed by inputing "source db/seed.sql". To exit mysql you will type "quit" in the terminal. Now the database is created and you can use the node. in the terminal you will input "node index.js". You will be asked what you want to do and be given multiple options. If you select view departments, view role, or view employees you will be given the respective tables. If you select add department, add role or add employee you will be prompted for information about the new entry you are making and the entry will be added to the respective table. If you select update employee you will be asked which employee you want to be updated and given options. Then you will be asked what their new role is and be given options for that as well and they will be updated. If you select remove department, remove role, or remove employee you will be given a list of options to remove and that option will be deleted from the database. To quit the application at any time you can do CTRL C.
  Video Demonstration: https://drive.google.com/file/d/1jhQzlfunbjWXE2orY_jTrvvpI4VYwyUy/view


  ## Credits

  Attributions: inquirer version 8.2.4
  

  ## License
    
  Copyright (C) 2023 Elenilson Hernandez
    
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
  associated documentation files (the "Software"), to deal in the Software without restriction, 
  including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do 
  so, subject to the following conditions:
    
  The above copyright notice and this permission notice shall be included in all copies or substantial
  portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

  ## Badge

![License](https://img.shields.io/badge/License-MIT-green)

  ## Contribute

  There is currently no way to contribute.

  ## Test

  There is currently no way to test this project.

  ## Questions

  If you have any questions you can reach me at elenilson.hernandez1213@gmail.com or my Github account, https://github.com/EHernandez1213
