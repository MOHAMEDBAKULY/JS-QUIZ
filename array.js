let myCourses = ["Learn CSS Animations", "UI Design Fundamentlas", "Intro to Clean Code"]

function home(where) {
    for (let i = 0; i <myCourses.length; i++) {
        console.log(where[i])
    }
}

home(myCourses)







localStorage.setItem("Ramadhan", "what a good Ramadhan it is indeed")

let rama = localStorage.getItem("Ramadhan")
console.log(rama)

