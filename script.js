const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll(".choose-plan").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("package").value = button.dataset.plan;
  });
});

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const business = String(data.get("business") || "").trim();
  const email = String(data.get("email") || "").trim();
  const selectedPackage = String(data.get("package") || "Help me decide");
  const details = String(data.get("details") || "").trim();

  // Replace this placeholder with your real business email before publishing.
  const recipient = "philliptfreeman32@gmail.com";
  if (recipient === "philliptfreeman32@gmail.com") {
    formStatus.textContent = "Almost ready! The site owner needs to replace YOUR_EMAIL@example.com in script.js with their real business email before this form can send inquiries.";
    return;
  }

  const subject = encodeURIComponent(`LocalLift Digital inquiry from ${business}`);
  const body = encodeURIComponent(
    `Hello LocalLift Digital,\n\nI'd like to ask about your services.\n\nName: ${name}\nBusiness: ${business}\nEmail: ${email}\nPackage: ${selectedPackage}\n\nProject details:\n${details || "Not provided"}\n\nPlease contact me to confirm scope, price, and delivery timing.\n`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  formStatus.textContent = "Your email app should open with the inquiry prepared. Please review and send it there.";
});
