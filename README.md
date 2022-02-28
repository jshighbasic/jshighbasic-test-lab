# jshighbasic-testlab
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
  
  `http://${ site }/${ file }.html?success=t&token=${ token ( string ) }&script=${ user code ( string ) };`

  - if error
  
  `http://${ site }/${ file }.html?error=${ erro message ( string ) }&script=${ user code ( string ) };`
  
  `http://example.com/?error=ReferenceError:%20a%20is%20not%20defined&script=console.log(a);`
