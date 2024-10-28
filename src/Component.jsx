import React from 'react';
import { Button } from 'primereact/button';
import { ColorPicker } from 'primereact/colorpicker';
import { useState } from 'react';

const MyComponent = () => {
    const [color, setColor] = useState(null);
  return (
    <div>
      <h1 className='bg-green-200'>Hello, PrimeReact!</h1>
      <Button label="Click Me" icon="pi pi-check" className='bg-blue-200 px-6 py-6'/>
      <div className="card flex justify-content-center" style={{ marginTop: '20px' }}>
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            </div>
    </div>
  );
};

export default MyComponent;