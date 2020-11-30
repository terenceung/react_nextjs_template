import React, { useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import Counter from '../components/counter';
import BaseLayout from '../components/baseLayout';
import { set } from '../redux/counterRedux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//this page shows the different between local state / global state (redux store)
function About({t, set}) {
    const [count, setCount] = useState(0);

    function onClickAdd() {
        setCount(count + 1);
        set();
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
                <Counter />
            </div>
        </BaseLayout>

    )
}


const mapDispatchToProps = dispatch => bindActionCreators({
    set
}, dispatch)


export default connect(null, mapDispatchToProps)(withTranslation(['common'])(About));