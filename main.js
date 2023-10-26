// =====SWITCH BETWEEN TESTIMONIAL IMAGES AND TEXTS ======
// let userTexts = document.getElementsByClassName("user-text");
// let userImages = document.getElementsByClassName("user-img");

// function showReview() {
//   for (userImage of userImages) {
//     userImage.classList.remove("active-img");
//   }
// }
//   for (userText of userTexts) {
//     userText.classList.remove("active-text");
//   }
//   let i = Array.from(userImages).indexOf(event.target);

// userImages[e].classList.add("active-img");
//   userTexts[i].classList.add("active-text");
// }

// ======== SHOW ACTIVE PAGE =======
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-link");
  }
});

// flip card
$(".go-btn").click(function () {
  $(this).parents(".card").toggleClass("flipped");
});
$(".back-btn").click(function () {
  $(this).parents(".card").toggleClass("flipped");
});

// designing the text slides
// THE TEXT ARRAY:
// let testimonialTexts = [
//   {
//     id: 1,
//     author: "FRANCIS JUNIOR",
//     title: "PRODUCT DESIGNER",
//     description: `This design program was an absolute game-changer. Instructors
//     were fantastic, fostering a hands-on, collaborative environment.
//     The practical skills and design experience I gained have already
//     boosted my career prospects.`,
//     star: "images/4star.png",
//   },

//   {
//     id: 1,
//     author: "MARY JUNIOR",
//     title: "PRODUCT DESIGNER",
//     description: ` collaborative environment.
//     The practical skills and design experience I gained have already
//     boosted my career prospects.`,
//     star: "images/4star.png",
//   },
//   {
//     id: 1,
//     author: "KENNEDY JUNIOR",
//     title: "PRODUCT DESIGNER",
//     description: ` I gained have already
//     boosted my career prospects.`,
//     star: "images/4star.png",
//   },
// ];
// testimonialTexts.src = "4star.jpg";

// let currentIndex = 1;
// const contentElement = document.getElementById("user-text");
// function updateList() {
//   const currentObject = testimonialTexts[currentIndex];
//   let content = (document.getElementById("user-text").innerHTML = `
//   <div class = "author">${testimonialTexts[currentIndex].author}</div>
//   <div class = "title">${testimonialTexts[currentIndex].title}</div>
//   <div class = "description">${testimonialTexts[currentIndex].description}</div>
//   <img class = "rating" src = "${testimonialTexts[currentIndex].star}" img>
//   `);
//   contentElement.innerHTML = content;
// }

// updateList();

// function increase() {
//   for (let i = 0; i < testimonialTexts.length; i++) {
//     testimonialTexts[currentIndex] = +1;
//   }
// }
// function decrease() {
//   currentIndex =
//     (currentIndex - 1 + testimonialTexts.length) % testimonialTexts.length;
// }

let counter = 0;
show(counter);

document.querySelector(".prev").addEventListener("click", () => {
  computeTestimonials(-1);
});
document.querySelector(".next").addEventListener("click", () => {
  computeTestimonials(1);
});

function computeTestimonials(t) {
  show((counter += t));
}

function show(n) {
  let i;
  let testimonials = document.getElementsByClassName("user-text");
  if (n > testimonials.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = testimonials.length;
  }

  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }

  testimonials[counter - 1].style.display = "block";
}

function slideImage() {
  const images = document.querySelectorAll(".user-img");
  const testimonialImgWrapper = document.querySelector(
    ".testimonial-img-wrapper"
  );
  let i = Math.floor(images.length / 2);
  images[i].classList.add("active-img");
  let nextClicks = 0;
  let prevClicks = 0;

  document.querySelector(".next").addEventListener("click", () => {
    if (i < images.length && i !== images.length - 1) {
      prevClicks = 0;
      nextClicks++;
      images[i].classList.remove("active-img");
      images[i + 1].classList.add("active-img");
      testimonialImgWrapper.style.transform = `translateX(-${
        nextClicks * 25
      }px)`;
      i++;
    }
  });

  document.querySelector(".prev").addEventListener("click", () => {
    if (i < images.length && i !== 0) {
      nextClicks = 0;
      prevClicks++;
      images[i].classList.remove("active-img");
      images[i - 1].classList.add("active-img");
      testimonialImgWrapper.style.transform = `translateX(${
        prevClicks * 25
      }px)`;
      i--;
    }
  });
}
slideImage();
