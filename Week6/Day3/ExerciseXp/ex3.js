const arnold = async () => {
  try {
    let response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error("not ok");
    }
    let data = await response.json();
    return console.log(data.result);
  } catch (err) {
    console.error("not ok", err);
  }
};

arnold();
