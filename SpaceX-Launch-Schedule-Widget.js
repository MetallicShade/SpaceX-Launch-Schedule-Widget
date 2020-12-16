const url="https://spacelaunchschedule.com/spacex-launch-schedule/"
const req=new Request(url)
var data=await req.loadString()
var rocket=data.substring(data.substring(data.indexOf("
