function tryInlineSkating() {
  let name = prompt("What is your name?");
  let city = prompt("Where are you located?");

  city = city.toLocaleLowerCase("london");

  if (city === "london") {
    alert(
      "Hi " + name + ", you can find us in Hyde Park Corner every Sunday🤩"
    );
  } else {
    alert("Sorry " + name + ", we are located in London 😔");
  }
}
let tryButton = document.querySelector("button");
tryButton.addEventListener("click", tryInlineSkating);
