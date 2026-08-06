// ************************************ Login / Sign-out Flow *****************************************
// Demo only — no backend requests are made.
 
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const signOutBtn = document.getElementById("signOutBtn");
 
function isValidEmail(value) {
  // Accepts a plain email OR a simple phone number (digits, spaces, +, -)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+\-\s]{7,}$/;
  return emailPattern.test(value) || phonePattern.test(value);
}
 
function setError(input, errorEl, message) {
  errorEl.textContent = message;
  input.classList.toggle("invalid", Boolean(message));
}
 
function showApp() {
  loginScreen.style.display = "none";
  appScreen.style.display = "block";
}
 
function showLogin() {
  appScreen.style.display = "none";
  loginScreen.style.display = "block";
  loginForm.reset();
  setError(emailInput, emailError, "");
  setError(passwordInput, passwordError, "");
}
 
emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();
  if (!value) {
    setError(emailInput, emailError, "Please enter your email or phone number.");
  } else if (!isValidEmail(value)) {
    setError(emailInput, emailError, "Please enter a valid email or phone number.");
  } else {
    setError(emailInput, emailError, "");
  }
});
 
passwordInput.addEventListener("blur", () => {
  const value = passwordInput.value;
  if (!value) {
    setError(passwordInput, passwordError, "Please enter your password.");
  } else if (value.length < 6) {
    setError(passwordInput, passwordError, "Password must be at least 6 characters.");
  } else {
    setError(passwordInput, passwordError, "");
  }
});
 
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;
  let hasError = false;
 
  if (!emailValue) {
    setError(emailInput, emailError, "Please enter your email or phone number.");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, emailError, "Please enter a valid email or phone number.");
    hasError = true;
  } else {
    setError(emailInput, emailError, "");
  }
 
  if (!passwordValue) {
    setError(passwordInput, passwordError, "Please enter your password.");
    hasError = true;
  } else if (passwordValue.length < 6) {
    setError(passwordInput, passwordError, "Password must be at least 6 characters.");
    hasError = true;
  } else {
    setError(passwordInput, passwordError, "");
  }
 
  if (hasError) return;
 
  showApp();
});
 
signOutBtn.addEventListener("click", showLogin);
 
// ---------------------------------------- Sample Data ----------------------------------------------------------------
// Titles/descriptions are original placeholder content (not real movies/shows).
// Each card gets a CSS gradient "poster" instead of a real image.
 
const categories = [
  {
    title: "Trending Now",
    items: [
      { title: "Nebula Drift", year: 2026, rating: "16+", desc: "A lone cartographer maps a collapsing galaxy while a signal from her past threatens to unravel everything she has rebuilt.", gradient: "linear-gradient(135deg,#1e3c72,#2a5298)" },
      { title: "Iron Harbor", year: 2025, rating: "13+", desc: "Two rival dockworkers uncover a smuggling ring that could sink their entire town.", gradient: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)" },
      { title: "Paper Kingdoms", year: 2024, rating: "PG", desc: "A shy origami artist builds a miniature empire that starts predicting real-world events.", gradient: "linear-gradient(135deg,#654ea3,#eaafc8)" },
      { title: "Static Bloom", year: 2026, rating: "18+", desc: "A radio technician in a quarantined city picks up transmissions from people who shouldn't exist.", gradient: "linear-gradient(135deg,#232526,#414345)" },
      { title: "Glass Horizon", year: 2023, rating: "13+", desc: "A storm-chasing pilot races to warn a coastal city before an unprecedented weather event hits.", gradient: "linear-gradient(135deg,#16222a,#3a6073)" },
      { title: "Velvet Static", year: 2025, rating: "16+", desc: "A washed-up musician gets one last shot at fame through an underground battle-of-the-bands circuit.", gradient: "linear-gradient(135deg,#8e2de2,#4a00e0)" },
    ],
  },
  {
    title: "Original Series",
    items: [
      { title: "The Long Signal", year: 2026, rating: "16+", desc: "A deep-space listening post detects a pattern that repeats every 11 years — and it's due again tonight.", gradient: "linear-gradient(135deg,#485563,#29323c)" },
      { title: "Marrow & Ash", year: 2024, rating: "18+", desc: "A wildfire investigator suspects the blazes she's assigned to are being set to cover something else.", gradient: "linear-gradient(135deg,#780206,#061161)" },
      { title: "Counterweight", year: 2025, rating: "13+", desc: "Two estranged siblings inherit their father's failing circus and a debt neither of them can pay.", gradient: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)" },
      { title: "Low Tide City", year: 2023, rating: "16+", desc: "A detective works cases that only surface when the harbor drains at low tide.", gradient: "linear-gradient(135deg,#134e5e,#71b280)" },
      { title: "Hollow Orchard", year: 2026, rating: "13+", desc: "A family reopens their grandmother's orchard and finds the trees remember more than they should.", gradient: "linear-gradient(135deg,#3e5151,#decba4)" },
      { title: "Redline", year: 2022, rating: "16+", desc: "An underground street-racing crew is recruited for a heist that needs their exact skill set.", gradient: "linear-gradient(135deg,#e53935,#e35d5b)" },
    ],
  },
  {
    title: "Documentaries",
    items: [
      { title: "Deep Reef Diaries", year: 2025, rating: "PG", desc: "A three-year expedition follows marine biologists mapping an uncharted coral system.", gradient: "linear-gradient(135deg,#005c97,#363795)" },
      { title: "Concrete Roots", year: 2024, rating: "PG", desc: "Urban farmers transform abandoned lots into thriving food networks across five cities.", gradient: "linear-gradient(135deg,#56ab2f,#a8e063)" },
      { title: "The Last Foundry", year: 2023, rating: "PG", desc: "A century-old ironworks fights to survive as the last of its kind in the region.", gradient: "linear-gradient(135deg,#544a7d,#ffd452)" },
      { title: "Skyline Circuits", year: 2026, rating: "PG", desc: "Engineers race to retrofit an aging power grid before the next heat wave hits.", gradient: "linear-gradient(135deg,#283048,#859398)" },
      { title: "Migration Season", year: 2022, rating: "PG", desc: "A year in the life of a caribou herd and the researchers tracking their vanishing routes.", gradient: "linear-gradient(135deg,#1a2980,#26d0ce)" },
      { title: "Salt & Stone", year: 2025, rating: "PG", desc: "Fourth-generation salt farmers adapt centuries-old methods to a changing coastline.", gradient: "linear-gradient(135deg,#e3ffe7,#d9e7ff)" },
    ],
  },
  {
    title: "Comedies",
    items: [
      { title: "Roommate Error", year: 2026, rating: "13+", desc: "A booking mix-up forces two total strangers to share an apartment for a full year.", gradient: "linear-gradient(135deg,#f7971e,#ffd200)" },
      { title: "Terms & Conditions", year: 2025, rating: "13+", desc: "An intern accidentally becomes CEO after nobody reads the fine print on a company merger.", gradient: "linear-gradient(135deg,#f857a6,#ff5858)" },
      { title: "Small Talk", year: 2023, rating: "PG", desc: "A social anxiety app starts giving its users a little too much confidence.", gradient: "linear-gradient(135deg,#7f00ff,#e100ff)" },
      { title: "The Understudies", year: 2024, rating: "13+", desc: "A community theater's backup cast gets its unexpected shot at opening night.", gradient: "linear-gradient(135deg,#f2994a,#f2c94c)" },
      { title: "Property of Nobody", year: 2026, rating: "13+", desc: "Neighbors feud over a mysterious shed that appears on the property line overnight.", gradient: "linear-gradient(135deg,#00c6ff,#0072ff)" },
      { title: "Overbooked", year: 2022, rating: "PG", desc: "A chaotic travel agent double-books every client for the same disastrous cruise.", gradient: "linear-gradient(135deg,#ff9966,#ff5e62)" },
    ],
  },
];
 
