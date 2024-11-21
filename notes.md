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

## Toolchains
- abstracting complexity of programming with tools including:
  - Code Repository - stores code in a shared, versioned location
  - Linter - removes, or warns of non-idiomatic code usage
    - non-iodomatic - code that doesn't follow conventions of code (incorrect nameing conventions)
  - prettier - formats code according to shared standard
  - transpiler - compiles code into different format (JSK to JS)
  - Polyfill - generates backward compatible code for supporting old browser versions that don't support latest standards
  Bundler - packages code bundles for delivery to browser. Enables compatibility and performance
  - Minifier - removes whitespace and renames variables (smaller/more effiecent code)
  - Testing - automated tests at multiple levels
  - Deployment - automated packaging and delivery of code from development environment to production
The toolchain that we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.
## Vite
- Command Line Interface (CLI) - use to initially set up web application. Saves trouble of configuring parameters, get a quick start
- Vite - bundles code quickly, good debugging suport, easily support JSX, TypeScript and different CSS
- `code .` command - opens up current directory in VS code
- `main.jsx` - creates React application by associating `#root` element with `App` component found in `App.jsx`
### JSX vs JS
 - use .jsx (babel transpiler works for either), some editor tools work differently based on extension
 - `npm run dev` - bundling code to temporary directory Vite debug HTTP server loads from
 - `npm run build` - makes it so you can deploy to production environment. Executes `build` script in `package.json` 
 - `vite build` transpiles, minifies, injects JS, and outputs everything to deployment-ready version in subdirectory `dist`
  - files are in `assets` directory, are bundled and minified
  - deployment scripts create production distribution by calling `npm run build` and copying result to production server

|   Directory  |        File       |                                                       Purpose                                                         |
|:------------:|:-----------------:|:-----------------------------------------------------------------------------------------------------------------------:|
| ./           |                   |                                                                                                                         |
|              | index.html        | Primary page for the application. This is the starting point to load all of the JSX components beginning with main.jsx. |
|              | package.json      | NPM definition for package dependencies and script commands. This is what maps npm run dev to actually start up Vite.   |
|              | package-lock.json | Version constraints for included packages (do not edit this).                                                           |
|              | vite.config.js    | Configuration setting for Vite. Specifically this sets up React for development.                                        |
| ./public     |                   |                                                                                                                         |
|              | vite.svg          | Vite logo for use as favicon and for display in the app.                                                                |
| ./src        |                   |                                                                                                                         |
|              | main.jsx          | Entry point for code execution. This simply loads the App component found in App.jsx.                                   |
|              | index.css         | CSS for the entire application.                                                                                         |
|              | App.jsx           | JSX for top level application component. This displays the logs and implements the click counter.                       |
|              | App.css           | CSS for the top level application component.                                                                            |
| ./src/assets |                   |                                                                                                                         |
|              | react.svg         | React logo for display in the app.                                                                                      |

## Simon React P1
1. Install and Configure Vite
```
npm init -y
npm install vite@latest -D
```
- change scripts
2. Reorganize Code
- public directory for application image and sonds assets
- src directory for React code (create folder for each of the view components)
- rename `main.css` to `app.css` and mve it to src directory
3. Convert to React Bootstrap
```
npm install bootstrap react-bootstrap
```
- Use the following to import Bootstrap
```
import 'bootstrap/dist/css/bootstrap.min.css';
```
4. Enabling React
```
npm install react react-dom react-router-dom
```
- create `index.html` and `index.jsx`
5. Create App Component
- create `app.jsx` file, commit changes
- return HTML, turn class to className
6. Create View Components
- Create files - `login.jsx`, `play.jsx`, `scores.jsx`, and `about.jsx`
7. Create the Router
- displays each component as the navigation UI requests it
- controls the whole application by determining what component to display based on what navigation the user chooses
```
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
```
- Wrap app return statement in `BrowserRouter` component
- replace `a` elements with `NavLink` component
- Create `Routes` element, `notFound` function at bottom of `app.jsx`
8. Convert to React Components
  1. copy `main` html element into return value
  2. rename `class` to `className`
  3. move CSS to component directory and use `import` statement
9. Deployment Script
- create `deployReact.sh`

## Tic-Tac-Toe
- component - piece of reusable code that represents part of a UI. Used to render, manage, and update UI elements in application
- fragment - allows you to return multiple JSX elements `(<> </>)`
- immutability - makes complex features easier to implement. Allows you to undo/redo certain acions

