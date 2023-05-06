const taskContainer = document.querySelector(".task__container");
const globalStore = [];


const generateNewCard = (thisCard) => {
    const cardHtml = `
<div class="col-sm-12 col-md-6 col-lg-4 id=${thisCard.id}">
<div class="card h-100">
<div class="card-header d-flex justify-content-end gap-2">
<button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="card-body">
<img src="${thisCard.imageUrl}" class="card-img-top" alt="...">
<h5 class="card-title mt-3">${thisCard.taskTitle}</h5>
<p class="card-text">${thisCard.taskDesc}</p>
<a href="#" class="btn btn-primary">${thisCard.taskType}</a>
</div>
</div>
</div>

`;
return cardHtml;
}

const loadOnInitiation = () => {

    const getCardData = localStorage.getItem('tasky');

    const {cards} = JSON.parse(getCardData);


    cards.map((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    }
    )


}

const saveChanges = () => {
const taskData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDesc: document.getElementById("taskdesc").value,
    };
console.log(taskData)


taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

taskContainer.

globalStore.push(taskData);

localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};