// interface IAccount {
//     firstName: string;
//     age: number;
// }
// let person = IAccount;

// let account = {
//     firsName: 'Igor',
//     age: 32,
// };

// let person: typeof account;
// person = 1;

// class Account {

// }

// let p1 = Account;
// let p2: Account;

// let a: string;
// let b: number | null = 1;
// b = null;
// let c = true;
// c = 1;
// console.log(b + 2)

// let a: void = undefined;

// function desc(): void {

// }

// const account: {
//     readonly firstName: string,
//     age?: number
// } = {
//     firstName: 'Igor',
// };


// account.firstName = 'Vlad';
// type IFirstName<T> = {
//     firstName: T;

//     getStatic(): { name: string };
// };

// interface IAge<U> {
//     age: U;

//     getStatic(): { female: boolean };
// }

// interface IACCOUNT extends IFirstName<number>, IAge<string> {
//     readonly info: {
//         readonly action: string
//     };

//     getStatic(): { name: string, female: boolean };
// }


// type Info<T extends { name: string, age: number }> = {
//     info: T;
// };

// let p1: Info<{ name: string, age: number }>;
// let p2: Info<{ name: string, age: number, info: string }>;
// let p3: Info<{ name: string, age: number, female: boolean }>;

// let account1: IACCOUNT = {
//     info: {
//         action: 'action'
//     }
// };

// let account2: IACCOUNT;


// class Account implements IACCOUNT {
//     public firstName = 'Igor';
//     public age = 2;
//     public info = {
//         action: 'up'
//     };
// }

// account.info.action = 'new action';

// let emails: ReadonlyArray<string> = ['s', 'd'];
// emails.push('asd');
// emails[100] = 'ads';

// let tuple: [string, number] = ['sd', 1, 1];

// let cb: new (a: string) => number;

// let action: 'up' | 'down';
// action = 'up';

// let obj: { [t: string]: 4 } = {
//     a: 4,
//     b: 5
// };

// function average(...a: [number, number, number]): string {
//     const [c, b, d] = a;
//     const total = c + b + d;
//     return `Average is ${total / 3}`;
// }

// average(1, 2, 3);
// average(1, '2', 3);
// let result: number = average(1, 2, 3);

// function isString(a: number | string): a is string {
//     return typeof a === 'string';
// }

// function f(a: number, b: string): string;
// function f(a: string, b: string, c: number): string;
// function f(a: number | string, b: string, c?: number): string {
//     let total: number = 0;

//     if (isString(a)) {
//         total += parseInt(a);
//     } else {
//         total += a;
//     }

//     return 's';
// }

// f(1, '2');
// f('1', '2', 1);
// f(1, '2', 1);