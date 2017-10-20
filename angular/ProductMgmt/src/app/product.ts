export class Product {
    constructor(
        public id: null,
        public title: string = "",
        public price: number = 1.00,
        public imgUrl: string = "",
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
