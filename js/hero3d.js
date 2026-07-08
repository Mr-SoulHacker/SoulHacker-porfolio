import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

/*==========================
    SCENE
==========================*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 0, 8);

/*==========================
    RENDERER
==========================*/

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#hero-canvas"),
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/*==========================
    LIGHTING
==========================*/

scene.add(new THREE.AmbientLight(0xffffff, 1.7));

const key = new THREE.DirectionalLight(0xffffff, 4);
key.position.set(5, 5, 6);
scene.add(key);

const purple = new THREE.PointLight(0x7a2cff, 40, 20);
purple.position.set(-3, 2, 4);
scene.add(purple);

const rim = new THREE.PointLight(0xa855ff, 30, 20);
rim.position.set(3, -2, 2);
scene.add(rim);

/*==========================
    MATERIAL
==========================*/

const chrome = new THREE.MeshPhysicalMaterial({

    color: 0x9b6dff,

    metalness: 1,

    roughness: 0.08,

    clearcoat: 1,

    clearcoatRoughness: 0,

    reflectivity: 1,

    emissive: 0x2d005c,

    emissiveIntensity: .3

});

/*==========================
    GROUP
==========================*/

const gyro = new THREE.Group();

scene.add(gyro);

/*==========================
    OUTER RINGS
==========================*/

const ring1 = new THREE.Mesh(

    new THREE.TorusGeometry(
        2.4,
        0.10,
        32,
        220
    ),

    chrome

);

gyro.add(ring1);

const ring2 = ring1.clone();
ring2.rotation.x = Math.PI / 2;
gyro.add(ring2);

const ring3 = ring1.clone();
ring3.rotation.z = Math.PI / 2;
gyro.add(ring3);

/*==========================
    INNER RING
==========================*/

const inner = new THREE.Mesh(

    new THREE.TorusGeometry(
        1.35,
        0.08,
        32,
        180
    ),

    chrome

);

inner.rotation.set(
    Math.PI / 4,
    Math.PI / 5,
    0
);

gyro.add(inner);

/*==========================
    CORE
==========================*/

const core = new THREE.Mesh(

    new THREE.SphereGeometry(
        0.45,
        64,
        64
    ),

    new THREE.MeshPhysicalMaterial({

        color: 0xffffff,

        emissive: 0x7a2cff,

        emissiveIntensity: 3,

        metalness: 1,

        roughness: 0

    })

);

gyro.add(core);

/*==========================
    SMALL ORBIT RINGS
==========================*/

for (let i = 0; i < 3; i++) {

    const orbit = new THREE.Mesh(

        new THREE.TorusGeometry(
            0.75 + i * .18,
            0.02,
            20,
            120
        ),

        new THREE.MeshBasicMaterial({

            color: 0xa855ff,

            transparent: true,

            opacity: .55

        })

    );

    orbit.rotation.set(

        Math.random() * Math.PI,

        Math.random() * Math.PI,

        Math.random() * Math.PI

    );

    gyro.add(orbit);

}

/*==========================
    PARTICLES
==========================*/

const particleGeometry = new THREE.BufferGeometry();

const particleCount = 400;

const positions = [];

for (let i = 0; i < particleCount; i++) {

    positions.push(

        (Math.random() - .5) * 18,

        (Math.random() - .5) * 18,

        (Math.random() - .5) * 18

    );

}

particleGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        positions,
        3
    )

);

const particles = new THREE.Points(

    particleGeometry,

    new THREE.PointsMaterial({

        color: 0x7a2cff,

        size: .03,

        transparent: true,

        opacity: .7

    })

);

scene.add(particles);

/*==========================
    MOUSE
==========================*/

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {

    mouseX = (e.clientX / window.innerWidth - .5);

    mouseY = (e.clientY / window.innerHeight - .5);

});

/*==========================
    RESIZE
==========================*/

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});

/*==========================
    CLOCK
==========================*/

const clock = new THREE.Clock();

/*==========================
    ANIMATION
==========================*/

function animate() {

    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();

    ring1.rotation.y += .003;

    ring2.rotation.x -= .004;

    ring3.rotation.z += .0025;

    inner.rotation.y += .008;

    inner.rotation.x += .004;

    gyro.rotation.y += (mouseX - gyro.rotation.y) * .05;

    gyro.rotation.x += (-mouseY - gyro.rotation.x) * .05;

    gyro.position.y = Math.sin(t * 1.6) * .18;

    gyro.rotation.z = Math.sin(t * .8) * .06;

    core.scale.setScalar(

        1 + Math.sin(t * 3.5) * .08

    );

    particles.rotation.y += .0008;

    particles.rotation.x += .0003;

    renderer.render(scene, camera);

}

animate();
gyro.position.set(0,-0.5,0);

gyro.scale.set(0.55,0.55,0.55);
camera.position.set(0,0,12);
camera.lookAt(0,0,0);