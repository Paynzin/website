var console = document.getElementById('hello-console');

typer(console, 100)
    .line("Hi, I am <strong>Payn</strong>", {totalTime: 850})
    .back('all')
    .continue("Hi, I am <strong>Payn</strong>", {totalTime: 850})
    .back('all')    
    .repeat(Infinity, true);
