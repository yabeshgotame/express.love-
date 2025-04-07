// For no.html - handle the savage responses
document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    const messageEl = document.getElementById('savage-message');
    
    if (noBtn && messageEl) {
        const messages = [
            "That was clearly a misclick. Try again.",
            "The universe says you meant to click 'Actually, Yes'.",
            "Error 404: 'No' response not compatible with your heart.",
            "Let's be honest, we both know you want to click 'Actually, Yes'.",
            "This button is just here to make the 'Yes' look better.",
            "Nice try, but destiny says 'Actually, Yes'.",
            "Your mouse seems to be drifting toward the 'Actually, Yes' button...",
            "I programmed this button to only work if you're lying to yourself.",
            "Clicking 'Still No' activates the 'Actually Yes' protocol.",
            "Persistent, aren't we? But so am I. Click 'Actually, Yes' already!",
            "The more you click this, the more it proves you should click 'Actually, Yes'.",
            "This button is getting tired. How about 'Actually, Yes' instead?"
        ];
        
        let clickCount = 0;
        
        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update message
            messageEl.textContent = messages[Math.min(clickCount, messages.length - 1)];
            
            // Make the YES button more prominent
            const yesBtn = document.querySelector('.yes');
            yesBtn.style.transform = 'scale(1.1)';
            yesBtn.style.boxShadow = '0 5px 20px rgba(46, 213, 115, 0.4)';
            
            // Move the NO button randomly
            noBtn.style.position = 'relative';
            noBtn.style.left = `${Math.random() * 30 - 15}px`;
            noBtn.style.top = `${Math.random() * 30 - 15}px`;
            
            clickCount++;
            
            // After 3 clicks, start making the NO button smaller
            if (clickCount >= 3) {
                const scale = Math.max(0.5, 1 - clickCount/15);
                noBtn.style.transform = `scale(${scale})`;
            }
            
            // After 5 clicks, change the NO button text
            if (clickCount >= 5) {
                noBtn.textContent = "I'm stubborn (click me)";
            }
            
            // After 10 clicks, make the NO button almost disappear
            if (clickCount >= 10) {
                noBtn.style.opacity = '0.5';
                noBtn.style.cursor = 'not-allowed';
            }
        });
    }
    
    // For yes.html - countdown timer
    const countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) {
        let countdown = 5;
        const timer = setInterval(() => {
            countdown--;
            countdownEl.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(timer);
                // Redirect to a special page or do something else
                // window.location.href = "special-message.html";
            }
        }, 1000);
    }
});
