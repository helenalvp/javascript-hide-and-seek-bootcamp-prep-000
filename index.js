
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

/* nested target
function nestedTarget(target){
  document.getElementById(target)
}
*/
function deepestChild() {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}
return document.querySelector("ul.ranked-list li")
}

