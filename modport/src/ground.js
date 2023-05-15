import {incrementCustomProperty} from './updateCustomProperty.js'

//const groundElems = document.querySelectorAll('[data-ground]')

export function updateGround(delta, ge, speed){
    groundElems = ge
    speed = SPEED 
    groundElems.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta* SPEED * -1) 
    })
}