function GuestPage() {

    return (

        <div>

            <h1>Please sign up.</h1>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fare</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>₹4500</td>
                    </tr>

                    <tr>
                        <td>6E220</td>
                        <td>Chennai</td>
                        <td>Bangalore</td>
                        <td>₹3000</td>
                    </tr>

                </tbody>

            </table>

            <br />

        </div>

    );
}

export default GuestPage;