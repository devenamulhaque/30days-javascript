const clockRun = () => {
    const date = new Date()
    const hours = document.querySelector('.hour-handle')
    const minutes = document.querySelector('.minutes-handle')
    const seconds = document.querySelector('.seconds-handle')

    let hourTime = date.getHours() * (360 / 12)
    let minutesTime = date.getMinutes() * (360 / 60)
    let secondsTime = date.getSeconds() * (360 / 60)

    seconds.style.transform = 'rotate(' + (secondsTime + 90) + 'deg)'
    minutes.style.transform = 'rotate(' + (minutesTime + 90) + 'deg)'
    hours.style.transform = 'rotate(' + (hourTime + 90) + 'deg)'

    console.log(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        minutesTime + 90
    )
}

setInterval(clockRun, 1000)
