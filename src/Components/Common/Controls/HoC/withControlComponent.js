import React, {PropTypes} from 'react';

const withControlComponent = ({WrappedComponent}) => {
    return class ctrl extends React.Component {
        constructor(props){
            super(props);

            debugger;

            this.state = {
                ctrlValue: '',
            };

            this.ctrlOnChange = this.ctrlOnChange.bind(this);

        }


        ctrlOnChange(e){

            debugger;

            this.setState({
                ctrlValue: e.target.value,
            })

        }

        render(){

            debugger;

            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.ctrlOnChange,
                }
            };

            return (
                <WrappedComponent
                    {...props}
                    onChange={this.ctrlOnChange} />
            );


        }


    }

};

withControlComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export default withControlComponent;

