let about = document.getElementById("about");
about.innerHTML = `
<section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/main2.png" alt=""
                        style="border-radius: 300px; background-color: rgba(146, 139, 139, 0.068);">
                </div>
                <div class="column right">
                    <div class="text">I'm Ravi and I'm a <span class="typing-2"></span></div>
                    <p>Frontend Developer, a passionate coder, and capable of writing efficient code using
                        MERN Stack. Ambitious to work and collaborate with other dedicated and enterprising developers.
                        <br>
                        Eager to take up a responsible role within an exciting and inspiring organization, and deliver
                        products that offer a great user experience.
                    </p>
                    <div class="mediaLinksAbout">
                        <a href="https://www.linkedin.com/in/maneravi/" target="blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/meravimane" target="blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <p class="iconsAboutSection"> <i class="fas fa-phone"></i> <a class="socialMediaLinksToPage" href="tel:8888125737">+91-8888125737</a></p>
                    <p class="iconsAboutSection"><i class="fas fa-envelope"></i> <a class="socialMediaLinksToPage" href="mailto:guessme.meravimane@gmail.com"">meravimane@gmail.com</a></p>
                    <a href="https://drive.google.com/file/d/1MzmMAVY2vca4zZNJlQZFCKCipeMOnsrG/view?usp=drive_link"
                        target="blank" class="resumeToDrive">Resume</a>
                </div>
            </div>
        </div>
    </section>
`;
