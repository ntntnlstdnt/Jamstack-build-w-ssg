// Vibe options

const vibes = [
  " ... and you are awesome! ",
  " ... have a wonderful day! ",
  " ... and you've got this! "
];

// choose random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
console.log(vibe)
// display good vibe
document.querySelector(".vibe").append(vibe);
