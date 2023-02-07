const showModal = ([openButton], modalContent) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)
    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal(['open-modal', 'open-modal2'], 'modal-cont');

const showModal2 = (openButton2, modalContent2) => {
    const openBtn2 = document.getElementById(openButton2),
        modalContainer2 = document.getElementById(modalContent2)
    if (openBtn2 && modalContainer2) {
        openBtn2.addEventListener('click', () => {
            modalContainer2.classList.add('show-modal')
        })
    }
}
showModal2('open-modal2', 'modal-cont');

const showModal3 = (openButton3, modalContent3) => {
    const openBtn3 = document.getElementById(openButton3),
        modalContainer3 = document.getElementById(modalContent3)
    if (openBtn3 && modalContainer3) {
        openBtn3.addEventListener('click', () => {
            modalContainer3.classList.add('show-modal')
        })
    }
}
showModal3('open-modal3', 'modal-cont');

const showModal4 = (openButton4, modalContent4) => {
    const openBtn4 = document.getElementById(openButton4),
        modalContainer4 = document.getElementById(modalContent4)
    if (openBtn4 && modalContainer4) {
        openBtn4.addEventListener('click', () => {
            modalContainer4.classList.add('show-modal')
        })
    }
}
showModal4('open-modal4', 'modal-cont');

const showModal5 = (openButton5, modalContent5) => {
    const openBtn5 = document.getElementById(openButton5),
        modalContainer5 = document.getElementById(modalContent5)
    if (openBtn5 && modalContainer5) {
        openBtn5.addEventListener('click', () => {
            modalContainer5.classList.add('show-modal')
        })
    }
}
showModal5('open-modal5', 'modal-cont');

const showModal6 = (openButton6, modalContent6) => {
    const openBtn6 = document.getElementById(openButton6),
        modalContainer6 = document.getElementById(modalContent6)
    if (openBtn6 && modalContainer6) {
        openBtn6.addEventListener('click', () => {
            modalContainer6.classList.add('show-modal')
        })
    }
}
showModal6('open-modal6', 'modal-cont');

const closeBtn = document.querySelectorAll('.modal-close');

function closeModal() {
    const modalContainer = document.getElementById('modal-cont')
    modalContainer.classList.remove('show-modal');
}
closeBtn.forEach(c => c.addEventListener('click', closeModal));