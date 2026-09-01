const username = "mohammadtalha-dev";
const repo = "smit-assignments";
const container = document.getElementById('assignment-list');

async function fetchAssignments() {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents`);
    const data = await response.json();

    // Sirf 'assignment-' se start hone wale folders ko scan karega
    const assignmentFolders = data.filter(item => 
      item.type === 'dir' && item.name.toLowerCase().startsWith('assignment-')
    );

    container.innerHTML = '';

    if (assignmentFolders.length === 0) {
      container.innerHTML = '<p>No assignments found yet.</p>';
      return;
    }

    // Har folder ka automatic button banega
    assignmentFolders.forEach(folder => {
      const btn = document.createElement('a');
      btn.className = 'btn';
      btn.href = `./${folder.name}/index.html`;
      btn.target = '_blank';

      // "assignment-7" ko clean naam "Assignment 7" banayega
      const formattedTitle = folder.name
        .replace('-', ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      btn.textContent = formattedTitle;
      container.appendChild(btn);
    });

  } catch (error) {
    console.error("Error fetching folders:", error);
    container.innerHTML = '<p>Error loading assignments.</p>';
  }
}

fetchAssignments();

