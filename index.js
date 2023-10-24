const summaryList = document.querySelector(".summary__list");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      const listItem = document.createElement("li");
      const backgroundClass = el.category.toLowerCase() + "-bg";

      const textClass = el.category.toLowerCase() + "-text";
      listItem.classList.add("summary__item", backgroundClass);

      const itemHTML = `
        <div class="summary__item-icon-wrapp">
        <img src=${el.icon} />
        <p class='summary__text ${textClass}'>${el.category}</p>
      </div>
      <p class="summary__numbers">
        ${el.score}<span class="pale-score-total"> / 100</span>
      </p>
        `;
      listItem.innerHTML = itemHTML;
      summaryList.insertAdjacentElement("beforeend",listItem);
    });
  })
  .catch((error) => {
    console.error(error);
  });
