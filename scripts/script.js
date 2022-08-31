
Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
  pathElement.setAttribute('style', 'stroke-dasharray:' + pathElement.getTotalLength() + ';stroke-dashoffset:' + pathElement.getTotalLength())
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  console.log("scrolling");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 350;

    let children = reveals[i].children;
    console.log(children.length);
    for (var j = 0; j < children.length; j++) {
      if (elementTop < windowHeight - elementVisible) {
        children[j].classList.add("active");
      }
      else {
        children[j].classList.remove("active");
      }
    }
  }
}

window.addEventListener("scroll", reveal);
