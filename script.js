// Lesson data (replace with your actual lessons)

const lessons = [
    {
        id: 1,
        title: 'Getting Started with Django - Virtual Environments and Python',
        content: `
            <h2>Why Virtual Environments?</h2>
            <p>Virtual environments are like isolated spaces on your computer where you can install Python packages (like Django) for specific projects. This keeps your projects organized and prevents conflicts between different versions of packages. It's considered best practice for Django development.</p>

            <h2>1. Installing Python</h2>
            <ul>
                <li>If you don't have Python installed, download the latest version from the official Python website (<a href="https://www.python.org/downloads/">https://www.python.org/downloads/</a>) and follow the installation instructions for your operating system.</li>
                <li>To check your Python version, open your terminal or command prompt and type:</li>
            </ul>
            <pre><code>python --version</code></pre>
            <p>You should see something like "Python 3.x.x" (where 'x' represents numbers). We recommend using Python 3.7 or higher for Django.</p>

            <h2>2. Creating a Virtual Environment</h2>
            <p>Open your terminal or command prompt.</p>
            <p>Navigate to the folder where you want to store your Django projects. You can do this with the <code>cd</code> command (e.g., <code>cd path/to/your/projects</code>).</p>
            <p>Create a new virtual environment using the following command:</p>
            <pre><code>python -m venv mydjangoenv</code></pre>
            <p>(Replace <code>mydjangoenv</code> with the name you want for your virtual environment.)</p>

            <h2>3. Activating the Virtual Environment</h2>
            <p><strong>Windows:</strong></p>
            <pre><code>mydjangoenv\\Scripts\\activate</code></pre>
            <p><strong>macOS/Linux:</strong></p>
            <pre><code>source mydjangoenv/bin/activate</code></pre>
            <p>Notice that your terminal prompt will now be prefixed with the name of your virtual environment (e.g., <code>(mydjangoenv)</code>), indicating that it's active.</p>
            <h2>4. Installing Django</h2>

            pip install django


            <h2>Create requirements.txt file</h2>

            <p>pip freeze > requirements.txt </p>
            <p>This is handy to create if you every want to distribute so people can install the projects dependancies in one easy way.</p>




            <h2>Video Explanation</h2>
            <p>Let's face it, when your learning its sometimes good to see what to do? If anything is unclear please submit a request and I can get it changed, done in an easier way! So looking forward to feedback.</p>
        `,
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
        

    },
    {
        id: 4,
        title: 'Django Models: Defining Your Data Structure',
        content: `
            <h2>Models in Django</h2>
            <p>Models are the heart of a Django application. They define the structure of your data, including the types of fields and their relationships.</p>
            <p>Let's create a simple "Question" model for our poll app in the <code>polls/models.py</code>file:</p>

            <pre><code>from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')</code></pre>

            <h3>Explanation</h3>
            <ul>
                <li><code>CharField</code>: A field for storing text (like a question).</li>
                <li><code>DateTimeField</code>: A field for storing date and time values.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video4.mp4'
    },
    {
        id: 5,
        title: 'Django Views: Handling Requests and Responses',
        content: `
            <h2>Views in Django</h2>
            <p>Views are Python functions that take a web request and return a web response. This response can be the HTML content of a web page, or a redirect, or a 404 error, or an XML document, or an image...</p>

            <p>Let's create a simple view in <code>polls/views.py</code>:</p>
            <pre><code>from django.http import HttpResponse
from .models import Question

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)
    </code></pre>

            <h3>Explanation</h3>
            <ul>
                <li><code>index(request)</code>: This is the view function.</li>
                <li>It queries the database to retrieve the latest 5 questions.</li>
                <li>It renders the questions as a simple comma-separated list.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video5.mp4'
    },
    {
        id: 6,
        title: 'Django Templates: Designing Your Pages',
        content: `
            <h2>Templates in Django</h2>
            <p>Templates are text files (usually HTML) that define the structure and layout of your web pages. They use Django's template language to insert dynamic content.</p>

            <p>Create a folder called <code>templates</code> inside your <code>polls</code> app. Inside that, create another folder called <code>polls</code>. Within the second <code>polls</code> folder, create a file named <code>index.html</code>:</p>
            <pre><code>{% if latest_question_list %}
    <ul>
    {% for question in latest_question_list %}
        <li><a href="/polls/{{ question.id }}/">{{ question.question_text }}</a></li>
    {% endfor %}
    </ul>
{% else %}
    <p>No polls are available.</p>
{% endif %}</code></pre>

            <h3>Explanation</h3>
            <ul>
                <li>This template iterates over the <code>latest_question_list</code> variable.</li>
                <li>For each question, it creates a list item with a link to the question's detail page.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video6.mp4'
    },
    {
        id: 7,
        title: 'Django URLs: Mapping Requests to Views',
        content: `
            <h2>URLs in Django</h2>
            <p>URLs (Uniform Resource Locators) are the web addresses that users type into their browsers to access specific pages or resources within your web application. Django uses a flexible and powerful URL dispatcher to map URLs to views.</p>
            <p>Open the <code>polls/urls.py</code> file and add the following code:</p>
            <pre><code>from django.urls import path
    from . import views
    
    urlpatterns = [
        path('', views.index, name='index'),
    ]</code></pre>
    
            <h3>Explanation</h3>
            <ul>
                <li><code>path('', views.index, name='index')</code>: This line defines a URL pattern. When a user requests the root URL (e.g., 'http://yourdomain.com/polls/'), Django will call the <code>views.index</code> view to handle the request. The <code>name='index'</code> argument gives this URL pattern a name that can be used to refer to it from elsewhere in Django.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video7.mp4'
    },
    {
        id: 8,
        title: 'Django Forms: Handling User Input',
        content: `
            <h2>Forms in Django</h2>
            <p>Django provides a convenient way to create HTML forms and handle form submissions. Let's create a simple form for voting in our poll app.</p>
    
            <p>Create a file named <code>forms.py</code> in the <code>polls</code> directory:</p>
    
            <pre><code>from django import forms
    
    class VoteForm(forms.Form):
        choice = forms.ModelChoiceField(queryset=Choice.objects.all(), widget=forms.RadioSelect)
    </code></pre>
    
            <h3>Explanation</h3>
            <ul>
                <li><code>VoteForm</code>: This is a Django form class.</li>
                <li><code>choice</code>: This is a form field that allows the user to select a choice from a set of radio buttons. The <code>queryset</code> argument specifies which choices should be included in the form.</li>
                <li><code>widget=forms.RadioSelect</code>: This tells Django to render the choice field as a set of radio buttons.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video8.mp4'
    },
    {
        id: 9,
        title: 'Django URLs: Mapping URLs to Views',
        content: `
            <h2>URLs in Django</h2>
            <p>URLs are how you tell Django which view to use for a given web request. You create URL patterns in the <code>polls/urls.py</code> file:</p>
    
            <pre><code>from django.urls import path
    from . import views
    
    urlpatterns = [
        path('', views.index, name='index'),
    ]</code></pre>
    
            <h3>Explanation</h3>
            <ul>
                <li><code>path('', views.index, name='index')</code>: This creates a URL pattern that matches the empty string ('') and calls the <code>views.index</code> view.</li>
                <li>The <code>name='index'</code> argument gives the URL pattern a name, which you can use to refer to it from other parts of Django.</li>
            </ul>
        `
        // videoUrl: 'path/to/your/video7.mp4'
    },
    {
        id: 10,
        title: 'Django URL Configuration: Mapping URLs to Views',
        content: `
            <h2>URLs in Django</h2>
            <p>URLs (Uniform Resource Locators) are the web addresses that users type into their browser to access different pages of your Django application. Django's URL configuration system allows you to define clean and intuitive URLs that map to specific views.</p>

            <h3>Configuring URLs</h3>
            <p>To configure URLs for your "polls" app, create a file named <code>urls.py</code> inside the <code>polls</code> directory.</p>

            <pre><code>from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
</code></pre>

            <h3>Explanation</h3>
            <ul>
                <li><code>path('', views.index, name='index')</code>: This line defines a URL pattern. 
                    <ul>
                        <li>The empty string <code>''</code> matches the root URL of the app (e.g., <code>/polls/</code>).</li>
                        <li><code>views.index</code> is the view function that will be called when this URL is accessed.</li>
                        <li><code>name='index'</code> gives this URL pattern a name, which you can use to refer to it later.</li>
                    </ul>
                </li>
            </ul>

            <h3>Including App URLs in the Project</h3>
            <p>Now, you need to tell the main project's <code>urls.py</code> file to include the <code>polls.urls</code> module:</p>

            <pre><code>from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
</code></pre>

            <p>This means that any URL that starts with <code>/polls/</code> will be handled by the <code>polls.urls</code> configuration.</p>

            <h3>Regular Expressions for More Flexibility</h3>
            <p>You can use regular expressions in your URL patterns for more complex matching. For example:</p>
            <pre><code>path('polls/&lt;int:question_id&gt;/', views.detail, name='detail')</code></pre>
            <p>This pattern will match URLs like <code>/polls/5/</code> (where 5 is the question ID) and pass the ID to the <code>views.detail</code> view.</p>

            <h3>Key Points</h3>
            <ul>
                <li>Keep your URLs clean, simple, and easy to remember.</li>
                <li>Use meaningful names for your URL patterns.</li>
                <li>Consider the structure of your app when designing your URLs.</li>
            </ul>
        `,
        // videoUrl: 'path/to/your/video8.mp4'
    }
   
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
 

    // Add lesson content below the video (if needed)
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = lesson.content;
    lessonContainer.appendChild(contentDiv);
    lessonContainer.appendChild(videoPlayer);

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