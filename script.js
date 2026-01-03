// زانیارییەکانی بەکارهێنەران
const users = {
    'admin': 'admin123',
    'shblood': '123'
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    
    // پاککردنەوەی پەیامی پێشوو
    messageDiv.style.display = 'none';
    messageDiv.className = 'message';
    
    // پشکنینی زانیاریەکان
    if(users[username] && users[username] === password) {
        // چوونەژوورەوە سەرکەوتوو بوو
        messageDiv.textContent = 'تەواو بە سەرکەوتوویی';
        messageDiv.classList.add('success');
        messageDiv.style.display = 'block';
        submitBtn.disabled = true;
        
        // دوای ٣ چرکە بڕۆ بۆ پەیجی سەرەکی
        setTimeout(function() {
            window.location.href = 'https://database-pharmacy-shblood.netlify.app/';
        }, 3000);
        
    } else {
        // زانیاریەکان هەڵەیە
        messageDiv.textContent = 'ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە';
        messageDiv.classList.add('error');
        messageDiv.style.display = 'block';
    }
});