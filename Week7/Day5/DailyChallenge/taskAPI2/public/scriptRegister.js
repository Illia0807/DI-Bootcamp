const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");
const btn = document.getElementById("registerBtn");

const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

//btn regist not active without data
form.addEventListener("input", () => {
  btn.disabled = [...inputs].some((input) => !input.value.trim());
});

//button and promise()
form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = {
          name: nameInput.value,
          lastname: lastnameInput.value,
          email: emailInput.value,
          username: usernameInput.value,
          password: passwordInput.value,
        };
      
        await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              })
                .then(async (res) => {
                  const responseData = await res.json();
                  console.log('Status:', res.status);
                  console.log('Response:', responseData);
                })
                .catch(console.error);
      });
