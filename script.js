function main() {
    const currentDate = new Date()

    const hours = (currentDate.getHours()).toString().padStart(2, 0)
    const minutes = (currentDate.getMinutes()).toString().padStart(2, 0)
    const seconds = (currentDate.getSeconds()).toString().padStart(2, 0)
    const timeOfDay = hours >= 12 ? "PM" : "AM"

    const year = currentDate.getFullYear().toString()
    const month = currentDate.getMonth().toString().padStart(2, 0)
    const number = currentDate.getDate().toString().padStart(2, 0)

    clockString = `${hours}:${minutes}:${seconds} ${timeOfDay}`
    dateString = `${number}/${month}/${year}`

    document.getElementById("clock").textContent = clockString
    document.getElementById("date").textContent = dateString
}

setInterval(main, 1000)