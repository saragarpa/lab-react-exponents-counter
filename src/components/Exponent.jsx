const Exponent = ({ num, exponent }) => {
  const result = num ** exponent;

  const numArray = [];
  for (let i = 0; i < exponent; i++) {
    numArray.push(num);
  }
  const expression = numArray.join(" * ");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {expression} = <span className="total">{result}</span>
      </p>
    </div>
  );
};
export default Exponent;
