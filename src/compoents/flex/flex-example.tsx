import "./flex-example.css";

const FlexExample = () => {
  return (
    <div className="container">
      <div className="container-1">
        <div className="item one">1</div>
        <div className="item two">2</div>
        <div className="item three">3</div>
      </div>
      <div className="container-2">
        <div className="item four">4</div>
      </div>
      {/* <div className="item five">5</div>
      <div className="item six">6</div> */}
    </div>
  );
};

export default FlexExample;
