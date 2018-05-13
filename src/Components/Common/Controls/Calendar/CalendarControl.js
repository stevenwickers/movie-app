import React, {PropTypes} from 'react';
import Calendar from 'rc-calendar';
import moment from 'moment';
import '../../../../../node_modules/rc-calendar/dist/rc-calendar.css';

const CalendarControl = ({id, onChange, onClick, defaultDate}) =>{


    const convertToMoment = (value) =>{

        debugger;

        if(value === ''){
            debugger;
            let date = new Date().toLocaleDateString();
            return moment(date,'MM-DD-YYYY');
        }

        return moment(value,'MM-DD-YYYY');

    };


    return(
        <Calendar style={{position: 'absolute'}}
            defaultValue={convertToMoment(defaultDate)}
            showDateInput={false}
            showToday={true}
            showOk={true}
            onChange={(e) =>onClick(id,e)}
            onSelect={(e) =>onChange(id,e)} />
    )

};

CalendarControl.propTypes = {
    id:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default CalendarControl;