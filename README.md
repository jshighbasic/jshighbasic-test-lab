# JavaScript High Basic Test Lab
Test the user's javascript code on their own computer.

- Create an html file.
- Download javascript files.
- Put <script src="test.lab.main.0.0.1.js"></script> at the bottom of <body>.
- The page should be blank and don't put any other script files in it.
  
Input url:
  
  `http://${ site }/${ file }.html?dt=${ after runing the script file, direct to this url ( url ) }&script=${ user code ( string ) }&testval=${ testing value [ var Variables { JavaScript } ] ( array ) };`

 `http://example.com/test.html?dt=http://example.com/back.html&script=console.log(list);&testval=list=5;,list=4;,list=3;,list=2;,list=1;,list=0;`

  Return url:
  
  - if success:
  
  `http://${ site }/${ file }.html?success=t&token=${ token ( string ) }&script=${ user code ( string ) }`
  
  `http://example.com/?success=t&token=69gbl8a4h4420jrspsksjo&script=console.log(list);`

  - if error
  
  `http://${ site }/${ file }.html?error=${ erro message ( string ) }&script=${ user code ( string ) }`
  
  `http://example.com/?error=ReferenceError:%20a%20is%20not%20defined&script=console.log(a);`

 
  Get the return:
  
   - Get user's script: 
  ```js
  var url = location.href;
  var backTo = url.split('?dt=')[1].split('&script=')[0];
  var script = url.split('&script=')[1].split('&testval=')[0];
  var testval = url.split('&testval=')[1].split(';,');
  script = decodeURIComponent(script);
  ```
  
  - get the output:
  
  > localStorage
  
  ```js
  localStorage.getItem(location.href.split('token=')[1].split('&')[0])
  ```

  Test files:
  
  > index.html
  
  ```html
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript High Basic</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <link rel="stylesheet" href="dracula.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.35.0/codemirror.css'>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body>
    <div class="nav">

    </div>
    <div class="question">
        <h1>Sorting system</h1>
        <p>
            Sort an array of numbers from largest to smallest.
            <br> variable: list, is an array
        </p>
        <c>var list = [];</c>
        <hr>
        <p>
            For example:
        </p>
        <c>var list = [1,2,3,4,5,6,7,8,9,10];</c>
        <p>
            The output should be:
        </p>
        <c>[10,9,8,7,6,5,4,3,2,1]</c>
        <p><i>Use console.log() to output the result.</i></p>
        <hr>
        <p>Tips</p>
        <div class="tip">
            <p>
                <i>
                    The sort function can be used to sort a list in ascending order. However, the question asks to sort the list in descending order. Try think how to do that.
                </i>
            </p>
            <button onclick="open_tips(this)" class="tipsOn"><span class="material-icons-round" style="font-size: 24px !important;">visibility_off</span></button>
            <div class="tip" id="t1" style="display:none;">
                <p>
                    <i>
                        The code is here:
                        <br>
                        <d>DO NOT ONLY COPY BUT ALSO UNDERSTAND THE CODE.</d>
                    </i>
                    <br>
                    <pre class="prettyprint"><code class="language-js">
    list.sort(function(a,b){return b-a});
    console.log(list);
    <code></pre>
                </p>
            </div>
        </div>
        <hr>
    </div>
    <div class="answer">
        <textarea id="editor">/*Use JavaScript to answer the question here*/
</textarea>
        <center><button id="submit">Submit</button></center>
        <div id="error"><span class="material-icons-round done">done</span></div>
    </div>
    <center id="footer">
        <tr><br><br>
            <a style="color:rgb(0, 0, 0);">&copy;XchuangC, 2022. All Rights Reserved.</a>
            <hr><img src="https://starwes.github.io/assets/XC.svg" height="60px" style="background:white; padding:20px;"><br><text>Part of Xchuangc(Xcfo) family.</text>
            <br>
        </tr>
    </center>
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.35.0/codemirror.js'></script>
    <script src='https://codemirror.net/mode/javascript/javascript.js'></script>
    <script>
        var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            mode: "javascript",
            lineNumbers: true,
            theme: "dracula"
        });
    </script>
    <script>
        const testing_values = [
            `var list=[40,50,15,90,70,80,60,10,20,30];`,
            `var list=[50,20,500,100,900,55,555,6454,112,22,33];`,
            `var list=[1,2,3,4,5,6,7,8,9,10];`,
            `var list=[50,40,952,812,64,2132,8469,5423,12,22,33];`,
        ];
        const result = `[[90,80,70,60,50,40,30,20,15,10],[6454,900,555,500,112,100,55,50,33,22,20],[10,9,8,7,6,5,4,3,2,1],[8469,5423,2132,952,812,64,50,40,33,22,12]]`;
        dt = 'script.html'
        $('#submit').click(function() {
            if (location.href.includes('?')) {
                var url = location.href.split('?')[0];
            } else {
                var url = location.href;
            }
            location.href = `${dt}?dt=${url}&script=${editor.getValue().replaceAll('\n','%0A')}&testval=${testing_values}`;
        });
    </script>
    <script>
        try {
            location.href.includes('&script=') ? editor.setValue(decodeURIComponent(location.href.split('&script=')[1])) : '';
            location.href.includes('?error=') ? $('#error').html(`<span class="material-icons-round warn">warning</span>&nbsp;${decodeURIComponent(location.href.split('?error=')[1].split('&script=')[0])}`) : '';
            if (location.href.includes('?success=t') && localStorage.getItem(location.href.split('token=')[1].split('&')[0]) == result) {
                $('#error').html(`<span class="material-icons-round done">done</span>Test passed!<br>Output:<br>${localStorage.getItem(location.href.split('token=')[1].split('&')[0])}`);
            } else if (localStorage.getItem(location.href.split('token=')[1].split('&')[0]) != result) {
                $('#error').html(`<span class="material-icons-round warn">warning</span>Wrong answer: <br>Output:<br>${localStorage.getItem(location.href.split('token=')[1].split('&')[0])}`);
            }
        } catch (e) {
            console.log(e);
        }
    </script>
    <script>
        var open_tip = false;

        function open_tips(e) {
            if (open_tip == false) {
                $('#t1').css('display', 'block');
                open_tip = true;
                e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility</span>`;
            } else {
                $('#t1').css('display', 'none');
                open_tip = false;
                e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility_off</span>`;
            }
        }
    </script>
    <script>
        window.onload = function() {
            var offset = sessionStorage.getItem("offsetTop");
            window.scrollTo(0, offset);
            window.onscroll = function() {
                sessionStorage.setItem("offsetTop", document.documentElement.scrollTop);
            };
        };
    </script>
</body>

</html>
  ```
  
  > style.css
  
  ```css
body{
    margin: 0 10vw;
}

@font-face {
    font-family: 'Consolas';
    src: url(../../font/consola.ttf);
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100&display=swap');

.CodeMirror, code {
    font-family: Consolas, 'Courier New', monospace !important;
}
.prettyprint{
    background-color: #070625 !important;
}

#error{
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px !important;
    background: #efefef;
    padding: 15px;
    margin-bottom: 50px;
}

.material-icons-round {
    user-select: none;
    font-size: 48px !important;
    border-radius: 50%;
    margin: 10px;
    padding: 5px;
}

#submit{
    user-select: none;
    background: #ffffff;
    color: rgb(0, 0, 0);
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
}

.done{
    color: black;
    background: lightgreen;
}

c{
    color: black;
    background: #efefef;
    border-radius: 5px;
    padding: 2px 5px;
    margin: 20px;
}

.question{
    width: 80vw;
    margin: 20px auto;
    margin-bottom: 100px;
    font-family: 'Noto Sans SC', sans-serif;
}

p{
    font-size: 30px;
    margin: 20px;
    font-weight: 100;
}

h1{
    font-size: 60px;
    font-weight: 300;
}

h{
    font-size: 40px;
    font-weight: 300;
    margin-left: 50px;
    color: rgb(255, 0, 0);
    transition: .3s;
    background: transparent;
}

h:hover{
    color: rgb(0, 0, 0);
    background: #efefef;
}

i{
    font-size: 20px;
}

hr{
    border: none;
    border-bottom: 1px solid #e0e0e0;
    margin-top: 40px;
}

.tipsOn{
    border: none;
    background: lightgreen;
    color: black;
    padding: 5px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 70px;
}

.tip{
    background: #f3f3f3;
    padding: 20px;
}

button{
    cursor: pointer;
}

#footer{
    user-select: none;
    margin-bottom: 50px;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 18px;
    font-weight: 100;
}

a{
    text-decoration: none;
}
  ```
  
  > dracula.css
  
  ```css
/*

    Name:       dracula
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)

*/
.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
  background-color: #070625 !important;
  color: #ffffff !important;
  border: none;
}
.CodeMirror-cursors .CodeMirror-cursor { transition: 0.2s; }
.cm-s-dracula .CodeMirror-gutters { color: #282a36; }
.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #ffff00; }
.cm-s-dracula .CodeMirror-linenumber { color: #ffffff87; }
.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.1); }
.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.1); }
.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.1); }
.cm-s-dracula span.cm-comment { color: #6272a4; }
.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2, .str { color: #f1fa8c !important; }
.cm-s-dracula span.cm-number, .lit { color: #bd93f9 !important; }
.cm-s-dracula span.cm-variable { color: #50fa7b; }
.cm-s-dracula span.cm-variable-2 { color: white; }
.cm-s-dracula span.cm-def, .pln { color: #50fa7b !important; }
.cm-s-dracula span.cm-operator, .pun { color: #ff79c6 !important; }
.cm-s-dracula span.cm-keyword, .kwd { color: #ff79c6 !important; }
.cm-s-dracula span.cm-atom { color: #bd93f9; }
.cm-s-dracula span.cm-meta { color: #f8f8f2; }
.cm-s-dracula span.cm-tag { color: #ff79c6; }
.cm-s-dracula span.cm-attribute { color: #50fa7b; }
.cm-s-dracula span.cm-qualifier { color: #50fa7b; }
.cm-s-dracula span.cm-property { color: #66d9ef; }
.cm-s-dracula span.cm-builtin { color: #50fa7b; }
.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255, 255, 255, 0.1); }
.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

  ```
  
  > script.html
  
  ```html
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.test.lab.js"></script>
</body>
</html>

  ```
  
  > script.test.lab.js
  
  ` /****/ `

  ===
  
  The code used codeMirror and code prettify from google.
  
  &copy;XchuangC, 2022.
