document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById('buttons-container');
    const urlParams = new URLSearchParams(window.location.search);
    const activeNum = urlParams.get('assignment');

    let assignmentIndex = 1;
    let keepScanning = true;

    while (keepScanning) {
        const folderPath = `assignment-${assignmentIndex}/index.html`;

        try {
            // Check karein kya folder aur file exist karti hai
            const response = await fetch(folderPath, { method: 'HEAD' });

            if (response.ok) {
                const btn = document.createElement('a');
                btn.href = folderPath;
                btn.className = 'btn';
                btn.innerText = `Assignment ${assignmentIndex}`;

                // Agar parameter match kare toh highlight karein
                if (activeNum == assignmentIndex) {
                    btn.classList.add('active-assignment');
                }

                container.appendChild(btn);
                assignmentIndex++;
            } else {
                // Jab folder nahi milega toh loop ruk jayega
                keepScanning = false;
            }
        } catch (error) {
            keepScanning = false;
        }
    }
});
