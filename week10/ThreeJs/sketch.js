window.onload = function() {

  var width = window.innerWidth,
      height = window.innerHeight,
      scene = new THREE.Scene(),
      clock = new THREE.Clock(),
      deltaTime = 0,
      fov = 75,
      aspectRatio = width / height,
      near = 0.1,
      far = 1000,
      camera,
      renderer,
      maxParticles = 1000,
      particles,
      particleMaterial,
      particleSystem;

    // renderer
    if (window.WebGLRenderingContext) {
      renderer = new THREE.WebGLRenderer();
    } else {
      renderer = new THREE.CanvasRenderer();
    }
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    // camera
    camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 300;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    // particles
    particles = new THREE.Geometry();
    for (var i = 0; i < maxParticles; i++) {
      var particle = new THREE.Vector3(random(-400, 400), random(-200, 200), random(-300, 300));
      particles.vertices.push(particle);
    }
    particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xeeeeee, size: 2 });
    particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
    particleSystem.sortParticles = true;
    scene.add(particleSystem);

    // render loop
    function render() {
      requestAnimationFrame(render);

      deltaTime = clock.getDelta();
      particleSystem.rotation.y += deltaTime/4;

      renderer.render(scene, camera);
    }
    render();

    // random helper
    function random( min, max ) {
      if ( isNaN(max) ) {
        max = min;
        min = 0;
      }
      return Math.random() * ( max - min ) + min;
    }

    // resize
    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener( 'resize', resize, false );
};