const url="https://ll.thespacedevs.com/2.0.0/swagger?format=openapi"
const req=new Request(url)
var data=await req.loadJSON()
var rocket=""
var date=""
var location=""
const widget = await createWidget()
Script.setWidget(widget)
Script.complete()
async function createWidget() {
  const w=new ListWidget()
  w.backgroundcolor="#000000"
  //w.addDate()
  //let date=new Date(2020,12,16,22,10,0,0)
  //let countDown=w.addDate(date)
  //countDown.applyTimerStyle()
  return w
}
