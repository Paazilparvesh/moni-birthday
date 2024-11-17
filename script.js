document.getElementById('surpriseBtn').addEventListener('click', function() {
    let surprise = document.getElementById('extraSurprise');
    surprise.innerHTML = '<p>🎉✨ SURPRISE!!! ✨🎉</p><p>May your life be filled with amazing adventures and joy! 🌟</p>';
    surprise.style.opacity = 1;
    surprise.style.transform = 'translateY(0)';
    document.body.style.animation = 'backgroundAnimation 1s ease-in-out infinite'; // To make the background even more dynamic
});
