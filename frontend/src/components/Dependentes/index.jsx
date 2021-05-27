const Dependentes = () => {
  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          name="name_dependente"
          id="name_dependente"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
          Sobrenome
        </label>
        <input
          type="text"
          name="surname_dependente"
          id="surname_dependente"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="col-span-6 sm:col-span-4">
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
          CPF
        </label>
        <input
          type="text"
          name="cpf_dependente"
          id="cpf_dependente"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>

  )
}

export default Dependentes;