class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._linkedRooms = {};
    this._Character = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("description is too short.");
      return;
    }
    this._description = value;
  }

  get character() {
    return this._Character;
  }

  set character(value) {
    this._Character = value;
  }

  describe() {
    return (
      "Invenstigating the " + this._name + " you can see " + this._description
    );
  }

  getDetails() {
    // object entries returns an array of both the key and value of items in the object
    const entries = Object.entries(this._linkedRooms);
    // initialise an empty details array which will hold the formatted string based on the linked room entries
    let details = [];
    // use a for loop to loop over the entries array and specify we want the key and the value
    for (const [direction, room] of entries) {
      // format a string based on the object. We only take the information we want.
      let text = `The ${room._name} is to the ${direction}`;
      // push the formatted string to the details array
      details.push(text);
    }
    return details;
  }

  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("You cant go that way");
      return this;
    }
  }

  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }
}

class Character {
  constructor(name) {
    (this._name = name), (this._description = "");
    this._conversation = "";
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._description = value;
  }

  set conversation(value) {
    if (value.length < 4) {
      alert("conversation is too short.");
      return;
    }
    this._conversation = value;
  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }

  describe() {
    return `You have met ${this._name}. ${this._description}`;
  }

  converse() {
    return `${this._name} says ${this._conversation}`;
  }
}

