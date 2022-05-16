var index = 0;
var slide = function() {
    var imgs =["../images/slide1.jpg", "../images/slide3.jpg", "../images/slide4.jpg"];
    document.getElementById('img').src=imgs[index];
    index++;
    if(index == 3){
        index=0;
    }
}
setInterval(slide, 3000);