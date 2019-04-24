import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                Select a Language
                <i onClick={() => this.context.onLanguageChange('english')} className="flag us"></i>
                <i onClick={() => this.context.onLanguageChange('dutch')} className="flag nl"></i>
            </div>
        )
    }
}

export default LanguageSelector;