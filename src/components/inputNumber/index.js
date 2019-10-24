import React , {Component} from "react";

class InputNumber extends Component {
    constructor(props) {
        super(props);
        const defaultValue = this.props.defaultValue;
        this.state = {
            innerValue: defaultValue
        }
    }

    //判断是否受控
    get isConstrol() {
        return "value" in this.props;
    }
    //根据是否受控展示返回不同的value
    get value() {
        if (this.isConstrol) {
            return this.props.value;
        } else {
            return this.state.innerValue;
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.value}
                    onChange={e => {
                        if (!this.isConstrol) {
                            this.setState({
                                innerValue: e.target.value
                            })
                        }
                        this.props.onChange(e)
                    }}
                />
            </div>
        )
    }
}

export default InputNumber 