/*!
 * jshighbasic library test lab v0.0.1
 * https://jshighbasic.github.io/library/testlab.html
 *
 * Released under the MIT license
 * https://opensource.org/licenses/MIT
 */

var outputArray = [];
alert = confirm = console.log = function(e) {
    outputArray.push(e);
}
try{
    var url = location.href;
    var backTo = url.split('?dt=')[1].split('&script=')[0];
    var script = url.split('&script=')[1].split('&testval=')[0];
    var testval = url.split('&testval=')[1].split(';,');
    script = decodeURIComponent(script);
    try{
        if(testval==undefined){
            eval(script);
        }
        else{
            for(let i=0;i<testval.length;i++){
                eval(decodeURIComponent(testval[i]));
                eval(script);
            }
        }
        var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        location.href = `${backTo}?success=t&token=${token}&script=${url.split('&script=')[1].split('&testval=')[0]}`;
        localStorage.setItem(token,  JSON.stringify(outputArray));
    }
    catch(e){
        console.table({Error:e.message});
        location.href = `${backTo}?error=${e}&script=${url.split('&script=')[1].split('&testval=')[0]}`;
    }
}
catch(e){
    console.error(e);
    location.href = `${backTo}?error=api error, contact the developers of this site.`;
}

// Success : ?success=t&token=xxxxx&script=xxxxxx;
// Error : ?error=xxxxx&script=xxxxxx;
/*!
 * Get the test result from localStorage with the token.
 * localStorage.getItem(**token**);
 */