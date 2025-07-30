// let IS_PROD = true;
// const server = IS_PROD ?
//     "https://apnacollegebackend.onrender.com" :

//     "http://localhost:8000"


// export default server;
// src/App.test.js or App.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
