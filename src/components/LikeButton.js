import "./LikeButton.css";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
let likeCount1 = 0;

function LikeButton() {
  const button = document.createElement("button");
  button.textContent = `${likeCount1} Likes`;
  button.classList.add("like-button", "like-button-purple");
  button.addEventListener("click", () => {
    likeCount1++;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.textContent = `${likeCount1} Likes`;
    button.style.backgroundColor = randomColor;
  });
  document.body.appendChild(button);
}

export default LikeButton;
