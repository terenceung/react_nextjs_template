import React, { useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import CounterComponent from '../components/counterComponent';
import { useRecoilState } from 'recoil';
import { counterState } from '../globalStates/counterState';



function About(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useRecoilState(counterState);

    const { t } = props;

    function onClickAdd() {
        setCount(count + 1);
        setCount2(prev=>{
            return {
                ...prev,
                count: prev.count + 1
            }
        });
    }

    function onClickNavAbout2() {
        Router.push('/about2');
    }

    
    return (
        <div>
            {t('about')}, Count: {count}
            <div>
                <button onClick={onClickAdd}>Add</button>
            </div>
            <div>
                <button onClick={onClickNavAbout2}>About 2</button>
            </div>
            <div>
                <Link href='/about2'>About 2</Link>
            </div>
            <CounterComponent />
        </div>
    )
}


export default withTranslation()(About);