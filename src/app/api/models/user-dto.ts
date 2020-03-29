/* tslint:disable */
export interface UserDto  {
  address: string;
  doctors?: Array<number>;
  email: string;
  firstName: string;
  gender: 'Male' | 'Female';
  id: number;
  image: string;
  lastName: string;
  role: 'Admin' | 'Doctor' | 'Comptable' | 'Commercial';
}
