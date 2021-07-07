const cloths = [
  'blue_p.png',
  'blue_s.png',
  'blue_t.png',
  'pink_p.png',
  'pink_s.png',
  'pink_t.png',
  'yellow_p.png',
  'yellow_s.png',
  'yellow_t.png',
];

const sex = ['female', 'male'];

const size = ['small', 'large'];

cloths.forEach((cloth) => {
  const clothsList = document.getElementById('clothes-list');
  const li = document.createElement('li');
  const clothColorType = cloth.split('_');
  const color = clothColorType[0];
  const type = clothColorType[1].substr(0, 1);
  li.classList.add(color, type);
  const img = document.createElement('img');
  const span = document.createElement('span');
  img.src = `imgs/${cloth}`;
  span.innerText = `${sex[Math.floor(Math.random() * 2)]}, ${
    size[Math.floor(Math.random() * 2)]
  }`;
  li.appendChild(img);
  li.appendChild(span);
  clothsList.appendChild(li);
});

cloths.forEach((cloth) => {
  const clothsList = document.getElementById('clothes-list');
  const li = document.createElement('li');
  const clothColorType = cloth.split('_');
  const color = clothColorType[0];
  const type = clothColorType[1].substr(0, 1);
  li.classList.add(color, type);
  const img = document.createElement('img');
  const span = document.createElement('span');
  img.src = `imgs/${cloth}`;
  span.innerText = `${sex[Math.floor(Math.random() * 2)]}, ${
    size[Math.floor(Math.random() * 2)]
  }`;
  li.appendChild(img);
  li.appendChild(span);
  clothsList.appendChild(li);
});

const clothesList = document.querySelectorAll('#clothes-list li');

const logo = document.getElementById('logo');
const tshirts = document.getElementById('tshirts');
const pants = document.getElementById('pants');
const skirts = document.getElementById('skirts');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');

function onClickFilter(event) {
  const seletedType = event.target.className;
  for (let cloth of clothesList) {
    if (!cloth.classList.contains(seletedType)) {
      cloth.classList.add('hidden');
    } else {
      cloth.classList.remove('hidden');
    }
  }
}
function onClickLogo(event) {
  for (let cloth of clothesList) {
    cloth.classList.remove('hidden');
  }
}

logo.addEventListener('click', onClickLogo);
tshirts.addEventListener('click', onClickFilter);
pants.addEventListener('click', onClickFilter);
skirts.addEventListener('click', onClickFilter);
blue.addEventListener('click', onClickFilter);
yellow.addEventListener('click', onClickFilter);
pink.addEventListener('click', onClickFilter);
