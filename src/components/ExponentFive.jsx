const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} * {count} ={" "}
      <span className="total">{count ** 4}</span>
    </p>
  </div>
);

export default ExponentFive;
