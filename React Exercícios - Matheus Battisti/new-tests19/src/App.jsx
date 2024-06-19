import './App.css'
import UserForm from './components/UserForm'
import ParentComponent from './components/ParentComponent'
import PostsItems from './components/PostItems'

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
    </>
  )
}

export default App
