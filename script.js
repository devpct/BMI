const $ = document
const inputKg = $.querySelector('.input-kg')
const kg = $.querySelector('.kg')
const inputCm = $.querySelector('.input-cm')
const cm = $.querySelector('.cm')
const result = $.querySelector('.result')


kg.innerHTML = inputKg.value
cm.innerHTML = inputCm.value

let m = (inputCm.value / 100) * (inputCm.value / 100)
result.innerHTML = (inputKg.value / m).toFixed(2)

setInterval(() => {
    cm.innerHTML = inputCm.value
    kg.innerHTML = inputKg.value

    let m = (inputCm.value / 100) * (inputCm.value / 100)
    result.innerHTML = (inputKg.value / m).toFixed(2)
}, 1);
