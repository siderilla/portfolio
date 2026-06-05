gsap.registerPlugin(MotionPathPlugin);

const anim = lottie.loadAnimation({
	container: document.getElementById('candybox'),
	path: '../assets/candybox/candybox.json',
	renderer: 'svg',
	loop: false,
	autoplay: false
})

let opened = false
document.getElementById('candybox').addEventListener('click', () => {
	opened ? anim.playSegments([7, 0], true) : anim.playSegments([0, 7], true)
	opened = !opened
})

let timeline = gsap.timeline({
	repeat: -1,
	yoyo: true
});

timeline.to("#candybox", {
  duration: 1,
  motionPath: {
    path: "#track",
    align: "#track",
    autoRotate: false
  },
  ease: "power2.inOut"
});

// timeline.to("#candybox", {
// 	duration: 1,
// 	x: 200,
// 	y: -50,
// })
// .to("#candybox", {
// 	duration: 1,
// 	x: 400,
// 	y: 0,
// })



// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// const pointLight = new THREE.PointLight(0xffffff, 50);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);

// const geometry = new THREE.BoxGeometry(3, 1, 2);
// const material = new THREE.MeshStandardMaterial({
//     color: 0x9900ff, // siderilla's purple
//     roughness: 0.8,  // opacity
//     metalness: 0.2   // metallic
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame(animate);
// 	cube.rotation.x = 1.9;
// 	cube.rotation.y = 1.7;
// 	cube.rotation.z = 2.2;
// 	renderer.render(scene, camera);
// }

// animate();


// import * as THREE from 'three';

// // --- SET BASE (Scena, Camera, Renderer) ---
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x111111);
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // --- LUCI ---
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// scene.add(ambientLight);
// const pointLight = new THREE.PointLight(0xffffff, 100);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);

// // --- CONFIGURAZIONE DIMENSIONI (Stile Golia: stretta e alta) ---
// const width = 2;
// const height = 3;
// const depth = 1;

// const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x9900ff, roughness: 0.4 });

// // 1. IL GRUPPO PRINCIPALE (La scatola intera)
// const candyBox = new THREE.Group();
// scene.add(candyBox);

// // 2. IL CORPO DELLA SCATOLA
// const baseGeo = new THREE.BoxGeometry(width, height, depth);
// const boxBase = new THREE.Mesh(baseGeo, boxMaterial);
// candyBox.add(boxBase);

// // 3. IL TRUCCO DELLA CERNIERA (Lid Pivot)
// // Creiamo un gruppo invisibile e lo mettiamo sullo spigolo posteriore in alto
// const lidPivot = new THREE.Group();
// lidPivot.position.y = height / 2;    // Va in cima alla scatola
// lidPivot.position.z = -depth / 2;   // Va sul bordo posteriore
// candyBox.add(lidPivot);

// // 4. IL COPERCHIO
// const lidGeo = new THREE.BoxGeometry(width + 0.1, 0.1, depth + 0.05);
// const lid = new THREE.Mesh(lidGeo, boxMaterial);

// // IMPORTANTE: Spostiamo il coperchio in avanti rispetto al Pivot.
// // Così il suo bordo posteriore coinciderà esattamente con il punto di rotazione.
// lid.position.z = depth / 2;
// lidPivot.add(lid);

// camera.position.set(0, 2, 6);
// camera.lookAt(0, 0, 0);

// // --- ANIMAZIONE ---
// let time = 0;

// function animate() {
// 	requestAnimationFrame(animate);
// 	time += 0.02;

// 	// Rotazione lenta della scatola per vederla bene
// 	candyBox.rotation.y += 0.005;

// 	// ANIMAZIONE COPERCHIO
// 	// Usiamo il seno per farlo aprire e chiudere:
// 	// La rotazione avviene sull'asse X del PIVOT, non del coperchio!
// 	const openingAngle = Math.sin(time) * 1.5 - 1;
// 	// Clampiamo il valore per non farlo entrare dentro la scatola
// 	lidPivot.rotation.x = Math.max(-Math.PI + 0.5, Math.min(0, openingAngle));

// 	renderer.render(scene, camera);
// }

// animate();

// // Resize
// window.addEventListener('resize', () => {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// });