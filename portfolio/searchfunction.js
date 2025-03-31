const keywordMapping = {
    'london': 'london.html',
    'about me': 'about.html',
    'contact': 'contact.html',
    'blog': 'blog.html',
    'destinations': 'destination.html',
    'login': 'login.html',
    'register': 'login.html',
    'sign up': 'login.html',
    'sign in': 'login.html',
    'dubai': "dubai.html",
    "paris": "paris.html",
    "tokyo": "tokyo.html"
};

function search() {
    const inputElement = document.getElementById('searchInput');
    const input = inputElement.value.toLowerCase().trim();
    if (keywordMapping.hasOwnProperty(input)) {
        window.location.href = keywordMapping[input];
    } else {
        alert('No results found');
    }
}



