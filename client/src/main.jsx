import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './componentes/templates/Footer/footer.jsx'; 

const App = () => {
  // Tu contenido principal aquí
  return (
    <div>
      <h1>Tu aplicación principal</h1>
      {/*  */}
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
