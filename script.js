"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Filter menu cards as the visitor types; matching is case-insensitive.
    const search = document.getElementById("menuSearch");
    const cards = [...document.querySelectorAll("[data-searchable]")];
    const searchStatus = document.getElementById("searchStatus");
    search?.addEventListener("input", () => {
        const query = search.value.trim().toLocaleLowerCase();
        let visible = 0;
        cards.forEach((card) => {
            const matches = card.textContent.toLocaleLowerCase().includes(query);
            card.hidden = !matches;
            if (matches) visible += 1;
        });
        searchStatus.textContent = query
            ? `${visible} menu ${visible === 1 ? "item" : "items"} found.`
            : "Showing all menu items.";
    });

    // Load today's special at runtime. The date check uses the visitor's local day.
    const special = document.getElementById("specialBanner");
    const specials = [
        { day: 1, text: "Monday special: enjoy a cappuccino with a freshly baked croissant." },
        { day: 3, text: "Wednesday special: pair any hot drink with a slice of chocolate cake." },
        { day: 5, text: "Friday special: take R5 off any coffee and cake combination." }
    ];
    const today = new Date().getDay();
    const todaySpecial = specials.find((item) => item.day === today);
    if (todaySpecial) special.textContent = todaySpecial.text;
    else special.textContent = "Ask our friendly team about today's freshly prepared special.";

    // Accessible image lightbox with Escape key and backdrop dismissal.
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged gallery image");
    lightbox.innerHTML = '<button type="button" aria-label="Close enlarged image">Close ✕</button><div><img alt=""><p></p></div>';
    document.body.append(lightbox);
    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector("button");
    let previousFocus;
    const closeLightbox = () => {
        lightbox.hidden = true;
        document.body.style.overflow = "";
        previousFocus?.focus();
    };
    const openLightbox = (image) => {
        previousFocus = image;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.querySelector("p").textContent = image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        closeButton.focus();
    };
    document.querySelectorAll(".gallery img").forEach((image) => {
        image.addEventListener("click", () => openLightbox(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });
    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

    // Validate locally and explain that this static page does not transmit messages.
    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.className = "form-status error";
        const name = form.elements.name;
        const email = form.elements.email;
        const message = form.elements.message;
        let invalidField;
        if (name.value.trim().length < 2) {
            name.setCustomValidity("Please enter at least two characters for your name.");
            invalidField = name;
        } else name.setCustomValidity("");
        if (!invalidField && !email.validity.valid) {
            email.setCustomValidity("Please enter a valid email address.");
            invalidField = email;
        } else if (!invalidField) email.setCustomValidity("");
        if (!invalidField && message.value.trim().length < 10) {
            message.setCustomValidity("Please enter a message of at least 10 characters.");
            invalidField = message;
        } else if (!invalidField) message.setCustomValidity("");
        if (invalidField) {
            formStatus.textContent = invalidField.validationMessage;
            invalidField.reportValidity();
            invalidField.focus();
            return;
        }
        formStatus.className = "form-status success";
        formStatus.textContent = "Your message is ready, but this demo site is not connected to a mail service. Please email hello@homeofthebean.co.za directly.";
        form.reset();
    });
});
