
    
    
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
            var head = document.querySelector('.header');
            if (window.pageYOffset > 20) {
                head.style.backgroundColor = '#170b5a';
                head.style.position = 'fixed';
            } else {
                head.style.backgroundColor = '#170b5a89';
                head.style.position = 'absolute';
            }
        });
    });
 //this changes the display attribute of the images divs
    var slide;
    var slides;
    var index=0;
    //first they are all changed to none then the one with index is changed to block
    function showSlide(index){
        slide.forEach(function(slide){
            slide.style.display='none';
        });
        slide[index].style.display='block';
    }
    // first checks if there are enough slides then increases index
    function nextSlide(){
        if(index<(slides-1)&&index>=0){
            index+=1;
        };
        showSlide(index);
    }
    //reduces index
    function prevSlide(){
        if(index<=(slides-1)&&index>0){
            index-=1;
        };
        showSlide(index);
    }
    //calls function after the page has been loaded not waiting for videos or images
    document.addEventListener('DOMContentLoaded',function(){
        slide=document.querySelectorAll('.slide');
        slides=slide.length;
        //shows the first slide at index 0
        showSlide(index);
    });

    // document.querySelector('.night').addEventListener('click', night);
var flag=false;
function night() {
    var body = document.querySelector('.content');
    var strip = document.querySelector('.strip');
    var link=document.querySelector('.ll');
    
    
    if (flag) {
    body.style.backgroundColor = 'antiquewhite';
    body.style.color = 'rgba(36, 32, 26, 0.85)';
    strip.style.backgroundColor = 'antiquewhite';
    strip.style.color = 'black';
    // link.style.color='black';
    flag=false;
    }
    else{   
    body.style.backgroundColor = 'rgba(36, 32, 26, 0.85)';
    body.style.color = 'antiquewhite';
    strip.style.backgroundColor = 'rgba(36, 32, 26)';
    strip.style.color = 'antiquewhite';
    // link.style.color='goldenrod';
    flag=true;
    }
}


// adding a link to the footer



document.addEventListener('DOMContentLoaded',function(){
    var loc=document.createElement('p');

var locationLink=document.createElement('a');
locationLink.href='index.html#map';
locationLink.textContent='location';
loc.appendChild(locationLink);
var linkDiv_infooter=document.querySelector('.links');
    linkDiv_infooter.appendChild(loc);
});