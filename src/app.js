const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const blog = document.getElementById('blog')
const online = document.getElementById('online')
const attendance = document.getElementById('attendance')
const investment = document.getElementById('investment')
const weather = document.getElementById('weather')

blog.addEventListener('click', () => {
    window.open('https://github.com/Saravanavel15/Zomoto_Data_Analysis', '_blank')
})

finger.addEventListener('click', () => {
    window.open('https://github.com/Saravanavel15/Employee-Management-System', '_blank')
})

attendance.addEventListener('click', () => {
    window.open('https://github.com/Saravanavel15/Face_Recognition_Attendance_System', '_blank')
})

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)

