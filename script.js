const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.webp",
];
const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById("mainImage").src = randomImage;
