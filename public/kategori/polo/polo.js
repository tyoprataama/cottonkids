const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', () =>{
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal', 'modal-cont');

const showModal2 = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)
    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal2', 'modal-cont');

const closeBtn = document.querySelectorAll('.modal-close');

function closeModal() {
    const modalContainer = document.getElementById('modal-cont')
    modalContainer.classList.remove('show-modal');
}
closeBtn.forEach(c => c.addEventListener('click', closeModal));