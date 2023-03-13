var console = document.getElementById('hello-console');

var typewriter = new Typewriter(console, {
  loop: true,
  delay: 100,
  deleteSpeed: 100
});

typewriter.typeString('Hi my name is Payn, Im a backend and low level developer')
    .pauseFor(2500)
    .deleteAll()
    .start();