class Item {
  constructor(name) {
    (this._name = name), (this._description = "");
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  describe() {
    return "The " + this._name + " is " + this._description;
  }
}

// For the assignment, you should figure out how to link characters to rooms.
//Rooms
const porch = new Room("Porch");
porch.description =
  'you can see the entrance to the Red Barrow Estate. You clutch the letter that brought you here.<i> "Return to to the manor. You know you must."</i>   You stare at the the door. Dark Red. Just as fear provoking as you remeber it.';
const Exit = new Room("Exit");
Exit.description =
  "Not wanting to brave the mansion, you leave, as you look at the read view mirror you can't help but feel a sense of regret as you drive into the pitch black tunnel.";
const Foyer = new Room("Foyer");
Foyer.description =
  "everything just as you remember it, the seemingly infinte stairs upwards, the rotten smell that remains,regardless of how many times the place was cleaned, and the 20 or so clocks on the wall all stuck at 4:37";
const WestHall = new Room("West Hall");
WestHall.description =
  "The long hall ahead. Somehow narrow desipte how wide it looks from the doorway. The feeling of claustrophobia sets in ever so slightly. Adorned on the walls are  paintings. <br>The first of the door to the house the one you already came through,</br> <br> the second of a kitchen in the melting style of Salvadoir Dali,</br><br>The 3rd a life paiting of the study filled with people, they have no faces...</br> <br>the forth, a photograph of a bathroom mirror,</br> <br>the fith a piccaso styled painting of the bedroom. There is a white rectangle in the space of where a window should be. </br> ";
const EastHall = new Room("East Hall");
EastHall.description =
  "The Short hall ahead. It feels impossibly wide,wider than the mansion would suggest";
const Diningroom = new Room("Dining Room");
Diningroom.description =
  "A table, so long it stretches out from one end of the room to the other";
const SecondFloorLanding = new Room("2nd Floor Landing");
SecondFloorLanding.description =
  "More rooms to explore on your left and right and more clocks stuck on 4:37. Does this house have an end";
const Kitchen = new Room("kitchen");
Kitchen.description =
  "a large isalnd for prepping food in the center and at the back, several kitchen appliances";
const LivingRoom = new Room("Living Room");
LivingRoom.description =
  "Two sofas facing each other, a coffee table between them. To the right a lit fireplace and in front of you have a window facing outside.";
const Study = new Room("Study");
Study.description =
  "A desk in the middle of the room commanding auhtroity just like the person sitting in it. The bookshelfs stretch all the way to the ceiling";
const EastLanding = new Room("East Landing");
EastLanding.description =
  "A dusty hallway, it looks like it hasnt been walked across, let alone cleaned in years";
const EastBedroom = new Room("East Bedroom");
EastBedroom.description =
  "A small single bed with some cartoon character on the sheets, on the floor various toys. You remeber having these. Like the hall this place is covered in dust";
const Bathroom = new Room("Bathroom");
Bathroom.description =
  "A large bath, looks like an olympic swimming pool compared to yours. Above the sink you see an expesnive decorative frame. It's a mirror";
const WestLanding = new Room("West Landing");
WestLanding.description = "A remarkably clean hall, spotless even.";
const WestBedroom = new Room("West Bedroom");
WestBedroom.description =
  "A double bed, on it neatly folded clothes. The wallpaper appears to made of out doucments of some kind";
const MasterBedroom = new Room("Master Bedroom");
MasterBedroom.description =
  "A huge bedroom, bigger than most appartments. Where the window should be a blinding white rectangle ";
const leave = new Room("A way out");
leave.description = "the blinding light. You make your way through it. It's difficult. It feels like walking through sludge but you make it out. You wake up on the ground. You are out you are free";

//first floor
porch.linkRoom("south", Exit);
porch.linkRoom("north", Foyer);
Foyer.linkRoom("south", porch);
Foyer.linkRoom("west", WestHall);
Foyer.linkRoom("east", EastHall);
Foyer.linkRoom("north", SecondFloorLanding);
EastHall.linkRoom("north", Kitchen);
EastHall.linkRoom("east", Diningroom);
EastHall.linkRoom("west", Foyer);
Kitchen.linkRoom("east", Diningroom);
Kitchen.linkRoom("south", EastHall);
Diningroom.linkRoom("west", EastHall);
WestHall.linkRoom("north", Study);
WestHall.linkRoom("east", Foyer);
WestHall.linkRoom("west", LivingRoom);
LivingRoom.linkRoom("east", WestHall);
Study.linkRoom("south", WestHall);

//second floor
SecondFloorLanding.linkRoom("south", Foyer);
SecondFloorLanding.linkRoom("east", EastLanding);
SecondFloorLanding.linkRoom("west", WestLanding);
EastLanding.linkRoom("North", Bathroom);
EastLanding.linkRoom("east", EastBedroom);
EastLanding.linkRoom("west", SecondFloorLanding);
Bathroom.linkRoom("south", EastLanding);
EastBedroom.linkRoom("East", EastLanding);
WestLanding.linkRoom("north", MasterBedroom);
WestLanding.linkRoom("west", WestBedroom);
MasterBedroom.linkRoom("south", WestHall);
MasterBedroom.linkRoom("north", leave);
WestBedroom.linkRoom("east", WestHall);
// the room parameter to this function is a room object

//Npcs
const SophieRedbarrow = new Character("Sophie Red-Barrow");
SophieRedbarrow.description =
  "The sender of the letter, her presense is imposing. She weats a crimson dresss that looks like it came from the 19th century ";
SophieRedbarrow.conversation = "I am sophie";
const ButlerMori = new Character("Butler Mori");
ButlerMori.description =
  "The butler of the estate. The epitome of a stereotypical butler, the outfit, the demeanor. You are suprised he isn't called Jeeves";
const Yourself = new Character("Yourself");
Yourself.description = "It's you, despite everyhting";

Study.character = SophieRedbarrow;
Kitchen.character = ButlerMori;
Bathroom.character = Yourself;
function displayRoomInfo(room) {
  console.log(room);
  let occupantMsg = "";
  if (room.character == "") {
    occupantMsg = "no one is here";
  } else {
    occupantMsg = room.character.describe();
  }

  textContent =
    "<p>" +
    room.describe() +
    "</p>" +
    "<p>" +
    occupantMsg +
    "</p>" +
    "<p>" +
    room.getDetails() +
    "</p>";

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML =
    '> <input type="text" id="usertext" />';
  document.getElementById("usertext").focus();
}

const startGame = () => {
  currentRoom = porch;
  displayRoomInfo(currentRoom);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // grab the contents of the input box
      const command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"];
      const talk = ["talk"];

      if (directions.includes(command.toLowerCase())) {
        currentRoom = currentRoom.move(command);
        document.getElementById("usertext").value = "";
        displayRoomInfo(currentRoom);
      } else {
        alert("Not a valid command. Please try again.");
        displayRoomInfo(currentRoom);
        document.getElementById("usertext").value = "";
      }
    }
  });
};

startGame();
