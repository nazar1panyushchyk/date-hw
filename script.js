function showDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    console.log(year);
    const month = currentDate.getMonth();
    console.log(month);
    const date = currentDate.getDate();
    console.log(date);
    const hours = currentDate.getHours();
    console.log(hours);
    const minutes = currentDate.getMinutes();
    console.log(minutes);
    const seconds = currentDate.getSeconds();
    console.log(seconds);
}
showDate()

function showWeekend(date) {
    const weekDay = date.getDay(); 
    return weekDay === 0 || weekDay === 6;
}

const date1 = new Date('2024-08-31');
console.log(showWeekend(date1));      //в консолі буде true, бо субота

const date2 = new Date('2024-08-30')
console.log(showWeekend(date2));     //в консолі буде false, бо п'ятниця
