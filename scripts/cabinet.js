// Filters functional for cabinet

const services = [
    { name: "Website development", category: "web", subcategory: "frontend" },
    { name: "Development of server part", category: "web", subcategory: "backend", },
    { name: "Logo and branding", category: "design", subcategory: "graphic", },
    { name: "SEO optimization", category: "marketing", subcategory: "seo" },
    // Here you can add more services if you need
];

function renderServices() {
    const servicesList = document.getElementById("servicesList");
    servicesList.innerHTML = "";

    const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {});

    for (const category in groupedServices) {
        const categoryLi = document.createElement("li");
        categoryLi.className = `service-item category-item ${category}`;
        categoryLi.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        servicesList.appendChild(categoryLi);

        groupedServices[category].forEach(service => {
            const subcategoryLi = document.createElement("li");
            subcategoryLi.className = `service-item subcategory-item ${service.category} ${service.subcategory}`;
            subcategoryLi.textContent = service.name;
            servicesList.appendChild(subcategoryLi);
        });
    }
}

function renderServices() {
    const servicesList = document.getElementById("servicesList");
    servicesList.innerHTML = "";

    const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {});

    for (const category in groupedServices) {
        const categoryLi = document.createElement("li");
        categoryLi.className = `service-item category-item ${category}`;
        categoryLi.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        servicesList.appendChild(categoryLi);

        groupedServices[category].forEach(service => {
            const subcategoryLi = document.createElement("li");
            subcategoryLi.className = `service-item subcategory-item ${service.category} ${service.subcategory}`;
            subcategoryLi.textContent = service.name;
            subcategoryLi.onclick = () => toggleActive(subcategoryLi);
            servicesList.appendChild(subcategoryLi);
        });
    }
}

function filterServices() {
    const category = document.getElementById("categoryFilter").value;
    const subcategory = document.getElementById("subcategoryFilter").value;
    const services = document.getElementsByClassName("service-item");

    for (let i = 0; i < services.length; i++) {
        const service = services[i];
        if (service.classList.contains("category-item")) {
            if (category === "all" || service.classList.contains(category)) {
                service.style.display = "list-item";
            } else {
                service.style.display = "none";
            }
        } else if (service.classList.contains("subcategory-item")) {
            if (
                (category === "all" || service.classList.contains(category)) &&
                (subcategory === "all" || service.classList.contains(subcategory))
            ) {
                service.style.display = "list-item";
            } else {
                service.style.display = "none";
            }
        }
    }
}

function toggleActive(element) {
    if (element.classList.contains('active')) {
        element.classList.remove("active");
        document.getElementById('orderBlock').style.display = 'none';
    } else {
        const activeElements = document.getElementsByClassName("active");
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove("active");
        }
        element.classList.add("active");
        document.getElementById('orderBlock').style.display = 'block';
    }
}

window.onload = () => {
    renderServices();
    filterServices();
};