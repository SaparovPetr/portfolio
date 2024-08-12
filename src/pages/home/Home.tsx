import './style.css';

const Home = () => (
  <>
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Petr</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className='header__text'>
          <p>with passion for learning and creating.</p>
        </div>
        <a href='/link-to-file-with-cv' className='btn'>
          Download CV
        </a>
      </div>
    </header>
  </>
);

export default Home;
