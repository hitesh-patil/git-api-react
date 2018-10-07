import react from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap';
import './stylesheets/main.sass';
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('githubApp'));