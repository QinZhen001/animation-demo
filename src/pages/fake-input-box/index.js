import "./index.html"


const content = document.querySelector('.center .input .text'),
  numbers = document.querySelectorAll('.number'),
  submitBtn = document.getElementById('submitBtn'),
  del = document.getElementById('del')

let value = ''

function setNum() {
  let len = value.length
  console.log(len)
  if (len > 0 && len < 10) {
    submitBtn.classList.add('active')
  } else {
    value = ''
    submitBtn.classList.remove('active')
  }
  content.setAttribute('data-content', value)
}

numbers.forEach(ele => {
  ele.addEventListener('click', function () {
    value += this.innerHTML
    setNum()
  })
})

del.addEventListener('click', function () {
  value = ''
  setNum()
})
