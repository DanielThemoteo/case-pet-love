import './App.css';

import {useState} from 'react'
import Input from './components/Input';
import Card from './components/Card';

import api from './services/api'


function App() {
  const [cep, setCep] = useState('');
  const data = {
    cep: '',
    uf: '',
    logradouro: '',
    localidade: '',
  }
  const [endereco, setEndereco] = useState({})

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await api.get('/'+ cep + '/json/');
      if(response.status === 200){
        data.cep = response.data.cep;
        data.uf = response.data.uf;
        data.localidade = response.data.localidade;
        data.logradouro = response.data.logradouro;
        setEndereco(data)
        console.log(data)
      }
    } catch (error) {
      alert("Erro ao consultar o CEP, por favor, verifique o CEP e tente novamente")
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Card>
          <Input
                        name="CEP"
                        label="Digite seu CEP"
                        maxLength='8'
                        placeholder="00000-000"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        required />
          <button type="submit" >Buscar CEP</button>
        </Card>
      </form>
      <section>
        {
          endereco.cep &&
          <Card >
            <div>
            <p><b>CEP: </b>{endereco.cep}</p>
            <p><b>Estado: </b>{endereco.uf}</p>
            <p><b>Cidade: </b>{endereco.localidade}</p>
            <p><b>Logradouro: </b>{endereco.logradouro}</p>
            </div>
          </Card>
        } 
      </section>
    </main>
  );
}

export default App;
