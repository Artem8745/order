document.documentElement.style.setProperty('--width-cards-large-partners', document.querySelectorAll('.height-cards-large-partners')[0].offsetWidth + 'px')
document.documentElement.style.setProperty('--width-cards-small-partners', document.querySelectorAll('.height-cards-small-partners')[0].offsetWidth + 'px')

document.documentElement.style.setProperty('--height-cards-large-partners', document.querySelectorAll('.height-cards-large-partners')[0].clientHeight + 'px')
document.documentElement.style.setProperty('--height-cards-small-partners', document.querySelectorAll('.height-cards-small-partners')[0].clientHeight + 'px')

window.onresize = () => {
   document.documentElement.style.setProperty('--width-cards-large-partners', document.querySelectorAll('.height-cards-large-partners')[0].offsetWidth + 'px')
   document.documentElement.style.setProperty('--width-cards-small-partners', document.querySelectorAll('.height-cards-small-partners')[0].offsetWidth + 'px')

   document.documentElement.style.setProperty('--height-cards-large-partners', document.querySelectorAll('.height-cards-large-partners')[0].clientHeight + 'px')
   document.documentElement.style.setProperty('--height-cards-small-partners', document.querySelectorAll('.height-cards-small-partners')[0].clientHeight + 'px') 
}