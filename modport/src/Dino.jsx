import React from 'react'
import ground from './assets/ground.png'
import dinoStationary from './assets/dino-stationary.png'
import { useEffect } from 'react';
import { updateGround } from './ground.js';

function Dino() {
    useEffect(() => {
        const WORLD_HEIGHT = 30
        const WORLD_WIDTH = 100

        const SPEED = 0.05


        const worldElem = document.querySelector('[data-world]')
        const groundElem = document.querySelector('[data-ground]')
        setPixelToWorldScale()
        window.addEventListener("resize", setPixelToWorldScale)



        let lastTime
        function update(time) {
            if (lastTime == null) {
                lastTime = time
                window.requestAnimationFrame(update)
                return
            }
            const delta = time - lastTime
            updateGround(delta, groundElem, SPEED) 

            lastTime = time
            window.requestAnimationFrame(update)
        }

        window.requestAnimationFrame(update)

        function setPixelToWorldScale() {

        }
    });

    return (
        <div className='world' data-world>
            <div className='score'>0</div>
            <div className='start-screen'>Press to start</div>
            <img className='ground' src={ground} data-ground></img>
            <img className='ground' src={ground} data-ground></img>
            <img className='dino' src={dinoStationary} />
        </div>
    )
}

export default Dino