## Startup React

## The Internet
- globally connects independent networks and computing devices
### Making Connections
- must have IP address to talk between devices
- Domain Name - symbolic name for IP address
- DNS - converts IP addresses to Domain Names
- `dig` - look up IP address for any domain name (on the console)
```
➜  dig byu.edu

byu.edu.		5755	IN	A	128.187.16.184
```
- once you have IP address, connect it to device by asking for connection route
  - Connection Route - hops across network until destination is discovered and connection is esetablished
### Traceroute
- console utility
- shows all the steps to get somewhere
### Network Internals
- sending data, uses TCP/IP model
- layered architecture levels
  - application - functionality, web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC)
  - transport - breaks application info into chunks and sends data
  - internet - connection is made, finds device and keeps connection alive
  - link - physical connections and hardward

|    Layer    |     Example     |                Purpose                |
|:-----------:|:---------------:|:-------------------------------------:|
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |

### Video: How Does the Internet Work?
- the internet is a wire buried in the ground
  - fiber optic
  - copper
  - beamed to satellites
  - through cell phone networks
- Two computers connected can communicate to each other through the internet
- server - special computer connected to the internet
  - each has unique IP address
  - IP address - helps computers find each other
- web pages - files on the server's harddrive
- clients - connected inderectly to internet through internet service provider
- packets - how info is transfered through the internet. broken up and reassembled in og order
- everything connected directly/indirectly to internet has IP address (computer, servers, cell phones)
- router - anywhere two or more parts of the internet intersect, direct packets

## Web Servers
- Web Server - computing device that is hosting a web service that knows how to accept incoming internet connections and speak HTTP
### Monolithic Web Servers
- used to buy expensive complex software program that spoke HTTO and instaled on a hardware server
  - considred web server
### Combining Web and Application Services
- most modern languages include libraries that have ability to make connections and serve up HTTP
- `curl` makes an HTTP request and sees the time response
### Web Service Gateways
- gateway/reverse proxy - web service that listens on commmon HTTPS port 443. Looks at request and maps it to other services on different ports
![Alt text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServers/webServers/webServersGateway.jpg)
- we use Caddy for this
### Microservices
- web services that serve one purpose
- break into chunks and manage independently from other functionalities
- handle fluctuations in user demand 
### Serverless
- server is conceptually removed from architecture and you write a function that speaks HTTP
- function loaded through gateway that maps web request to function
- gateway automatically scales hardware needed to host serverless function based on demand
- reduces what web applicaiton developer needsto think about down to a single independent function

## Domain Names
- text string that follows specific naming convention and is listed in a special database called domain name registry
- Broken into parts
  - Root Domain - represented by secondary level domain and top level domain (byu.edu, google.com)
    - Top Level Domain (TLD) - com, edu, click
  - Subdomain Prefixes
    - owner can create any number of subdomains
    - each subdomain may resolve to a different IP address
- `whois` get info about domain name from domain name registry 
```
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
```
### DNS
- domain name in registry = listed with DNS server and associated with IP address
- authoritative name servers - DNS servers that store complete database of resource records for a particular domain. Every DNS server references these
- facilitate mapping of domain names to IP addresses
  - address (A) - straight mapping from domain name to IP address
  - canonical name (CNAME) - maps one domain name to another, alias. EX: map byu.edu to same IP address as byu.com so you can use both
  - STEPS:
     - enter name into browser
     - checks if it has it in cache
     - if not, contacts DNS and gets IP address
     - DNS server has cache, if not there it contacts authoritative name saerver
     - if the authority doesn't know, you get unknown domain name error
- time to live (TTL) - you can set it, determines lifespan of data in DNS cache
### Leasing
- you can pay to lease a name for a specific time
- you can extend before it expires
## Web Services Introduction 
- web programming requests between devices use HTTPS to exchange data
- with JS you can make requests to external services and get external data (quotes)
- Making A Web Service Requerst - supply URL to fetch function in browser
- endpoints/APIs - functions provided by web service
- can also be used in the backend
## URL
- Uniform Resource Locator - location of web resrouce (web page, font, image, video stream, dtabase, record, JSON object)

|     Part    |                Example               |                                                                                                                                       Meaning                                                                                                                                       |
|:-----------:|:------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

