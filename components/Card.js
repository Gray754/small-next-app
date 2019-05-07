const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.charImg} />
      <div className='card-container'>
        <h4>{props.charName}</h4>
        <p>{props.charInfo}</p>
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
          width: 100%;
          height: 45vh;
        }
      `}</style>
    </div>
  );
};

export default Card;
