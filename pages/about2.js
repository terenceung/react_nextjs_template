import React from 'react';
import BaseLayout from '../components/baseLayout';
import { withTranslation } from '../i18n'

class About2 extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { t } = this.props;
        return (
            <BaseLayout>
                <div>
                    {t('about2')}
                </div>
            </BaseLayout>

        )
    }
}

export default withTranslation(['common'])(About2)