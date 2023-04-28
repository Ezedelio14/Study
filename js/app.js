let index = 0;

const images = [
  "./assets/img/1.jpg",
  "./assets/img/2.jpg",
  "./assets/img/3.jpg",
];

const changeImg = () => {
  const img = document.getElementById("img");
  index = index == images.length - 1 ? 0 : index + 1;
  img.src = images[index];
};

setInterval(changeImg, 1000);
