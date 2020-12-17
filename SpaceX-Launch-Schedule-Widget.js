const url="https://spacelaunchschedule.com/spacex-launch-schedule/"
const req=new Request(url)
var data=await req.loadString()
var rocket=data.substring(data.indexOf("<h4 class=\"card-title h5\"")+97,data.indexOf("</h4>")-1)
var date=data.substring(data.indexOf("<time datetime=\"")+16,data.indexOf("\">"),data.indexOf("<time datetime=\"")+16)
var location=data.substring(data.indexOf("<div class=\"col truncate")+27,data.indexOf("</div>",data.indexOf("<div class=\"col truncate")+27))
const widget = await createWidget()
Script.setWidget(widget)
Script.complete()
async function createWidget() {
  const w=new ListWidget()
  w.backgroundcolor="#000000"
  w.addDate()
  w.date=new Date(2020,12,16,22,10,0,0)
  w.applyTimerStyle()
  return w
}
