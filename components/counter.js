import React from 'react';
import { useRecoilValue, atom, useRecoilState } from 'recoil';
import { withTranslation } from '../i18n'

const counterState = atom({
    key: 'counterState',
    default: 0
});

function Counter(props){
    const counter = useRecoilState(counterState);
    const { t } = props;

    return (
        <div>
            {t("count")}: {counter}
        </div>
    )
}

// class Counter extends React.Component {
//     constructor(props){
//         super(props)
//         // const [counter, setCounter] = useRecoilState(counterState);

//     }


//     render() {
//         return (
//             <div>
//                 {/* {counter} */}
//             </div>
//         )
//     }
// }

export default withTranslation()(Counter)