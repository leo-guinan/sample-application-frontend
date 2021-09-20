// //  "id": "1",
// "createdAt": "2021-05-18T19:25:10.755Z",
// "name": "Ragdoll",
// "image": "https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg",
// "price": "492.00"
const Cat = (props) => {
  return (
    <div>
      <figure className="image is-128x128 is-inline-block">

        <img src={props.imgSrc} />
      </figure>
      <div>Name: {props.name}</div>
      <div>Price: {props.price}</div>
      <div>{props.button}</div>
    </div>
  );
};

export default Cat;
