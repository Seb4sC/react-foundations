const app = document.getElementById("app");

// Componentes: funciones
function Header({ title }) {
  console.log(title);
  return <h1>{title ? title : "No title passed"}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  // State: estados donde define un valor y la función para alterarlo
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      {/* Props: propiedades */}
      <Header title="React" />
      <Header />
      <ul>
        { names.map((name) => (
          <li key={ name }>{ name }</li>
        )) }
      </ul>
      <button onClick={ handleClick }>Like ({ likes })</button>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
