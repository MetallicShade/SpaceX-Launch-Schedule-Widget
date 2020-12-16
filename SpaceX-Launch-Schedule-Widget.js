const url="https://spacelaunchschedule.com/spacex-launch-schedule/"
const req=new Request(url)
var data=await req.loadString()
var rocket=data.substring(data.indexOf("<h4 class=\"card-title h5\"")+97,data.indexOf("</h4>")-1)
var date=data.substring(data.indexOf("<time datetime=\"")+16,data.indexOf("\">"),data.indexOf("<time datetime=\"")+16)
var location=data.substring(data.indexOf("<div class=\"col truncate")+27,data.indexOf("</div>",data.indexOf("<div class=\"col truncate")+27))
const testAlert=new Alert()
testAlert.title=location
testAlert.present()
