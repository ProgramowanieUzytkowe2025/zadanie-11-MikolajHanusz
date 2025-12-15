import { useState } from "react"

export function AppHeader() {
    const [fontSize, setFontSize] = useState('16px');
    const changeFontSize = (size) => {
        setFontSize(size);
    };
    return (
    <header style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: fontSize }}>
        Autor aplikacji: Mikołaj Hanusz
      </h1>
      <div>
        <span
          onClick={() => changeFontSize('12px')}
          style={{ fontSize: '12px', cursor: 'pointer', margin: '0 10px' }}
        >
          A
        </span>
        <span
          onClick={() => changeFontSize('16px')}
          style={{ fontSize: '16px', cursor: 'pointer', margin: '0 10px' }}
        >
          A
        </span>
        <span
          onClick={() => changeFontSize('24px')}
          style={{ fontSize: '24px', cursor: 'pointer', margin: '0 10px' }}
        >
          A
        </span>
      </div>
    </header>
  );
}