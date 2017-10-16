export class User {
constructor(
    public id: number = null,
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public address1: string = "",
    public address2: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
