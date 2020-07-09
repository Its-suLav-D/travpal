

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro, .gallery-intro");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
	rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
	entries,
	sectionOneObserver
  ) {
	entries.forEach(entry => {
	  if (!entry.isIntersecting) {
		header.classList.add("nav-scrolled");
	  } else {
		header.classList.remove("nav-scrolled");
	  }
	});
  },
  sectionOneOptions);
  sectionOneObserver.observe(sectionOne);

//   For sliders 
const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
	entries,
	appearOnScroll
  ) {
	entries.forEach(entry => {
	  if (!entry.isIntersecting) {
		return;
	  } else {
		entry.target.classList.add("appear");
		appearOnScroll.unobserve(entry.target);
	  }
	});
  },
  appearOptions);
    
  sliders.forEach(slider => {
	appearOnScroll.observe(slider);
  });

document.addEventListener('DOMContentLoaded', function() {
	let currDate = document.querySelectorAll('#current-date');
	currDate.forEach(item => {
		item.textContent =currentDate();
	})
});

function currentDate() {
	let daysName=[
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	let months =[
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	let date =new Date();
	let dayName = daysName[date.getDay()];
	let monthName = months[date.getMonth()];
	let year = date.getFullYear();
	let fullDate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;
	return fullDate;
}
// Image Slider 
let slideIndex = 0; 
showSlides(); 
function showSlides() 
{ 
	let slides = document.getElementsByClassName("image-sliderfade"); 
	let dots = document.getElementsByClassName("dot"); 

	for (let i = 0; i < slides.length; i++) { 
		slides[i].style.display = "none";  
	} 
	slideIndex++; 
	if (slideIndex > slides.length) 
	{ 
		slideIndex = 1; 
	} 
	for ( let i = 0; i < dots.length; i++) { 
		dots[i].className = dots[i].className.replace(" active", ""); 
	} 

	slides[slideIndex - 1].style.display = "block"; 
	dots[slideIndex - 1].className += " active"; 
	setTimeout(showSlides, 3000); 
} 

