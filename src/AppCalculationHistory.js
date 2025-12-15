export function AppCalculationHistory({ history, restoreHistory }) {
  const getOperationSymbol = (operation) => {
  switch (operation) {
    case 'add':
      return '+';
    case 'subtract':
      return '-';
    case 'multiply':
      return '*';
    case 'divide':
      return '/';
    default:
      return '';
  }
};
  return (
    <div>
      <h3>Historia działań</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.a} {getOperationSymbol(item.operation)} {item.b} = {item.result}
            <button onClick={() => restoreHistory(item)}>Przywróć</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
