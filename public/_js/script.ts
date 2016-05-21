interface Person{
  name:string,
  greeting:string
}

const welcome = (greeter:Person) => console.log(greeter.name, greeter.greeting)

function init(){
  welcome({name: 'harp', greeting: 'lets go'})
}

document.addEventListener('DOMContentLoaded', init, false)
