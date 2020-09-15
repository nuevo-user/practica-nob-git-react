import React from 'react';
import '../style/section.scss';
// import image
import arequipeño from '../image/arequipeño.jpg';
import chino from '../image/chino.jpg';
import napuri from '../image/napuri.jpg';
// Component
class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="target">
                    <div className="image">
                        <img src={arequipeño} alt="" />
                    </div>
                    <div className="txt">
                        <h3>Ajo arequipeño</h3>
                        <p>La Región Arequipa produce 5 variedades de ajo: chino o gigante arequipeño, masone, barranquino, napurí y morado arequipeño.  Se cuenta entre 1800 y 2000 Has de ajo sembradas.  Los más apropiados para la cocina es el morado arequipeño y en menos dimensión son el barranquino.</p>
                    </div>


                </div>
                <div className="target">
                    <div className="image">
                        <img src={napuri} alt="" />
                    </div>
                    <div className="txt">
                        <h3>Ajo napuri</h3>
                        <p>La Región Arequipa produce 5 variedades de ajo: chino o gigante arequipeño, masone, barranquino, napurí y morado arequipeño.  Se cuenta entre 1800 y 2000 Has de ajo sembradas.  Los más apropiados para la cocina es el morado arequipeño y en menos dimensión son el barranquino.</p>
                    </div>


                </div>
                <div className="target">
                    <div className="image">
                        <img src={chino} alt="" />
                    </div>
                    <div className="txt">
                        <h3>Ajo chino</h3>
                        <p>Pekinense, el ajo chino ha sido reclasificado en la actualidad como una forma de ajo común, Allium Sativum var. Ophioscrodom. Algunas de sus características más importantes son: Cabeza de tamaño medio, con forma ligeramente achatada.</p>
                    </div>


                </div>
            </div>
        )
    }
}

// Export component
export default Section