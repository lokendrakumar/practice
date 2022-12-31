
var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPleanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

for(var  i =0; i< selectPleanButtons.length;i++) {
    selectPleanButtons[i].addEventListener('click', function(){
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}


backdrop.addEventListener('click', function(){
    mobileNav.style.display = 'none'
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    backdrop.style.display ='none';
    modal.style.display ='none'
}
toggleButton.addEventListener('click', function(){
    backdrop.style.display = 'block'
    mobileNav.style.display = 'block'
})
