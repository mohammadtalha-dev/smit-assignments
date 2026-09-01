document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById('buttons-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const activeNum = urlParams.get('assignment');

    const username = "mohammadtalha-dev";
    const repo = "smit-assignments";

    // Dynamic Highlight & Auto-Scale (Bada Dikhane Ki Logic)
    function applyHighlightAndScroll(btn, isHighlight) {
        if (isHighlight) {
            btn.style.backgroundColor = '#22c55e'; // Bright Green
            btn.style.color = '#ffffff';
            btn.style.border = '2px solid #16a34a';
            btn.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.9)';
            
            // Mobile par bhi button permanent 1.08x Bada dikhega
            btn.style.transform = 'scale(1.08)';
            btn.style.transition = 'all 0.3s ease-in-out';

            setTimeout(() => {
                btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }

    if (window.location.protocol.startsWith('http')) {
        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents`);
            if (response.ok) {
                const contents = await response.json();
                
                const assignmentFolders = contents
                    .filter(item => item.type === 'dir' && /^assignment-\d+$/i.test(item.name))
                    .sort((a, b) => parseInt(a.name.split('-')[1]) - parseInt(b.name.split('-')[1]));

                container.innerHTML = '';

                assignmentFolders.forEach(folder => {
                    const num = folder.name.split('-')[1];
                    const btn = document.createElement('a');
                    btn.href = `${folder.name}/index.html`;
                    btn.className = 'btn';
                    btn.innerText = `Assignment ${num}`;

                    if (activeNum == num) {
                        applyHighlightAndScroll(btn, true);
                    }

                    container.appendChild(btn);
                });
                return;
            }
        } catch (e) {
            console.log("GitHub API fallback active");
        }
    }

    // LOCAL TESTING FALLBACK
    container.innerHTML = '';
    const btn = document.createElement('a');
    btn.href = `assignment-1/index.html`;
    btn.className = 'btn';
    btn.innerText = `Assignment 1`;

    if (activeNum == 1 || (!activeNum && window.location.protocol === 'file:')) {
        applyHighlightAndScroll(btn, true);
    }

    container.appendChild(btn);
});
                        
