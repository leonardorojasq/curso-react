
import { Usuario } from './componentes/Usuario/Usuario';
import { Card } from './componentes/Card/Card';


function App() {

  const nombre = 'Leonardo'

  return (
    <div>
      <Usuario
        nombre='Leonardo'
        edad={50}
        nacionalidad='Colombia'
      />

    <Card />

    </div>
  );
}

export default App;
