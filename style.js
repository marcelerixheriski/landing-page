
// HAMBURGER MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);

});

// TUTUP MENU SETELAH DIKLIK
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// SLIDER TESTIMONI
const reviews = [

    {
        text: "Ayamnya crispy banget dan sambalnya enak!",
        name: "- Andi"
    },

    {
        text: "Sambalnya mantap, pedasnya pas. Bakal jadi langganan!",
        name: "- Siti"
    },

    {
        text: "Porsinya banyak dan harganya sangat terjangkau!",
        name: "- Budi"
    }

];

let currentReview = 0;

function changeReview(direction) {

    currentReview += direction;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    document.getElementById("reviewText").textContent =
        reviews[currentReview].text;

    document.getElementById("reviewName").textContent =
        reviews[currentReview].name;

}

// VALIDASI FORM KONTAK
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();

    const hp = document.getElementById("hp").value.trim();

    const pertanyaan = document.getElementById("pertanyaan").value.trim();

    const message = document.getElementById("message");

    if (nama === "" || hp === "" || pertanyaan === "") {

        message.style.color = "red";

        message.textContent =
            "Mohon isi semua kolom terlebih dahulu!";

        return;

    }

    if (!/^[0-9+\-\s]{8,20}$/.test(hp)) {

        message.style.color = "red";

        message.textContent =
            "Nomor HP tidak valid!";

        return;

    }

    message.style.color = "green";

    message.textContent =
        "Pesan berhasil divalidasi. Terima kasih!";

    contactForm.reset();

});
