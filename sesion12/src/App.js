import { useState } from 'react';

function App() {

  const [color, setColor] = useState('#000000');

  const [manageInterval, setManageInterval] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256);

  const getHex = (red, green, blue) => {
    return (
      '#' +
      [red, green, blue]
      .map((c) =>{
        const hex = c.toString(16);
        return hex.lenght === 1 ? '0' + hex : hex;
      })
      .join('')
    );
  };

  const generateHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor()
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
  };

  const changeColor = () => {
    return setManageInterval(setInterval(generateHex, 250));
  };

  const stopChangeColor = () => {
    return clearInterval(manageInterval);
  };

  const doubleClickColor = () => {
    return clearInterval(manageInterval);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <div
        onMouseOver={changeColor}
        onMouseLeave={stopChangeColor}
        onDoubleClick={doubleClickColor}
        style={{ width: '255px', height: '255px', backgroundColor: color }}
      ></div>
    </div>
  );
}

export default App;
