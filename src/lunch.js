
import LunchMenu from './lunch.json';
// Test
let courseArray = [
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
  ];

  /**
   * 
   */

const mealValidator = (mealName) => {
    let isCapital = /[A-Z]/.test(mealName.charAt(0));
    let minMax = /^.{4,64}$/.test(mealName);
    let mixed = /^[\.a-öA-Ö0-9,!?.'\() ]*$/.test(mealName);

    return isCapital && minMax && mixed;
};

console.log(mealValidator(courseArray[0].name));

const priceValidator = (courseArray) => {
     return courseArray.sort( function(a, b) {
         return a.price - b.price; 
        });
};

const priceUnderFive = (courseArray) =>{
    return courseArray.filter((course) => {
        return course.price < 5;
    });
};

const raisePrises = (courseArray) =>{
    return courseArray.map((course) => {
        return course.price * 1.15;
    });
};

const holeMenuPrice = (courseArray) =>{
    return courseArray.reduce((a,b) => {
        return {price: a.price + b.price};
    });
};


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