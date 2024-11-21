const Exponent = ({ num, exponent }) => {
  const result = num ** exponent;

  const numArray = [];
  for (let i = 0; i < exponent; i++) {
    numArray.push(num);
  }
  const expression = numArray.join(" * ");

  const getExponentNum = (exponent) => {
    switch (exponent) {
      case 2:
        return "²";
      case 3:
        return "³";
      case 4:
        return "⁴";
      case 5:
        return "⁵";
      case 6:
        return "⁶";
      default:
        return "there is no exponent!";
    }
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        {getExponentNum(exponent)}
      </p>
      <p className="exponent-result">
        {expression} = <span className="total">{result}</span>
      </p>
    </div>
  );
};
export default Exponent;
