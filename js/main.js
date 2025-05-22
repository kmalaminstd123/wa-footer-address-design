// footer pop / hover elm close and hover functionality

// document.addEventListener('DOMContentLoaded', function () {
//   const officeClickElm = document.querySelectorAll('.office-hov-cls')
//   const officeAddrElm = document.querySelectorAll('.office-address')
//   const mainOfficeAddrElm = document.querySelectorAll('.office-details')

//   for (let i = 0; i < officeClickElm.length; i++) {
//     officeClickElm[i].addEventListener('click', () => {
//       officeAddrElm[i].style.display = 'none'
//     })

//     mainOfficeAddrElm[i].addEventListener('click', () => {
//       officeAddrElm[i].style.display = 'block'
//     })


//   }
// })


document.addEventListener('DOMContentLoaded', function () {
  const officeClickElm = document.querySelectorAll('.office-hov-cls')
  const officeAddrElm = document.querySelectorAll('.office-address')
  const mainOfficeAddrElm = document.querySelectorAll('.office-details')
  // const footerContainer = document.querySelector('footer') // Add a container reference

  for (let i = 0; i < officeClickElm.length; i++) {
    officeClickElm[i].addEventListener('click', () => {
      officeAddrElm[i].style.display = 'none'
    })

    mainOfficeAddrElm[i].addEventListener('click', () => {
      // First hide all address elements
      officeAddrElm.forEach(addr => {
        addr.style.display = 'none'
      })
      // Then show the clicked one
      officeAddrElm[i].style.display = 'block'
    })
  }

  // Add mouseover event to the footer container
  document.addEventListener('mouseover', (event) => {
    // Check if the mouse is not over an office address or its parent
    const isOverAddress = event.target.closest('.office-address')
    const isOverDetails = event.target.closest('.office-details')
    
    if (!isOverAddress && !isOverDetails) {
      // Hide all address elements
      officeAddrElm.forEach(addr => {
        addr.style.display = 'none'
      })
    }
  })
})

