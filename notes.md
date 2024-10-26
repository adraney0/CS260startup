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
# Common Linux/Unix Console Commands

## `chmod` (Change Mode):
- Modifies file or directory permissions.
- Example: `chmod 755 file.txt` grants the owner read, write, and execute permissions, and grants read and execute permissions to group and others.

## `pwd` (Print Working Directory):
- Displays the current directory you're working in.
- Example: Typing `pwd` might return `/home/user`.

## `cd` (Change Directory):
- Navigates to a different directory.
- Example: `cd /home/user/Documents` moves you to the Documents folder.

## `ls` (List):
- Lists files and directories in the current directory.
- Example: `ls -l` lists files with detailed information, such as permissions, owner, size, and modification date.

## `vim` (Vim Text Editor):
- Opens the Vim text editor, a powerful text editing tool used via the terminal.
- Example: `vim file.txt` opens `file.txt` in Vim for editing.

## `nano` (Nano Text Editor):
- Opens the Nano text editor, which is simpler to use than Vim.
- Example: `nano file.txt` opens `file.txt` in Nano for editing.

## `mkdir` (Make Directory):
- Creates a new directory.
- Example: `mkdir new_folder` creates a folder called `new_folder`.

## `mv` (Move or Rename):
- Moves files or directories, or renames them.
- Example: `mv file.txt /home/user/Documents/` moves `file.txt` to the Documents folder.
- Example: `mv oldname.txt newname.txt` renames the file from `oldname.txt` to `newname.txt`.

## `rm` (Remove):
- Deletes files or directories.
- Example: `rm file.txt` deletes `file.txt`. Use `rm -r folder/` to remove a directory and its contents.

## `man` (Manual):
- Displays the manual for a command, showing detailed information on how to use it.
- Example: `man ls` shows the manual page for the `ls` command.

## `ssh` (Secure Shell):
- Connects to a remote server or machine securely over the network.
- Example: `ssh user@hostname` logs into the remote machine at `hostname` as the `user`.

## `ps` (Process Status):
- Displays information about currently running processes.
- Example: `ps aux` shows a detailed list of all running processes.

## `wget` (Web Get):
- Downloads files from the web via HTTP, HTTPS, or FTP.
- Example: `wget http://example.com/file.zip` downloads `file.zip` from the specified URL.

## `sudo` (Superuser Do):
- Executes commands as a superuser (with elevated privileges).
- Example: `sudo apt update` runs the `apt update` command with superuser privileges to update the system's package list.

---

## Summary of Usage:
- **Navigating and working with directories**: `pwd`, `cd`, `ls`, `mkdir`
- **File management**: `chmod`, `mv`, `rm`
- **Text editors**: `vim`, `nano`
- **System commands**: `man`, `ssh`, `ps`, `sudo`
- **Downloading files**: `wget`

> Each command can be combined with various options to enhance functionality (like `-r`, `-l`, etc.). You can explore these using the `man` command.

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
## Background
- foundational content structure that all web apps are built on
- Wep page -> web application (represents SPA or MPA)
### Elements and Tags
- elements are represented with enclosing tags
- head - metadata about page and title
- body - content and structure
- main - main content structure
### Attributes
- describe specific details of element
- Ex: id, class
### Hyperlink
- attribute tag with href
### Common Elements
| element |                                 meaning                                |
|:-------:|:----------------------------------------------------------------------:|
| html    | The page container                                                     |
| head    | Header information                                                     |
| title   | Title of the page                                                      |
| meta    | Metadata for the page such as character set or viewport settings       |
| script  | JavaScript reference. Either a external reference, or inline           |
| include | External content reference                                             |
| body    | The entire content body of the page                                    |
| header  | Header of the main content                                             |
| footer  | Footer of the main content                                             |
| nav     | Navigational inputs                                                    |
| main    | Main content of the page                                               |
| section | A section of the main content                                          |
| aside   | Aside content from the main content                                    |
| div     | A block division of content                                            |
| span    | An inline span of content                                              |
| h<1-9>  | Text heading. From h1, the highest level, down to h9, the lowest level |
| p       | A paragraph of text                                                    |
| b       | Bring attention                                                        |
| table   | Table                                                                  |
| tr      | Table row                                                              |
| th      | Table header                                                           |
| td      | Table data                                                             |
| ol,ul   | Ordered or unordered list                                              |
| li      | List item                                                              |
| a       | Anchor the text to a hyperlink                                         |
| img     | Graphical image reference                                              |
| dialog  | Interactive component such as a confirmation                           |
| form    | A collection of user input                                             |
| input   | User input field                                                       |
| audio   | Audio content                                                          |
| video   | Video content                                                          |
| svg     | Scalable vector graphic content                                        |
| iframe  | Inline frame of another HTML page                                      |
- comment <!-- -->
### Special Characters
| Character |   Entity  |
|:---------:|:---------:|
| &         | &amp;     |
| <         | &lt;      |
| >         | &gt;      |
| "         | &quot;    |
| '         | &apos;    |
## Structure
- main purpose is structure and content
- block element, distinct block in flow of content structure (paragraph, div)
- inline, inline with the content flow (span, b)
- aside, aside to the content
## Input
- elements for accepting user input

