const changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.fontSize = `${size}px`;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.background = background;
  document.body.style.color = color;
};

const main = () => {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.append(paragraph);

  const spookyButton = document.createElement("button");
  spookyButton.innerHTML = "Spooky";
  document.body.append(spookyButton);
  spookyButton.onclick = spooky;

  const darkButton = document.createElement("button");
  darkButton.innerHTML = "Dark mode";
  document.body.append(darkButton);
  darkButton.onclick = darkMode;

  const screamButton = document.createElement("button");
  screamButton.innerHTML = "Scream mode";
  document.body.append(screamButton);
  screamButton.onclick = screamMode;
};

main();
