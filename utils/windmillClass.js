export default class Windmill {
    constructor(idNumber, location, brand, setupYear, mwLastYear) {
        this.idNumber = idNumber;
        this.location = location;
        this.brand = brand;
        this.setupYear = setupYear;
        this.mwLastYear = mwLastYear;
    }

    getIdNumber() {
        return this.idNumber;
    }

    getLocation() {
        return this.location;
    }

    getBrand() {
        return this.brand;
    }

    getSetupYear() {
        return this.setupYear;
    }

    getMwLastYear() {
        return this.mwLastYear;
    }
}