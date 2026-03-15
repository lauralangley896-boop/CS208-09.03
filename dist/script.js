// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {

            const jokeDisplay = document.getElementById("joke-display");
            if (!jokeDisplay) {
                console.error("Element with ID 'joke-display' not found.");
                return;
            }
            jokeDisplay.textContent = "Loading joke...";
            const joke = await getRandomJoke();
            jokeDisplay.textContent = joke;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("lineupForm");
    
    if (form) {
        form.addEventListener("submit", myLineUp);
    } else {
        console.error("Form with ID 'lineupForm' not found.");
    }
});

function myLineUp(event) {
    event.preventDefault(); 

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.getElementById("gameDate").value;
    
    const playerCheckboxes = document.querySelectorAll('input[name="players"]:checked');
    let selectedPlayers = [];
    playerCheckboxes.forEach(function(checkbox) {
        selectedPlayers.push(checkbox.value);
    });
    
    const playerListString = selectedPlayers.length > 0 ? selectedPlayers.join(", ") : "No players selected";

    const finalResultString = `Lineup Status: ${status} | Game Date: ${gameDate} | Selected Players: ${playerListString}`;

    console.log("--- Form Data Received ---");
    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players Array:", selectedPlayers);
    console.log("Concatenated String:", finalResultString);

    const displayElement = document.getElementById("lineupDisplay");
    if (displayElement) {
        displayElement.textContent = finalResultString;
    }
}
