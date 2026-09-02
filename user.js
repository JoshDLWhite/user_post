// console.log(localStorage.getItem("id"));   removed

async function main() {
  const id = localStorage.getitem("id")
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  const postsData = await posts.json();

  console.log(postsData)
}

main();