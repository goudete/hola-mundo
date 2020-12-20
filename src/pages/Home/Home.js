import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function Home() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="Home-header">
        <h1>
          <span style={{ color: '#81d8f7'}}>Welcome.</span>
        </h1>
        <h3 style={{ marginTop: "1em"}}>
          My name is Enrique Goudet. <br/>
          I am a software engineer from Mexico City <br/>
          currently living in Los Angeles. <br/>

          I like to build stuff.
        </h3>

        <p style={{ marginTop: "2em" }}>
          Twitter: @EnriqueGoudet<br />
          Instagram: @quiquegdt<br />
          Github: goudete
        </p>
      </header>
    </div>
  );
}

export default Home;
