// script.js sound effect for cv button

const cvButton = document.getElementById('cvButton');
const popSound = new Audio('imgdumpster/deep-strange-whoosh-183845.mp3');
// plays sound on hover (works on desktop)
cvButton.addEventListener('mouseenter', () => {
  popSound.play();
});
// plays sound on touch (for mobile)
cvButton.addEventListener('touchstart', () => {
  popSound.play();
});

// function to blend the two RGB colours
function interpolateColor(color1, color2, factor) {
    // below extracts the rgb values from strings to int
    const c1 = color1.match(/\d+/g).map(Number);
    const c2 = color2.match(/\d+/g).map(Number);
    // this transitions between the two colours (factor=0=colour1) and (factor=1=colour2)
    const result = c1.map((c, i) => Math.round(c + (c2[i] - c) * factor));
    // return as string
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}
// listener to run when user scrolls
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // gets bigger as user scrolls down
    const docHeight = document.body.scrollHeight - window.innerHeight; // total scrollable height
    const scrollFraction = Math.min(scrollTop / docHeight, 1); //check how far has been scrolled (0 - 1)

    // start and end colours
    const startColor = "rgb(240, 240, 240)"; // light grey
    const endColor = "rgb(205, 210, 230)";   // soft blue

    // calculates the blended colour based on the scrollFraction
    const newColor = interpolateColor(startColor, endColor, scrollFraction);
    document.body.style.backgroundColor = newColor; // applies to body
});


