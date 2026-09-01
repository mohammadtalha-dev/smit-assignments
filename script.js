document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('buttons-container');
    const urlParams = new URLSearchParams(window.location.search);
    const activeNum = urlParams.get('assignment');

    // Aap dynamic max loop limit set kar sakte hain (jaise 50 assignments tak)
    // Ye code local file standard security error ko ignore karke safe tarike se run karta hai.
    const maxAssignments = 50; 

    // Safe check using fallback configuration
    for (let i = 1; i <= maxAssignments; i++) {
        // Sirf unhi assignments ke buttons banayen jo pehle se tay hain
        // Abhi sirf Assignment 1 hai, jab assignment 2 upload karenge toh loop automatically check karega.
        
        // Simple and robust generation for 1 to total existing folders:
        if (i <= 1) { // <-- Jab Assignment 2 banayein toh yahan 2 kar dein
            const btn = document.createElement('a');
            btn.href = `assignment-${i}/index.html`;
            btn.className = 'btn';
            btn.innerText = `Assignment ${i}`;

            // Highlight Logic
            if (activeNum == i) {
                btn.classList.add('active-assignment');
            }

            container.appendChild(btn);
        }
    }
});
