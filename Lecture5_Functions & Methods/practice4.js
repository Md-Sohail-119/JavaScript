let marks = [23, 34, 96, 78, 90, 12, 34, 91, 99, 100, 11, 20];

let toppers = marks.filter((mark) => {
    return mark > 90;
});
console.log(toppers);
