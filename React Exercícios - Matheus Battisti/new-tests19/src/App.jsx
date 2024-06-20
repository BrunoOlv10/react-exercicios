import './App.css'
import UserForm from './components/UserForm'
import ParentComponent from './components/ParentComponent'
import PostsItems from './components/PostItems'
import ThemeButton from './components/ThemeButton'
import FormStatus from './components/FormStatus'
import FormState from './components/FormState'
import AppMessage from './components/AppMessage'

import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <>
      <title>Home</title>
      <meta name="description" content="New Test" />
      <h1>1- Actions</h1>1- Actions
      <UserForm />
      <h1>2- ref como props</h1>
      <ParentComponent />
      <h1>3- use para carregamento de dados</h1>
      <PostsItems />
      <h1>4- use para aplicar contextos</h1>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <h1>5- useFormStatus para status de envio de um formulário</h1>
      <FormStatus />
      <h1>6- useFormState atualização baseada em resposta do usuário</h1>
      <FormState />
      <h1>7- Melhorar a resposta do usuário até que a atualização não chegue</h1>
      <AppMessage />
    </>
  )
}

export default App
