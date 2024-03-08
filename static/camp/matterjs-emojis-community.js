import Matter from "https://esm.sh/matter-js@0.19.0";

// document.body.style.overflow = 'hidden';

const GRAVITY = 1;

const panel = document.getElementById('emojis-community');
const DND_BUTTONS_QUERY = '[data-emojis-community]'

let buttons = document.querySelectorAll(DND_BUTTONS_QUERY);
const WIDTH = panel.offsetWidth;
const HEIGHT = panel.offsetHeight;

window.addEventListener('load', () => {
    setTimeout(() => {
        panel.classList.remove('invisible');
    }, 250);
});

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;


const bodies = [];
const VIEW = {};

let world;

// create engine
var engine = Engine.create();
world = engine.world;

// create renderer
var render = Render.create({
    element: panel,
    engine: engine,
    options: {
        width: WIDTH,
        height: HEIGHT,
        showAngleIndicator: false,
        background: 'transparent',
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

for (let i = 0; i < buttons.length; i++) {
    const elem = buttons[i];

    elem.style.zIndex = 0;

    const radius = 24;

    // Generate random positions for each element within defined margins
    const posY = Math.random() * -HEIGHT; // Position above the screen
    const posX = Math.random() * WIDTH;

    const body = Bodies.rectangle(
        posX,
        posY,
        elem.clientWidth,
        elem.clientHeight,
        {
            render: { visible: false },
            restitution: 0.4, gravity: .8, friction: 1, density: 1, chamfer: { radius },
        },
    );

    // Set gravity vector in the world
    engine.world.gravity.y = GRAVITY;

    bodies.push(body);
    elem.id = body.id;
}

const walls = [
    // Base
    Bodies.rectangle(WIDTH, HEIGHT, WIDTH * 2, 10, { isStatic: true, render: { visible: false, fillStyle: '#3498db', strokeStyle: '#2980b9', lineWidth: 2 } }),
    // Left side
    Bodies.rectangle(0, HEIGHT, 10, HEIGHT * 2, { isStatic: true, render: { visible: false, fillStyle: '#3498db', strokeStyle: '#2980b9', lineWidth: 2 } }),
    // Right side
    Bodies.rectangle(WIDTH, HEIGHT, 10, HEIGHT * 2, { isStatic: true, render: { visible: false, fillStyle: '#3498db', strokeStyle: '#2980b9', lineWidth: 2 } }),
];
// Add walls
Composite.add(world, walls);

bodies.forEach((body, idx) => {
    setTimeout(() => {
        Composite.add(world, [body]);
    }, 50 + 0 * idx);
});

const gravityForce = { x: 0, y: GRAVITY };

bodies.forEach(body => {
    Matter.Body.applyForce(body, body.position, {
        x: gravityForce.x,
        y: gravityForce.y
    });
});

// Add mouse control
var mouse = Mouse.create(render.canvas)
mouse.pixelRatio = window.devicePixelRatio || 1;

var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(world, mouseConstraint);

// Keep the mouse in sync with rendering
render.mouse = mouse;

// Fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: WIDTH, y: HEIGHT }
});


let isDragging = false;
let dragObject = null;
let offsetX = 0;
let offsetY = 0;

const getPointerPosition = (event) => {
    if (event.touches && event.touches.length) {
        return {
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        };
    } else {
        return {
            clientX: event.clientX,
            clientY: event.clientY
        };
    }
}

const handleDragMove = (event) => {
    const { clientX, clientY } = getPointerPosition(event);
    const rect = panel.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    const bodyX = mouseX + offsetX;
    const bodyY = mouseY + offsetY;

    if (isDragging && dragObject) {
        console.log('isDragging');
        Matter.Body.setPosition(dragObject, { x: bodyX, y: bodyY });
        event.preventDefault();
    }
}

const handleDragStart = (event) => {
    const { clientX, clientY } = getPointerPosition(event);
    const rect = panel.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    const bodiesUnderCursor = Matter.Query.point(world.bodies, { x: mouseX, y: mouseY });
    if (bodiesUnderCursor.length > 0) {
        console.log('hit body');
        isDragging = true;
        dragObject = bodiesUnderCursor[0];

        Matter.Body.setStatic(dragObject, true);

        // Calculate the offset
        offsetX = dragObject.position.x - mouseX;
        offsetY = dragObject.position.y - mouseY;
        event.preventDefault();
    }
}

const handleDragEnd = () => {
    isDragging = false;
    if (dragObject) {
        Matter.Body.setStatic(dragObject, false);
        dragObject = null;
    }
}

panel.addEventListener("mousemove", handleDragMove);
panel.addEventListener("mousedown", handleDragStart);
document.addEventListener("mouseup", handleDragEnd);

panel.addEventListener("touchstart", handleDragStart);
panel.addEventListener("touchmove", handleDragMove);
document.addEventListener("touchend", handleDragEnd);

/**
 * 
 *  Updating dom elements according to matterjs canvas
 * 
 */
window.requestAnimationFrame(update);
function update() {
    for (var i = 0, l = buttons.length; i < l; i++) {
        var bodyDom = buttons[i];
        var body = null;
        for (var j = 0, k = bodies.length; j < k; j++) {
            if (bodies[j].id == bodyDom.id) {
                body = bodies[j];
                break;
            }
        }

        if (body === null) continue;

        bodyDom.style.transform = "translate( "
            + (body.position.x - bodyDom.offsetWidth / 2)
            + "px, "
            + (body.position.y - bodyDom.offsetHeight / 2)
            + "px )";

        bodyDom.style.transform += "rotate( " + body.angle + "rad )";
    }
    window.requestAnimationFrame(update);
}

Array.from(document.querySelectorAll('canvas')).forEach(canvas => {
    canvas.style.background = '';
})

Array.from(buttons).forEach(btn => {
    btn.style.opacity = '100%';
})