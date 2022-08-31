import Windmill from "./windmillClass.js";

export default class Inventory {
    constructor() {
        this.windmills = [];
    }

    addWindmill(idNumber, location, brand, setupYear, mwLastYear)
    {
        const newWindmill = new Windmill(idNumber, location, brand, setupYear, mwLastYear);
        this.windmills.push(newWindmill);
    }

    getWindmill(idNumber){
        for (const windmill of this.windmills) {
            if (idNumber === windmill.idNumber) {
                return windmill;
            }
        }
        //The value null represent the intentional absence of an object value
        return null;
    }

    search(idealWindmill) {
        //Destructuring
        const {idNumber, location, brand, setupYear, mwLastYear} = idealWindmill;

        for (const windmill of this.windmills) {
            if (windmill.location === location && windmill.brand === brand && windmill.setupyear === setupYear && windmill.mwlastyear === mwLastYear)
            {
                return windmill;
            }
           
            
        }

        return null;
    }

    allWindmills() {
        return this.windmills;
    }

    deleteWindmill(id) {
        const index = this.windmills.map(windmill => windmill.idNumber).indexOf(id);
        this.windmills.splice(index, 1); // Removes guitar from guitar object list
    }
}