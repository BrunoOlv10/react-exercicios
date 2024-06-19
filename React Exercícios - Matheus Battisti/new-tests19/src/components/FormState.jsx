import { useFormState } from 'react-dom'

const FormState = () => {
    const validarUsuario = (prevState, formData) => {
        const nome = formData.get('name');

        if(nome === 'João') {
            console.log(nome)
            return {
                success: true,
                text: 'Bem-vindo, João!',
            }
        } else {
            return {
                success: false,
                text: 'Erro, usuário não encontrado',
            }
        }
    }

    const [mensagem, formAction] = useFormState(validarUsuario, null)

  return (
    <form action={formAction}>
      <label htmlFor="name">Nome</label>
      <input type="text" name='name' />
      <button type='submit'>Enviar</button>
      {mensagem && <h4>{mensagem.text}</h4>}
    </form>
  )
}

export default FormState
