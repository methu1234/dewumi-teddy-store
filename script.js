const images = ["t1.jpg", "t2.jpg","t3.jpg", "t4.jpg" ,"t5.jpg", "t6.jpg","t7.jpg", "t8.jpg"];
let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
}, 5000);