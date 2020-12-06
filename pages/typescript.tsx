import React, { useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import Counter from '../components/counter';
import BaseLayout from '../components/baseLayout';
import { set } from '../redux/counterRedux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { WithTranslation } from 'next-i18next';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface Props extends WithTranslation{
    set: ActionCreatorWithPayload<any, string>
}

//this page shows the different between local state / global state (redux store)
const Typescript : React.FC<Props> = ({t, set}) => {
    const [count, setCount] = useState<number>(0);

    function onClickAdd() : void{
        setCount(count + 1);
        set(null);
    }

    function onClickNavAbout2() : void {
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

    );
}


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    set
}, dispatch)


export default connect(null, mapDispatchToProps)(withTranslation(['common'])(Typescript));