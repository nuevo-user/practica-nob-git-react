import React from 'react';
import '../style/header.scss';

// Component
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h1>VENTA DE AJO POR MAYOR Y MENOR</h1>
                    <p>AREQUIPA-PERU</p>
                </div>
            </div>
        )
    }
}

// Export component
export default Header