// __________________________________________________________________Render Rows _________________________________________________________________
const rowsContainer = document.getElementById("rowsContainer");
 
function renderRows(data) {
  rowsContainer.innerHTML = "";
  data.forEach((category) => {
    const row = document.createElement("section");
    row.className = "row";
 
    const titleEl = document.createElement("h3");
    titleEl.className = "row-title";
    titleEl.textContent = category.title;
 
    const track = document.createElement("div");
    track.className = "row-track";
 
    category.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      const posterUrl = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/300/170`;
      card.style.backgroundImage = `url(${posterUrl}), ${item.gradient}`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
      card.innerHTML = `<div class="card-label">${item.title}</div>`;
      card.addEventListener("click", () => openModal(item));
      track.appendChild(card);
    });
 
    row.appendChild(titleEl);
    row.appendChild(track);
    rowsContainer.appendChild(row);
  });
}
 
renderRows(categories);
 
// Modal Logic 
const modalBackdrop = document.getElementById("modalBackdrop");
const modalBanner = document.getElementById("modalBanner");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");
 
function openModal(item) {
  const posterUrl = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/650/260`;
  modalBanner.style.backgroundImage = `url(${posterUrl}), ${item.gradient}`;
  modalBanner.style.backgroundSize = "cover";
  modalBanner.style.backgroundPosition = "center";
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.year} • ${item.rating}`;
  modalDesc.textContent = item.desc;
  modalBackdrop.classList.add("active");
}
 
function closeModal() {
  modalBackdrop.classList.remove("active");
}
 
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
 
// ----------------------------------------------------Hero "More Info" button opens modal for a featured title-------------------------------------------------------------------------------------------
document.querySelector(".btn-info").addEventListener("click", () => {
  openModal(categories[0].items[0]);
});
document.querySelector(".btn-play").addEventListener("click", () => {
  alert("Playback demo not implemented — this is a UI clone only.");
});
 
// ----------------------------------------------------------------------Header scroll effect ------------------------------------------------------------------------
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
 
// Search toggle + filter 
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
 
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("open");
  if (searchInput.classList.contains("open")) searchInput.focus();
});
 
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();
  if (!query) {
    renderRows(categories);
    return;
  }
  const filtered = categories
    .map((category) => ({
      title: category.title,
      items: category.items.filter((item) =>
        item.title.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.items.length > 0);
 
  rowsContainer.innerHTML = "";
  if (filtered.length === 0) {
    rowsContainer.innerHTML = `<p style="margin-left:4%;color:#b3b3b3;">No results found.</p>`;
  } else {
    renderRows(filtered);
  }
});
 