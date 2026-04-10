import { useState } from 'react';
import Navbar from './components/Navbar';
import Page1Overview from './pages/Page1Overview';
import Page2Analysis from './pages/Page2Analysis';
import Page3GISPolicy from './pages/Page3GISPolicy';
import Page4Chatbot from './pages/Page4Chatbot';

function App() {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Page1Overview />;
      case 'analysis':
        return <Page2Analysis />;
      case 'gis':
        return <Page3GISPolicy />;
      case 'chatbot':
        return <Page4Chatbot />;
      default:
        return <Page1Overview />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
    </>
  );
}

export default App;
