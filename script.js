document.addEventListener("DOMContentLoaded", () => {
    const dogImage = document.getElementById('dog-image');
    const getDogButton = document.getElementById('get-dog-button');

    getDogButton.addEventListener('click', () => {
        getRandomDogImage();
    });

    function getRandomDogImage() {
        // Fetch a random dog image from the Dog CEO's Dog API
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.message;
                dogImage.src = imageUrl;
            })
            .catch(error => {
                console.error('Error:', error);
                dogImage.src = ''; // Clear the image if there's an error
            });
    }

    // Load a random dog image when the page loads
    getRandomDogImage();
});
