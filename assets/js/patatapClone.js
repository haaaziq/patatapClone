var keySoundColor = {
    q : {
        color: '#1abc9c',
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    w : {
        color: '#2ecc71',
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    e: {
		sound: new Howl({
  		    src: ['assets/sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		    src: ['assets/sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		    src: ['assets/sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		    src: ['assets/sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		    src: ['assets/sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		    src: ['assets/sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['assets/sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		    src: ['assets/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		    src: ['assets/sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		    src: ['assets/sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		    src: ['assets/sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		    src: ['assets/sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		    src: ['assets/sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		    src: ['assets/sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		    src: ['assets/sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		    src: ['assets/sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		    src: ['assets/sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		    src: ['assets/sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		    src: ['assets/sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		    src: ['assets/sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		    src: ['assets/sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		    src: ['assets/sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['assets/sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		    src: ['assets/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
};

var circles = [];

function onKeyDown(event) {
    if (keySoundColor[event.key]){
        // When a key is pressed, draw circle:
        var maxmPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxmPoint*randomPoint;
        var myCircle = new Path.Circle(point, 450);
        myCircle.fillColor = keySoundColor[event.key].color;
        keySoundColor[event.key].sound.play();
        circles.push(myCircle);
    }    
}

function onFrame(event) {
    for (var i=0; i<circles.length; i++){
        // Each frame, change the fill color of the path slightly by
        // adding 1 to its hue:
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
        
        //removing circle from circles[]
        if (circles[i].area < 1){
            circles[i].remove();
            circles.splice(i, 1);
        }
    }
}