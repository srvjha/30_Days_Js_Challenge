let addtask = document.querySelector('.addtask');
let container = document.querySelector('.container');
let totalCards = document.querySelector('.total-cards');
let taskList = [];

addtask.addEventListener('click', () => {
   
    let taskContainer = document.createElement("div");
    taskContainer.classList.add('taskContainer');

    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
    <form class="form-task">
      <label for="title" class="main">Title</label><br>
      <input type="text" id="title" placeholder="Enter Task" required><br>
      <label for="desc" class="main">Description</label><br>
      <textarea type="text" id="desc" placeholder="Enter Desc" required></textarea><br><br>
      <label for="due-date" class="main">Due Date</label><br>
      <input id='calendar' required /><br>
      <input type="submit" id="submit" value="Add Task">
    </form> 
    `;

    taskContainer.appendChild(task);
    container.appendChild(taskContainer);

    jSuites.calendar(document.getElementById('calendar'), {
        format: 'DD/MM/YYYY',
        time: true,
    });

    taskContainer.querySelector("#submit").addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the form from submitting

      let title = taskContainer.querySelector("#title").value;
      let desc = taskContainer.querySelector("#desc").value;
      let dueDate = taskContainer.querySelector("#calendar").value;
      let newTask = { title, desc, dueDate };
      
      taskList.push(newTask);

      // Clear the form
      taskContainer.remove();

      makeCard(newTask);
  });

  function makeCard(card) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.innerHTML = `
    <div class="card-body">
      <label>
        <input type="checkbox" id="checkbox" />
      </label>
      <h5 class="card-title">${card.title}</h5>
      <p class="card-text">${card.desc}</p>
      <p class="card-date">${card.dueDate}</p>
      <div class="buttons">
        <button class="btn edit-btn">Edit</button>
        <button class="btn delete-btn">Delete</button>
      </div>
    </div>
    `;

    // Edit button functionality
    cardContainer.querySelector(".edit-btn").addEventListener("click", function () {
      let editBtn = this;
      let titleElement = cardContainer.querySelector(".card-title");
      let descElement = cardContainer.querySelector(".card-text");

      if (editBtn.textContent === "Edit") {
        titleElement.contentEditable = true;
        descElement.contentEditable = true;
        titleElement.focus(); // Focus on title to edit
        titleElement.style.outline = "none"
        editBtn.textContent = "Save";
      } else {
        titleElement.contentEditable = false;
        descElement.contentEditable = false;
        editBtn.textContent = "Edit";
        // Update the card data in the taskList if necessary
        card.title = titleElement.textContent;
        card.desc = descElement.textContent;
      }
    });

    // Delete button functionality
    cardContainer.querySelector(".delete-btn").addEventListener("click", function () {
      cardContainer.remove();
    });

    totalCards.appendChild(cardContainer);
  }
});
