const storyEls = [

  {storyOrder: 0,
    scriptText: "Welcome to the Pacific Northwest! You're at the Salish Sea, the inland sea that contains Puget Sound, the San Juan Islands and the waters off of Vancouver, BC, Canada. Do you want to stay on the land or explore the water?", 
    choiceOne: "Stay on land", 
    choiceTwo: "Explore the water", 
    choiceOneResults: 1, 
    choiceTwoResults: 2,
    image: "../assets/images/waves.png"},

  {storyOrder: 1, 
    scriptText: "You decide to take a walk along the shoreline to avoid the water. Unfortunately, it starts to rain. You get drenched and head home to rest after a long day. The end.", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/storm_clouds.gif"},

  {storyOrder: 2, 
    scriptText: "You dive into the cold, calm water. Do you want to visit the kelp forest or find a great pacific octopus?",
    choiceOne: "Octopus" , 
    choiceTwo: "Kelp Forest" , 
    choiceOneResults: 3, 
    choiceTwoResults: 6,
    image: "../assets/images/kelp_or_octopus.gif"},

  {storyOrder: 3, 
    scriptText: "You decide to visit the world's largest octopus species. The Giant Pacific Octopus weigh about 90lbs and can stretch up to 20 feet. Octopus invites you to a shellfish dinner deeper in Puget Sound. Do you go?",
    choiceOne: "Go to dinner" , 
    choiceTwo: "Stay behind" , 
    choiceOneResults: 4 , 
    choiceTwoResults: 5,
    image: "../assets/images/octopus.gif"},

  {storyOrder: 4, 
    scriptText: "You follow the octopus, hoping to get some clams. Something scares him and he activates his camaflogue to disappear. You end up alone, lost in the Puget Sound. The end.", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png"},
    
  {storyOrder: 5, 
    scriptText: "You stay behind and are rewarded by seeing a run of coho salmon swimming home to spawn. You return home feeling inspired by the circle of life. The end.", 
    choiceOne: " ", 
    choiceTwo: " ", 
    choiceOneResults: null , 
    choiceTwoResults: null,
    image: "../assets/images/salmon_run.gif"},

  {storyOrder: 6, 
    scriptText: "You swim toward the kelp forest. Out of the corner of your eye you see a flickering light. Do you follow the light, or keep swimming into the dark kelp forest?", 
    choiceOne: "Dark" , 
    choiceTwo: "Light" , 
    choiceOneResults: 7, 
    choiceTwoResults: 8,
    image: "../assets/images/kelp_moving.gif"},

  {storyOrder: 7, 
    scriptText: "You swim deeper into the dark. You don't see the 15ft long 6-gill shark approaching. He mistakes you for a salmon and bites off your leg. You survive, barely. Better luck next time.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/shark.gif"},

  {storyOrder: 8, 
    scriptText: "You follow the light, and find jellyfish glowing brightly in the dark water! Floating in their biolumensent glow, you start to slip into a meditative state when you hear a low loud sound. Do you stay or go follow the sounds?", 
    choiceOne: "Stay with the jellies" , 
    choiceTwo: "Explore the sounds" , 
    choiceOneResults: 9, 
    choiceTwoResults: 10,
    image: "../assets/images/jellyfish_family.gif"},
  
  {storyOrder: 9, 
    scriptText: "You float with the jellies for the afternoon and meditate. Later you return home, feeling happy and calm.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/jellyfish_love.gif"},

  {storyOrder: 10, 
    scriptText: "You choose to follow the sounds and find a family of Orca whales singing. They welcome you and you spend the afternoon with them playing, diving, and singing ancient songs. This is the best day of your life!", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/orca_ending.gif"}
]

export { storyEls }