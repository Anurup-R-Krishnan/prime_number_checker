import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState('');

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const getFactors = (n) => {
    const factors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  };

  const handleCheck = () => {
    setError('');
    setResult(null);
    setFactors([]);
    
    const num = parseInt(number);
    
    if (isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }
    
    if (num < 0) {
      setError('Please enter a non-negative number');
      return;
    }
    
    if (num > 1000000) {
      setError('Please enter a number less than or equal to 1,000,000');
      return;
    }
    
    const prime = isPrime(num);
    setResult(prime);
    
    if (num <= 100) {
      setFactors(getFactors(num));
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#4facfe',
          marginBottom: '30px',
          fontSize: '36px'
        }}>
          Prime Number Checker
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            color: '#333',
            fontWeight: 'bold'
          }}>
            Enter a number:
          </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Enter a non-negative integer"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={handleCheck}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Check Prime
        </button>

        {error && (
          <div style={{
            padding: '15px',
            background: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            color: '#c33',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {result !== null && (
          <div style={{
            padding: '25px',
            background: result 
              ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
              : 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              {number}
            </div>
            <div style={{ fontSize: '20px' }}>
              {result ? '✓ IS A PRIME NUMBER' : '✗ IS NOT A PRIME NUMBER'}
            </div>
            {!result && number > 1 && (
              <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.9 }}>
                This number is composite
              </div>
            )}
            {number <= 1 && (
              <div style={{ fontSize: '14px', marginTop: '10px', opacity: 0.9 }}>
                Numbers ≤ 1 are neither prime nor composite
              </div>
            )}
          </div>
        )}

        {factors.length > 0 && (
          <div style={{
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginTop: 0, color: '#333' }}>
              Factors of {number}:
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {factors.map((factor, index) => (
                <span
                  key={index}
                  style={{
                    padding: '8px 16px',
                    background: '#4facfe',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  {factor}
                </span>
              ))}
            </div>
            <div style={{
              marginTop: '15px',
              fontSize: '14px',
              color: '#666'
            }}>
              Total factors: {factors.length}
              {factors.length === 2 && ' (Prime has exactly 2 factors: 1 and itself)'}
            </div>
          </div>
        )}

        <div style={{
          padding: '15px',
          background: '#e3f2fd',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#555'
        }}>
          <strong>What is a Prime Number?</strong>
          <p style={{ margin: '8px 0 0 0' }}>
            A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;