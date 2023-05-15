import React from 'react'
import { useEffect } from 'react';
import Dino from './Dino';
import ChromeDinoGame from 'react-chrome-dino'
//import IMAGES from './assets/IMAGES';


function Hero() {

  let board
    let boardWidth = 750
    let boardHeight = 250
    let context

    //dino

    let dinoWidth = 88
    let dinoHeight = 94
    let dinoX = 50
    let dinoY = boardHeight - dinoHeight
    let dinoImg;

    let dino = {
      x: dinoX,
      y: dinoY,
      width: dinoWidth,
      height: dinoHeight
    }

  useEffect(() => {
    board = document.getElementById('board')
    board.height = boardHeight
    board.width = boardWidth
    
    context = board.getContext("2d")

    dinoImg = new Image()
    //dinoImg.src(IMAGES.img1)
  });

  return (
    <div className='section-wrapper rounded'>
      <div className='hero-game' id='grid'>
        <canvas id='board'></canvas>
      </div>
      <div className='hero-bottom'>
        <p className='hero-text metal-text'>I'm Gabriel, a creative Frontend developer passionate about crafting unique and interactive digital experiences.</p>
        <div className='widgets'>
          <div className='available'>
            <div className='available-light'></div>
            <p className='available-text'> Available for work</p>
          </div>
          <div className='spotify rounded'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero