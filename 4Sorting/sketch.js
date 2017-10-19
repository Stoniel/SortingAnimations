function setup() {
  createCanvas(600, 600);
  frameRate(15);
  selLoc = 0;
  bubLoc = 0;
  insLoc = 1;
  selArray = [];
  bubArray = [];
  quickArray = [];
  insArray = [];
  var arraySize = random(30,45);
  for(var index = 0;index<arraySize;index++)
  {
    x = random(50,225);
    selArray[index] = x;
    insArray[index] = x;
    bubArray[index] = x;
    quickArray[index] = x;
  }
  
}

var selLoc,bubLoc,insLoc,quickLoc;
var selArray,insArray,bubArray,quickArray;
var selDone = false;
var bubDone = false;
var insDone = false;
var quickDone = false;
var selTime,bubTime,insTime,mergeTime;

function draw() 
{
  background(0);
  fill(255);
  rect(0,height/2,width,3);
  rect(width/2,0,3,height);
  //Draws bars in each of the 4 quadrants. Looking for a better way to switch between color fills
  for(var j = 0;j < selArray.length;j++)
  {
    if(bubDone)
      fill(0,255,0);
    rect(j*((width-20)/2 / bubArray.length)+5,(height-bubArray[j])-5,(width/bubArray.length)/2-1,bubArray[j]);
    fill(255);
    if(selDone)
      fill(0,255,0);
    rect(j*((width-20)/2 / selArray.length)+5,(height/2-selArray[j])-5,(width / selArray.length)/2-1,selArray[j]);
    fill(255);
    if(insDone)
      fill(0,255,0);
    rect(j*((width-20)/2 /insArray.length)+width/2+7,(height/2-insArray[j])-5,(width/insArray.length)/2-1,insArray[j]);
    fill(255);
    if(quickDone)
      fill(0,255,0);
    rect(j*((width-20)/2 /quickArray.length)+width/2+7,(height-quickArray[j])-5,(width/quickArray.length)/2-1,quickArray[j]);
    fill(255);
  }
  textSize(24);
  var milli = millis();
  if(!selDone)
    selTime = Math.round(milli);
  if(!insDone)
    insTime = Math.round(milli);
  if(!bubDone)
    bubTime = Math.round(milli);
  text("Selection Sort:" + selTime + "(ms)",0,20);
  text("Insertion Sort:" + insTime + "(ms)",width/2 + 5,20);
  text("Bubble Sort:" + bubTime + "(ms)",5,height/2+25);
  if(selLoc<selArray.length)
  {
  var smallestNum = height;
  var smallestLoc = selLoc;
  //This is the start of selection Sort
  //Iterates through remainder of list to find location of smallest value
  for(var k = selLoc;k<selArray.length;k++)
  {
    if(selArray[k] < smallestNum)
    {
      smallestNum = selArray[k];
      smallestLoc = k;
    }
  }
  var tempLoc = selArray[selLoc];
  
  
  //Sets current bar to blue and the smallest bar to red.
  if(smallestLoc != selLoc)
  {
    fill(66,134,244);
    rect(selLoc*((width-20)/2 / selArray.length)+5,(height/2-selArray[selLoc])-5,(width / selArray.length)/2-1,selArray[selLoc]);
    fill(255,0,0);
    rect(smallestLoc*((width-20)/2 / selArray.length)+5,(height/2-selArray[smallestLoc])-5,(width / selArray.length)/2-1,selArray[smallestLoc]);
  }
  else
  {
    fill(156,28,188);
    rect(smallestLoc*((width-20)/2 / selArray.length)+5,(height/2-selArray[smallestLoc])-5,(width / selArray.length)/2-1,selArray[smallestLoc])
  }
  selArray[selLoc] = smallestNum;
  selArray[smallestLoc] = tempLoc;
  selLoc+=1;
}
else
  selDone = true;

  if(bubLoc < bubArray.length-1)
  {
    fill(255,0,0);
    rect(bubLoc*((width-20)/2 / bubArray.length)+5,(height-bubArray[bubLoc])-5,(width/bubArray.length)/2-1,bubArray[bubLoc]);
    if(bubArray[bubLoc] > bubArray[bubLoc+1])
    {
      fill(66,134,244);
      rect((bubLoc+1)*((width-20)/2 / bubArray.length)+5,(height-bubArray[bubLoc+1])-5,(width/bubArray.length)/2-1,bubArray[bubLoc+1]);
      var temp = bubArray[bubLoc];
      bubArray[bubLoc] = bubArray[bubLoc+1];
      bubArray[bubLoc+1] = temp;
    }
    bubLoc++;
  }
  else
  {
    bubDone = true;
    for(var k = 0;k<bubArray.length-1;k++)
    {
      if(bubArray[k] > bubArray[k+1])
      bubDone = false;
    }
    if(!bubDone)
    bubLoc = 0;
  }
  
  if(insLoc<insArray.length)
  {
    var current = insArray[insLoc];
    var k;
    for(k = insLoc-1;k >= 0 && insArray[k] > current;k--)
    {
      insArray[k+1] = insArray[k];
    }
    insArray[k+1] = current;
    insLoc++;
  }
  else
    insDone = true;
}