const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
    const name = document.getElementById('text').value;
    const time = document.getElementById('delay').value;
    const output = document.getElementById('output');

    await new Promise(resolve => setTimeout(resolve, time)); // Still required
    output.textContent = name;
});
