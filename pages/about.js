import React, { useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import CounterComponent from '../components/counterComponent';
import BaseLayout from '../components/baseLayout';



function About({t}) {
    const [count, setCount] = useState(0);

    function onClickAdd() {
        setCount(count + 1);
    }

    function onClickNavAbout2() {
        Router.push('/about2');
    }

    return (
        <BaseLayout title={'About'}>
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
        </BaseLayout>

    )
}


export default withTranslation('common')(About);