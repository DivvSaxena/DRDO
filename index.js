let inputOneEl = document.getElementById('input-one')
let buttonOneEl = document.getElementById('button-one')
let buttonTwoEl = document.getElementById('button-two')
let subContainerEl = document.getElementById('sub-container')
let concentrationEl = document.getElementById('concentration')



buttonOneEl.addEventListener('click', function(e){
    if(inputOneEl.value == 'Chennai'){
        subContainerEl.style.display = 'flex'

    buttonTwoEl.addEventListener('click', (e) => {
        let output = getSelectedValue()
        if(output == 'land'){
            concentrationEl.innerHTML = `<h2> concentration of toxins: 128 ppm</h2>`
        }else if(output == 'water'){
            concentrationEl.innerHTML = `<h2> concentration of toxins: 1800 ppm</h2>`
        }else if(output == 'air'){
            concentrationEl.innerHTML = `<h2> concentration of toxins: 25 ppm</h2>`
        }
    })

    }
    
})

function getSelectedValue(){

    let inputTwoEl = document.getElementById('input-two')

    let selectedValue = inputTwoEl.value

    return selectedValue
}