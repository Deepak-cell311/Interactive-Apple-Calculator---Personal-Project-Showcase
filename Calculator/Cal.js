

function cleared() {
     document.getElementById('input').value = " "
}
let string = " "
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button) => {
     button.addEventListener('click', (e) => {
          if (e.target.innerHTML === '=') {
               string = eval(string)
               document.querySelector('input').value = string
          }
          else if (e.target.innerHTML === 'AC') {
               clear();
          }
          else if (e.target.innerHTML == '%') {
               document.getElementById('percent').addEventListener('click', function () {
                    let input = document.getElementById('input').value;
                    document.getElementById('input').value = input / 100;
               });
          }
          else {
               console.log(e.target);
               string = string + e.target.innerHTML
               document.querySelector('input').value = string
          }
           });
})
     
function clear() {
     string = " ";
     document.querySelector('input').value = string
}




