import React, { useState } from "react";
import "./styles.css";

const dictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🫒": "Olive",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶": "Hot Pepper",
  "🫑": "Bell Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🫓": "Flatbread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🫔": "Tamale",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🫕": "Fondue",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🫖": "Teapot",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧋": "Bubble Tea",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍽️": "Fork and Knife with Plate",
  "🍴": "Fork and Knife",
  "🥄": "Spoon"
};
const newDictionary = {
  "🫐": "Blueberries",
  "🥑": "Avocado",
  "🥞": "Pancakes",
  "🌮": "Taco",
  "🍬": "Candy",
  "🧋": "Bubble Tea",
  "🍗": "Poultry Leg",
  "🍕": "Pizza",
  "🍝": "Spaghetti",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🍭": "Lollipop",
  "🧇": "Waffle",
  "🍨": "Ice Cream",
  "🍯": "Honey Pot",
  "🍟": "French Fries",
  "🌭": "Hot Dog"
};

var emojiDictionary = Object.keys(newDictionary);

export default function App() {
  const [output, setOutput] = useState();

  function onChangeHandler(event) {
    var input = event.target.value;

    var output1 = dictionary[input];
    setOutput(output1);
  }

  function onClickHandler(item) {
    var output2 = newDictionary[item];
    setOutput(output2);
  }

  return (
    <div className="App">
      <header>
        {" "}
        <h1 id="heading">ifykyk</h1>{" "}
      </header>

      <input onChange={onChangeHandler} placeholder="Search...." id="input" />

      <h2 id="outputText"> {output} </h2>

      <div id="output"></div>

      <p style={{ color: "wheat", padding: "1.5rem" }}>
        {" "}
        use emoji's related to food like below ones
      </p>
      {emojiDictionary.map(function abc(item) {
        return (
          <span
            id="emoji"
            style={{ cursor: "pointer" }}
            onClick={() => onClickHandler(item)}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
      <footer id="footer">
        {" "}
        This website is built for educational purposes using React.
      </footer>
    </div>
  );
}
