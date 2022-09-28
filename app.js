const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const root = document.querySelector(":root"),
    inputs = document.querySelectorAll("input[name='theme']");

const theme = localStorage.getItem("theme-color");

const updateRoot = value => root.style.setProperty("--theme-color", `var(--${value})`);

for (const input of inputs) {
    if (theme && input.value === theme) {
        input.checked = true;

        updateRoot(theme);
    }

    input.onchange = e => {
        updateRoot(e.target.value);

        localStorage.setItem("theme-color", e.target.value);
    }
}