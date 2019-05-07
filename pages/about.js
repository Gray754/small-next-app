import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>
          This site was built to learn and understand Next.js, to better
          understand CSS, and to understand SSR (server-side rendering). This is
          purely for an educational, personal, and hobbyist use.
        </p>
        <style jsx>{`
          div {
            display: grid;
            justify-items: center;
          }
          h2 {
            padding-bottom: 0.5rem;
            font-size: 2.5rem;
            font-weight: 400;
          }
          p {
            width: 60%;
            text-align: center;
            font-weight: 300;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default About;
