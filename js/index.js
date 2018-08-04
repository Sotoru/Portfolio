 // ParticlesJS Config.
 particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700 } },
  
  
      "color": {
        "value": "#ffffff" },
  
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000" },
  
        "polygon": {
          "nb_sides": 5 } },
  
  
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false } },
  
  
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false } },
  
  
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1 },
  
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200 } } },
  
  
  
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" },
  
        "onclick": {
          "enable": true,
          "mode": "push" },
  
        "resize": true },
  
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1 } },
  
  
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3 },
  
        "repulse": {
          "distance": 200,
          "duration": 0.4 },
  
        "push": {
          "particles_nb": 4 },
  
        "remove": {
          "particles_nb": 2 } } },
  
  
  
    "retina_detect": true });



    
    const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {

  const itemDim = this.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top,
        },
        shapes = ['line', 'zigzag'],
        colors = ['#2FB5F3',
                  '#FF0A47',
                  '#FF0AC2',
                  '#47FF0A'];
  
  const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);
  
  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + (itemSize.x/2),
    top: itemDim.top + (itemSize.y/2),
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 8,
    
    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: {0.8: 1},
      fill: 'none',
      points: 7,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%' : '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false,
    }
  });
  
  burst.play();
}
