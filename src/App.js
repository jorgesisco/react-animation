import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import StartAnimation from './components/StartAnimation';
import LandingPage from './components/LandingPage';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const goToPage = () => {
    setLoading(false);
  };

  return (
    <Container>
      {loading ? <StartAnimation goToPage={goToPage} /> : <LandingPage />}
    </Container>
  );
}

export default App;

const Container = styled.div``;
