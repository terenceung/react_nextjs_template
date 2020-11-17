import React from 'react';
import { useRecoilValue, atom, useRecoilState } from 'recoil';
import { withTranslation } from '../i18n'

const counterState = atom({
    key: 'counterState',
    default: 0
});

class Counter extends React.Component {
    constructor(props){
        super(props)
        const [counter, setCounter] = useRecoilState(counterState);

    }


    render() {
        return (
            <div>
                {counter}
            </div>
        )
    }
}

export default withTranslation()(Counter)