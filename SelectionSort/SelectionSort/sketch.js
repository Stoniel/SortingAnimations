function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

var i = 0;
var intArray = [211, 31, 231, 77, 121, 55, 42, 139, 78, 49, 211, 45, 216, 287, 245, 345, 234, 324, 109, 100, 65, 297];
var temp = intArray;//[211, 31, 231, 77, 121, 55, 42, 139, 78, 49, 211, 45, 216, 287, 245, 345, 234, 324, 109, 100, 65, 297];

function draw() {
  if (i < temp.length) {
    background(0);
    fill(255);
    var smallestNum = height;
    var smallestLoc = i;
    var j, k;
    //For loop which iterates through the list to find the smallest number.
    for (k = i; k < temp.length; k++) {
      if (temp[k] < smallestNum) {
        smallestNum = temp[k];
        smallestLoc = k;
      }
    }
    var tempVar = temp[i];

  //Draws each bar based on the int value in the array.
    for (j = 0; j < temp.length; j++) {
      rect(j * (width / temp.length), height - temp[j], (width / temp.length) - 3, temp[j]);
    }
    //Sets the Current bar to blue, and the smallest to red
    if (smallestLoc != (i)) {
      fill(66, 134, 244);
      rect((i) * (width / temp.length), height - temp[i], (width / temp.length) - 1, temp[i]);
      fill(255, 0, 0);
      rect(smallestLoc * (width / temp.length), height - temp[smallestLoc], (width / temp.length) - 1, temp[smallestLoc]);
    }
    //When the current bar and the smallest bar are the same, Purple.
    else {
      fill(156, 28, 188);
      rect(smallestLoc * (width / temp.length), height - temp[smallestLoc], (width / temp.length) - 1, temp[smallestLoc]);
    }
    temp[i] = smallestNum;
    temp[smallestLoc] = tempVar;
    i = i + 1;
  }
}