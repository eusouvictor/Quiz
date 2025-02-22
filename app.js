function Resposta() {
    let res = document.querySelector('input').value

switch (res) {
    case 'A':
        document.querySelector('#resposta').innerHTML = 'Resposta certa'
        break
        case 'a':
        document.querySelector('#resposta').innerHTML = 'Resposta certa'
        break
    case 'B':
        document.querySelector('#resposta').innerHTML = 'Resposta errada'
        break
        case 'b':
        document.querySelector('#resposta').innerHTML = 'Resposta errada'
        break
    case 'C':
        document.querySelector('#resposta').innerHTML = 'Resposta errada'
        break
        case 'c':
        document.querySelector('#resposta').innerHTML = 'Resposta errada'
        break
    default:
        document.querySelector('#resposta').innerHTML = 'Resposta invalida'
    }
}

function Resposta2() {
    let res = document.querySelector('#input2').value

    switch (res) {
        case 'A':
            document.querySelector('#resposta2').innerHTML = 'Resposta errada'
            break
            case 'a':
            document.querySelector('#resposta2').innerHTML = 'Resposta errada'
            break
        case 'B':
            document.querySelector('#resposta2').innerHTML = 'Resposta errada'
            break
            case 'b':
            document.querySelector('#resposta2').innerHTML = 'Resposta errada'
            break
        case 'C':
            document.querySelector('#resposta2').innerHTML = 'Resposta certa'
            break
            case 'c':
            document.querySelector('#resposta2').innerHTML = 'Resposta certa'
            break
        default:
            document.querySelector('#resposta2').innerHTML = 'Resposta invalida'
        }
}

function Resposta3() {
    let res = document.querySelector('#input3').value

    switch (res) {
        case 'A':
            document.querySelector('#resposta3').innerHTML = 'Resposta errada'
            break
            case 'a':
            document.querySelector('#resposta3').innerHTML = 'Resposta errada'
            break
        case 'B':
            document.querySelector('#resposta3').innerHTML = 'Resposta certa'
            break
            case 'b':
            document.querySelector('#resposta3').innerHTML = 'Resposta certa'
            break
        case 'C':
            document.querySelector('#resposta3').innerHTML = 'Resposta errada'
            break
            case 'c':
            document.querySelector('#resposta3').innerHTML = 'Resposta errada'
            break
        default:
            document.querySelector('#resposta3').innerHTML = 'Resposta invalida'
        }
}