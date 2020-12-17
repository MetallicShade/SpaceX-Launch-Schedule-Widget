const url="https://ll.thespacedevs.com/2.0.0/launch/upcoming/?mode=list&search=SpaceX"
const req=new Request(url)
let api=await req.loadJSON()
var rocket=api.results[0].name
var date=new Date(api.results[0].net)
date.toLocaleString()
var location=api.results[0].location
var fm=FileManager.iCloud()
var scriptablePath = "/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/"
const widget = await createWidget()
Script.setWidget(widget)
Script.complete()
async function createWidget() {
  let widget=new ListWidget()
  widget.backgroundcolor=Color.black()
  let testDate=new Date(2020,11,18,0,0,0,0)
  addItem(widget,rocket,null,false)
  addItem(widget,date.toLocaleString(),"calendar",false)
  addItem(widget,location,"mappin.and.ellipse",false)
  addItem(widget,date,"timer",true)
  let timer = widget.addStack()
  timer.addImage(fm.readImage(scriptablePath+"timer.PNG"))
  let countDown=timer.addDate(testDate)
  countDown.applyTimerStyle()
  return widget
}
function addItem(widget, text, symbol, timer) {
  let item=widget.addStack()
  if (symbol!=null) {
    let icn=item.addImage(SFSymbol.named(symbol).image)
    icn.tintColor=Color.white()
  }
  if (timer=true) {
    let countDown=item.addDate(text)
  }
  else if (text!=null) {
    item.addText(text)
  }
}
