/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday'
}

enum Weekend {
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}

type Days = Weekday | Weekend; 

const isWeekend = (day: Days): boolean => {
  return day === Weekend.SATURDAY || day === Weekend.SUNDAY
}