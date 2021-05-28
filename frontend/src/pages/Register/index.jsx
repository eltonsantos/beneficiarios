import Dependentes from '../../components/Dependentes';

const Register = () => {

  function openModal() {
    const buttonOpenModal = document.getElementById('openModal');

    const modalWrapper = document.querySelector('.modal-wrapper');

    const span = document.getElementById('close');

    buttonOpenModal.onclick = function () {
      modalWrapper.classList.remove('invisible');
    }

    span.onclick = function () {
      modalWrapper.classList.add('invisible');
    }

    window.onclick = function (event) {
      if (event.target === modalWrapper) {
        modalWrapper.classList.add('invisible');
      }
    }

    document.addEventListener('keydown', function (event) {
      const isEscKey = event.key === 'Escape';
      if (isEscKey) {
        modalWrapper.classList.add('invisible');
      }
    });
  }

  return (
    <>
      <h3 className="px-5 py-5 space-y-6 sm:p-6 text-indigo-500 font-bold text-2xl">Cadastrar Beneficiário</h3>

      <div className="grid grid-flow-col grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 gap-2">
        <form>

          <div className="modal-wrapper invisible fixed bg-gray-700 bg-opacity-30 w-screen h-screen flex items-center justify-center">
            <div className="pt-4 pb-7 pr-10 pl-10 bg-white border-2 border-indigo-300 rounded ">

              <span id="close" className="close text-3xl text-indigo-500 font-bold cursor-pointer block text-right">&times;</span>

              <Dependentes />
            </div>
          </div>

          <div className="px-4 py-5 space-y-6 sm:pb-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
                </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                Sobrenome
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                className="mt-1 py-3 px-4 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Escolha um benefício
                    </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full py-3 px-4 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:bg-white   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:ring-2 focus:ring-offset-2"
              >
                <option>Auxílio Doença</option>
                <option>Seguro Desemprego</option>
                <option>Bolsa família</option>
              </select>
            </div>

            <button type="button" onClick={() => openModal()} id="openModal" className="block w-full justify-center border shadow-sm mt-3 p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-offset-2">Incluir dependente</button>

            <div>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Alterar
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Escolha uma foto</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Envie um arquivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">ou arraste e solte aqui</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
                </div>
              </div>
            </div>
            
            <div className="text-right sm:px-0">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar dados
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register;