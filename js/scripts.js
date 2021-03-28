$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkU1epLRLobWafAp5plkw4PAMs9c10Reg",
  authDomain: "prabhavsohgaura-8eb38.firebaseapp.com",
  databaseURL: "https://prabhavsohgaura-8eb38-default-rtdb.firebaseio.com",
  projectId: "prabhavsohgaura-8eb38",
  storageBucket: "prabhavsohgaura-8eb38.appspot.com",
  messagingSenderId: "27559504015",
  appId: "1:27559504015:web:8dd30a7154778801b268fa",
  measurementId: "G-ZSJJPY15FW",
};

firebase.initializeApp(firebaseConfig);

let messagesref = firebase.database().ref("messages");

//listen for form sumbit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  let fullName = getvalue("fullName");
  let email = getvalue("email");
  let subject = getvalue("subject");
  let message = getvalue("message");

  //save messages
  saveMessage(fullName, email, subject, message);

  //show thank you message after submitting forn
  document.querySelector(".popup").style.display = "block";

  //show message for 3s
  setTimeout(function () {
    document.querySelector(".popup").style.display = "none";
  }, 3000);

  //clear form after submitting
  document.getElementById("contactForm").reset();
}

function getvalue(id) {
  return document.getElementById(id).value;
}

//save the message in the firebase database
function saveMessage(fullName, email, subject, message) {
  let newmessagesRef = messagesref.push();
  newmessagesRef.set({
    fullName: fullName,
    email: email,
    subject: subject,
    message: message,
  });
}
