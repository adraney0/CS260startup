# 9.12.24
- git merge: allows you to merge when there are conflicts between branches
### Git
- git log: view versions in repo
- HEAD always refers to commit you're currently looking at. Use ~ for numberical distance from HEAD you want to reference
- git branch A: make a new branch named A. Start working on new branch w/ git checkout A. To combine work in branches - checkout mast branch and execute git merge A
### Development Process
1. Pull latest changes from repository (git pull)
2. Make changes to code
3. Commit changes (git commit)
4. Push changes to GitHub (git push)
http://18.235.207.184 - no longer works b/c caddy is set up
https://webprogramming260.click
### Caddy
- Handles all creation and rotation of web certificates
- serves up static HTML. CSS, and JS files
- Acts as a gateway for subdomain requests to Simon and startup application services
- Configuration File: ~/Caddyfile
### HTTP,TLS, and Web Certificates
- In the beginning, mainly used HTTP (non-secure hypertext transport protocol)
- HTTPS: Secure Hypertext Transport Protocol
- Certificate Issuer - responsible for verifying the certificate owner actually owns the domain represented by certificate

# 9.17.24
- !DOCTYPE html - tells browser you’re giving it HTML
### HTML
- lang = “en”  - language is english
- HTML is building a tree (DOM - document object model)
- alt - alternant text describing image
- src - source
- Absolute Link - full url address, can pull from anywhere
- Relative Link - address in relation to your local file structure

# 9.19.24
- 2 Main Function of Caddy - serve files, web certificates, redirects web traffic
- HTML - hypertext markup language, used to structure a web page and its content
- DOM - documet object model. A tree, HTML that you write describes the strucutre. Data structure that contains all the information of your web app.
### HTML: Simon
- sup - superscript
- & - signifies escape character
- a - anchor, url
- class - for styling, multiple things
- id - single thing
- span - doesn’t go across the whole page
- A browser is an interpreter. Doesn’t give you any feedback

# 9.24.24
## CSS: Rules, Box Model, Fonts, Animation, Grid, Flex
### Application One
- CSS in element tags, only applies to this single paragraph

### Application Two
- CSS in the head of HTML, applies to all paragraph tags

### Application Three
- most common, best practice
- link to CSS style sheet in head.

### Precedence
- Element Tag - highest precedence, first
- File Specific - second
- External - third

### Box Model
- Every element in HTML is a box.
- Content → padding → border → margin

# 9.26.24
### CSS Rules - Display
- none - don’t get displayed (dropdown menu, screen is too small)
- block - gets displayed on screen in block format (fills entire screen)
- inline - don’t move when screen changes size
- flex - like grid but fancier
- grid - put things in a grid

# 9.28.24 - Development
- hr tag - horizontal rule, makes a horizontal line
- pattern for pushing up to git: git add ., git commit -m "description", git push
- ./deployFiles.sh -k ~/Documents/KEYS/CS260.pem -h webprogramming260.click -s startup -> command to deploy to production environment

# 10.8.24
- fixing file management system

# 10.12.24
- ensure that you have the correct path for pem file when pushing up to production 

