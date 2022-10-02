import React from 'react';
import styled from 'styled-components';
import { useSettings } from '@ombori/ga-settings';
import { Settings } from './schema';

function App() {
  const settings = useSettings<Settings>();
  if (!settings) return <div>Loading settings...</div>;

  return (
    <Container>
      HELLO EVERYTHING! I LOVE YOU!
    </Container>
  );
}

const Container = styled.div`
  width: 100vw; 
  height: 100vh; 
  display: flex;
  align-items: center; 
  justify-content: center;
  color: #fff;
  background: #000;
`;

export default App;
