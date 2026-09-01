// URL se active assignment number nikalne ke liye
const urlParams = new URLSearchParams(window.location.search);
const activeNum = urlParams.get('assignment');

// Total assignments scan karne ke liye
const totalAssignments = 50; 
const container = document.getElementById('buttons-container');

for (let i = 1; i <= totalAssignments; i++) {
    const folderPath = `assignment-${i}/index.html`;

    fetch(folderPath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                const btn = document.createElement('a');
                btn.href = folderPath;
                btn.className = 'btn';
                btn.innerText = `Assignment ${i}`;

                // Agar URL mein assignment number match ho jaye to highlight karein
                if (activeNum == i) {
                    btn.classList.add('active-assignment');
                }

                container.appendChild(btn);
            }
        })
        .catch(() => {});
}
