//AnimatemeSenpai is a library that lets you animate elements on scroll.

//All elements
var element_animate_left = document.getElementsByClassName('as-left');
var element_animate_right = document.getElementsByClassName('as-right');
var element_animate_top = document.getElementsByClassName('as-top');
var element_animate_bottom = document.getElementsByClassName('as-bottom');

//Wrap inner html of as-xxxx into new class
function wrapInner(parent, wrapper) {
    if (typeof wrapper === "string"){
        wrapper = document.createElement(wrapper);
    }

    wrapper.classList.add("as-inner");
    var div = parent.appendChild(wrapper);

    while(parent.firstChild !== wrapper)
        wrapper.appendChild(parent.firstChild);
}

window.onload = function(){
    for(var i = 0; i < element_animate_left.length; i++){
        wrapInner(element_animate_left[i], "div");
        element_animate_left[i].style.visibility = 'visible';
    }
    for(var i = 0; i < element_animate_right.length; i++){
        wrapInner(element_animate_right[i], "div");
        element_animate_right[i].style.visibility = 'visible';
    }
    for(var i = 0; i < element_animate_top.length; i++){
        wrapInner(element_animate_top[i], "div");
    }
    for(var i = 0; i < element_animate_bottom.length; i++){
        wrapInner(element_animate_bottom[i], "div");
    }
    if(element_animate_left !== null){
        animate_me(element_animate_left, "animate-left");
    }
    if(element_animate_right !== null){
        animate_me(element_animate_right, "animate-right");
    }
    if(element_animate_top !== null){
        animate_me(element_animate_top, "animate-top");
    }
    if(element_animate_bottom !== null){
        animate_me(element_animate_bottom, "animate-bottom");
    }

}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    //Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function animate_me(element, class_param){
    for(var i = 0; i < element.length; i++){
        if(isScrolledIntoView(element[i])){
            var innerEl = element[i].querySelector('.as-inner');
            if(innerEl !== null){
                //This if is only here to prevent one typeError on load.
                innerEl.classList.add(class_param);
                innerEl.style.transition = 'visibility, opacity .2s ease';
                innerEl.style.visibility = 'visible';
            }
        }
        else{
            var innerEl = element[i].querySelector('.as-inner');
            if(innerEl !== null){
                //This if is only here to prevent one typeError on load.
                innerEl.classList.remove(class_param);
                innerEl.style.transition = 'visibility, opacity .2s ease';
                innerEl.style.visibility = 'hidden';
            }
        }
    }
}

window.onscroll = function() {
    if(element_animate_left !== null){
        animate_me(element_animate_left, "animate-left");
    }
    if(element_animate_right !== null){
        animate_me(element_animate_right, "animate-right");
    }
    if(element_animate_top !== null){
        animate_me(element_animate_top, "animate-top");
    }
    if(element_animate_bottom !== null){
        animate_me(element_animate_bottom, "animate-bottom");
    }
};