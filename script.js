// moving images//
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".moving-image");

    images.forEach((image, index) => {
        moveImage(image, index);
    });

    function moveImage(image, index) {
        const randomX = Math.random() * (window.innerWidth - image.width);
        const randomY = Math.random() * (window.innerHeight - image.height);
        image.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        setTimeout(() => moveImage(image, index), 2000 + (index * 1000));
    }
});
//How to apply application form event listener//
document.querySelector('.apply-button').addEventListener('click', function() {
    window.location.href = 'application_form.html'; // Replace with the actual URL of the application form
});



//script for auto updated date and time//
//function updateDateTime() {//
    //const now = new Date();//

    // Format the date//
    //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };//
    //const currentDate = now.toLocaleDateString('en-US', options);//

    // Format the time//
   // const currentTime = now.toLocaleTimeString('en-US', { hour12: true });//

    // Display the date and time//
   // document.getElementById('currentDate').textContent = currentDate;//
   // document.getElementById('currentTime').textContent = currentTime;//
//}//

// Update the date and time every second
//setInterval(updateDateTime, 1000);//

// Initial call to display the date and time immediately
//updateDateTime();//
