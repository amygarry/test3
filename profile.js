let favColBtn = document.querySelector('#color')
let favPlcBtn = document.querySelector('#place')
let favRitBtn = document.querySelector('#ritual')

function colorAlert (event){
    event.preventDefault()
    alert('PINK is the best color in the world')
}

favColBtn.addEventListener('click', colorAlert)

function favPlaceAlert (event){
    event.preventDefault()
    alert('LakePowell, California or anywhere with my family')
}

favPlcBtn.addEventListener('click', favPlaceAlert)

function favRitAlert (event){
    event.preventDefault()
    alert('Getting my ski stuff ready. It is a ritutual')
}

favRitBtn.addEventListener('click', favRitAlert)