
// DOM-html document ka programming interface h.prestructure ko represent krta h

    document.addEventListener("DOMContentLoaded", function () {
    // ---------------------- CONTACT FORM ----------------------
    const contactForm = document.querySelector(".form-box form");

    if(contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const subject = contactForm.querySelector('[name="subject"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();

            if (!name || !email || !subject || !message) {
                alert("⚠ Please fill out all fields in Contact Form.");
                return;
            }
              
            // (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) regex value provide a pattern,jisse ensure hota h valid email ka

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;           
            if (!email.match(emailPattern)) {
                alert("⚠ Please enter a valid email address in Contact Form.");
                return;
            }

            alert("✅ Your message has been sent successfully!");
            contactForm.submit();
            // Validation ke baad form ko server pe bhejne ke liye.
        });
    }

    // ---------------------- APPOINTMENT FORM ----------------------
    const appointmentForm = document.querySelector(".right-form form");

    if(appointmentForm) {
        appointmentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = appointmentForm.querySelector('[name="name"]').value.trim();
            const phone = appointmentForm.querySelector('[name="phone"]').value.trim();
            const email = appointmentForm.querySelector('[name="email"]').value.trim();
            const age = appointmentForm.querySelector('[name="age"]').value.trim();
            const date = appointmentForm.querySelector('[name="date"]').value.trim();
            const gender = appointmentForm.querySelector('[name="gender"]').value;
            const department = appointmentForm.querySelector('[name="department"]').value;
            const doctorGender = appointmentForm.querySelector('[name="doctor_gender"]').value;
            const concern = appointmentForm.querySelector('[name="concern"]').value.trim();

            if (!name || !phone || !email || !age || !date || !gender || !department || !doctorGender) {
                alert("⚠ Please fill out all required fields in Appointment Form.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.match(emailPattern)) {
                alert("⚠ Please enter a valid email address in Appointment Form.");
                return;
            }

            const phonePattern = /^\d{7,15}$/;
            if (!phone.match(phonePattern)) {
                alert("⚠ Please enter a valid phone number (7-15 digits) in Appointment Form.");
                return;
            }

            const today = new Date();
            const selectedDate = new Date(date);
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                alert("⚠ Please select a valid appointment date (not in the past).");
                return;
            }

            alert("✅ Your message has been sent successfully!");
            appointmentForm.submit();
        });
    }
});



    // 🌟 Smooth scroll reveal effect
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "body *:not(.navbar):not(.navbar *):not(.navbar .dropdown-items):not(.navbar .dropdown-items *):not(.hero-carousel *):not(.about-us *):not(.services *):not(footer):not(.copyright-bar):not(.copyright-bar *)"
  );

  // Sab elements pe reveal class lagate hain, aur scroll pe check karte hain ki element viewport me aa gaya hai to show class add kar dete hain.
  elements.forEach(el => el.classList.add("reveal"));

//  window.innerHeight * 0.85 Ye screen ke 85% part ko trigger line set karta hai – jab element uske andar aa jata hai tab show hota hai.
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

//  Smooth fade-in effect on page load
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease-in-out";

  // setTimeout-Ek function ko sirf ek baar delay ke baad execute karta hai.
  // setInterval-Ek function ko bar-bar repeat karta hai fixed interval ke baad.

  setTimeout(function () {
    document.body.style.opacity = "1";
  }, 100);
});


// for sticky navbar================================
  document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav.navbar");
  const topBar = document.querySelector(".top-bar");
  const initialTop = topBar.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= initialTop) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navbar.style.left = "0";
      navbar.style.width = "100%";
      navbar.style.zIndex = "1030";
    } else {
     
      navbar.style.position = "relative";
      navbar.style.top = null;
      navbar.style.left = null;
      navbar.style.width = null;
      navbar.style.zIndex = null;
    }
  });
});