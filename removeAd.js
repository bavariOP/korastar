var adlink="//befirstcdn.com/script/su.js";
var adlink1="//werelateral.com/dd/d4/30/ddd430767cdbddd8ac0726a842abd6c0.js";

//
// Time in seconds until the ads come back
// (default 24 hours):
//
var timeout=60*60*24;

// Do not change anything in the code below:
var showads = 1;
function adMessage(adcode) {
if (document.cookie == “”) {
document.write(adcode);
} else {
var the_cookie = document.cookie;
the_cookie = unescape(the_cookie);
the_cookie_split = the_cookie.split(“;”);
for (loop=0;loop<the_cookie_split.length;loop++) {
var part_of_split = the_cookie_split[loop];
var find_name = part_of_split.indexOf(“ad”);
if (find_name!=-1) {
break;
   }
}
if (find_name==-1) {
document.write(adcode);
} else {
var ad_split = part_of_split.split(“=”);
var last = ad_split[1];
if (last!=0) {
document.write(adcode);
} else {
showads=0;
         }
      }
   }
}
function writeCookie(show) {
var today = new Date();
var the_date = new Date();
the_date.setTime(today.getTime() + 1000 * timeout);
var the_cookie_date = the_date.toGMTString();
var the_cookie = “ad=”+show;
var the_cookie = the_cookie + “;expires=” + the_cookie_date;
document.cookie = the_cookie;
location.reload(true);
}
function handleClick(evnt) {
var targetstring = new String(evnt.target);
if (targetstring.search(adlink) != -1) {
writeCookie(0);
}
   
   if (targetstring.search(adlink1) != -1) {
writeCookie(0);
}
routeEvent(evnt);
return true;
}
if (window.Event) {
window.captureEvents(Event.CLICK);
}
window.onClick = handleClick;
adMessage(”);
