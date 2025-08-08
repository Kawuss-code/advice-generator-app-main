function Reload() {
    document.getElementById("quote").innerHTML = "Loading...";

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => {
        document.getElementById("id").innerHTML = `ADVICE #${data.slip.id}`;
        document.getElementById("quote").innerHTML = `"${data.slip.advice}"`;
    })
    .catch(() => document.getElementById("quote").innerHTML = "Failed to load quote");
}

Reload();