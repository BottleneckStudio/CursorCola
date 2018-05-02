import React from 'react'
import Header from './header';
import Row from './row';


class PageBody extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <section>
                <Header/>
                <div className="container">
                    <Row/>
                </div>
            </section>
        )
    }
}

export default PageBody;