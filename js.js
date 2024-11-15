document.addEventListener("DOMContentLoaded", () => {
    const pic1 = document.querySelector(".pic1 img");
    const radios = document.querySelectorAll("input[type='radio'][name='cheks']");

    radios.forEach((radio) => {
        radio.addEventListener("click", () => {
            // Add fade-out class to the image
            pic1.classList.add("fade-out");

            // Wait for the transition to complete before changing the image
            pic1.addEventListener("transitionend", () => {
                // Update the image source after fade-out
                pic1.src = `./imgs/${radio.id}.jpg`;

                // Remove fade-out class to fade back in
                pic1.classList.remove("fade-out");
            }, { once: true }); // Ensure the event listener runs only once
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menus = document.querySelectorAll(".card");
    const picks = document.querySelectorAll(".picks input[type='radio']")

    picks.forEach((elem) => {
        elem.addEventListener('click', ()=>{
            const selectedIndex = Array.from(picks).indexOf(elem);
            menus.forEach(menu => menu.classList.remove("active"));
        
        menus[selectedIndex].classList.add("active");
        });
    });
    menus[0].classList.add("active");
});

