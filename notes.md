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

# JavaScript
## Promises
- async - allows a function to return a Promise
- await - pauses execution until the Promise is settled