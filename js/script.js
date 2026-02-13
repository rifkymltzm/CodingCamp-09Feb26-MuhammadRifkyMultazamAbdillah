document.addEventListener("DOMContentLoaded", function () {
    initializeName();

    const nameElement = document.getElementById("userName");
    nameElement.addEventListener("dblclick", changeName);
});

function initializeName() {
    let savedName = localStorage.getItem("visitorName");

    if (!savedName) {
        savedName = prompt("Welcome! Please enter your name:");

        if (!savedName || savedName.trim() === "") {
            savedName = "Guest";
        }

        localStorage.setItem("visitorName", savedName);
    }

    document.getElementById("userName").childNodes[0].nodeValue = savedName;
}

function changeName() {
    let newName = prompt("Enter your new name:");

    if (!newName || newName.trim() === "") {
        return;
    }

    localStorage.setItem("visitorName", newName);

    const nameElement = document.getElementById("userName");

    // Fade out
    nameElement.style.opacity = "0";

    setTimeout(() => {
        nameElement.childNodes[0].nodeValue = newName;

        // Fade in
        nameElement.style.opacity = "1";
    }, 300);
}

/* ================= FORM HANDLER ================= */
        const form = document.getElementById("messageForm");
        const outputBox = document.getElementById("outputBox");

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const nama = document.getElementById("nama").value;
            const tanggal = document.getElementById("tanggal").value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const pesan = document.getElementById("pesan").value;

            const currentTime = new Date().toString();

            outputBox.innerHTML = `
                <p><strong>Current Time : </strong> ${currentTime}</p>
                <p><strong>Nama : </strong> ${nama}</p>
                <p><strong>Tanggal Lahir : </strong> ${tanggal}</p>
                <p><strong>Jenis Kelamin : </strong> ${gender ? gender.value : "-"}</p>
                <p><strong>Pesan : </strong><br>${pesan}</p>
            `;
        });

const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function openMenu() {
        sidebar.classList.remove("translate-x-full");
        overlay.classList.remove("opacity-0", "pointer-events-none");
    }

    function closeMenu() {
        sidebar.classList.add("translate-x-full");
        overlay.classList.add("opacity-0", "pointer-events-none");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);