|  Element |              Meaning             |                    Example                   |
|:--------:|:--------------------------------:|:--------------------------------------------:|
| form     | Input container and submission   | <form action="form.html" method="post">      |
| fieldset | Labeled input grouping           | <fieldset> ... </fieldset>                   |
| input    | Multiple types of user input     | <input type="" />                            |
| select   | Selection dropdown               | <select><option>1</option></select>          |
| optgroup | Grouped selection dropdown       | <optgroup><option>1</option></optgroup>      |
| option   | Selection option                 | <option selected>option2</option>            |
| textarea | Multiline text input             | <textarea></textarea>                        |
| label    | Individual input label           | <label for="range">Range: </label>           |
| output   | Output of input                  | <output for="range">0</output>               |
| meter    | Display value with a known range | <meter min="0" max="100" value="50"></meter> |

### Form Element
- main purpose is to submit values of input it contains
- not required to use input elements
### Input Element
- set input with type attribute

|      Type      |                    Meaning                   |
|:--------------:|:--------------------------------------------:|
| text           | Single line textual value                    |
| password       | Obscured password                            |
| email          | Email address                                |
| tel            | Telephone number                             |
| url            | URL address                                  |
| number         | Numerical value                              |
| checkbox       | Inclusive selection                          |
| radio          | Exclusive selection                          |
| range          | Range limited number                         |
| date           | Year, month, day                             |
| datetime-local | Date and time                                |
| month          | Year, month                                  |
| week           | Week of year                                 |
| color          | Color                                        |
| file           | Local file                                   |
| submit         | button to trigger form submission            |
| p              | A paragraph of text                          |
| b              | Bring attention                              |
| table          | Table                                        |
| tr             | Table row                                    |
| th             | Table header                                 |
| td             | Table data                                   |
| ol,ul          | Ordered or unordered list                    |
| li             | List item                                    |
| a              | Anchor the text to a hyperlink               |
| img            | Graphical image reference                    |
| dialog         | Interactive component such as a confirmation |
| form           | A collection of user input                   |
| input          | User input field                             |
| audio          | Audio content                                |
| video          | Video content                                |
| svg            | Scalable vector graphic content              |
| iframe         | Inline frame of another HTML page            |

-  common attributes

| Attribute |                                       Meaning                                       |
|:---------:|:-----------------------------------------------------------------------------------:|
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |
| url       | URL address                                                                         |

- pattern attribute for text, search, url, tel, email and password inputs. Provides regular expression that must match for input ot be valid
## Media
- includes img, audio, video, (references to external file) svg, and canvas (contain code to renver visual image).
- External Media - take URL as attribute
    - relative path - file served from same location as HTML page
    - full path - includes protocol, domain name, and path to file
- Image - put url in src attribute
- Audio - controls if you want usesr to control, autoplay, loop
- Video - same as audio (may need crossorigin = "anonymous" if requesting files from different domain)
- SVG (Scalable Vector Graphics) - widely supported, render graphics inline
- Canvas - facilitates 2D drawing. Requires JS support

