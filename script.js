// Lesson data (replace with your actual lessons)

const lessons = [
    {
        id: 1,
        title: 'Getting Started with Django - Virtual Environments and Python',
        content: `<h2>Why Virtual Environments?</h2><p>...</p><h2>1. Installing Python</h2><ul><li>...</li></ul>`,
        videoUrl: 'videos/video1.mp4' // Add the video URL here

    },
    {
        id: 2,
        title: 'Creating Your First Django Project',
        content: `
            <h2>Starting a Project</h2>
            <p>Open your terminal and run the following command:</p>
            <pre><code>django-admin startproject mysite</code></pre>

            <p>This will create a new directory called "mysite" with the following structure:</p>
            <pre><code>mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
</code></pre>

            <h3>Explanation</h3>
            <ul>
                <li><code>manage.py</code>: A command-line utility for interacting with your Django project.</li>
                <li><code>mysite/</code> (Inner directory): Contains the main settings and configuration for your project.</li>
            </ul>

                <div id="terminal">
        <div id="terminal-output"></div>
        <div id="terminal-input">
            <span id="terminal-prompt">$</span>
            <input type="text" id="terminal-command">
        </div>
    </div>
        `,
        videoUrl: 'videos/video2.mp4'
    },
    {
        id: 3,
        title: 'Creating Your First Django App',
        content: `
            <h2>Creating an App</h2>
            <p>Navigate into your project directory:</p>
            <pre><code>cd mysite</code></pre>

            <p>Then, run the following command to create your first app:</p>
            <pre><code>python manage.py startapp polls</code></pre>
            <p>This will create a new directory called "polls" with the basic structure of a Django app.</p>
        `,
        videoUrl: 'videos/video3.mp4' // Add the video URL here

    }
    // ... Add more lessons for models, views, templates, etc.
];

function loadLesson(lessonId) {
    const lesson = lessons.find(l => l.id === lessonId);
    const lessonContainer = document.getElementById('lesson-container');

    // Create video player element
    const videoPlayer = document.createElement('video');
    videoPlayer.src = lesson.videoUrl;
    videoPlayer.controls = true; 
    videoPlayer.style.width = '100%'; // Make video responsive

    // Clear previous content and append video
    lessonContainer.innerHTML = ''; 
    lessonContainer.appendChild(videoPlayer);

    // Add lesson content below the video (if needed)
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = lesson.content;
    lessonContainer.appendChild(contentDiv);


}
// Function to display all lessons
function showAllLessons() {
    const lessonContainer = document.getElementById('lesson-container');
    let allLessonsHTML = '<h2>All Lessons</h2><ul>';
    for (const lesson of lessons) {
        allLessonsHTML += `<li><a href="#" onclick="loadLesson(${lesson.id})">${lesson.title}</a></li>`;
    }
    allLessonsHTML += '</ul>';
    lessonContainer.innerHTML = allLessonsHTML;
}

// Function to initialize the terminal (called when the page is fully loaded)
function initializeTerminal() {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-command');

    const commandSequence = [
        'python --version',
        'python -m venv mydjangoenv',
        'source mydjangoenv/bin/activate',  // Adjust for Windows if needed
        'pip install django',
        'django-admin --version'
    ];
    let currentCommandIndex = 0;

    terminalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const enteredCommand = terminalInput.value;
            terminalOutput.innerHTML += `$ ${enteredCommand}\n`;

            if (enteredCommand === commandSequence[currentCommandIndex]) {
                terminalOutput.innerHTML += "Correct!\n";
                currentCommandIndex++;

                if (currentCommandIndex === commandSequence.length) {
                    terminalOutput.innerHTML += "All commands completed successfully!\n";
                    terminalInput.disabled = true;
                }
            } else {
                terminalOutput.innerHTML += "Incorrect command. Try again.\n";
            }
            terminalInput.value = '';
        }
    });
}

// Load the first lesson by default
//loadLesson(1); 
showAllLessons(); 
loadLesson(1);
