export class Vehicle {
    public _id: number;
    public model: string;
    public year: number;
    public image_path: string;
    public type: string;
    public Rent: {
        price_per_day: number, isRented: boolean
    } 
}