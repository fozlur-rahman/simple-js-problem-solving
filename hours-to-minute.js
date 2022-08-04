function hoursToMinute(hours){
    const minutes = hours * 60;
    return minutes;
}
const inputHours = 7;
const getminutes = hoursToMinute(inputHours);
console.log(getminutes);