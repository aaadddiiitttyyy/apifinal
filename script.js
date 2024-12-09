document.getElementById('fetchImageButton').addEventListener('click', function() {
  const apiKey = '5Q7Sc5vcumv2VgcQxKWnsXK2tUaxMTv9wmrbGAb2';  // Replace with your own NASA API key
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display the image and details
      document.getElementById('spaceImage').src = data.url;
      document.getElementById('imageTitle').textContent = data.title;
      document.getElementById('imageExplanation').textContent = data.explanation;
    })
    .catch(error => {
      console.error('Error fetching the space image:', error);
    });
});
