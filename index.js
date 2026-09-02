// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list");

async function main () {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
  const usersData = await users.json();
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");//.join sets the innerHTML
} 

  main();

function showUserPosts(id) {    //This chunk of code is not functioning like the video. There is an error having to do with the href not being seen.
  localStorage.setItem("id", id) //items in the perenthasies are called keys. first key is whatever I want, second key is the designated variable. "id" in this case. 
  window.location.href = `${window.location.origin}}/user.html`
}

  function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>
      </div>
    </div>`;
  }