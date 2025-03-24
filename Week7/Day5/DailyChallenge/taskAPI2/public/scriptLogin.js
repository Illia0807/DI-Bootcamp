const form = document.getElementById("loginForm");
const inputs = form.querySelectorAll("input");
const btn = document.getElementById("loginBtn");

//button not active without data
form.addEventListener("input", () => {
  btn.disabled = [...inputs].some((input) => !input.value.trim());
});

//button and promise()
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };
  await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(console.log);
});
