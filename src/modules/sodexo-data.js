import SodexoLunchMenu from './sodexo-data.json';

// console.log(sodexoLunchMenu);

const coursesEn = [];
const coursesFi = [];

const parseSodexoMenu = (menu) => {
    const courses = Object.values (menu);
    for (const course of courses) {
        coursesEn.push(course.title_en);
        coursesFi.push(course.title_fi);

    }

};

parseSodexoMenu(SodexoLunchMenu.courses);


const SodexoData = {coursesEn, coursesFi}; 
export default SodexoData;