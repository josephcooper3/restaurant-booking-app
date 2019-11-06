import React, {Component, Fragment} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookingList extends Component {
         constructor(props){
           super(props);
           this.state = {
             selectedIndex: -1
           }
           this.handleChange = this.handleChange.bind(this)
         }

          handleChange(event) {
            this.setState({selectedIndex: event.target.value})
          this.props.onBookingSelected(event.target.value);
        }
         render(){
        const options = this.props.bookings.map((booking, index) => {
           return <MenuItem value={index} key={index}>{booking.date}  {booking.time}</MenuItem>
        })



    return(
      <Fragment>
        <Select id="booking-selector" onChange={this.handleChange} value={this.state.selectedIndex} >
      <MenuItem disabled value={-1}>Choose a booking...</MenuItem>
      {options}
    </Select>
    </Fragment>
    )
         }
  }

export default BookingList
