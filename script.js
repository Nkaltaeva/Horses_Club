document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".blog-player-artist");
  const itemsPerPage = 3; //количество отображаемых людей
  let currentPage = 0;
  const items = Array.from(content.getElementsByTagName("li")).slice(0);

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle("hidden", index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }

  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement("div");
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add("pagination");

    // кнопки
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i + 1;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });

      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll(".pagination button");
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  createPageButtons();
  showPage(currentPage);
});

//бегущая строка

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("div.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let p = 0; p < marqueeElementsDisplayed; p++) {
  marqueeContent.appendChild(marqueeContent.children[p].cloneNode(true));
}
