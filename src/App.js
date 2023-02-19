import "./App.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function MyComponent() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="App">
      <Rating
        disableFillHover
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  );
}

function App() {
  return (
    <div classname="App">
      <h2>Salaah Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Salaah</th>
            <th>Prayed</th>
            <th>Bajma'at</th>
            <th>In Masjid</th>
            <th>Khusoo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="salah">Fajr</td>
            <td>
              <input type="checkbox" name="name1" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <Rating />
            </td>
          </tr>
          <tr>
            <td className="salah">Dhuhr</td>
            <td>
              <input type="checkbox" name="name1" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </td>
          </tr>
          <tr>
            <td className="salah">Asr</td>
            <td>
              <input type="checkbox" name="name1" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
            </td>
          </tr>
          <tr>
            <td className="salah">Maghrib</td>
            <td>
              <input type="checkbox" name="name1" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </td>
          </tr>
          <tr>
            <td className="salah">Isha</td>
            <td>
              <input type="checkbox" name="name1" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <input type="checkbox" name="name2" />
              &nbsp;
            </td>
            <td>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
