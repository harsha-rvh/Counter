document.querySelector('button').addEventListener('click', () => {
    const value = document.querySelector('#result').innerText
    const incrementValue = parseInt(value) + 1
     document.querySelector('#result').innerText = incrementValue
  })