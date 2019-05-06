import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className='indexContainer'>
        <h2>Welcome to Next.js!</h2>
        <p>
          This is a <span>paragraph</span>. I styled this using <span>jsx</span>
          .
        </p>
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
          }
          span {
            color: green;
          }
          span:nth-child(2n) {
            color: blue;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Index;
