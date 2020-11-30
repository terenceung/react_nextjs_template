import React from 'react';
import { withTranslation } from '../i18n';
import { connect } from 'react-redux';


function Counter({t, counter}){
    return (
        <div>
            <div>This is a counter component</div>
            <div>{t('count')}: {counter.count}</div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, null)(withTranslation()(Counter));