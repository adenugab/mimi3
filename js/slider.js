var myCollection = new Collection([
  "img/l_officiel-3.png",
  "img/l_officiel-6.png",
  "img/valeria-1.png"
], "mainImg");

document.getElementById("next_btn").onclick = function() {
  myCollection.next();
};

document.getElementById("prev_btn").onclick = function() {
  myCollection.prev();
}

function Collection(urls, imgID) {
  var imgElem = document.getElementById(imgID);
  var index = 0;

  this.selectImage = function() {
    imgElem.src = urls[index];
  };

  this.next = function() {
    if (++index >= urls.length) {
      index = 0;
    }

    this.selectImage();
  };

  this.prev = function(element) {
    if (--index < 0) {
      index = urls.length - 1;
    }

    this.selectImage();
  };

  // initialize
  this.selectImage();
}