import SubmitButton from "./SubmitButton"

const FormStatus = () => {
    const formAction = async (formData) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))

        alert('E-mail recebido: ' + formData.get('email'))
    }

  return (
    <div>
      <form action={formAction}>
        <input type="email" name="email" placeholder="Digite um e-mail" />
        <SubmitButton />
      </form>
    </div>
  )
}

export default FormStatus
