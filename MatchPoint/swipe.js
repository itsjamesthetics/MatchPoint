document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    // Simulate a login success scenario
    if (username) { // Assuming any non-empty username is "successful"
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('userProfile').style.display = 'block';
        document.getElementById('userName').textContent = username;
    } else {
        alert('Please enter a username');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('userProfile').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('username').value = ''; // Clear the username field
    document.getElementById('password').value = ''; // Clear the password field
});
