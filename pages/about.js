import React from 'react';
import { withTranslation, Link, Router} from '../i18n';
import Counter from '../components/counter';


class About extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 1
        };

        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickNavAbout2 = this.onClickNavAbout2.bind(this);
    }

    onClickAdd(){
        let a = 123;
        this.setState(prev=>{
            return {
                count: prev.count + 1
            }
        });
    }

    onClickNavAbout2(){
        Router.push('/about2');
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                {t('about')}, Count: {this.state.count}
                <div>
                    <button onClick={this.onClickAdd}>Add</button>
                </div>
                <div>
                    <button onClick={this.onClickNavAbout2}>About 2</button>
                </div>
                <div>
                    <Link href="/about2">About 2</Link>
                </div>
                <Counter />
            </div>
        )
    }
}

export default withTranslation()(About)