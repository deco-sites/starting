import Matter from "https://esm.sh/matter-js@0.19.0";

const htmlElement = document.querySelector('html');

const toggles = document.querySelectorAll('[data-toggle-darkmode]');

Array.from(toggles).forEach(tgl => {
    tgl.addEventListener('change', (e) => {   
        if (e.target.checked) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    });
})

function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

let daisyElems = document.querySelectorAll('.elem');
const bodies = [];
const VIEW = {};

function setup() {
    daisyElems = document.querySelectorAll('.elem');
    const mobile = window.innerWidth < 1080;
    const innerWidth = mobile ? window.innerWidth : window.innerWidth / 2;
    VIEW.SAFE_WIDTH = innerWidth;
    VIEW.SAFE_HEIGHT = window.innerHeight;
    VIEW.scale = Math.min((innerWidth) / VIEW.SAFE_WIDTH, window.innerHeight / VIEW.SAFE_HEIGHT);;
    VIEW.width    = (innerWidth) / VIEW.scale;
    VIEW.height   = window.innerHeight / VIEW.scale;
    VIEW.centerX  = VIEW.width / 2;
    VIEW.centerY  = VIEW.height / 2;
    VIEW.offsetX  = (VIEW.width - VIEW.SAFE_WIDTH) / 2 / VIEW.scale;
    VIEW.offsetY  = (VIEW.height - VIEW.SAFE_HEIGHT) / 2 / VIEW.scale;


    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.getElementById('canvas'),
        engine: engine,
        options: {
            width: innerWidth,
            height: window.innerHeight,
            showAngleIndicator: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    for (let i = 0; i < daisyElems.length; i++) {
        const elem = daisyElems[i];

        elem.style.zIndex = 10;

        const isBall = elem.classList.contains('rounded-full');

        const radius = isBall ? 20 : 4;

        const body = Bodies.rectangle(
            VIEW.centerX + Math.floor(Math.random() * VIEW.width/2) - VIEW.width/4, //Number(elem.dataset.x),
            - (VIEW.centerY + Math.floor(Math.random() * VIEW.height / 2) - VIEW.height / 4) * 2, // Number(elem.dataset.y),
            elem.clientWidth + 5,// * 1.5, // VIEW.width * elem.offsetWidth / window.innerWidth,
            elem.clientHeight + 5,// * 1.5, // VIEW.height * elem.offsetHeight / window.innerHeight,
            { render: { visible: true }, restitution: 0.4, gravity: .8, friction: 1, density: 1, chamfer: { radius } },
        );

        if (!isBall) {
            elem.addEventListener('click', () => {
                Matter.Body.applyForce(body, body.position, {x: 0, y: 150 });
            });
        }

        bodies.push(body);
        elem.id = body.id;
    }

    // {
    //     restitution:      0.5,
    //     friction:         0,
    //     frictionAir:      0.001,
    //     frictionStatic:   0,
    //     density:          1,
    //     chamfer:          { radius: 24 },
    //     angle:            (Math.random() * 2.000) - 1.000
    //   }
    
    Composite.add(world, [
        // walls
        Bodies.rectangle(VIEW.width / 2, VIEW.height, VIEW.width, 1, { isStatic: true,  }),
        Bodies.rectangle(0, VIEW.width, 1, VIEW.height * 2, { isStatic: true }),
        Bodies.rectangle(VIEW.width, 0, 1, VIEW.height * 2, { isStatic: true }),
    ]);

    bodies.forEach((body, idx) => {
        setTimeout(() => {
            Composite.add(world, [body]);
        }, 1500 + 1500 * idx);
    });

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    
    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: VIEW.width, y: VIEW.height }
    });
}

setup();

window.requestAnimationFrame(update);
function update() {
    for (var i = 0, l = daisyElems.length; i < l; i++) {
        var bodyDom = daisyElems[i];
        var body = null;
        for (var j = 0, k = bodies.length; j < k; j++) {
            if ( bodies[j].id == bodyDom.id ) {
                body = bodies[j];
                break;
            }
        }
        
        if ( body === null ) continue;
        
        bodyDom.style.transform = "translate( " 
            + ((VIEW.offsetX + body.position.x) * VIEW.scale - bodyDom.offsetWidth/2 ) 
            + "px, "
            + (VIEW.offsetY *2 + ( body.position.y) * VIEW.scale - bodyDom.offsetHeight/2)
            + "px )";

        //bodyDom.style.top = body.position.y + "px";
        //bodyDom.style.left = body.position.x + "px";
        bodyDom.style.transform += "rotate( " + body.angle + "rad )";
    }
    window.requestAnimationFrame(update);
}

setTimeout(() => {
    
}, 500);