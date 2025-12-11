
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting normally
            
            
            alert('Login Successful!');
            
            
            window.location.href = 'index.html';
        });
    }
});
