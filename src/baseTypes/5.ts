/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: number | string;
let literal: 'enable' | 'disable';

union = 6;
union = 'string'

literal = 'disable';
literal = 'enable';

