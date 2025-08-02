import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Red from './components/Red.jsx';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const store=createStore(Red);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
)
//heading,paragraph,,images

