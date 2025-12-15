import React, { useState, useEffect } from 'react';
import { AppActionButton } from './AppActionButton';
import { AppCalculationHistory } from './AppCalculationHistory';

export function AppCalculator() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState('');
    const [comparison, setComparison] = useState('');
    const [history, setHistory] = useState([]);

    const isValidInput = a !== '' && b !== '';
    const updateComparison = () => {
        if (a && b) {
            if (parseFloat(a) > parseFloat(b)) {
                setComparison('Liczba A jest większa od liczby B');
            } else if (parseFloat(a) < parseFloat(b)) {
                setComparison('Liczba A jest mniejsza od liczby B');
            } else {
                setComparison('Liczba A jest równa liczbie B');
            }
        }
    };

    const performOperation = (operation) => {
    if (!isValidInput) return;

    let calculatedResult;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    switch (operation) {
        case 'add':
            calculatedResult = numA + numB;
        break;
        case 'subtract':
            calculatedResult = numA - numB;
        break;
        case 'multiply':
            calculatedResult = numA * numB;
        break;
        case 'divide':
            if (numB === 0) {
            alert('Nie można dzielić przez 0');
            return;
            }
            calculatedResult = numA / numB;
        break;
        default:
        return;
    }
        setResult(calculatedResult);
        setHistory([...history, { a: numA, b: numB, operation, result: calculatedResult }]);
    };

    const restoreHistory = (historyItem) => {
        setA(historyItem.a.toString());
        setB(historyItem.b.toString());
        setResult(historyItem.result.toString());
        setComparison(updateComparison());
        setHistory(history.slice(0, history.indexOf(historyItem) + 1));
    };

    useEffect(() => {
        updateComparison();
    }, [a, b]);

    return (
    <div>
        <div>
            <label>
                A:<input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            </label>
        </div>
    <div>
        <label>
            B:<input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
    </div>
    <div>
        <AppActionButton label="Dodaj" onClick={() => performOperation('add')} />
        <AppActionButton label="Odejmij" onClick={() => performOperation('subtract')} />
        <AppActionButton label="Mnożenie" onClick={() => performOperation('multiply')} />
        <AppActionButton label="Dzielenie" onClick={() => performOperation('divide')} />
    </div>
    <div>
        <label>Wynik: </label>
        <input type="text" value={result} readOnly />
    </div>
    <div>
        <label>Porównanie: </label>
        <input type="text" value={comparison} style={{ width: '300px' }} readOnly />
    </div>
        <AppCalculationHistory history={history} restoreHistory={restoreHistory} />
    </div>
    );
}
