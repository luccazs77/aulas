import { User } from "./interface";
 
export class Cadastro implements User {
  name: string;
  age: number;
  active?: boolean;
}