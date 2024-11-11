function helloWord() {
  const helloWorldText = `hello world! ${Math.random()}`

  console.log(helloWorldText)

  const idRoot = document.getElementById('root')
  idRoot.innerText = helloWorldText
}

export default helloWord
