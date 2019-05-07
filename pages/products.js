import Layout from '../components/Layout';
import Card from '../components/Card';

const products = () => {
  return (
    <Layout>
      <div>
        <h1>Superhero Glossary</h1>
        <div className='productsContainer'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <style jsx>{`
          div {
            padding: 2rem 0;
          }
          .productsContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 3rem;
            justify-items: center;
          }
          h1 {
            text-align: center;
            padding-bottom: 1.3rem;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default products;
