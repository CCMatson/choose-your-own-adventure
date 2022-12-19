const storyEls = [

  {storyOrder: 0, scriptText: "Welcome to the Salish Sea, an inland sea that encompasses Puget Sound, the San Juan Islands and the waters off of Vancouver, BC. Do you want to stay on the land or explore the water?", choiceOne: "Stay on land", choiceTwo: "Explore the water", nextStory: [1 , 2 ]},

  {storyOrder: 1, scriptText: "You decide to take a walk along the shoreline to avoid the water. Unfortunately, it starts to rain. You head home to rest after a long day.", choiceOne: " ", choiceTwo: " " , nextStory:[null, null]},

  {storyOrder: 2, scriptText: "You dive into the cold, calm water. Do you want to find a great pacific octopus or visit the kelp forest? ", choiceOne: "Octopus" , choiceTwo: "Kelp Forest" , nextStory:[4 , 5]},

  {storyOrder: 4, scriptText: "You decide to visit the largest octopus species in the world. Giant Pacific Octopuses weigh less than 70lbs and can stretch up to 15lbs. The GPO invites you to a dinner of crustaceans at the bottom of the sea. Do you go?", choiceOne: "Follow the octopus", choiceTwo: "Say no to dinner", nextStory:[6 ,7]},

  // {storyOrder: 5, scriptText: "You pick kelp bed. ", choiceOne: , choiceTwo: , nextStory:[]},

  {storyOrder: 6, scriptText: "When you tell the octopus that you aren't coming to dinner, she asks you to babysit her sister's 300,000 newly hatched eggs. You spend the afternoon with the baby octopus larvae, but you are secretly heart broken because you know that only a few will survive life to grow up to be as big as their auntie." , choiceOne: " ", choiceTwo: " ", nextStory:[]},
  {storyOrder: 7, scriptText: "You follow the octopus deeper underwater. It's getting darker. You see a flicker of light pass the corner of your eye. Do you go investigate?", choiceOne: "Yes", choiceTwo: "No" , nextStory:[]},
  // {storyOrder: , scriptText: , choiceOne: , choiceTwo: , nextStory:[]},
  // {storyOrder: , scriptText: , choiceOne: , choiceTwo: , nextStory:[]},
 

]


export { storyEls }