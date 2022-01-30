
import FazerData from './modules/fazer-data';
import SodexoData from './modules/sodexo-data';



let coursesArray = [];
const convertCoursesToList = (courses) => {
    Object.entries(courses).forEach(course => {
        coursesArray.push(course);
    });
};
const fazerCoursesList = document.querySelector('#fazer-courses');
const sodexoCoursesList = document.querySelector('#sodexo-courses');
let activeList;
let reverse = true;
const createLunchList = (courses, listElement) => {
    listElement.innerHTML = '';

    activeList = courses;
    courses.forEach(courseText => {
        console.log(courseText);

        const div = document.createElement('div');
        div.innerHTML = courseText;
        div.classList.add('lunchText');

        listElement.appendChild(div);

    });

};

const buttonFi = document.querySelector('#buttonFi');
buttonFi.addEventListener('click', () => {
    createLunchList(FazerData.coursesFi, fazerCoursesList);
    createLunchList(SodexoData.coursesFi, sodexoCoursesList);
});

const buttonEn = document.querySelector('#buttonEn');
buttonEn.addEventListener('click', () => {
    createLunchList(FazerData.coursesEn, fazerCoursesList);
    createLunchList(SodexoData.coursesEn, sodexoCoursesList);
});

const sort = document.querySelector('#sort');
sort.addEventListener('click', () => {
    reverse = !reverse;
    createLunchList(reverse ? activeList.sort() : activeList.sort().reverse());
});

const random = document.querySelector('#random');
random.addEventListener('click', () => createLunchList(activeList.sort((a, b) => a.course_fi - b.course_fi), 'fi'));


/**
 * Initialize application
 */
const init = () => {

    createLunchList(FazerData.coursesFi, fazerCoursesList);
    createLunchList(SodexoData.coursesFi, sodexoCoursesList);
};
init();