# CSS
## Introduction
- Cascading Style Sheets - converts structure and content of HTML into Experience
- animate the page, deploy custom fonts, respond to user actions, dynamically alter page layout
- rule: comprised of selector, declarations, property, and property-value
- rules cascade from highest nodes of DOM to lowest. Lower declarations override higher
![Alt text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/css/introduction/cssDefinitions.jpg)
### Associating CSS with HTML
1. style attribute of element
```<p style="color:green">CSS</p>```
2. style element in head
```
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
3. link element for stylesheet
```<link rel="stylesheet" href="styles.css" />```

### The Box Model
- everything in CSS is defined as bozes
- content - text/image is displayed
- padding - inherits things like background color
- border - color, thickness, line style
- margin - external, whitespace
Example:
padding: 25px 50px 75px 100px;
  - top padding is 25px
  - right padding is 50px
  - bottom padding is 75px
  - left padding is 100px
```
div {
  padding: 25px 50px 75px 100px;
}
```

![Alt text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/css/introduction/cssBoxModel.jpg)
## Selectors
- \* - use to select all elements
- element selector - name of element tag
- Combinators - indicate relationships between Selectors

|    Combinator    |           Meaning          |    Example   |                 Description                |
|:----------------:|:--------------------------:|:------------:|:------------------------------------------:|
| Descendant       | A list of descendants      | body section | Any section that is a descendant of a body |
| Child            | A list of direct children  | section > p  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | div ~ p      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | div + p      | Any p that has an adjacent div sibling     |

- class selector (.) - use to select classes. Can combine element name with classes (select all paragraphs of summary class)
```
p.summary {
  font-weight: bold;
}
```
- ID selector (#)
- attribute selector - element[selector = attribute]
```
p[class='summary'] {
  color: red;
}
```
- pseudo selector - select based on positional relationships (mouse interactions, hyperlink visitation states)
```
section:hover {
  border-left: solid 1em purple;
}
```
## Declarations
- specificy a property and value to assign

|      Property      |                Value               |      Example      |                                   Discussion                                   |
|:------------------:|:----------------------------------:|:-----------------:|:------------------------------------------------------------------------------:|
| background-color   | color                              | red               | Fill the background color                                                      |
| border             | color width style                  | #fad solid medium | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | 50%               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | 2px 2px 2px gray  | Creates a shadow                                                               |
| columns            | number                             | 3                 | Number of textual columns                                                      |
| column-rule        | color width style                  | solid thin black  | Sets the border used between columns using border shorthand                    |
| color              | color                              | rgb(128, 0, 0)    | Sets the text color                                                            |
| cursor             | type                               | grab              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | none              | Defines how to display the element and its children                            |
| filter             | filter-function                    | grayscale(30%)    | Applies a visual filter                                                        |
| float              | direction                          | right             | Places the element to the left or right in the flow                            |
| flex               |                                    |                   | Flex layout. Used for responsive design                                        |
| font               | family size style                  | Arial 1.2em bold  | Defines the text font using shorthand                                          |
| grid               |                                    |                   | Grid layout. Used for responsive design                                        |
| height             | unit                               | .25em             | Sets the height of the box                                                     |
| margin             | unit                               | 5px 5px 0 0       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | 20%               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | 10vh              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | .9                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | scroll            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | absolute          | Defines how the element is positioned in the document                          |
| padding            | unit                               | 1em 2em           | Sets the padding spacing                                                       |
| left               | unit                               | 10rem             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | end               | Defines how the text is aligned in the element                                 |
| top                | unit                               | 50px              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | rotate(0.5turn)   | Applies a transformation to the element                                        |
| width              | unit                               | 25vmin            | Sets the width of the box                                                      |
| z-index            | number                             | 100               | Controls the positioning of the element on the z axis                          |

### - Units

| Unit |                           Description                          |
|:----:|:--------------------------------------------------------------:|
| px   | The number of pixels                                           |
| pt   | The number of points (1/72 of an inch)                         |
| in   | The number of inches                                           |
| cm   | The number of centimeters                                      |
| %    | A percentage of the parent element                             |
| em   | A multiplier of the width of the letter m in the parent's font |
| rem  | A multiplier of the width of the letter m in the root's font   |
| ex   | A multiplier of the height of the element's font               |
| vw   | A percentage of the viewport's width                           |
| vh   | A percentage of the viewport's height                          |
| vmin | A percentage of the viewport's smaller dimension               |
| vmax | A percentage of the viewport's larger dimension                |

### Color

|    Method    |         Example         |                                                                                                    Description                                                                                                    |
|:------------:|:-----------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| keyword      | red                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | #00FFAA22or #0FA2       | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | rgb(128, 255, 128, 0.5) | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | hsl(180, 30%, 90%, 0.5) | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |
## Fonts
- change using font-family property. Can use list ensuring some font is always available (tries first font first)
- serif - extra strokes on end
- sand-serif - no extra strokes
- fized - characters are all same size
- symbol - non-language characters (arrow/emoji)
### Importing Fonts
- have browser load a font
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```
- don't want to host font files on server... load from provider (Google)
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
## Animation
- create using animation properties and defining keyframe

