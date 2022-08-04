function findLeapYear(years) {

    for (let i = 0; i < years.length; i++) {
        let year = years[i];
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            console.log('this is a leap year :', year);
        }
        else {
            console.log('this is a not leap year :', year);
        }
    }
}

const inputYears = [2023, 2024, 2025, 2028, 2030];
const getYear = findLeapYear(inputYears);

