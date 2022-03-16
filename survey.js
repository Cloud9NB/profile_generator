const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable. :) ', answer => {
  console.log(`Cool! Nice the meet you ${answer}.`);
  rl.question('What\'s an activity you like doing? ', answer => {
    console.log(`I've always wanted to try ${answer}.`);
    rl.question('What do you listen to while doing that? ', answer => {
      console.log(`No way! Me too, I love listening to ${answer} too.`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', answer => {
        console.log(`Oh cool! ${answer}, is my favourite too.`);
        rl.question('What\'s your favourite thing to eat for that meal? ', answer => {
          console.log(`I\'ve never had ${answer}, I\d need to try that too.`);
          rl.question('Which sport is your absolute favourite? ', answer => {
            console.log(`I\'ve also played ${answer}, however, I am not that great at it.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', answer => {
              console.log(`${answer}? That\'s interesting!`);
              rl.close();
            });
          });
        });
      });
    })
  });
});