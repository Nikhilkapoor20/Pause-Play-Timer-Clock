let count = $(('#count'));
let i = 0;
let isPaused = false;
function print() {
    if (!isPaused) {
        i++;
        count.text(i)
    }
}
setInterval(print, 1000);

function pause(element) {
    isPaused = true;
    element.pauseAnimations();
}

function play(element) {
    isPaused = false;
    element.unpauseAnimations();
}