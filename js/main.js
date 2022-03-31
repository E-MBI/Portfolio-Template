// START header
const li = document.querySelector(".li-link");
const megamenu = document.querySelector(".menulink");
li.addEventListener("click", () => {
  megamenu.classList.toggle("Open");
});

//btn for nav bar
let btnNav = document.querySelector("span.btn");
btnNav.addEventListener("click", () => {
  megamenu.classList.toggle("Open");
});
//END header

//Start OurSkills
let Sec_Skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress > span");
const spansRate = document.querySelectorAll(".skill>h3>span");
let started = false; //function started  ? no

window.addEventListener("scroll", () => {
  if (window.scrollY >= Sec_Skills.offsetTop - 200) {
    spans.forEach((el) => {
      el.style.width = el.dataset.width;
    });

    //increasing percent of progress
    if (!started) {
      spansRate.forEach((span) => {
        startcount(span);
      });
    }
    started = true;
  }
});

function startcount(span) {
  let rate = span.dataset.rate;
  let ratcount = setInterval(() => {
    span.innerHTML++;
    if (span.innerHTML === `${rate}`) {
      clearInterval(ratcount);
    }
  }, 2500 / rate);
}
//END OurSkills

//start evnts
let days = document.querySelector(" .info > .counter >.days").firstChild;
let hours = document.querySelector(" .info > .counter >.hours").firstChild;
let mints = document.querySelector(" .info > .counter >.minutes").firstChild;
let secs = document.querySelector(" .info > .counter >.seconds").firstChild;
//funtion get time of event
function countdown() {
  const countDate = new Date("April 15 ,2022 00:00:00 ").getTime();
  const now = new Date().getTime();
  let gap = countDate - now;
  // convert time
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  //get countdown time & update it in html
  const textsecond = Math.floor((gap % day) / second);
  const textminute = Math.floor((gap % day) / minute);
  const texthour = Math.floor((gap % day) / hour);
  const textday = Math.floor(gap / day);

  days.textContent = textday;
  hours.textContent = texthour;
  mints.textContent = textminute;
  secs.textContent = textsecond;
}
let counter = setInterval(countdown, 1000);

//END evnts

//Start Stats
let ParentStats = document.querySelector(".stats");
const spanStats = document.querySelectorAll(".countInfo");
let start = false; //function starter?stop
window.addEventListener("scroll", () => {
  if (window.scrollY >= ParentStats.offsetTop - 200) {
    if (!start) {
      spanStats.forEach((span) => {
        statsRate(span);
      });
    }
    start = true;
  }
});

function statsRate(span) {
  let rate = span.dataset.num;
  let RateStats = setInterval(() => {
    span.innerHTML++;
    if (span.innerHTML === `${rate}`) {
      clearInterval(RateStats);
    }
  }, 2800 / rate);
}
//End Stats

//start Discount
const FormDiscount = document.querySelector(".request_discount>form");
const FieldName = document.querySelector("input[name='username']");
let regExpOfName = /^\w{4,15}/gi; //Validation User name
const FieldMail = document.querySelector("input[name='mail']");
let regExpOfEmail = /\w{3,}\d?(\w+)?@\w{3,}.\w{2,}/gi; //Validation Email
const FieldPhone = document.querySelector("input[name='phone']");
let regExpOfPhone = /\+\(\d{3}\) \-\d{3}\(\d{5}\)/gi; //Validation Phone +(010) -277(93571)
//errorMessage
let errorName = document.querySelector(".errorname");
let errorMail = document.querySelector(".errormail");
let errorphone = document.querySelector(".errorphone");

FormDiscount.onsubmit = function (e) {
  let NameValid = false; //Default Value
  let MailValid = false; //Default Value
  let PhoneValid = false; //Default Value
  //Validation Name
  if (FieldName.value !== "" && regExpOfName.test(FieldName.value) === true) {
    NameValid = true;
    errorName.style.opacity = 0;
    FieldName.value = "";
  } else if (regExpOfName.test(FieldName.value) === false) {
    errorName.style.opacity = 1;
  }
  //Validation Email
  if (FieldMail.value !== "" && regExpOfEmail.test(FieldMail.value) === true) {
    MailValid = true;
    errorMail.style.opacity = 0;
    FieldMail.value = "";
  } else if (regExpOfName.test(FieldMail.value) === false) {
    errorMail.style.opacity = 1;
  }
  // //Validation Phone
  if (regExpOfPhone.test(FieldPhone.value) === true) {
    PhoneValid = true;
    errorphone.style.opacity = 0;
    FieldPhone.value = "";
  } else if (regExpOfPhone.test(FieldPhone.value) === false) {
    errorphone.style.opacity = 1;
  }

  if (NameValid === false || MailValid === false || PhoneValid === true) {
    e.preventDefault();
  }
};
//End Discount
