class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfoCar() {
        console.log(`Car brand: ${this.getBrand} \nCar model: ${this.getModel} \nCar year: ${this.getYear}`)
    }

    set setBrand(brand) {
        this.brand = brand;
    }
    get getBrand() {
        return this.brand
    }
    set setModel(model) {
        this.model = model;
    }
    get getModel() {
        return this.model
    }

    set setYear(year) {
        this.year = year;
    }
    get getYear() {
        return this.year
    }

}


class Model extends Car {
    constructor(brand, model, year) {
        super(brand, model, year);
    }
    show() {
        console.log(`Car model: ${this.getModel}\n`);
    }
    showInfoCar() {
        super.showInfoCar();
    }
}



const car = new Model("BMW", "4-Series", 2019)

car.show()
car.showInfoCar()