import SodexoLunchMenu from './sodexo-data.json';
import urlFetch from './network-module';

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

const SodexoData = {coursesEn, coursesFi ,parseSodexoMenu}; 
export default SodexoData;