| Value                     | Description                                                                         |
|---------------------------|-------------------------------------------------------------------------------------|
| animation-name            | Specifies the name of the keyframe you want to bind to the selector                 |
| animation-duration        | Specifies how many seconds or milliseconds an animation takes to complete           |
| animation-timing-function | Specifies the speed curve of the animation                                          |
| animation-delay           | Specifies a delay before the animation will start                                   |
| animation-iteration-count | Specifies how many times an animation should be played                              |
| animation-direction       | Specifies whether or not the animation should play in reverse on alternate cycles   |
| animation-fill-mode       | Specifies what values are applied by the animation outside the time it is executing |
| animation-play-state      | Specifies whether the animation is running or paused                                |
| initial                   | Sets this property to its default value.                                            |
| inherit                   | Inherits this property from its parent element                                      |
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```
## Responsive Design
- ability to reconfigure interface so application accommodates and takes advantage of screen orientation/size
### Display
- display property allows you to change how element is displayed

|  Value |                                                          Meaning                                                         |
|:------:|:------------------------------------------------------------------------------------------------------------------------:|
| none   | Don't display this element. The element still exists, but the browser will not render it.                                |
| block  | Display this element with a width that fills its parent element. A p or divelement has block display by default.         |
| inline | Display this element with a width that is only as big as its content. A b or span element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                               |
| grid   | Display this element's children in a grid orientation.                                                                   |

| display Value | HTML Elements With This Default Value |
|---------------|---------------------------------------|
| block         | div, p, table                         |
| inline        | span, b, i, strong, em                |
| inline-block  | img                                   |

### Viewport Meta Tag
- tells browser not to scale page
``` <meta name="viewport" content="width=device-width,initial-scale=1" /> ```
### Float 
- moves element to left/right of container element. 
- Allows inline elements to wrap around
- text flows around element when window is resized

### Media Queries
- @media selector - detects size and orientation of device and applies CSS
- for example, orientation: portrait and change something
## Grid
- use display:grid
- grid-template-columns: specifies layout of grid columns
## Flexbox
- use to partition application into areas that responsively move as window size/orientation changes
- must set parent element to flex

| Property        | Description                                                                                                                             |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| align-content   | Modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines |
| align-items     | Vertically aligns the flex items when the items do not use all available space on the cross-axis                                        |
| display         | Specifies the type of box used for an HTML element                                                                                      |
| flex-direction  | Specifies the direction of the flexible items inside a flex container                                                                   |
| flex-flow       | A shorthand property for flex-direction and flex-wrap                                                                                   |
| flex-wrap       | Specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line                              |
| justify-content | Horizontally aligns the flex items when the items do not use all available space on the main-axis                                       |
## Frameworks
- provide functions and components that commonly appear in web applications
- same patterns that were used were put into code package
- decrease development time, common user experience
- tailwind - on the rise, smaller definitions to individual elements (in HTML)
- bootstrap - most popular
- using bootstrap:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
## Debugging
- inspect
- you can change things in the debugger, allows you to find what works best without having to change things in file and refresh




# JavaScript
## Introduction
- weakly typed
- based on concepts of C, Java, and Scheme
- most used programming language
- usually executed using interpreter at runtime instead of compiling it into machine specific binary at build time
- console.log() - outputs contents to the console
Example function:
```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```
## Console
- provides interaction with runtime debugger console
- outputting value of text and objects, running timers, counting interactions
- console.log - output message, can specify css
```
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```
- timer - wrap with `time` and `timeEnd` calls
```
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```
- count - count # of times code is called
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```
## Adding to HTML
- directly in HTML, script element, src attribute of script element to external file
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <button onclick="let i=1;i++;console.log(i)">press me</button>
  <!-- OUTPUT: 2 -->
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
- `onclick` - creates event listener for DOM event and can call code contained in attribute's value
## Types, Operators, Conditionals, and Loops
- let - allows you to change value of variable
- const - error if you try to change value
```
let x = 1;

const y = 2;
```
- originally used var, don't use, hard to detect errors
### Types
Primitive Types

