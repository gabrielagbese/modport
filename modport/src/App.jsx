import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Face from './Face';
import './App.css';

import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
	const [count, setCount] = useState(0);
	const stageRef = useRef(null);

	useEffect(() => {
		const swayingDiv = document.querySelector('.pic-inner');
		const neck = document.querySelector('.necks');

		document.addEventListener('mousemove', (event) => {
			const x = event.clientX;
			const y = event.clientY;

			const divCenterX = swayingDiv.offsetLeft + swayingDiv.offsetWidth / 2;
			const divCenterY = swayingDiv.offsetTop + swayingDiv.offsetHeight / 2;

			const angle = (divCenterX - x) / 200;

			swayingDiv.style.transform = `translate(0%, 0%) rotateZ(${-angle}deg)`;

			const divCenterX2 = tiltingDiv.offsetLeft + tiltingDiv.offsetWidth / 2;
			const divCenterY2 = tiltingDiv.offsetTop + tiltingDiv.offsetHeight / 2;

			const angleX = (y - divCenterY2) / 100;
			const angleY = (divCenterX2 - x) / 100;

			neck.style.transform = `translate(0%, 0%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
		});
	}, []);

	let mm = gsap.matchMedia();


	const stageHome = () => {
		mm.add("(min-width: 800px)", () => {
			gsap.to(stageRef.current, { duration: 1, y: -0 + "%", ease: 'power3.easeIn', });
		});

		mm.add("(max-width: 799px)", () => {
			gsap.to(stageRef.current, { duration: 0.75, x: -0 + "%", ease: 'power3.easeIn', });
		});

	};

	const stageAbout = () => {
		mm.add("(min-width: 800px)", () => {
			gsap.to(stageRef.current, { duration: 1, y: -25 + "%", ease: 'power3.easeIn', });
		});

		mm.add("(max-width: 799px)", () => {
			gsap.to(stageRef.current, { duration: 0.75, x: -25 + "%", ease: 'power3.easeIn', });
		});

	};

	const stageWork = () => {
		mm.add("(min-width: 800px)", () => {
			gsap.to(stageRef.current, { duration: 1, y: -50 + "%", ease: 'power3.easeIn', });
		});

		mm.add("(max-width: 799px)", () => {
			gsap.to(stageRef.current, { duration: 0.75, x: -50 + "%", ease: 'power3.easeIn', });
		});

	};
	const stageContact = () => {
		mm.add("(min-width: 800px)", () => {
			gsap.to(stageRef.current, { duration: 1, y: -75 + "%", ease: 'power3.easeIn', });
		});

		mm.add("(max-width: 799px)", () => {
			gsap.to(stageRef.current, { duration: 0.75, x: -75 + "%", ease: 'power3.easeIn', });
		});

	};

	return (
		<>
			<div className='wrapper'>
				<div className='side'>
					<div className='pic' onClick={stageHome}>
						<div className='pic-inner'>
							<Face />
							<div className='necks'>
								<div className='neck'></div>
								<div className='neck-round'></div>
							</div>
						</div>
					</div>
					<div className='nav'>
						<div className='nav-item rounded' onClick={stageAbout}>
							<div className='nav-item-inner metal-text'>About</div>
						</div>
						<div className='nav-item rounded' onClick={stageWork}>
							<div className='nav-item-inner metal-text'>Work</div>
						</div>
						<div className='nav-item rounded' onClick={stageContact}>
							<div className='nav-item-inner metal-text'>Contact</div>
						</div>
					</div>
				</div>
				<div className='main'>
				<div className='mob-top' onClick={stageHome}><p>G.</p></div>
				<div className='stage' ref={stageRef}>
					<Hero />
					<About />
					<Work />
					<Contact />
				</div>
			</div>
				
			</div>
		</>
	);
}

export default App;
