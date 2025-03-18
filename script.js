// script.js
function openTab(event, tabId) {
    let tabContents = document.querySelectorAll(".tab-content");
    let tabButtons = document.querySelectorAll(".tab-button");
    
    tabContents.forEach(content => content.classList.remove("active"));
    tabButtons.forEach(button => button.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}