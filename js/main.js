// footer pop / hover elm close and hover functionality

const officeClickElm = document.querySelectorAll('.office-hov-cls')
const officeAddrElm = document.querySelectorAll('.office-address')
const mainOfficeAddrElm = document.querySelectorAll('.office-details')

for(let i = 0; i < officeClickElm.length; i++){
  officeClickElm[i].addEventListener('click', ()=> {
    officeAddrElm[i].style.visibility = 'hidden'
  })
  mainOfficeAddrElm[i].addEventListener('mouseover', ()=> {
    officeAddrElm[i].style.visibility = 'visible'
  })
}
