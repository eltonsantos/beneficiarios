const Register = () => {
  return (
    <div>
      <h1>Registrar</h1>
      <form>
        <input type="file"
          id="avatar" name="avatar"
          accept="image/png, image/jpeg" />
        <br />
        <input type="text" className="border-gray-50 border-b-2" name="name" placeholder="Name" />
      </form>
    </div>
  )
}

export default Register;