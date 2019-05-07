import Layout from '../components/Layout';
import Card from '../components/Card';

class products extends React.Component {
  constructor() {
    super();
    this.state = {
      charName: 'Batman',
      charImg:
        'https://vignette.wikia.nocookie.net/marvel_dc/images/5/56/Batman_0180.jpg/revision/latest?cb=20130530164421',
      charInfo: 'Bruce Wayne by day. Gotham Bat by night.'
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Superhero Glossary</h2>
          <div className='productsContainer'>
            <Card
              charName={this.state.charName}
              charImg={this.state.charImg}
              charInfo={this.state.charInfo}
            />
            <Card
              charName={'Superman'}
              charImg={
                'https://growtix-melupufoagt.stackpathdns.com/media/big//73/12/39/5b3f74a4-2588-4bc3-9d64-18d8ac1c1072.jpg'
              }
              charInfo={`Look, up in the sky! It's a bird! It's a plane! No, it's Superman!`}
            />
            <Card
              charName={'Aquaman'}
              charImg={
                'http://topnewswood.com/wp-content/uploads/2018/12/cindiafotoFotoJet-3-4.jpg'
              }
              charInfo={'Talks to fish. But hates when you tell him that.'}
            />
            <Card
              charName={'Wonder Woman'}
              charImg={
                'https://pixel.nymag.com/imgs/daily/vulture/2019/03/14/14-wonder-woman.w700.h700.jpg'
              }
              charInfo={'Daughter of Zeus.'}
            />
            <Card
              charName={'Flash'}
              charImg={
                'https://vignette.wikia.nocookie.net/dcanimated/images/7/74/Flash.png/revision/latest?cb=20180707194546'
              }
              charInfo={'Runs so fast he can cause different timelines.'}
            />
            <Card
              charName={'Cyborg'}
              charImg={
                'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Cyborg_%28Victor_Stone%29.jpg/250px-Cyborg_%28Victor_Stone%29.jpg'
              }
              charInfo={'Half Man, Half Machine'}
            />
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
            h2 {
              text-align: center;
              padding-bottom: 1.3rem;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default products;
