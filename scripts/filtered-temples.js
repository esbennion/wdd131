const currentYearSpan = document.getElementById("currentyear");

if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.querySelector("#lastmodified");

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("open");
    
        if (hamburger && navigation) {
            if (navigation.classList.contains("open")) {
                hamburger.textContent = "X";
            } else {
                hamburger.textContent = "☰";
            }
        }
    });
}
    
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        width: 400,
        height: 225
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        width: 400,
        height: 250
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 37000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-2-1416670-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-city-utah-temple-exterior-2-1416672-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-2-1416673-wallpaper.jpg",
        width: 400,
        height: 250
    }
];

createTempleCards(temples);
const homeButton = document.querySelector("#home-button");
const oldTemplesButton = document.querySelector("#old-temples");
const newTemplesButton = document.querySelector("#new-temples");
const smallTemplesButton = document.querySelector("#small-temples");
const largeTemplesButton = document.querySelector("#large-temples");

homeButton.addEventListener("click", () => {
    createTempleCards(temples);
});

oldTemplesButton.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900, January, 1"));
    createTempleCards(oldTemples);
});

newTemplesButton.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => new Date(temple.dedicated) >= new Date("2000, January, 1"));
    createTempleCards(newTemples);
});

smallTemplesButton.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    createTempleCards(smallTemples);
});

largeTemplesButton.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area >= 90000);
    createTempleCards(largeTemples);
});

function createTempleCards(filtetredTemples) {
    document.querySelector(".res-grid").innerHTML = ""; 
    filtetredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let name= document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".res-grid").appendChild(card);
    });
}
