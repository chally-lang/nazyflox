/* =========================================
   NAZYFLOX JAVASCRIPT
========================================= */


// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});


// =========================================
// WHATSAPP MESSAGE
// =========================================

const whatsappForm = document.getElementById("whatsappForm");

const receiverInput = document.getElementById("receiver");
const extraMessageInput = document.getElementById("extraMessage");

const previewText = document.getElementById("previewText");
const previewToggle = document.getElementById("previewToggle");


// This is the automatic NazyFlox message.

function createNazyFloxMessage() {

  const extraMessage = extraMessageInput.value.trim();

  let message = `Hello! 👋

This is NazyFlox — your trusted electronics and technology business in Umuahia, Abia State.

💻 We deal in:
• Laptops
• CPUs & Computers
• Mice
• Chargers
• Electronic devices & accessories

🌍 We also provide import and export services for electronic devices.

📍 Location: Umuahia, Abia State
📞 Phone: +234 912 463 2268
💬 WhatsApp: +234 703 308 5090

We are happy to help you with your electronic needs.

Thank you for choosing NazyFlox!`;

  // Add user's own message if they entered one.

  if (extraMessage !== "") {

    message += `

━━━━━━━━━━━━━━━━━━
📩 MESSAGE FROM NAZYFLOX

${extraMessage}`;

  }

  return message;
}


// =========================================
// LIVE PREVIEW
// =========================================

function updatePreview() {

  previewText.textContent = createNazyFloxMessage();

}

extraMessageInput.addEventListener("input", updatePreview);

updatePreview();


// =========================================
// SHOW / HIDE PREVIEW
// =========================================

previewToggle.addEventListener("click", () => {

  previewText.classList.toggle("show");

  if (previewText.classList.contains("show")) {
    previewToggle.textContent = "Hide";
  } else {
    previewToggle.textContent = "Show";
  }

});


// =========================================
// SEND TO WHATSAPP
// =========================================

whatsappForm.addEventListener("submit", function(event) {

  event.preventDefault();

  let receiver = receiverInput.value.trim();

  if (!receiver) {

    alert("Please enter the receiver's WhatsApp number.");

    receiverInput.focus();

    return;
  }


  // Remove characters that should not be in a WhatsApp number.

  receiver = receiver.replace(/[+\s()-]/g, "");


  // Make sure the number contains digits only.

  if (!/^\d+$/.test(receiver)) {

    alert(
      "Please enter a valid phone number using numbers only."
    );

    receiverInput.focus();

    return;
  }


  // Create the complete NazyFlox message.

  const message = createNazyFloxMessage();


  // Encode the message for a URL.

  const encodedMessage = encodeURIComponent(message);


  // Create WhatsApp link.

  const whatsappURL =
    `https://wa.me/${receiver}?text=${encodedMessage}`;


  // Open WhatsApp.

  window.open(whatsappURL, "_blank");

});
