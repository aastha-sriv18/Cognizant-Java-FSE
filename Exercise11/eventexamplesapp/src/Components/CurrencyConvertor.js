import { useState } from "react";

function CurrencyConvertor() {

  const [euro, setEuro] = useState("");
  const [rupees, setRupees] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = (parseFloat(euro) * 90).toFixed(2);

    setRupees(result);

    alert("Indian Rupees = ₹" + result);
  };

  return (
    <div>

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <table>
          <tbody>

            <tr>
              <td>Amount:</td>
              <td>
                <input
                  type="number"
                  value={euro}
                  onChange={(e) => setEuro(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Currency:</td>
              <td>
                <input
                  type="text"
                  value="Euro"
                  readOnly
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">
                  Submit
                </button>
              </td>
            </tr>

          </tbody>
        </table>

      </form>

      <h3>Indian Rupees: ₹{rupees}</h3>

    </div>
  );
}

export default CurrencyConvertor;