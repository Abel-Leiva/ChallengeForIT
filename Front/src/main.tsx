
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import { TaskProviderWrapper } from './contexts/task.context.tsx';


createRoot(document.getElementById('root')!).render(
  <TaskProviderWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TaskProviderWrapper>
)
