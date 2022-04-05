const startit = () => {
    setTimeout(function () {
        confetti.start();
    }, 1500);
    };
    
    const stopit = () => {
    setTimeout(function () {
        confetti.stop();
    }, 7500);
    };

    startit();
    stopit();