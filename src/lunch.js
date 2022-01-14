
const coursesEn = ["Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
    "Goalaista kalacurrya ja täysjyväriisiä",
    "vegaani Chili sin carne ja täysjyväriisi",
    "Parsakeittoa,lisäkesalaatti kahdella napaksella",
    "Lunch baguette with BBQ-turkey filling",
    "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

    const coursesList = document.querySelector('#lunch-courses');
    let activeList;
    let reverse = true;
const createLunchList = (courses) => {
    coursesList.innerHTML = '';

    activeList = courses;

    courses.forEach((course) => {
        console.log(course);

        const div = document.createElement('div');
        div.innerHTML = course;

        coursesList.appendChild(div);

    });

};

const buttonFi = document.querySelector('#buttonFi');
buttonFi.addEventListener('click', () => createLunchList(coursesFi), );

const buttonEn = document.querySelector('#buttonEn');
buttonEn.addEventListener('click', () => createLunchList(coursesEn), );

const sort = document.querySelector('#sort');
sort.addEventListener('click', () => {
    reverse = !reverse;
    createLunchList(reverse ? activeList.sort() : activeList.sort().reverse());
} );

const random = document.querySelector('#random');
random.addEventListener('click', () => createLunchList(activeList.sort(() => Math.random() - 0.5)), );
