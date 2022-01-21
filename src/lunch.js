
import LunchMenu from './lunch.json';
// Test
console.log('lunch menu object', LunchMenu);

    let coursesArray = [];
    const convertCoursesToList = (courses) =>{
        Object.entries(courses).forEach(course => {
            coursesArray.push(course);
        });
    };
    const coursesList = document.querySelector('#lunch-courses');
    let activeList;
    let reverse = true;
const createLunchList = (courses,lang) => {
    coursesList.innerHTML = '';

    activeList = courses;
    courses.forEach(course => {
        course = course[1];
        console.log(course);

        const div = document.createElement('div');
        div.innerHTML = course['title_'+lang];
        div.classList.add('lunchText');

        coursesList.appendChild(div);

    });

};

const buttonFi = document.querySelector('#buttonFi');
buttonFi.addEventListener('click', () => createLunchList(coursesArray,'fi'), );

const buttonEn = document.querySelector('#buttonEn');
buttonEn.addEventListener('click', () => createLunchList(coursesArray, 'en'), );

const sort = document.querySelector('#sort');
sort.addEventListener('click', () => {
    reverse = !reverse;
    createLunchList(reverse ? activeList.sort() : activeList.sort().reverse());
} );

const random = document.querySelector('#random');
random.addEventListener('click', () => createLunchList(activeList.sort((a, b) => a.course_fi - b.course_fi),'fi'));

convertCoursesToList(LunchMenu.courses);