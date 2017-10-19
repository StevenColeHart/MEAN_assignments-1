export class Quote {
    constructor(
        public id: number = null,
        public author: string = "",
        public a_quote: string = "",
        public score: number = 1,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
