// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

const viewall = document.getElementById("viewAll");
viewall.addEventListener("click", () => {
   window.location.href ="../pages/destinations.html" 
});

document.addEventListener("DOMContentLoaded", () => {
    populateDestinations();
    populateExperiences();
    populateTestimonials();
});

// Function to populate Destinations
function populateDestinations() {
    const destinationsContainer = document.getElementById("destinations-container");

    destinations.forEach(destination => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "card shadow-sm h-100";

        const img = document.createElement("img");
        img.src = destination.image;
        img.className = "card-img-top destination-img";
        img.alt = destination.name;
        img.loading = "lazy"; // Optimize image loading

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = destination.name;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = destination.description;

        const learnMore = document.createElement("a");
        learnMore.href = "../pages/destinations.html";
        learnMore.className = "btn btn-outline-primary";
        learnMore.textContent = "Learn More";

        // Assemble the card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(learnMore);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        destinationsContainer.appendChild(col);
    });
}

// Function to populate Experiences
function populateExperiences() {
    const experiencesContainer = document.getElementById("experiences-container");

    experiences.forEach(experience => {
        const col = document.createElement("div");
        col.className = "col-md-6";

        const flexDiv = document.createElement("div");
        flexDiv.className = "d-flex align-items-center";

        const iconDiv = document.createElement("div");
        iconDiv.className = "flex-shrink-0 me-4";

        const icon = document.createElement("i");
        icon.className = `${experience.icon} display-4 text-primary`;

        iconDiv.appendChild(icon);

        const textDiv = document.createElement("div");

        const title = document.createElement("h5");
        title.textContent = experience.title;

        const description = document.createElement("p");
        description.textContent = experience.description;

        textDiv.appendChild(title);
        textDiv.appendChild(description);

        flexDiv.appendChild(iconDiv);
        flexDiv.appendChild(textDiv);
        col.appendChild(flexDiv);
        experiencesContainer.appendChild(col);
    });
}

// Function to populate Testimonials
function populateTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials-container");

    testimonials.forEach((testimonial, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item";
        if (index === 0) carouselItem.classList.add("active"); // Make the first item active

        const testimonialContent = document.createElement("div");
        testimonialContent.className = "d-flex flex-column align-items-center";

        const img = document.createElement("img");
        img.src = testimonial.image;
        img.className = "rounded-circle mb-3";
        img.alt = `Traveler ${index + 1}`;
        img.width = 100; // Set width and height for consistency
        img.height = 100;
        img.loading = "lazy"; // Optimize image loading

        const name = document.createElement("h5");
        name.textContent = testimonial.name;

        const comment = document.createElement("p");
        comment.className = "text-center";
        comment.textContent = `"${testimonial.comment}"`;

        testimonialContent.appendChild(img);
        testimonialContent.appendChild(name);
        testimonialContent.appendChild(comment);
        carouselItem.appendChild(testimonialContent);
        testimonialsContainer.appendChild(carouselItem);
    });

    // Initialize Carousel with Interval
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        ride: 'carousel'
    });
}
