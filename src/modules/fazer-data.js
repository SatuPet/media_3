
import FazerLunchMenuFi from './fazer-lunch.json';
import FazerLunchMenuEn from './fazer-lunch-en.json';

console.log(FazerLunchMenuEn, FazerLunchMenuFi);

/**
 * 
 * @param {*} lunchMenus 
 * @param {*} dayofweek 
 * @returns 
 */
const parseDayMenu = (lunchMenus, dayofweek) => {
    const dayMenu = lunchMenus[dayofweek].SetMenus.map(setMenu => {
        let meals = '';

        const name = setMenu.Name;
        for (const meal of setMenu.Meals) {
            meals += meal.Name + ', ';

            return name ? name + ': ' + meals: meals;

        }

    }); return dayMenu;

};

console.log(parseDayMenu(FazerLunchMenuEn.LunchMenus, 0));

const coursesEn = parseDayMenu(FazerLunchMenuEn.LunchMenus, 0); 
const coursesFi = parseDayMenu(FazerLunchMenuFi.LunchMenus, 0);

const FazerData = { coursesEn, coursesFi };

export default FazerData;

