import React, {Component} from 'react';

class Filters extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const textHandler = (e) => {
            console.log(e.target.value);
            this.props.setInputText(e.target.value);
        };
        return(
            <form>
                <input onChange={textHandler} type="text" className="" />
                <button className="" type="submit">
                    <i className="fa fa-plus"></i>
                </button>

                <div className="">
                    <select className="" name="">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        );
    }
}

export default Filters;