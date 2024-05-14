// Fetch request to localhost:3001/api on page load
document.addEventListener("DOMContentLoaded", async () => {
    console.log("cookie", document.cookie)
    const response = await fetch("http://localhost:3001/api");
    const data = await response.json();

    console.log(data);
})