class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUw_1aFRJYbT0c_LGVWCfWPeTVuFwFrrxi5obhOv_mEL4bkTjb'
          width='100%'
        />
        <div className='card-container'>
          <h4>Batman</h4>
          <p>
            Batman is a superhero appearing in American comic books published by
            DC Comics. The character was created by artist Bob Kane and writer
            Bill Finger, and first appeared in Detective Comics #27 in 1939.
          </p>
        </div>
        <style jsx>{`
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 80%;
            // border-radius: 0.2rem;
          }
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
          .card-container {
            padding: 0.1rem 1rem;
          }
          h4 {
            padding: 0.5rem 0;
          }
          p {
            padding-bottom: 1rem;
            font-size: 0.8rem;
          }
          img {
            // border-radius: 0.2rem 0 0 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Card;
