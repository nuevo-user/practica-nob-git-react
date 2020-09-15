import React from 'react';
import '../style/footer.scss';

// import image
import Ubicacion from '../image/ubicacion.jpg';
import Agricultor from '../image/agricultor.jpg';
// Component
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src={Ubicacion} alt="" />
                <img src={Agricultor} alt="" />
            </div>
        )
    }
}

// Export component
export default Footer