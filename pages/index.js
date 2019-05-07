import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <div className='indexContainer'>
        <h2>Welcome to Next.js!</h2>
        <p>
          This is a <span>paragraph</span>. I styled this using <span>jsx</span>
          .
        </p>
        <Link href='/products'>
          <button>Superhero Gallery</button>
        </Link>
        <p className='smallText'>Did I also mention I like superheroes?</p>
        <style jsx>{`
          .indexContainer {
            text-align: center;
          }
          h2 {
            font-weight: 500;
            font-size: 2.5rem;
            padding-bottom: 0.5rem;
          }
          p {
            font-weight: 300;
            padding-bottom: 1rem;
          }
          .smallText {
            padding-top: 0.3rem;
            font-size: 0.7rem;
          }
          span {
            color: green;
          }
          span:nth-child(2n) {
            color: blue;
          }
          button {
            padding: 1rem 3rem;
            background: none;
            border: 2px solid #387780;
            border-radius: 0.3rem;
            font-size: 1rem;
            font-weight: 500;
            color: #387780;
            transition: 0.3s ease-out;
            cursor: pointer;
          }
          button:hover {
            background: #387780;
            color: #fff;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Index;
