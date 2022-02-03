export default function () {}

let message: string = 'Hello World';
let value: number = 1;

let nullableString: string | null = null;
nullableString = 'Hi';

let undefinedOrNumber: undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;
