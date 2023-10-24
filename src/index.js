const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");


const studentElements = document.querySelectorAll('.student');
const colorElements = document.querySelectorAll('span');
const elements = document.querySelectorAll('body');
const bodyElement = elements[0];
const deleteButtonsElements = document.querySelectorAll('.delete-button');


const students = [
  {
    name: "Глеб",
    color: "#ff2600",
    isLover: false,
  },
  {
    name: "Иван",
    color: "#00f900",
    isLover: false,
  },
  {
    name: "Люси",
    color: "#0432ff",
    isLover: true,
  },
];

const renderStudents = () => {
  const studentsHtml = students.map((student, index) => {
    return `<li class="student" data-color="${student.color}" data-name="${student.name}">
      <p class="student-name">
        ${student.name}, любимый цвет
        <span style="color: ${student.color}"> ${student.color}</span>
      </p>
      <button data-index="${index}" class="button-delete">Удалить</button>
      <button data-index="${index}" class="button-delete-name">Стереть имя</button>
    </li>`;
  })
    .join("");

  listElement.innerHTML = studentsHtml;

  initEventListeners();
  colorEventListeners();
  initDeleteButtonsListeners();
  initDeleteNameButtonListeners();

};



const colorEventListeners = () => {
  const colorElements = document.querySelectorAll('span');
  const elements = document.querySelectorAll('body');
  const bodyElement = elements[0];
  for (const colorElement of colorElements) {
    colorElement.addEventListener('click', () => {
      bodyElement.style.backgroundColor = 'red';
    });
  }
};

const initEventListeners = () => {
  const studentElements = document.querySelectorAll('.student');
  for (const studentElement of studentElements) {
    studentElement.addEventListener('click', () => {
      console.log(studentElement.dataset.color);
      console.log(`Приветсвую, ${studentElement.dataset.name}`);
    });
  }
};

const initDeleteButtonsListeners = () => {
  const deleteButtonsElements = document.querySelectorAll('.button-delete');

  for (const deleteButtonElement of deleteButtonsElements) {
    deleteButtonElement.addEventListener('click', () => {
      console.log('Удаляю элемент...');
      const index = deleteButtonElement.dataset.index;
      students.splice(index, 1);
      renderStudents();
    });
  }
};

const initDeleteNameButtonListeners = () => {
  const deleteNameButtonElements = document.querySelectorAll('.button-delete-name');

  for (const deleteNameButtonElement of deleteNameButtonElements) {
    deleteNameButtonElement.addEventListener('click', () => {
      console.log('Удаляю имя....');
      const index = deleteNameButtonElement.dataset.index;
      students[index].name = 'Неизвестный студент';
      renderStudents();
    });
  }
};



const isLoverListeners = () => {
  for (student of students) {
    if (student.isLover === true) {
      student.color = `#FF8000`;
    }
  };
};

isLoverListeners();
renderStudents();

buttonElement.addEventListener("click", () => {
  nameInputElement.classList.remove("input-error");

  if (nameInputElement.value === "") {
    nameInputElement.classList.add("input-error");
    return;
  }

  students.push({
    name: nameInputElement.value,
    color: colorInputElement.value,
  });

  renderStudents();
  nameInputElement.value = "";
});