- URN - uniform resource name, unique resource name that doesn't specify location info.
- URI - uniform resource identifier, general, refers to URL/URN
## Ports
- needed (+IP Address) to connect to internet
- allow single device to support multiple protocals and different types of srevices
- exposed externally/only used internally
  - EX: HTTPS (port 443) allow world to connect. SSH port (22) only alow computers at school, service defined port (3000) allow access to processes running on device
- IANA (internet governing body) - defines standard usage of port numbers
  - 0 to 1023 are standard, web service should avoid thsee unless providing protocol represented by standard
  - 1024 to 49151 - ports used by services running interally on device
  - 49152 to 5535 - dynamic, used to create dynamic connections to device

| Port |                                              Protocol                                              |
|:----:|:--------------------------------------------------------------------------------------------------:|
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

![Alt Text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServices/ports/webServicesPorts.jpg)

### My Ports
- 22 - exposed externally for SSH
- 443 - secure HTTP communication
- 80 - unsecure HTTP communication
- Caddy listens on 80 and 443
  - request on 80 it redirects to 443 so a secure conection is established. 
  - request on 443, examines path provided and if path matches static file, and returns
    - if HTTP matches definition for gateway service, Caddy makes connection to service's port
- need different ports for everything
## HTTP
- how the web talks, browsers make requests to servers using HTTP (exchange requests and responses)
- browsser makes request and server generates HTTP response
- `curl` - command for transferring data from or to a server using different protocols (HTTP, HTTPS, etc.). Popular for testing APIs and performing basic network tasks
HTTP Request:
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
HTTP Response:
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
### Verbs
describe what HTTP request is looking for

|   Verb  |                                                                                                                          Meaning                                                                                                                         |
|:-------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |
### Status Codes
- Used in HTTP responses so client of request knows how to interprety response
  - Partitioned into 5 blocks:
  - 1xx - Informational.
  - 2xx - Success.
  - 3xx - Redirect to some other location, or that the previously cached resource is still valid.
  - 4xx - Client errors. The request is invalid.
  - 5xx - Server errors. The request cannot be satisfied due to an error on the server.

| Code |          Text         |                                                              Meaning                                                              |
|:----:|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|
| 100  | Continue              | The service is working on the request                                                                                             |
| 200  | Success               | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created               | The request was successful and a new resource was created.                                                                        |
| 204  | No Content            | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified          | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect    | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect    | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request           | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized          | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden             | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found             | An unknown resource was requested.                                                                                                |
| 408  | Request timeout       | The request takes too long.                                                                                                       |
| 409  | Conflict              | The provided resource represents an out of date version of the resource.                                                          |
| 418  | I'm a teapot          | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests     | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable   | The server is temporarily down. The client should try again with an exponential back off.                                         |

### Headers
- specify metadata about a request/response
   - how to handle security, caching, data formats, cookies

