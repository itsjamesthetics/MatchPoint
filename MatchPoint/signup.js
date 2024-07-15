document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-btn');
    const signUpLink = document.querySelector('a[href="#signup"]');
    const loginPopup = document.querySelector('.popup.active'); // Initially the login form
    const signUpPopup = document.querySelector('.popup#signup');
    const applicantBtn = document.getElementById('applicant');
    const recruiterBtn = document.getElementById('recruiter');
    const skillsField = document.getElementById('skills').parentNode; // Parent 'form-element'
    const expertiseField = document.getElementById('expertise').parentNode; // Parent 'form-element'
    const occupationField = document.getElementById('occupationField');

    // Function to toggle field visibility
    function toggleFields(isRecruiter) {
        if (isRecruiter) {
            skillsField.style.display = 'none';
            expertiseField.style.display = 'none';
            occupationField.style.display = 'block';
        } else {
            skillsField.style.display = 'block';
            expertiseField.style.display = 'block';
            occupationField.style.display = 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Existing JavaScript code for form handling
    
        const profileImageInput = document.getElementById('profileImage');
        profileImageInput.addEventListener('change', function(event) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Here, you can create an <img> element to display the selected image
                // For demonstration, let's log the base64 image to console
                console.log(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        });
    });
    

    // Event listeners for the radio buttons
    applicantBtn.addEventListener('change', function() {
        if (this.checked) toggleFields(false);
    });

    recruiterBtn.addEventListener('change', function() {
        if (this.checked) toggleFields(true);
    });

    // Optional: Automatically select and show fields based on initial selection (if any)
    if (recruiterBtn.checked) {
        toggleFields(true);
    } else if (applicantBtn.checked) {
        toggleFields(false);
    }

    // Function to open the login form
    function openLoginForm() {
        signUpPopup.classList.remove('active'); // Ensure sign-up form is closed
        loginPopup.classList.add('active'); // Open login form
    }

    // Function to open the sign-up form
    function openSignUpForm() {
        loginPopup.classList.remove('active'); // Ensure login form is closed
        signUpPopup.classList.add('active'); // Open sign-up form
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.parentElement.parentElement.id === 'close-btn') {
                openLoginForm();
            } else {
                // If closing the login form (for whatever reason), just close it
                this.parentElement.parentElement.classList.remove('active');
            }
        });
    });

    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        openSignUpForm();
    });
});