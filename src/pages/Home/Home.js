import '../../App.css';
import Navbaroo from '../../components/Navbar/Navbar';


function Home() {
  return (
    <div className="App">
      <Navbaroo />
      <header className="App-header">
        <h1>
          Welcome friend.
        </h1>
        <h3>
          Have a look around. If you have any questions, <br />
          This is where you can find me: <br />

        </h3>
        <p>
          
          Twitter: @EnriqueGoudet <br />
          Instagram: @quiquegdt
        </p>
      </header>
    </div>
  );
}

export default Home;
