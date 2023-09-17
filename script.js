// Replace this with actual data from your API or source
const articles = [
    {
        title: "Breaking News",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        link: "#"
    },
    // Add more articles here
];

// Function to create and display articles
function displayArticles() {
    const main = document.querySelector("main");

    articles.forEach(article => {
        const articleElement = document.createElement("section");
        articleElement.classList.add("article");
        
        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;
        
        const contentElement = document.createElement("p");
        contentElement.textContent = article.content;
        
        const linkElement = document.createElement("a");
        linkElement.textContent = "Read More";
        linkElement.href = article.link;
        
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articleElement.appendChild(linkElement);
        
        main.appendChild(articleElement);
    });
}

// Call the function to display articles
displayArticles();
