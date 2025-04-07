// For index.html - simple hover effects are handled by CSS

// For no.html - savage responses when trying to click NO
document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    const message = document.getElementById('message');
    
    if (noBtn) {
        const messages = [
            "That button doesn't actually work, you know.",
            "The universe says you meant to click YES.",
            "Error 404: 'No' response not found.",
            "Let's be honest, we both know you want to click YES.",
            "This button is just for decoration. Try the other one!",
            "Nice try, but destiny says YES.",
            "Your mouse seems to be drifting toward the YES button...",
            "The 'No' button is just here to make the 'Yes' look better.",
            "I programmed this button to only work if you're lying.",
            "Clicking NO activates the 'Actually YES' protocol."
        ];
        
        let clickCount = 0;
        
        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (clickCount < messages.length) {
                message.textContent = messages[clickCount];
            } else {
                message.textContent = "Okay, you're persistent. But so am I. Click YES already!";
            }
            
            // Make the YES button more prominent
            const yesBtn = document.querySelector('.yes-btn');
            yesBtn.style.transform = 'scale(1.1)';
            yesBtn.style.boxShadow = '0 0 15px #4caf50';
            
            // Move the NO button randomly
            noBtn.style.position = 'relative';
            noBtn.style.left = `${Math.random() * 40 - 20}px`;
            noBtn.style.top = `${Math.random() * 40 - 20}px`;
            
            clickCount++;
            
            // After 3 clicks, start making the NO button smaller
            if (clickCount >= 3) {
                noBtn.style.transform = `scale(${Math.max(0.5, 1 - clickCount/10)})`;
            }
        });
    }
});
