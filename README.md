# After School Server
Is designed for learning about web technolgy and api data
It is specifically for after school programs to help students learn about technology

## New to Development / Coding
Many terms are used for Development.  Software Engineering, Coding, Web Development.  It can be confusing.  As Web Technologies become more and more integrated into Applications ( Apps ), the terms Software Engineer and Web Development still mean different things, but are closely related.

### Terms for You
* Terminal: CLI Command Line Tool  - Computer command tool that allows you to send commands to the computer
When you hear Terminal, think command tool for the computer.
When you hear CLI, command tool for the computer.
We use the CLI / Terminal to send commands to the computer without having to write code.  We can use the CLI to install software.

* IDE: Integrated Developmer Environment - Tool used to Write Code
When you hear IDE, think Tool used to Write Code.
IDE's can be specific for the language you are using, but usually they can support many languages.  

* JavaScript: Programming Language - Language used in Front End and Backend Systems
When you hear Programming Language, think language that will used to write instructions for a computer.
Programming Languages are always evolving.  JavaScript is a language that enhances the Front End so that humans to interact with content.  JavaScript can be used in the Backend as well to work with files and serve content to the Front End.  

* Front End: What the user sees and interacts with - Web Browser / HTML
When you hear Front End, think Web Browser and the display a human would interact with.

* HTML: Hyper Text Markup Language - Language used to display content on Web Pages
When you hear HTML, think the structure of a Web Page.
HTML is a tag structured model used to display content in a Web Browser.  Scripting Languages like JavaScript interact with the content and structure allowing users to interact with the page. 

* Backend: Server - Hardware and Software that supports functionality of the Front End
When you hear Backend, think Server that supports the Front End.
The Backend serves Web Pages that a Web Browser will read and display.  The Front End communicates with the Backend to request content.  Many times content is stored in a Database or DataStructures.  Advancements are continually being made to improve communication and data storage.

 * Database: Data Structure - Data Storage that contains records of associated content
 When you hear Database, think Data Storage.
 A Database stores Data in structured files. Data can be sorted, searched, filtered.  There are many kinds of Databases and Data Structures.  Many Databases have IDE's and their own Programming Language.  SQL is one of the Languages

 * SQL: Structured Query Language - Programming Language used to alter data or get data from a Database
 When you hear SQL, think data question or data change
 We use SQL to interact with a Database.  Some things SQL does is Insert Data, Change Data, Delete Data, Get Data.  The Front End is able to request Data from the Backend.  The Backend will interact with the Database perform the request.  Then the Backend will respond to the Front End with the results.


## New to JavaScript
Many languages have community libraries available for use.  Developers find and install the packages that are most usefull for their projects.  This is a way to quickly add power to your project without having to write the functionality for yourself. NPM is a tool used to install packages from the community library.  There are other package management tools, but we'll use NPM here.

* NPM: Node Package Manager - Community Resource for sharable code
When you hear NPM, think someone has code for me to use
We install packages using NPM.  We can also run this project using npm.

## Get Started
Install the packages from the community libraries.
You need to be in the root directory of this project.  That means wherever you saved this project you need to navigate into the after-school-servers directory using a CLI or your IDE's Terminal

### Windows
```
C:\your-directory\after-school-servers> npm install
```
### Linux / Unix
```
root/your-directory/after-school-servers> npm install
```

### Server Setup: self signed https certifications
As of now this is not useful to the project.  Oh and linux / unix needs to run the cert file directly
I am having issues with the self signed certs for HTTPS.  The raspberry pi doesn't like them very much.  It could be that I did not open or allow port 81 correctly.  But I wasn't able to run the server on that port.  Windows doesn't like them that much either but will serve using it.  Of course the browser will indicate it is not a secure site.  So with it not being secure and not being able to run I have changed the server to be HTTP instead.  Maybe I'll get the certifications running properly in the future.
### Windows
```
C:\your-directory\after-school-servers> npm run setup-windows
```
### Linux / Unix
```
root/your-directory/after-school-servers> npm run setup-linux
```

## Run the server
start the server and local host
### Windows
```
C:\your-directory\after-school-servers> npm run run-windows
```
### Linux / Unix
```
root/your-directory/after-school-servers> npm run run-linux
```

## View the Data
The configured port can be updated on the package.json file.  Look at the package.json file and find the script you used to start the server.  When you interact with the API's below, be sure to change the configured port.
When you started the server, there was a log in the terminal that provides the Url to use in the Browser.
```
server is running on http://localhost:15776/  from C:\codebase\AppCuriousDevelopers\after-school-servers\
```

### Api List
 display a list of routes 
 ```
 http request https://localhost:{configured-port}/afterschool/api/v1/list
 ```
