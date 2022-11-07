
const block = document.querySelector('.block');
const btn = document.querySelector('#button')
console.log(block);
console.log(btn);




button.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let time = Date.now() - start;

      block.style.left = time / 5 + 'px';

      if (time > 2000) clearInterval(timer);

    }, 0,1);
  }






