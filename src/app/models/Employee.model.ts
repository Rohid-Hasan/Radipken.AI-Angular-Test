export class Employee {
  constructor(
    public name: string,
    public position: string,
    public about: string,
    public joiningDate: Date,
    public id?:number
  ) {}
}
