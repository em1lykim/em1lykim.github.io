console.log("hello")

Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
  pathElement.setAttribute('style', 'stroke-dasharray:' + pathElement.getTotalLength() + ';stroke-dashoffset:' + pathElement.getTotalLength())
})