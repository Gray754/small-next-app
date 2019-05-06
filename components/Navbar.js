const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h2>Next.js</h2>
      <ul>
        <li>
          <a href='/index'>Home</a>
        </li>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
      <style jsx>{`
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #387780;
          padding: 0 3rem;
        }
        h2 {
          color: #fff;
          font-weight: 400;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        li {
          list-style-type: none;
        }
        a {
          color: #fff;
          text-decoration: none;
          display: block;
          padding: 1rem 1rem;
          font-size: 0.9rem;
          font-weight: 300;
        }
        a:hover {
          background: #326a72;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