|    Type   |                           Meaning                          |
|:---------:|:----------------------------------------------------------:|
| Null      | The type of a variable that has not been assigned a value. |
| Undefined | The type of a variable that has not been defined.          |
| Boolean   | true or false.                                             |
| Number    | A 64-bit signed number.                                    |
| BigInt    | A number of arbitrary magnitude.                           |
| String    | A textual sequence of characters.                          |
| Symbol    | A unique value.                                            |

- JS doesn't enforce declaration before use of variable
Object Types

|   Type   |                                           Use                                          |         Example        |
|:--------:|:--------------------------------------------------------------------------------------:|:----------------------:|
| Object   | A collection of properties represented by name-value pairs. Values can be of any type. | {a:3, b:'fish'}        |
| Function | An object that has the ability to be called.                                           | function a() {}        |
| Date     | Calendar dates and times.                                                              | new Date('1995-12-17') |
| Array    | An ordered sequence of any type.                                                       | [3, 'fish']            |
| Map      | A collection of key-value pairs that support efficient lookups.                        | new Map()              |
| JSON     | A lightweight data-interchange format used to share information across programs.       | {"a":3, "b":"fish"}    |

- When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript supports + (concatenation) and === (equality).
- weakly typed language - changes with variable, automatic conversions in certain circumstances
- use strict equalitys (=== or !==) not (==)
### Conditionals
- supports `if`, `else`, and `if else`.
- ternary operator: condition ? ifTrue : ifFalse
- Falsy expressions: false, null, NaN, 0, "", Undefined
```
if (condition) {
  //  block of code to be executed if the condition is true
}

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
- switch statment - use to select one of many code blocks to be executed
  - expression is evaluated once. Value is compared to values of case
  - match - associated block of code is executed
  - no match - default code is executed
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
### Loops
- do while - do while something is true. Executes block at least once before checking condition
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
- while - checks condition before executing block of code. If code is false initially, code inside doesnt execute at all
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```
- for in - iterates over an objects property names
```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```
- for of - iterates over an objects property values
```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```
## String
- strings are a primitive type - use single quotes, double quotes, or backticks
- backticks - string literal that may contain JS and evaluated in place
- ${} stuff inside curly braces is evaluated as JS
```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
|    Function   |                            Meaning                           |
|:-------------:|:------------------------------------------------------------:|
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

## Functions
- class objects - can be assigned name, passed as a parameter, returned as result, referenced from an object/array
- no type declarations, type is inferred by assignment of value to parameter
```
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```
### parameters
- if not provided, value is undefined when function Executes
- default value - assign value to parameter in function declaration
```
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```
### Anonymous Functions
- usually assigned to a variale to be passed as parameter to another function/stored
```
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```
- you can declare functions inside other functions
## Arrow Functions
- replaces need for function keyword with symbols ` => ` placed after prameter declaration. Curly braces optional
- Arrow function, no parameters, always returns 3: `() => 3;`
- can't be used for constructors or iterator generators
### Return Values
- no curly braces with single expression: returns result of expression
- curly braces - normal function
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```
### This Pointer
- inherit this pointer from scope in which they're created. Creates closure
- closure - allows function to continue referencing its creation scope even when its passed out
## Arrays
- sequence of other objects and primitives
- zero based index

### Functions

| Function |                          Meaning                          |           Example           |
|:--------:|:---------------------------------------------------------:|:---------------------------:|
| push     | Add an item to the end of the array                       | a.push(4)                   |
| pop      | Remove an item from the end of the array                  | x = a.pop()                 |
| slice    | Return a sub-array                                        | a.slice(1,-1)               |
| sort     | Run a function to sort an array in place                  | a.sort((a,b) => b-a)        |
| values   | Creates an iterator for use with a for ofloop             | for (i of a.values()) {...} |
| find     | Find the first item satisfied by a test function          | a.find(i => i < 2)          |
| forEach  | Run a function on each array item                         | a.forEach(console.log)      |
| reduce   | Run a function to reduce each array item to a single item | a.reduce((a, c) => a + c)   |
| map      | Run a function to map an array to a new array             | a.map(i => i+i)             |
| filter   | Run a function to remove items                            | a.filter(i => i%2)          |
| every    | Run a function to test if all items match                 | a.every(i => i < 3)         |
| some     | Run a function to test if any items match                 | a.some(i => i < 1)          |

