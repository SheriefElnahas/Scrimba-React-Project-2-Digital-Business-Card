import './App.css';

import Info from './Info';
import Section from './Section';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Info />
      <Section title="About" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit blanditiis ducimus labore sunt placeat veniam iusto tempore ex dolorem."/>
      <Section title="Interests" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit blanditiis ducimus labore sunt placeat veniam iusto tempore ex dolorem."/>
      <Footer />
    </div>
  )
}

export default App
