document.addEventListener("DOMContentLoaded", () => {
    // Play button interaction
    const playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const songTitle = btn.closest(".item").querySelector("h4 a").textContent;
            alert(`Now playing: ${songTitle}`);
        });
    });

    // Smooth scrolling for sidebar
    const sidebarScroll = document.querySelector(".sidebar-scroll");
    sidebarScroll.addEventListener("wheel", (e) => {
        e.preventDefault();
        sidebarScroll.scrollBy({
            top: e.deltaY < 0 ? -50 : 50,
            behavior: "smooth",
        });
    });

    // Sign-up button interaction
    const signUpButton = document.querySelector(".sign-up");
    signUpButton.addEventListener("click", () => {
        signUpButton.style.backgroundColor = "#1db954";
        signUpButton.style.color = "#fff";
        signUpButton.textContent = "Thanks for signing up!";
        setTimeout(() => {
            signUpButton.style.backgroundColor = "transparent";
            signUpButton.style.color = "#b3b3b3";
            signUpButton.textContent = "Sign Up";
        }, 2000);
    });

    // Theme toggle
    const themeToggleButton = document.createElement("button");
    themeToggleButton.textContent = "Toggle Theme";
    themeToggleButton.style.position = "fixed";
    themeToggleButton.style.bottom = "20px";
    themeToggleButton.style.right = "20px";
    themeToggleButton.style.padding = "10px";
    themeToggleButton.style.background = "#1db954";
    themeToggleButton.style.color = "#fff";
    themeToggleButton.style.border = "none";
    themeToggleButton.style.borderRadius = "5px";
    themeToggleButton.style.cursor = "pointer";
    document.body.appendChild(themeToggleButton);

    let isDarkMode = true;
    themeToggleButton.addEventListener("click", () => {
        if (isDarkMode) {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "#b3b3b3";
            isDarkMode = true;
        }
    });
});