| Flag | Description                                                                                   | Corresponding property |
|------|-----------------------------------------------------------------------------------------------|------------------------|
| d    | Generate indices for substring matches.                                                       | hasIndices             |
| g    | Global search.                                                                                | global                 |
| i    | Case-insensitive search.                                                                      | ignoreCase             |
| m    | Allows ^ and $ to match next to newline characters.                                           | multiline              |
| s    | Allows . to match newline characters.                                                         | dotAll                 |
| u    | "Unicode"; treat a pattern as a sequence of Unicode code points.                              | unicode                |
| v    | An upgrade to the u mode with more Unicode features.                                          | unicodeSets            |
| y    | Perform a "sticky" search that matches starting at the current position in the target string. | sticky                 |
## JSON
- JavaScript Object Notation
- simple but effective way to share and store data

|   Type  |         Example         |
|:-------:|:-----------------------:|
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | `[null,42,"crockford"]`   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

- JSON docs commonly contain objects with zero/more key value pairs
    - key is always a string
    - value must be valid data type
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
- convert using parse and stringify
```
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
## Objects and classes
- represente collection of name-value paris (proeprties)
- property name - string/symbol
- value - any type
- create using new operator calling constructor
- The properties of an object can be referenced either with dot ('obj.prop') or bracket notation ('obj['prop']').
```
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
- object-literal - provide initial content
```
const obj = {
  a: 3,
  b: 'fish',
};
```
### Functions

| Function |               Meaning               |
|:--------:|:-----------------------------------:|
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```
### Constructors
- constructor - any function that returns an aboject. Can be invoked with new operator
```
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```
### classes
- can use to define objects
- reusable component
```
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
- can make private properties and functions by using `#`
### Inheritance
- extend keyword
- pass parameters to parent using super function
- child functions with same name override parent
## Regular Expressions
- textual pattern matchers
- use to find text in a string
- create using class constructor/refularexpression literal
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
- pattern enclosed by slashes

| Method       | Description                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------|
| exec()       | Executes a search for a match in a string. It returns an array of information or null on a mismatch.             |
| test()       | Tests for a match in a string. It returns true or false.                                                         |
| match()      | Returns an array containing all of the matches, including capturing groups, or null if no match is found.        |
| matchAll()   | Returns an iterator containing all of the matches, including capturing groups.                                   |
| search()     | Tests for a match in a string. It returns the index of the match, or -1 if the search fails.                     |
| replace()    | Executes a search for a match in a string, and replaces the matched substring with a replacement substring.      |
| replaceAll() | Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring. |
| split()      | Uses a regular expression or a fixed string to break a string into an array of substrings.                       |

| Flag | Description                                                                                   | Corresponding property |
|------|-----------------------------------------------------------------------------------------------|------------------------|
| d    | Generate indices for substring matches.                                                       | hasIndices             |
| g    | Global search.                                                                                | global                 |
| i    | Case-insensitive search.                                                                      | ignoreCase             |
| m    | Allows ^ and $ to match next to newline characters.                                           | multiline              |
| s    | Allows . to match newline characters.                                                         | dotAll                 |
| u    | "Unicode"; treat a pattern as a sequence of Unicode code points.                              | unicode                |
| v    | An upgrade to the u mode with more Unicode features.                                          | unicodeSets            |
| y    | Perform a "sticky" search that matches starting at the current position in the target string. | sticky                 |


