import React from 'react';
import { useRecoilValue } from 'recoil';
import { withTranslation } from '../i18n';
import { counterState } from '../globalStates/counterState';


function CounterComponent(props){
    const counter = useRecoilValue(counterState);
    const { t } = props;

    return (
        <div>
            <div>This is a counter component</div>
            <div>{t('count')}: {counter.count}</div>
            
        </div>
    );
}

export default withTranslation()(CounterComponent)