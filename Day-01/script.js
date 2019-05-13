const playSound = e => {
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!key) return
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    setTimeout(() => {
        key.classList.remove('playing')
    }, 600)
}

document.addEventListener('keydown', playSound)