## Rest and Spread
### Rest
- use ...
- last parameter, turns into array
- can call with any number of parameters and it turns them into an array
```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
### Spread
- does the opposite of rest. 
- takes iterable object and expands it into parameters
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
## Exceptions
- triggered when: code gernerates exception with throw keyword or at runtime (ex: undefined variable)
- to catch, wrap code in try block and use catch block.
- finally always called whenever try block is exited
```
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```
- only use for real Exceptions
- fallback - normal implementation in try, fallback in catch
```
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```
## Destructuring
- pulling individual terms out of an existing one
```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
- combine multiple items from original object using rest syntax
```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
- Destructuring arrays: specify properties you want to pull
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
- can map names to new variables
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
## Scope
1. Global - Visible to all code
2. Module - Visible to all code running in a module
3. Function - Visible within a function
4. Block - Visible within a block of code delimited by curly braces
- var ignores block scope
- this - represents variable pointing to an object that contains context within scope of currently executing line of code
    - global - this is referenced outside function/object. globalThis, context for runtime environment (browser's window object)
    - function - referenced inside function. Object that owns function
        - when in strict omde - global function's this variable is undefiened
    - object - refers to object
```
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```
Result:
```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```
### closure
- function and its surrounding state
- whatever variables are accessible when function is created are availbale inside function
- arrow functions inherit the this pointer
## Modules
- allow for partitioning and sharing of code
- create a file-based scope for code they represente
- must explicitly export/import
- can only be called from other Modules
- to use in HTML: include type attribute in script element
```
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
## DOM
- object representation of HTML elements that browser uses to render display
- browser access to DOM through document
```
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```
- everythin in HTML has node in DOM
![Alt text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/javascript/dom/dom.jpg)
- querySelectorAll - CSS selector to select elements
- textContent - all of element's text
- innerHTML - textual representation of HTML
- DOM supports ability to insert, modify/delete elements
- Creating new element:
    1. create element on DOM
    2. insert into tree by appending
```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
- delte calling removeChild function on parent element
- inject using innherHTML - common attack vector for hackers
    - ensure it can't be manipulated by user if injectiong
- all DOM elements support ability to attach function that gets called when event occurs (Event listener)
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
- can add directly into HTML `<button onclick='alert("clicked")'>click me</button>`

| Event Category |      Description      |
|:--------------:|:---------------------:|
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

- getElementById() -  returns an element with a specified value.
## Local Storage
- provides ability to persistently store and retrieve data on user's browser across sessions and HTML renderings
- Ex: frontend JS stores user's name, retrieve later when different page is loaded
- used as cache for when data can't be obtained from server
- must be of stype string, number or boolean, if not use JSON
### Functions
|       Function       |                    Meaning                   |
|:--------------------:|:--------------------------------------------:|
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

## Promises
- allows main rendering thread to continue while some action is executed in background
- create using Promise object constructor and passing it an executor function
- 3 States:
    1. pending - Currently running asynchronously
    2. fulfilled - Completed successfully
    3. rejected - Failed to complete
- promise executor functions takes 2 functions as parameters, resolve (sets promise to fulfilled) and reject (sets promise to rejected)
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
- to do something with the result, use then, catch, finally
## Async/Await
- async - allows a function to return a Promise
- await - pauses execution until the Promise is settled
    - can't call unless at top level of JS, or in a function defined with async keyword
- uses try/catch block

## Debugging
### Console
- insert `console.log` functions as it Executes
- console tab in debugger
- can inspect variables by entering name into console
### Browser
- source tab - displays source files
- breakpoints
## Miscellaneous
- `ls -la` will list all files, including hidden ones, in the current directory with detailed information about each file.

- **TLD:** `.click`
- **Root Domain:** `bozo.click`
- **Subdomain:** `banana.fruit`

| Port Number | Protocol | Description                                   |
|-------------|----------|-----------------------------------------------|
| 80          | HTTP     | Unencrypted web traffic                       |
| 443         | HTTPS    | Encrypted web traffic                         |
| 22          | SSH      | Secure remote login and secure network services|


# Node.js
## Introduction
- 2009 Ryan Dahl
- first successful application for deploying JS outside the browser
- Browsers run JS on JS interpreter and execution engine
- V8 is an engine used by google and Node.js, read and executes code
- In console:
  - node.js is called `node`
  - interpretive mode - execute without any parameters and type JS directly into interpreter
    - use .exit to exit
### Node Package Manager
- way to use code that has already been written by others
- implement common tasks
1. Install package locally on machine using NPM
2. Include `requre` statement in code referencing package name
- NPM is automatically installed when you install Node.js
- access to large repo of packages (search on website)
- must initialize code to use NPM before using
  - create directory and run `npm init` use `npm init -y` to skip Q and A
### Package.json
- contains three main things:
  1. project metadata (name, default entry JS)
  2. commands (scripts) you can execute to run, test/distribute code
  3. packages project depends on
- installing packages - use `npm install` followed by package name
- removing package - `npm uninstall <package name here>`
- `package-lock.json` - file
- `node_modules` - directory, contains actual JS fioles for package and dependent packages. As you install packages directory gets large. Include in `.gitignore`
### Steps for using Node.js
1. Create your project directory
2. Initialize it for use with NPM by running npm init -y
3. Make sure .gitignore file contains node_modules
4. Install any desired packages with npm install <package name here>
5. Add require('<package name here>') to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with node index.js
### Deno and Bun
- sucessor to Node.js
- more compliant with advances to ECMAscript and has significant performance enhancements
- Bun is another competitor
## Debugging
- debugging tools in VSCode
- `F5` - opens the debugger
- `F10` - steps to the next line
- `F11` - step into function call
- when last line of code executes debugger automatically exits
- `SHIFT-F5` - stop debugging
# React
## Web Frameworks
- make job of writing web apps easier by providing tools for completing common tasks
  - modularizing code, single page applications, simplifying Reactivity
- some frameworks create hybrid file formats
  - React JSX - JavaScript and HTML
- Lot's of different frameworks, advantages and disadvantages
- VUE - combines HTML, CSS and JS into single file. HTML represented by template element
- Svelte - combines HTML, CSS, and JS. Requires a transpiler to generate browser-ready code instead of runtime virtual DOM
  - transpiler - converts source code from language to language (Babel)
- React - JS and HTML, CSS must be declared outside JSX file
- Angular component - defines what JS, HTML, and CSS are combined together
## React
- React...reactive web page components (update with user actions)
- Jordan Walke for Facebook in 2011
- Abstracts HTML and KS into JSX then converted into valid HTML and JS
- React.createelement - generates DOM elements and monitors data they represent for changes. If change is found, React updates
## components
- allow you to modularize functionality of application
### Render Function
- primary purpose of component is to update user interface
- done with render function, whatever is returned is inserted into HTML
- Example: JSX file w/ React component Demo causes React to load Demo, call render function, and insert result
JSX
```
<div>
  Component: <Demo />
