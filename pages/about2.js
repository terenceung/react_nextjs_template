import PropTypes from 'prop-types'
import React from 'react';
import { withTranslation } from '../i18n'

const a = 1;

class About2 extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        const { t } = this.props;
        return (
            <div>
                {t('about2')}
            </div>
        )
    }
}

export default withTranslation()(About2)