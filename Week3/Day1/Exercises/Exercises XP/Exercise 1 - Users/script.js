const div = document.getElementById("container");
console.log(div);

const firstList = document.getElementsByClassName("list")[0];
firstList.children[1].textContent = "Richard";

const secondList = document.getElementsByClassName("list")[1];
secondList.children[1].remove();

const lists = document.getElementsByClassName("list");
for (let i = 0; i < lists.length; i ++) {
    lists[i].children[0].textContent = "Alex";
}

lists[0].classList.add("student_list");
lists[1].classList.add("student_list");

lists[0].classList.add("university", "attendance")