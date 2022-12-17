storyEls = [
  {storyOrder: 1, script: "Welcome to your first day at Seattle Grace Hospital. You had an amazing morning in the ER, Doctor. It's almost time for lunch, but first you have to drop off some samples at the lab. The lab tech says that she has been developing some new technology. She asks if you want to be the first to try her new invention." , prompt: "Do you say yes or no?", nextStory: [2 , 3], choice: ['yes', 'no']} ,
  {storyOrder: 2, script: "You say no, and go on your lunch break. When you return you find your position has been cut. You apply for a new role at the General Hospital, which is a better career move for you. This chapter of your story is over.", prompt: [null], nextStory: [null], choice: [null]},
  {storyOrder: 3, script: "You say yes, because adventure is your middle name. The lab tech explains what will happen next and tells you to stand still on the spot marked X. Suddenly, a laser zaps you in the chest and suddenly you are 1 micron tall. You are about to be the first person to shrink and travel inside a human body!" , prompt: "Where do you want to go first? 
  
  ", nextStory: [4, 5], choice: ['skeletal', 'muscular']},

  {storyOrder: 4, script: "You decide to explore the skeletal system, and go to find the largest bone in the body. Which bone are you looking for? Choose one: femur or humerous", nextStory: [5, 6], choice: ['femur', 'humorous']},
  {storyOrder: 6, script: "You love a good joke, so you head to the humerous. As you go towards the longest upper arm bone, you remember that the femur is actually the largest bone in the body. You pause, and are surprise attacked by a white blood cell. As you begin to disolve, you wish you'd studied more.", nextStory: [null], choice: [null]},
 
  



]
