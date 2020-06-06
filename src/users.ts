export interface User {
  id: number;
  name: string;
}

export const idFromUser = (user: User) => user.id;
export const labelFromUser = (user: User) => user.name;

export const users: User[] = [
  {
    id: 1,
    name: 'Goerge Michael',
  },
  {
    id: 2,
    name: 'Cher',
  },
  {
    id: 3,
    name: 'Peter Gabriel',
  },
];
