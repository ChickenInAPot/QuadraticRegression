import React, { useState } from 'react';

function QuadraticSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [roots, setRoots] = useState(null);

  const calculateRoots = () => {
    const aVal = parseFloat(a);
    const bVal = parseFloat(b);
    const cVal = parseFloat(c);
    const discriminant = bVal ** 2 - 4 * aVal * cVal;

    if (discriminant > 0) {
      const root1 = (-bVal + Math.sqrt(discriminant)) / (2 * aVal);
      const root2 = (-bVal - Math.sqrt(discriminant)) / (2 * aVal);
      setRoots({ root1, root2 });
    } else if (discriminant === 0) {
      const root = -bVal / (2 * aVal);
      setRoots({ root1: root, root2: root });
    } else {
      setRoots("No real roots");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Quadratic Solver</h2>
      <div>
        <label>
          a:
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          b:
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          c:
          <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
        </label>
      </div>
      <button onClick={calculateRoots}>Calculate Roots</button>
      <div style={{ marginTop: '20px' }}>
        {roots && (
          typeof roots === 'string' ? (
            <p>{roots}</p>
          ) : (
            <p>Roots: {roots.root1} and {roots.root2}</p>
          )
        )}
      </div>
    </div>
  );
}

