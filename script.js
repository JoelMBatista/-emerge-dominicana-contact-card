// Splash screen transition logic
document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splash-screen');
    const mainPage = document.getElementById('main-page');

    // Show splash screen immediately
    splashScreen.classList.add('active');

    // Transition to main page after 3 seconds
    setTimeout(() => {
        splashScreen.classList.remove('active');

        // Wait for splash fade out, then show main page
        setTimeout(() => {
            mainPage.classList.add('active');
        }, 500);
    }, 3000);
});
