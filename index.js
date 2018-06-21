//Code your solution here

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElememtById("nested").querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list')
 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}