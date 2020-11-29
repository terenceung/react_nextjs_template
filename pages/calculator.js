import React, { useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import BaseLayout from '../components/baseLayout';
import { add, subtract } from './../redux/calculatorRedux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



function Calculator({t, add, subtract, calculator}) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function onClickAdd(){
        add({
            nums: [num1, num2]
        });
    }

    function onClickSubtract(){
        subtract({
            nums: [num1, num2]
        });
    }

    return (
        <BaseLayout title={'Calculator'}>
            <div>
                {t('calculator')}
            </div>
            <div>
                {`${calculator.nums[0]} ${calculator.operator} ${calculator.nums[1]} = ${calculator.result}`}
            </div>
            <div>
                <input id='input-num1' value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))}/>
                <input id='input-num2' value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))}/>
            </div>
            <div>
                <button onClick={onClickAdd}>Add</button>
                <button onClick={onClickSubtract}>Subtract</button>
            </div>
        </BaseLayout>

    )
}

const mapStateToProps = (state) => {
    return {
        calculator: state.calculator
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    add,
    subtract
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Calculator));