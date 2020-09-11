import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator';



export class Item {

    constructor(name, category, price, discount = 0, quantity = 1) {
        Validator.isEmptyString(name);
        Validator.isEmptyString(category);
        Validator.isEmptyNumber(price);
        Validator.isEmptyNumber(discount);
        Validator.isEmptyNumber(quantity);

        this.uuid = uuidv4();
        this.name = name;
        this.category = category;
        this.price = price - (price * discount / 100);
        this.discount = discount;
        this.quantity = quantity;
    }

    update = (key, value) => {
        if (key === "name" || key === "category") {
            if (typeof value === "string") {
                Validator.isEmptyString(value);
                Object.assign(this, {
                    [key]: value
                });
                return
            }
        };
        if (key === "price" || key === "discount" || key === "quantity") {
            if (typeof value === "number") {
                Validator.isEmptyNumber(value);
                Object.assign(this, {
                    [key]: value
                });
                return
            }
        };
        throw new Error('is wrong arguments');
    }

    show = () => {
        return (
            `
            Produkt: ${this.name},
            Kategoria: ${this.category},
            Cena: ${(this.price * (1 - (this.discount / 100))).toFixed(2)} PLN,
            Rabat: ${this.discount} %,
            Ilość: ${this.quantity} sztuk,
            ID produktu: ${this.uuid}
            `
        )
    }
}