// Dynamic scan ki jagah simple assignment generator
const container = document.getElementById('buttons-container');
const urlParams = new URLSearchParams(window.location.search);
const activeNum = urlParams.get('assignment');

// Humne kitne assignments create kiye hain (Abhi 1 hai, jab assignment 2 bane to 2 kar dena)
const totalAssignments = 1; 

container.innerHTML = ''; // Loading text hataane ke liye

for (let i = 1; i <= totalAssignments; i++) {
    const btn = document.createElement('a');
    btn.href = `assignment-${i}/index.html`;
    btn.className = 'btn';
    btn.innerText = `Assignment ${i}`;

    // Active Highlight Logic
    if (activeNum == i) {
        btn.classList.add('active-assignment');
    }

    container.appendChild(btn);
}
