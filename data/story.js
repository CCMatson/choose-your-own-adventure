const storyEls = [

  {storyOrder: 0,
    scriptText: "Welcome to the Salish Sea, an inland sea that encompasses Puget Sound, the San Juan Islands and the waters off of Vancouver, BC. Do you want to stay on the land or explore the water?", 
    choiceOne: "Stay on land", 
    choiceTwo: "Explore the water", 
    choiceOneResults: 1, 
    choiceTwoResults: 2},

  {storyOrder: 1, 
    scriptText: "You decide to take a walk along the shoreline to avoid the water. Unfortunately, it starts to rain. You head home to rest after a long day.", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null},

  {storyOrder: 2, 
    scriptText: "You dive into the cold, calm water. Do you want to find a great pacific octopus or visit the kelp forest? ", choiceOne: "Octopus" , 
    choiceTwo: "Kelp Forest" , 
    choiceOneResults: 3, 
    choiceTwoResults: 6},

  {storyOrder: 3, 
    scriptText: "You decide to visit the largest octopus species in the world. Giant Pacific Octopuses weigh about 90lbs on average and can stretch up to 20 feet. The GPO invites you to a dinner of crustaceans a little further deep in the sea. Do you go?",
    choiceOne: "Go to dinner" , 
    choiceTwo: "Stay behind" , 
    choiceOneResults: 4 , 
    choiceTwoResults: 5},

  {storyOrder: 4, 
    scriptText: "You follow the octopus to rocky caves. It's darker down here, but you can see that the rocks are covered in clams. You could get used to this! The octopus chows down, she's trying to gain 1 - 2% body weight per day. You reach out to grab a clam, when a sea otter grabs it out of your hand. With all this competition for food, you give up and swim home to make a peanut butter sandwich", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null},
    
  {storyOrder: 5, 
    scriptText: "When you tell the octopus that you aren't coming to dinner, she asks you to babysit her sister's 300,000 newly hatched eggs. You spend the afternoon with the baby octopus larvae, but you are secretly heart broken because you know that only a few will survive life to grow up to be as big as their auntie." , 
    choiceOne: " ", 
    choiceTwo: " ", 
    choiceOneResults: null , 
    choiceTwoResults: null},


  {storyOrder: 6, 
    scriptText: "You choose Kelp. As you swim to the kelp forest you see a flickering light. Do you explore the light, or keep swimming into the dark forest", 
    choiceOne: "Dark" , 
    choiceTwo: "Light" , 
    choiceOneResults: 7, 
    choiceTwoResults: 8},

  {storyOrder: 7, 
    scriptText: "You choose to to keep swimming into the dark. You do not see a 6-gill shark approaching, and you are eaten in one bite.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null},

  {storyOrder: 8, 
    scriptText: "You follow the light, and find biolumensent jellyfish. It's the calmest you've ever felt. As you slip into a meditative state you hear a low loud noise. Do you stay or go follow the sounds", 
    choiceOne: "Stay" , 
    choiceTwo: "Explore the sounds" , 
    choiceOneResults: 9, 
    choiceTwoResults: 10},
  
  {storyOrder: 9, 
    scriptText: "You stay with the jellies. No one has heard from you since", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null},

  {storyOrder: 10, 
    scriptText: "You choose to follow the sounds and find an orca whale. Best day of your life.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null},

]

export { storyEls }