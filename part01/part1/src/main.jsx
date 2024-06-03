import ReactDOM from 'react-dom/client'

import App from './App'

let Counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(
  <App counter={Counter} />
)