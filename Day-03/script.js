const inputs = document.querySelectorAll('.handler input')

const handlerUpdate = e => {
    console.log(e.target.value)
}

inputs.forEach(input => input.addEventListener('change', handlerUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handlerUpdate))
