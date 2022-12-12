export interface User {
  id: string;
  name: string;
  surname: string;
  password: string;
  email: string;
}

export interface IDatabase {
  db: any;
  users: User[];
  connect(): void;
  addOne(item: User): Promise<boolean>;
  readOne(item: User): Promise<any>;
  updateOne(item: User, newItem: User): Promise<any>;
  deleteOne(item: User): Promise<boolean>;
  userExists(name: string): Promise<boolean | undefined>;
}

export interface IDatabase2 {
  collections: { [key: string]: any[] };
  connect?(): void;
  add<T>(item: T): Promise<T>;
  add<T>(items: T[]): Promise<T>;
  read<T>(item: T): Promise<T>;
  read<T>(items: T[]): Promise<T>;
  update<T>(item: T): Promise<[T, T]>;
  update<T>(items: T[]): Promise<[T, T]>;
  delete<T>(item: T): Promise<boolean>;
  delete<T>(items: T[]): Promise<boolean>;
}
