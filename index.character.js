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
      "Looking around the " + this._name + " you can see " + this._description
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

// For the assignment, you should figure out how to link characters to rooms.
//Rooms
const porch = new Room("Porch");
porch.description =
  "you can see the entrance to the Red Barrow Estate. You clutch the letter that brought you here. You stare at the entry way to the door, wondering if you should go inside.";
const Exit = new Room("Exit");
Exit.description =
  "Not wanting to brave the mansion, you leave, as you look at the read view mirror you can't help but feel a sense of regret";
const Foyer = new Room("Foyer");
Foyer.description = "Placeholder";
const WestHall = new Room("West Hall");
WestHall.description = "placeholder";
const EastHall = new Room("East Hall");
EastHall.description = "placeholder";
const Diningroom = new Room("Dining Room");
Diningroom.description = "placeholder";
const SecondFloorLanding = new Room("2nd Floor Landing");
SecondFloorLanding.description = "PlaceHolder";
const Kitchen = new Room("kitchen");
Kitchen.description = "PlaceHolder";
("a long narrow room with worktops on either side and a large bench in the middle");
const LivingRoom = new Room("Living Room");
LivingRoom.description = "placeholder";
const Study = new Room("Study");
Study.description = "Study";
const EastLanding = new Room("East Landing");
EastLanding.description = "placeholder";
const EastBedroom = new Room("East Bedroom");
EastBedroom.description = "PlaceHolder";
const Bathroom = new Room("Bathroom");
Bathroom.description = "placeholder";
const WestLanding = new Room("West Landing");
WestLanding.description = "PlaceHolder";
const WestBedroom = new Room("West Bedroom");
WestBedroom.description = "placeholder";
const MasterBedroom = new Room("Master Bedroom");
MasterBedroom.description = "placeholder";

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
Bathroom.linkRoom("south", EastLanding);
EastBedroom.linkRoom("East", EastLanding);
WestLanding.linkRoom("north", MasterBedroom);
WestLanding.linkRoom("west", WestBedroom);
MasterBedroom.linkRoom("south", WestHall);
WestBedroom.linkRoom("east", WestHall);
// the room parameter to this function is a room object

//Npcs
const SophieRedbarrow = new Character("Sophie Red-Barrow");
SophieRedbarrow.description = "The sender of the letter";
const ButlerMori =new Character("Butler Mori")
ButlerMori.description ="He buttels"
const Yourself = new Character ("Yourself")
Yourself.description = ("yourself")

porch.character = SophieRedbarrow;
Kitchen.character = ButlerMori;
Bathroom.character = Yourself;

function displayRoomInfo(room) {
  console.log (room)
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
