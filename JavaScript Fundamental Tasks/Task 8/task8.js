function startLoading() {
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    let progress = 0;
    const interval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + '%';
        statusText.textContent = 'Progress: ' + progress + '%';
        if (progress >= 100) clearInterval(interval);
    }, 100);
}

document.getElementById('startButton').addEventListener('click', startLoading);