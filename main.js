const fruits = [
  '番茄',
  '酪梨',
  '草莓',
  '哈密瓜',
  '葡萄',
  '橘子',
  '百香果',
  '火龍果',
  '水蜜桃',
  '香瓜',
  '釋迦',
  '蔓越莓',
  '香蕉',
  '水梨',
  '芒果',
  '桃子',
  '蘋果',
  '龍眼',
  '奇異果',
  '藍莓',
  '柳橙',
  '檸檬',
  '枇杷',
  '榴槤',
  '鳳梨'
];

const bingo = [
  { '0': false, '1': false, '2': false, '3': false, '4': false },
  { '5': false, '6': false, '7': false, '8': false, '9': false },
  { '10': false, '11': false, '12': false, '13': false, '14': false },
  { '15': false, '16': false, '17': false, '18': false, '19': false },
  { '20': false, '21': false, '22': false, '23': false, '24': false },
  { '0': false, '5': false, '10': false, '15': false, '20': false },
  { '1': false, '6': false, '11': false, '16': false, '21': false },
  { '2': false, '7': false, '12': false, '17': false, '22': false },
  { '3': false, '8': false, '13': false, '18': false, '23': false },
  { '4': false, '9': false, '14': false, '19': false, '24': false },
  { '0': false, '6': false, '12': false, '18': false, '24': false },
  { '4': false, '8': false, '12': false, '16': false, '20': false }
];

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready();

function ready() {

  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
      const label = document.createElement('label');
      label.appendChild(document.createTextNode(randomPopFruits()));
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      label.appendChild(checkbox);
      const td = document.createElement('td');
      td.appendChild(label);
      tr.appendChild(td);
    }
    document.querySelector('table').appendChild(tr);
  }


  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
    checkbox.addEventListener('click', function () {
      this.parentNode.parentNode.style.backgroundColor = this.checked ? 'yellow' : 'white';
      bingo.forEach((line => {
        line.hasOwnProperty(index) ? line[index] = this.checked : null;
        if (Object.values(line).every(value => value)) {
          setTimeout(() => {
            alert('恭喜你贏了');
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.disabled = true);
          }, 100);
        }
      }));
    });
  });

}

function randomPopFruits() {
  return fruits.splice(Math.floor(Math.random() * fruits.length), 1)[0];
}