# Midterm Notes
## Introduction
### History of the Web
- ARPANET 1970s by Department of Defense. Goal of withstanding nuclear attack.
- 1980s - National Science Foundation continued expansion
- Management - Internet Engineernig Task Force (IETF), defines technical standards that specify how the physical network communicates. Internet Coorporation for Assigned Names and Numbers (ICAAN) oversees Internet Protocol (IP) and Domain Name System (DNS)
#### HTML
- Hypertext Markup Language
- 1980, Tim Berners-Lee
- Document sharing
#### HTTP and URL
- HyperText Transfer Protocol
- Uniform resource Locator
- Specify how web documents are addressed and transmitted across the Internet 
#### CSS
- Cascading Style Sheets
- 1994, Hakon Wium Lie
#### JavaScript
- Brendan Eich
- Interactive Experience
- Node.js, 2009 Ryan Dahl, deploying JS outside the
## The Console
- Aka Command line, shell, terminal, console window
- provides acces to file system and allows for execution of command line applications. Organized in tree structure of nodes called directories
- Commands:
    - pwd - present working directory
    - ls - list files
    echo - Output the parameters of the command
    - cd - Change directory
    - mkdir - Make directory
    - rmdir - Remove directory
    - rm - Remove file(s)
    - mv - Move file(s)
    - cp - Copy files
    - ls - List files
    - curl - Command line client URL browser
    - grep - Regular expression search
    - find - Find files
    - top - View running processes with CPU and memory usage
    - df - View disk statistics
    - cat - Output the contents of a file
    - less - Interactively output the contents of a file
    - wc - Count the words in a file
    - ps - View the currently running processes
    - kill - Kill a currently running process
    - sudo - Execute a command as a super user (admin)
    - ssh - Create a secure shell on a remote computer
    - scp - Securely copy files to a remote computer
    - history - Show the history of commands
    - ping - Check if a website is up
    - tracert - Trace the connections to a website
    - dig - Show the DNS information for a domain
    - man - Look up a command in the manual
    - | - Take the output from the command on the left and pipe, or pass, it to the command on the right
    - CTRL-R - Use type ahead to find previous commands
    - CTRL-C - Kill the currently running command
## Editors
- workspace of a web application developer
### VI
- oldest console editors. Available on every Linux server
- to use, go to directory that holds cold you want to work on (vi index.html)
- works entirely by keyboard commands

| keystroke |                 meaning                 |
|:---------:|:---------------------------------------:|
| :h        | help                                    |
| i         | enter insert mode.                      |
| u         | undo                                    |
| CTRL-r    | redo                                    |
| gg        | go to beginning of file                 |
| G         | go to end of file                       |
| /         | search for text that you type after /   |
| n         | next search match                       |
| N         | previous search match                   |
| v         | visually select text                    |
| y         | yank or copy selected text to clipboard |
| p         | paste clipboard                         |
| CTRL-wv   | Split window vertically                 |
| CTRL-ww   | Toggle windows                          |
| CTRL-wq   | Close current window                    |
| :e        | Open a file.                            |
| :w        | write file (save)                       |
| :q        | quit. Use :q! to exit without saving    |

## Git
- track versions of files in a direcory
- clone versions to a different location
- git log - view versions 
- git add - so you can commit some files while leaving other modified files out of the commit
- every commit has a unique identifier gernerated by hashing the file along iwth the timestamp using the SHA hashing algorithm
- checkout command, switch back to a previous version to see what it contains
- diff command, comaring commits
- creating a branch:
    - git branch (name)
    - git checkout (name)
    - git merge (name)
## GitHub
- git init, creating a repo in your development environment. However it's easier to do it online then clone it to your environment
- when you clone a repo it's placed in a subdirectory with the name of the repository.
- Commands:
    - git add (with specific file name) - to only commit stuff from a specific file
    - git fetch - get latest info about changes on GitHub w/p changing local repo
    - git status - see difference between clones
### Forks
- ability to copy a GitHub repo. similar to cloning a repo in your development environment, but it clones to GitHub instead. You then pull it down to work on it. 
- pull request, request to enhance the original repo with your fork

## Technology Stack
- when building a commercial stack be careful about the pieces you choose. Dependability, scalability, performance, and security are all important factors.  Documentation, ease of use, common acceptance, community support, build times

- Elastic IP address, can change when instances are stopped and restarted. Remains the same until you choose to release it. You can associate and siassociate with any instance in your account. 

## Caddy
- web service that listens for incoming HTTP requests then serves up the requested static files or routes the request to another web service
- gateway/reverse proxy - ability to route requests and allows you to expose web serves
- creates web certificates, easily support HTTPS
- serves up static files
- gateway for subdomain requests to your Simon and startup application services
- Configuration file: ~/Caddyfile. Contains definitions for routing HTTP requests that Caddy receives. Used to determine locations of static files
## HTTPS, TLS, and Web Certificates
- HTTP (non-secure hypertext transport protocol)
HTTPS (Secure Hypertext Transport Protocol) - negotiated secure connection that happens before any data is exchanged
- TLS protocol - how data is encrypted
### Web Certificates
- generated by 3rd party using public/private key encryption
- authenticates thes identity of a website and enables encrypted communication between the web server and the user's browser

# HTML
