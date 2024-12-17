import natacion from '../assets/natacion.jpg'
import ciclismo from '../assets/ciclismo.jpg'
const SportsGallery = () => {
    return (
      <div>
        <h2>Galería de Deportes Favoritos</h2>
        <div className="gallery">
          <div>
            <img src="/public/imagenes/atletismo.jpg" alt="Atletismo" width="150" />
            <p>Atletismo</p>
          </div>
          <div>
            <img src="/public/imagenes/boxeo.jpg" alt="Boxeo" width="150" />
            <p>Boxeo</p>
          </div>
          <div>
            <img src={natacion} alt="Natación" width="150" />
            <p>Natación</p>
          </div>
          <div>
            <img src={ciclismo} alt="Ciclismo" width="150" />
            <p>Ciclismo</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SportsGallery;
  