var intArray = [39,98,102,127,243,319,17,36,75,222,333,343,312, 35, 355, 64,122,32,326,21, 211, 187, 154, 197, 201, 123, 321, 132, 213, 312, 376, 309, 211, 97, 87];

function setup() {
  createCanvas(400, 400);
  frameRate(15);
}
var i = 0;
var j = 0;
function draw() 
{
  if (i < intArray.length) 
  {
    background(51);
    var temp = 0;
       fill(255);
    for (var k = 0; k < intArray.length; k++) 
    {
      rect(k * (width / intArray.length), height - intArray[k], width / intArray.length - 3, intArray[k]);
    }
      if(intArray[i-1] > intArray[i])
      {
        temp = intArray[i-1];
        intArray[i-1] = intArray[i];
        intArray[i] = temp;
      }

    i++;
    
  }
  if(i == intArray.length)
  {
    i=0;
    j++;
  }
  
}