|            Header           |                Example               |                                                Meaning                                               |
|:---------------------------:|:------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                 |
| Accept                      | image/*                              | The format the client accepts. This may include wildcards.                                           |
| Content-Type                | text/html; charset=utf-8             | The format of the content being sent. These are described using standard MIMEtypes.                  |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                           |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                     |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins. |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                     |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                       |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                      |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                           |

### Body
- format of body of HTTP request/response defined by `Content-Type` header. 
  - EX: HTML text, binary image format, JSON, JS
  - client can specify what formats it accepts using `accepts` header
### Cookies
- HTTP - is stateless. One HTTP request doesn't know anything baout precios/future requests
- Cookies - method for tracking states. Generated by server and passed to client as HTTP header
  - client caches cookies and returns it as an HTTP header back to server on subsequent requests
  - allows server to remember things like language preference/authenticaiton credentials. 
  - use to track and share everything a user does
### Versions

| Year | Version |                     Features                    |
|:----:|:-------:|:-----------------------------------------------:|
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |
## Fetch
- Fetch API - preferred way to make HTTP requests
  - API, Application Programming Interface - set of rules and protocols allowing one software applicaiton to interact with another. Software interface that allow exchange of data and functions between applications, services, and operating systems
- `fetch` function - built into browser's JS runtime. Call it from JS code running in browser
  - takes a URL and returns a promise
  - `then` function of promise - takes callback function that's asynchronously called when reqested URL content is obtained. 
  - returned content - type `application/json` can use `json` function to convert to JS ovject
- POST request - sends data in body of request
## Node Web Service
-  `npm init -y` - initializes a package.json and skips the questions
```
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
- uses Node.js built in `http` package to create our HTTP server using `httpcreateServer` function and a callback function that takes request and response (called whenever server receives HTTP request)
- `server.listen` listens on port 8080 and blocks until program is terminated
   - "blocks" - program doesn't exit/continue until it's explicitly stopped/terminated. Waits for incoming requests, stops when server is closed/process is terminated. Waits for something to happen. 
- go to localhost:8080 to find result
-`CTRl-C` in console to kill (make it stop listening)
- can also do directly in VS code (F5 and select node.js)
### Debugging
- use `F5` to continue and `F11` to step into
- debugging in packages is helpful to learn how code works
### Nodemon
- wrapper around `node` that watches for files in project directory to change. Detects that you saved something and it will automatically restart node
```
npm install -g nodemon
```
 - Configure VS Code:  `⌘-SHIFT-P` -> `Debug: Add configuration` -> `Node.js` -> `Node.js: Nodemon setup`
   - launch configuration change program to main JS file for application
## Express
- Node package
- created by TJ Holowaychuk
Provides support for:
1. routing requests for service endpoints
2. manipulating HTTP requests with JSON body content
3. generating HTTP responses
4. using middleware to add functionality
- revolves around creating and using HTTP routing and middleware functions. 
- Creating Express Application - install, call constructor and listen on desired port
```
npm install express
```
```
const express = require('express');
const app = express();

app.listen(8080);
```
### Defining Routes
- HTTP endpoints implemented in Express by defining routes that call a function based on a HTTP path 
- `app` object - supports all HTTTP verbs as functions
```
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```
- `get` function - takes two parameters, URL matching pattern and callback function which is invoked when pattern matches
   - callback function - three params. Represent HTTP request object, response object, and next routing function Express expects to be called if this routing function wants another function to gerneate a response
- compares routing funciton patterns in order they're added to object.
- path parameters uses colon. Creates map of path parameters and populates it with matching values found in URL path. Reference parameters using req.params object. 
```
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```
- use post/delete function for POST/DELETE verb
### Using Middleware
- standard design pattern has two pieces: mediator and middleware
  - Middleware - represents componentized pieces of functionality
  - Mediator - loads middleware components adn determines order of execution. Passes request around to middleware components
  - Express = mediator, middleware functions = middleware components
- Express has standard set of middleware functions:
  - Provide functionality for routing, authentication, CORS, sessions, serving static web files, cookies, and logging
  - Some provided by default, others must be installed using NPM, can also write own funcions
  - similar to routing function. Routing functions are middleware functions, only called if pattern matches, but middleware functions are always called for every HTTP request unless preceding middleware function doesn't call next
Pattern for middleware function:
```
function middlewareName(req, res, next)
```
- can use third part middleware functions. Ex: cookie parser
- you can add middleware for handling errors

### Exercise
`curl -X PUT localhost:8080/st/orem` - performs PUT request to the URL (updates resources/creates if it doesn't alread exist)

## SOP and CORS
Cross-Origin Requests - when wep application in one domain makes request to resource on another domain
  - Hackers could use this to request info from a website to trick people
- Same Origin Policy (SOP) - to combat hacking. Only allows JS to make requests to domain if it's the same domain the user is currently viewing.
  - Creates isues when building web applications. Want service that any web application can use...
- CORS (Cross Origin Resource Sharing) - allows client (browser) to specify origin of request and let server respond with what origins are allowed. 
  - Server may say: all origins are allowed (general purpose image provider) or only specfic (bank authentication)
  - If not speficied, server assumes it must be the same
  - only alerts user, website needs to implement own precautions
### Third Party Services
- when you make requests to own web services you're always on same orgin and don't violate SOP
- requests to different domain - ensure that domain allwos requests, defined by `Access-Control-Allow-Origin` header it returns.
- test services you use in application, ensure they have `*` in header. 

## Service Design
- web services provide interactive functionality
- user authentication, track session state, provide, store, and analyze data connect peers and aggregate user information. 
- makes easier to use, perform and extensible (determine success of application).
- good design = increased productivity, user satisfaction, lower processing
### Model and Sequence Diagrams
- model of primary objects and interactions
- use model according to how user thinks of it
- [alt text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServices/design/webServicesSequenceDiagram.jpg)
### Leveraging HTTP
- web services provided over HTTP (HTTP is a big influence)
- HTTP verbs (GET,POST,PUT,and DELETE) usually mirror designed actions of web service.
  EX: service managing comments might list comments (GET), create comments (POST), update a comment (PUT), and delete a comment (DELETE). 
  - MIME content types defined by IANA are natural fit for defining types of content you want to provide (HTML, PNG, MP3)
- want to leverage tochnologies so you don't have to recreate functionality. Take advantage of already created infrastructure. 
  - caching servers to increase performance, edge servers to bring ocntent closer, replication servers to provide redundant copies of content  and make application more resilient to network failures
### Endpoints
- web service usually divided into multiple service endpoints
- each endpoint provides single functional purpose
- often called API (Application Programming Interface) because of old desktop applications and programming interfaes they exposed
  - API sometimes refers to one endpoint or multiple
- Things to consider:
   - Grammatical - in HTTP everything is a resource. You act on the resource with an HTTP verb
   - Readable - resource you're referencing with HTTP request should be clearly readble in URL path
   - Discoverable - as you expose resources that contain other resources you can provide endpoints for aggregated resources. Makes it so someone using endpoints only needs to remember top level endpoint
   - Compatible - when you build, ensure you can add new functionality without breaking existing clients. Add new things without breaking or impacting the old ones. Can deprecate things but you want to keep compatibility of at least one previous verson so clients can migrate
   - Simple - keep endpoints focused on primary resources of applicaiton. Avoids temptation to add endpoints that duplicate/create parllel access to primary resources. Helpful to write simple class and sequence diagrams outlining primary resources before coding. Focus on actal resources not data structure/devices used to host. Should only do one thing
   - Documented - open AI specification has examples of tooling that helps create, use and maintain documentation of service endpoints. Helpful for good client libraries and sandbox experimentaiton. Creating an initial draft of documentaiton before coding helps mentally clarify design and yields better result.
### RPC
- Remote Procedure Calls - expose serfice endpoints as simple function calls. 
- when used over HTTP, leverages POST HTTP verb. Actual verb and subject of function call is resprsesented by function name. Name of function is either entire path of URL/parameter in POST body
- maps directly to function calls that might exist within the server
  - could be considered a disadvantabe because it directly exposes inner workings of service, creating coupling between endpoints and impmlementation
### REST
- Representational State Transfer - tries to take advantage of foundational principles of HTTP
- act upon a resource. Impact state of resource 
- allows for caching functionality of HTTP to work optimally (GET always returns same resource until PUT is executed on resource when PUT is used, cached resource is replaced with updated resource)
### GraphQl
- focuses on manipulation of data instead of function call/resource
- query specifies desired data and how it should be joined and filtered. 
- developed to address frustration concerning massive number of REST /RPC calls a web application client needed to make to support just a simple UI widget
- rather than making a call for getting a store and calls for getting the stores orders and employees. It sends a single querey asking for all that info in a single JSON response. Server then examines, joins and filters anything unwanted.
- EX:
```
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
```
- helps remove logic for parsing endpoints and mapping requests to specific resources. Only one endpoint
- Downside: client has lots of power to consume resources. No clear boundary on what, how much/how complicated data is. 
  - difficult for server to implement authorization rights to data as they must be baked into data schema
    - data schema: blueprint/struture that defines how data is organized
  - packages provide support for schema implementations and database adaptors for query support. 
## Simon Service
- create new service with new directory in root of the project named service. To iniatlize code, open command console iwndow and setup NPM project and install Express
```
mkdir service && cd service
npm init -y
npm install express
```
- in that directory create file named index.js in root of project. This is entry point that node.js will call when you run your service. 
## Startup Service
## Service Daemons - PM2
- when running program from console, it automatically terminates after you close/computer restarts.
- `daemon` - register program to keep it running after shutdown. always working in the background
- Process Manager 2 - (PM2), already installed on production server as part os AWS AMI. 
- you can SSH into server and see PM2 inaction using `pm2 ls` 
  - prints out 2 services, simon and startup
|                         Command                        |                                      Purpose                                     |
|:------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| pm2 ls                                                 | List all of the hosted node processes                                            |
| pm2 monit                                              | Visual monitor                                                                   |
| pm2 start index.js -n simon                            | Add a new process with an explicit name                                          |
| pm2 start index.js -n startup -- 4000                  | Add a new process with an explicit name and port parameter                       |
| pm2 stop simon                                         | Stop a process                                                                   |
| pm2 restart simon                                      | Restart a process                                                                |
| pm2 delete simon                                       | Delete a process from being hosted                                               |
| pm2 delete all                                         | Delete all processes                                                             |
| pm2 save                                               | Save the current processes across reboot                                         |
| pm2 restart all                                        | Reload all of the processes                                                      |
| pm2 restart simon --update-env                         | Reload process and update the node version to the current environment definition |
| pm2 update                                             | Reload pm2                                                                       |
| pm2 start env.js --watch --ignore-watch="node_modules" | Automatically reload service when index.js changes                               |
| pm2 describe simon                                     | Describe detailed process information                                            |
| pm2 startup                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| pm2 logs simon                                         | Display process logs                                                             |
| pm2 env 0                                              | Display environment variables for process. Use pm2 ls to get the process ID      |
### Registering a New Web Service
- to set up another subdomain that accesses a different web service on your web server, do the following:
1. add rule to Caddyfile to tell ithow to direct requests for the domain
  - SSH into server
  - copy section for startup subdomain and alter it so it represents desired subdomain and give it a different port number not currently used by server
  ```
  tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
  }
  ```
  - restart caddy to load new sesttings
  ```
  sudo service caddy restart
  ```
2. Create directory and add files for web service
  - copy directory to directory that represents purpose of your service
  ```
  cp -r ~/services/startup ~/services/tacos
  ```
  - if you list directory you should see an index.js file that's the main JS file for your web service. Has code to listen on designated network port and respond to requests. Below causes web service to listen on a port thats provided as an argument to the command line
  ```
  const port = process.argv.length > 2 ? process.argv[2] : 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  ```
  - also directory named public that has static HTML/CSS/JS files that web service will respond with when requested. Index.js file enables this with folloiwng code: 
  ```
  app.use(express.static('public'));
  ```
  - Start up web service, listening on port 5000
  ```
  node index.js 5000
  ```
  - access web service through browser/curl
  ```
  curl https://tacos.cs260.click
  ```
  - Caddy receives request and map subdomain to tacos.cs260.click to a request for http://localhost:5000. Web service is listening on port 5000 and receives request and responds
  - stop by pressing CTRL-C in SSH console
3. Configure PM2 to host web service
  - allows web service to always be running in the background
  - from SSH console run:
  ```
  pm2 ls
  ```
  - lists web services you've already registered with PM2. To run newly created web service under PM2, ensure you're in your service directory and run similar command:
  ```
  cd ~/services/tacos
  pm2 start index.js -n tacos - 5000
  pm2 save
  ```
  - if you run pm2 ls again you sould see web service listed. Can now access subdomain in browser and see proper response. PM2 will keep running your service even after you exit SSH session

## Development and Production Environments
- important to seperate where you develop application and where it's released when working on commercial web app
  - Often Several Environments: staging, internal testing, external testing
  - If company is seeking 3rd party security security certification, they requre these environments to be strictly separated 
 - developer doesn't have access to production environment to prevent from manipulation of entire company asset
 - Continuous Integration (CI) Processes - checkout application code, lint, build, test, stage, test more, and then if everything checks out, deploy to production enviornment notifying different departments of release
  - lint/linter - tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs
- We use and manage both development environment (personal computer) and production environment (AWS Server). 
  - Never consider production environment as place to develop/experiment with application.
  - can shell into production environment to configure server/debug production problem, but deployment should happen using CI process
### Automating Deployment
 - advantage of using automated deployment...reproducible. 
- encourages you to iterate quickly because it's much easier to deploy code. Can add small feature, deploy, and get feedback from users quickly
- ours change with each new technology. Initially just copied directory of HTML files but soon have ability to modify config of web server, run transpiler tools and bundle code into deployable package
Deployment Script Command:
```
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
```
- `-k` provides credential file necessary to access production enviornment
- `-h` domain name of production envionrment
- `-s` represents name of application you're deploying
- first part of script parses command line parameters so we can pass in key, hostname of domain, and name of service you're deploying
```
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```
- next script copies all applicable source files into distribution directoy (`dist`), prepping for copying that to production server
```
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```
- target directory on production environment is deleted so new one can replace it. Done by executing commands remoly using secure shell program
```
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```
- distribution directory is copied to production environment using secure copy program (scp)
```
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```
- then use ssh again to execute some commands on production environment. Installs node packages (`npm install`) and restarts service daemon(`PM2`) that runs web app in production environment
```
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```
- finally clean up development envionrment by deleting distribution package
```
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```
- this makes deploying so much easier!
## Uploading Files
- web applications often need to upload one or more files from frontend application running in browser to backend service. Can accomplish by using HTML `input` element of type `file` on frontend and `Multer` NPM package on backend
### Frontend
- following code registers an event handler for when selected file changes and only accepts file of type `.png, .jpeg, or .jpg`. Also create `img` placeholder element to display uploaded image one it's been stored on server
```
<html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input
      type="file"
      id="fileInput"
      name="file"
      accept=".png, .jpeg, .jpg"
      onchange="uploadFile(this)"
    />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="frontend.js"></script>
  </body>
</html>
```
- frontend JS handles uploading file to server and uses filename returned from server to set src attribute of image element in FOM. If error happens, alert is displayed to user
```
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```
### Backend Code
- to build storage support into our server we need to install `multer` NPM package to our project
```
npm install multer
```
- multer handles reading file from HTTP request, enforcing size limit of upload and storing file in `uploads` directory. 
- Service code does the following:
  - handles requests for static files so we can serve up our frontend code
  - handles errors EX: 64k file limit violated
  - provides GET endpoint to serve up a file from the uploads directory
```
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
### Where You Store Your Files
- shouldn't put files on server
1. only so much available space (8GB). Once used server won't operate right may need to rebuild
2. in production system, servers are transient and are often replaced as new versions are releaced/capacity requirements change. Means you'll lose any state you store on your server
3. server storage isn't usually backed up
4. if you have muliple application servers you can't assume the server you uploaded the data is going to be the one you request a download from.
- instead use dedicared storage service that has durability guarantees, not tied to computer capacity and can be accessed by multiple application servers.
## Storage Services
- web apps commply need sto store files associated with app/users
  - Ex: images, user uploads, documents, movies
- files ususally have an ID, metadata, and bytes representing file itself. Can be stored using database service...overkill simpler solution is cheaper
### AWS S3
- Advantages:
1. unlimited capacity
2. only pay for what you use
3. optimized for global access
4. keeps multiple redundant copies of every file
5. can version files
6. performant
7. supports metadata tags
8. can keep files publicly available directly from S3
9. can keep files private and only accessible to your application
- steps to use:
1. Creating a S3 bucket to store your data in.
2. Getting credentials so that your application can access the bucket.
3. Using the credentials in your application.
4. Using the SDK to write, list, read, and delete files from the bucket.
- don't include your credentials in your code. If put in GitHub repo can be stolen and used by hackers to take over AWS account
## Data Services
- web applications commonly need to store application and user data persistently
- data is usually a representation of complex interrelated objects
   - user profile, organizational structure, game play info, usage history, billing info, peer relationship, library catalog, etc.
- used to use SQL
- around 2010 specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applicaitons from major companies. Called NoSSQL b/c they didn't use general purpose relational database paradigms popularized by SQL databasess.
- all have different underlying data structures, strengths and weaknesses

|    Service    |       Specialty       |
|:-------------:|:---------------------:|
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

### MongoDB
- increases developer productivity by using Json objects as core data model. Makes it easy to have an applicaiton that uses JSON from top to bottom of tech stack. 
- made of one or more collections that each contain JSON documents. 
- large array of JS objects, each with unique ID. 
- EX: houses for rent
```
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```
- no strict schema requirements (doesn't have rigid table definition where colmuns must be strictly typed and defined beforehand)
- each document usually follows similar schema, but may have specialized feels/common fields missing
- allows scema of collection to morph as data model of application evolves
- to add new field you insert field into documents as desired. If field isn't present/has different type in some documents then document doesn't mactch query critera when the field is referenced
- Queries:
```
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```
### Using MongoDB
- install package
```
➜ npm install mongodb
```
- use `MongoClient` object to make client connection to database server. Requires username, password, and hostname of database server
```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
- with client connection you can get a dtabase object and from there a collection object
  - collection object - allows you to insert and query for documents. Don't have to do anything special to insert JS object as a Mongo document. 
  - call `insertOne` function on collection object and pass it JS object
  - when you insert if database/collection doesn't exist Mongo automatically creates for you
  - when document is inserted into colelction it automatically is assigned a unique ID
```
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```
- Quereying for Documents - use `find` function on collection object. Asynchronous so we use `await` keyword to wait for promise to resolve before we write to console
```
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
- if you don't supply parameters fo `find` functino it will return all documents in collection. 
Output:
```
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```
- you can provide a querey and options to `find`function. 
```
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
### Managed Services
 - historically each application development team would have developers that managed the data service. They would:
  - aquire hardware
  - install database software
  - monitor memory, cpu and disk space
  - control data schema
  - handle migrations and upgrades
- nowadays hosted and managed by 3rd party. Development team doens't have to do day to day maintanence. Can focus more on application and less on infrastructure.
- with managed data service you can simply supply data and service grows/shrinks to support
### MongoDB Atlas
- data service provided by MongoDB
- Main Setup Steps:
1. Create your account.
2. Create a database cluster.
3. Create your root database user credentials. Remember these for later use.
4. Set network access to your database to be available from anywhere.
5. Copy the connection string and use the information in your code.
6. Save the connection and credential information in your production and development environments as instructed above.
**Can always find connectino string to Atlas cluster by pressing `Connect` button from database > dataservices view
### Keeping Keys Out of Code
- protect credentials for connecting to Mongo database. Don't post to public GitHug repo.
- load credentials when application executes
  - JSON configuration file that contains credentials that you dynamically load into JS that makes database connection
  - use config file in development enviornment and deploy it to production, but never commit it to GitHub
1. Create file named `dbConfig.json` in same directory as database JS that you use to make database requests
2. insert Mongo DB credentials into `dbCongig.json file in JSOn format
```
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}
```
3. Import `dbConfig.json` content into `database.js` file using Node.js require statement and use data that it respents to create connection URL
```
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
```
** include `dbConfig.json` in `.gitignore`
### Testing Connection on Startup
- it's nice to know connection string is correct before applicition attempts to access data
- we can know when application starts by making asynchronous request to ping database. If it fails either connection string is incorrect, credentials are invalid, or network isn't working
```
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```
### Using Mongo from Code
- Use the following test:
```
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```
- To execute above:
1. create directory called `mongoTest`
2. save above content to file named `index.js`
3. create file named `dbConfig.json` that contains credentials
4. run `npm init -y`
5. run `npm install mongodb`
6. run `node index.js`
- Expected Output:
```
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```
## Authorization Services
- if applicaiton is going to remember a user's data then it needs a way to uniquely associate data with particular credential
- usually means you `authenticate` a user by asking for info, such as email and password.
- remember info for some period of tim by storing an `authentication token` on user's device. Often stored in a cookie that is passed back to your web service on each request. 
- service can now associate data the user supplies with a unique identifier that corresponds to their authorizaiton token
- determining what user is authorized to do in applciation is important:
  - Different roles... administrators, editors, customers.
  - with ability to authenticate user and store info about them you can also store authorization. 
  - simple app may have single field that represents role of user. 
  - service code then uses that role to allow/limit/prevent what service endpoint does. 
  - complev web app usually has very powerful authorizaiton representation that controls the user's access to every part of the app. Ex: editor role may have authorization only to work on content they created/were invited to
- can be very complex
- primary hacker target - if they can bypass/escalate what they're authorized to do they can gain control of your applicaiotn. 
- constant authorization decreasses user happiness
- opposing priorities: security vs usability
- in attempt to remove complexity of authenticaiton and authorization from application many service providers and package developers have solutions you can use. Assuming you're using a trusted, well-tested service this can be a good option - removes cost of building, testing, and managing yourself
- Authorization services often use standard protocls for authenticating and authorizng
  - OAuth
  - SAML
  - OIDC
  - usually support concepts like `single sign on `(SSO) and Federated Login. 
    - SSO allows user to use same credentials for multiple web apps. 
    - EX: can log into GitHub using Google
    - Federated Login - allws user to log in once, and then authentication token is reused to autmotically log user into multiple websites
    - EX: logging into GMail allows you to use Google Docs and Youtube w/o logging in again.
## Account Creation and Login
## Simon Login
## Startup Login