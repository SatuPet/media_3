
import FazerData from './modules/fazer-data';
import SodexoData from './modules/sodexo-data';
import urlFetch from './modules/network-module';


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

    urlFetch('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2022-02-08').then(data => {
        console.log(data);
        SodexoData.parseSodexoMenu(data.courses);
        createLunchList(SodexoData.coursesFi, sodexoCoursesList);
    });
    createLunchList(FazerData.coursesFi, fazerCoursesList);


    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
};
init();

