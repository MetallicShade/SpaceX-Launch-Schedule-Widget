const url="https://ll.thespacedevs.com/2.0.0/launch/upcoming/?mode=list&search=SpaceX"
const req=new Request(url)
let api=await req.loadJSON()
let name=api.results[0].name
let date=new Date(api.results[0].net)
let location=api.results[0].location
const widget = await createWidget()
Script.setWidget(widget)
Script.complete()
async function createWidget() {
  let widget=new ListWidget()
  w.backgroundcolor="#000000"
  let name = widget.addStack()
  name.addText("name")
  let date = widget.addStack()
  date.addText("date")
  let location - widget.addStack()
  location.addText("location")
  //w.addDate()
  //let date=new Date(2020,12,16,22,10,0,0)
  //let countDown=w.addDate(date)
  //countDown.applyTimerStyle()
  return w
}
