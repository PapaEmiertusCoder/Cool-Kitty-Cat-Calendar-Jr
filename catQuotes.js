const quotes = [
    "You've got to purr-sist. success doesn't come overnight.",
    "Don't be afraid to claw your way to the top.",
    "Take life one step at a time—no need to furce things.",
    "You're purr-fectly capable of more than you think.",
    "Even when things get tough, just hang there, kitten.",
    "Be bold—don't just sit on the sidelines like a sleepy cat.",
    "Every day is a chance to land on your feet.",
    "Keep going! you're meow-nificent in your own way.",
    "Dream big, stretch often, and always land with confidence.",
    "Don't let setbacks make you hiss—use them to grow.",
    "You've got that cat-titude,now go show the world!",
    "Your goals won’t come to you—you’ve got to pounce on them.",
    "Rest when you need to, but don’t lose sight of the goal—cats nap, but they never quit.",
    "“Every little win is a step closer—keep stacking them like treats earned.”"
];

function speakRandomQuote(){
    //picks a random quote
    const randomIndex = Math.floor(Math.random() *quotes.length);
    //gets the element and updates text
    document.getElementById("quote").textContent = quotes[randomIndex];
}