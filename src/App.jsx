import { Header, Formulario, ListadoPacientes } from './components/index';

const App = () => {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default App;
