
import React from 'react' 
import ReactDOM from 'react-dom'
import NewApp from './components/NewApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<NewApp />, document.getElementById('app'))



















// // under this is an explonation 

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//     }
// }

// const oldSyntax = new OldSyntax
// console.log(oldSyntax)

// // don't have to define the constructor () with npm i 
// // babel-plugin-transform-class-properties@6.24.1
// // and configure the babelrc file 


// class NewSyntax {
//     name = "jen"
//     getGreeting = () => {
//         return `hi my name is ${this.name}`
//         // backtac is important!
//     }

// }
// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting
// console.log(newGetGreeting())


