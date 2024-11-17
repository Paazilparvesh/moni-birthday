document.getElementById('surpriseBtn').addEventListener('click', function() {
    let surprise = document.getElementById('extraSurprise');
    surprise.innerHTML = '<p>🎉✨ happy<br>birthday<br>to you<br>Moni!!! ✨🎉</p><p>Wishing you a day filled with joy, laughter, and endless surprise joy! 🌟</p>';
    surprise.style.opacity = 1;
    surprise.style.transform = 'translateY(0)';
    document.body.style.animation = 'backgroundAnimation 1s ease-in-out infinite'; // To make the background even more dynamic
});
