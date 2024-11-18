
let flag = false;
let nav = document.querySelector('.van')
function switch1() {
  if (flag == false) {
    nav.classList.add('show');
    flag = true;
  }
  else if (flag == true) {
    nav.classList.remove('show');
    flag = false;
  }
}