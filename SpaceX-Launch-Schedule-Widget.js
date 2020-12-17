const url="https://ll.thespacedevs.com/2.0.0/launch/upcoming/?mode=list&search=SpaceX"
const req=new Request(url)
let api=await req.loadJSON()
<<<<<<< Updated upstream
let name=api.results[0].name
let date=new Date(api.results[0].net)
let location=api.results[0].location
=======
var rocket=api.results[0].name
var date=new Date(api.results[0].net)
var location=api.results[0].location
var fm=Filemanager.iCloud()
var scriptablePath = "/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/"
>>>>>>> Stashed changes
const widget = await createWidget()
Script.setWidget(widget)
Script.complete()
async function createWidget() {
  let widget=new ListWidget()
<<<<<<< Updated upstream
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
=======
  widget.backgroundcolor="#000000"
  let testDate=new Date(2020,11,18,0,0,0,0)
  addItem(widget,"rocket","rocket")
  addItem(widget,"date","date")
  addItem(widget,"location","location")
  let timer = widget.addStack()
  timer.addImage(fm.readImage(scriptablePath+"timer.PNG"))
  let countDown=timer.addDate(testDate)
  countDown.applyTimerStyle()
  return widget
}
function addItem(widget, icon, text) {
  let this.item=widget.addStack()
  item.addImage(fm.readImage(scriptablePath+icon+".PNG"))
  item.addText(text)
>>>>>>> Stashed changes
}
