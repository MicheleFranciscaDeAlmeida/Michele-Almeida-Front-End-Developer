// FORMULÁRIO
document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso 😊");
    this.reset();
});

// FADE-IN
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
sections.forEach(sec => observer.observe(sec));

// TYPING
const text = "Michele Almeida";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("typing-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// MENU ATIVO
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (pageYOffset >= sec.offsetTop - 100) {
            current = sec.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// SCROLL SUAVE
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// DARK MODE
const toggle = document.getElementById("toggle-theme");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// PARALLAX
window.addEventListener("scroll", () => {
    document.querySelector("header").style.backgroundPositionY =
        window.scrollY * 0.5 + "px";
});