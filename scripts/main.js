const buttons = document.getElementsByClassName('modal-button');
for(let button of buttons){
    button.addEventListener('click', openModal);
}

const modalContainer = document.getElementById('modal-container');
modalContainer.addEventListener('click', closeModal);


function openModal() {
    modalContainer.classList.add('active');
}

function closeModal(event) {
    if(event.target.id == 'modal-container') {
        if (!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
    // for(let target = event.target; target.id !='modal-container'; target = event.target.parentElement) 
    //     if (event.target.classList.contains('modal'))
    //         return;  
}