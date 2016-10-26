import { Reservation } from './Reservation';

export class Customer {
    public _id: string;
    public first_name: string;
    public last_name: string;
    public address: {
        street: string,
        city: string,
        state: string,
        zip: number
    }
    public phone: string;
    public email: string;
    public reservations: Reservation[];
    public description?: string;
}

