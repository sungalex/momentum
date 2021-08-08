const images = [];
let index = 0;
while (index < 40) {
  index += 1;
  images.push(`${index}.jpeg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.setAttribute('background', `img/${chosenImage}`);

// document.body.style.background = `url('https://source.unsplash.com/featured/${window.innerWidth}x${window.innerHeight}/?nature')`;
// console.log(`${window.innerWidth}x${window.innerHeight}`);
