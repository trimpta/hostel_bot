let task_group_id = 'id@g.us';
exports.task_group_id = task_group_id;

let users = ["p1", "p2", "p3"];
let nums = ["n1", "n2", "n3"]; //nx = "xxxxxxxxxx" just the digits of phone no. without +country code or @c.us

nums = nums.map((num) => {
    return "91" + num; //my country code for convenience
});


let tasks = [
    { day: "sunday", person: "p1" },
    { day: "monday", person: "p3" },
    { day: "tuesday", person: "p2" },
    { day: "wednesday", person: "p4" },
    { day: "friday", person: "p2" },
    { day: "friday", person: "p3" },
    { day: "saturday", person: "p6" }
];
tasks = tasks.map(
    (e) => {
        e.num = nums[users.indexOf(e.person)];
        return e;
    }
);

exports.tasks = tasks;