const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const fetchData = async (url) => {
  try {
    const responce = await fetch(url);
    if (!responce.ok) {
      throw new Error(`Error :${responce.status}`);
    }
    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};




document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let userInfo = document.getElementById("userInput").value.trim();
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(
    userInfo
  )}&limit=1&offset=2`;

  fetchData(URL).then((data) => {
    if (data && data.data.length > 0) {
      const gifUrl = data.data[0].images.original.url;
      displayGif(gifUrl);
    } else {
      console.log("GIF NOT FOUND ARNOLD");
    }
  });
});

function displayGif(url) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = url;
  img.alt = "GIF";
  document.body.appendChild(img);
  /////////////////////////////
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    div.remove(); 
  };

  div.appendChild(img);
  div.appendChild(deleteBtn);
  document.body.appendChild(div);
}

const deleteAllBtn = document.createElement("button");
deleteAllBtn.textContent = "Delete all";
deleteAllBtn.onclick = () => {
  const gifs = document.querySelectorAll("div");
  gifs.forEach((gif) => gif.remove()); 
};
document.body.appendChild(deleteAllBtn);
