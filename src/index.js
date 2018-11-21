import _ from 'lodash';
let numbers = []

function addRandomNum() {
      const mainEl = document.getElementById('main');
      let p = document.createElement('p')
      p.innerHTML = "Random Number: " + _.random(0, 10).toString();
      document.body.appendChild(p)
      if (numbers.length === 5) {
        numbers.map(value => {
          return value;
        });
      }
}


{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
  console.log("ready");
}

function recordNumber(){
    const number = _.sum(addRandomNum);
    const mainEl = document.getElementById('main');
    let p = document.createElement('p')
    p.innerHTML = "Sum of Numbers: " + number;
    document.body.appendChild(p)
};