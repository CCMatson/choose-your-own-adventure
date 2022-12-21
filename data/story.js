const storyEls = [

  {storyOrder: 0,
    scriptText: "Welcome to the Salish Sea, the inland sea that encompasses Puget Sound, the San Juan Islands and the waters off of Vancouver, BC. Do you want to stay on the land or explore the water?", 
    choiceOne: "Stay on land", 
    choiceTwo: "Explore the water", 
    choiceOneResults: 1, 
    choiceTwoResults: 2,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/button-click.wav"},

  {storyOrder: 1, 
    scriptText: "You decide to take a walk along the shoreline to avoid the water. Unfortunately, it starts to rain. You get drenched and head home to rest after a long day.", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/button-click.wav"},

  {storyOrder: 2, 
    scriptText: "You dive into the cold, calm water. Do you want to find a great pacific octopus or visit the kelp forest?",
    choiceOne: "Octopus" , 
    choiceTwo: "Kelp Forest" , 
    choiceOneResults: 3, 
    choiceTwoResults: 6,
    image: "../assets/images/waves_diver.png",
    audio: "../assets/audio/button-click.wav "},

  {storyOrder: 3, 
    scriptText: "You decide to visit the largest octopus species in the world. Giant Pacific Octopuses weigh about 90lbs on average and can stretch up to 20 feet. The GPO invites you to a dinner of crustaceans a little further deep in the sea. Do you go?",
    choiceOne: "Go to dinner" , 
    choiceTwo: "Stay behind" , 
    choiceOneResults: 4 , 
    choiceTwoResults: 5,
    image: "../assets/images/waves_octopus.png",
    audio: " "},

  {storyOrder: 4, 
    scriptText: "You follow the octopus to rocky caves. It's dark, but you can see that the rocks are covered in clams. Everytime you reach out to grab a clam, a sea otter grabs it out of your hand. With all this competition for food, you give up and swim home to make a peanut butter sandwich.", 
    choiceOne: " ", 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/button-click.wav "},
    
  {storyOrder: 5, 
    scriptText: "When you tell the octopus that you aren't coming to dinner, he asks you to babysit. His sister's has 300,000 newly hatched eggs; each baby plankton is the size of a grain of rice. You have a magical day playing, but you are secretly heart broken because you know that only a few will survive life to grow up to be as big as their parents." , 
    choiceOne: " ", 
    choiceTwo: " ", 
    choiceOneResults: null , 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/button-click.wav "},

  {storyOrder: 6, 
    scriptText: "You swim toward the kelp forest. Out of the corner of your eye you see a flickering light. Do you follow the light, or keep swimming into the dark kelp forest", 
    choiceOne: "Dark" , 
    choiceTwo: "Light" , 
    choiceOneResults: 7, 
    choiceTwoResults: 8,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/button-click.wav "},

  {storyOrder: 7, 
    scriptText: "You choose to to keep swimming into the dark. You do not see a 6-gill shark approaching, and you are eaten in one bite.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: " "},

  {storyOrder: 8, 
    scriptText: "You follow the light, and find jellyfish glowing in the dark! Floating in the water column, you are the calmest you've ever felt. As you slip into a meditative state you hear a low loud sound. Do you stay or go follow the sounds?", 
    choiceOne: "Stay with the jellies" , 
    choiceTwo: "Explore the sounds" , 
    choiceOneResults: 9, 
    choiceTwoResults: 10,
    image: "../assets/images/waves.png",
    audio: "../assets/audio/freeWilly.mp3"},
  
  {storyOrder: 9, 
    scriptText: "You float with the jellies for the afternoon and meditate. Later you return home, feeling happy and calm.", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: " "},

  {storyOrder: 10, 
    scriptText: "You choose to follow the sounds and find a family of Orca whales singing. They welcome you and you spend the afternoon with them playing, diving, and singing ancient songs. This is the best day of your life!", 
    choiceOne: " " , 
    choiceTwo: " " , 
    choiceOneResults: null, 
    choiceTwoResults: null,
    image: "../assets/images/waves.png",
    audio: " "}
]

export { storyEls }