import Inventory from "../utils/inventoryClass.js";

export default class Model {
    constructor() {
        this.windmillList = new Inventory;
        this.windmillList.addWindmill("64-57", "Hamburg", "Nordex", 2010, 3245);
        this.windmillList.addWindmill("44-84", "Zhongshan", "MingYang", 2012, 7564);
        this.windmillList.addWindmill("93-93", "Beijing", "Goldwind", 2005, 12867);
        this.windmillList.addWindmill("93-54", "Aarhus", "Vestas", 2015, 13569);
        this.windmillList.addWindmill("23-98", "Hammel", "Vestas", 2017, 6383);
        this.windmillList.addWindmill("48-46", "Biscay", "Siemens", 2020, 6789);

    }
}
