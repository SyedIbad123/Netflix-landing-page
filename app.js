document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the "active" class on the clicked button
            button.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the video element by its ID
    var video = document.getElementById('videoPlayer');

    // Hide video controls by setting the "controls" attribute to false
    video.controls = false;
});