</div>
```
React Component
```
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```
Resulting HTML
```
<div>Component: <b>Hello world</b></div>
```
### Properties
- Properties - passed into component through element property. Component receives properties in constructor and is displayed when rendered
JSX
```
<div>Component: <Demo who="Walke" /><div>
```
React Component
```
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```
Resulting HTML
```
<div>Component: <b>Hello Walke</b></div>
```
### State
- internal state, created using `React.useState` hook function.
- `useState` - returns variable containing curret state and function to update
- Example: state variable `clicked` and toggles click state in updateClicked function
```
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```
- You can use JSX without a function...variable
```
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```
### Class Style components
- you can also define components as classes, not just functions
- React is moving away from using classes
- Main Difference: properties loaded on constructor and state is set using setState function on object
```
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```
### Reactivity 
- properties and state are used to determine reactivity of interface
- controls how component reacts to actions taken by user/events that happens
- when component's state/properties change, render function for component and all of its dependents are called.
## Hooks
- Allow React function style components to do everything  class style could do and more
- as new features are added to React they're included as Hooks
### useEffect Hooks
- allows you to represent lifecycle events (stages of existence)
- Run function every time component renders:
```
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- can create cleanup functions, useful to create side effects, tracking when component is displayed/hidden
### Hook Dependencies
- control what triggers `useEffect` hook by specifiying Dependencies
- Want `useEffect` hook to be called when component is initially called and when first variable is clicked. Pass in array of dependencies
```
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- hooks must be called at top scope of a function, can't be called inside loop/Conditionals
  - ensures hooks are always called in same order when component is rendered
## Router
- provides functionality for single-page applications
- multipage (common components duplicated/HTML injected) vs single page (one HTML page, JS manipulates DOM)
### Basic implementation
- `BrowserRouter` component - encapsulates entire application and controls routing action
- `Link`/`NavLink` component - capture user navigation events and modifies what is rendered by `Routes` component by matching to and path attributes
```
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```
- use className - for assigning classes in JSX
## Reactivity
- React enables reactivity with three major pieces of a React component `props`, `state`, and `render`
- when a component's JSX is rendered, React parses it and creates list of references to component's `state` or `prop` objects
- then monitors these objects and detects changes - if so it calls `render` function
- parents can control child's functionality with properties
- updateState happens asynchronously, never know when it's going to happen
