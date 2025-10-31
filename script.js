const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg"
];
const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById("mainImage").src = randomImage;
