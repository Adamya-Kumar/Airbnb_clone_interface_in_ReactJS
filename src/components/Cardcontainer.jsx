import Card from "./Card";

function Cardcontainer({ result }) {
  return (
    <div className="flex flex-wrap justify-around">
      {result.map((index) => (
        <Card index={index} />
      ))}
    </div>
  );
}
export default Cardcontainer;
