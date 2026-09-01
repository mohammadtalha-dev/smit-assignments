document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('buttons-container');
    const urlParams = new URLSearchParams(window.location.search);
    
    // URL se value nikal kar integer mein convert karna
    const activeNum = parseInt(urlParams.get('assignment'));

    const totalAssignments = 1; // Baad mein 2, 3... karte rehna

    for (let i = 1; i <= totalAssignments; i++) {
        const btn = document.createElement('a');
        btn.href = `assignment-${i}/index.html`;
        btn.className = 'btn';
        btn.innerText = `Assignment ${i}`;

        // Exact number match
        if (activeNum === i) {
            btn.classList.add('active-assignment');
        }

        container.appendChild(btn);
    }
});
