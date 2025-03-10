const tabsContainer = document.getElementById("tabs1");
const tabContents = document.querySelectorAll(".tab__content");
const tabs = document.querySelectorAll(".tab");
console.log(tabContents)
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove("tab_active"));
        tab.classList.add("tab_active");

        tabContents.forEach(content => content.classList.remove("tab__content_active"));
        tabContents[index].classList.add("tab__content_active");
    });
});







