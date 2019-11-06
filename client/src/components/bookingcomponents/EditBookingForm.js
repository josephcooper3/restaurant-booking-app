import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class EditBookingForm extends Component {
  constructor(props){
    super(props);
    const {date, time, partySize, notes} = this.props.booking
    this.state = {
      date: date,
      time: time,
      partySize: partySize,
      notes: notes,
      customerId: this.props.booking._embedded.customer.id,
      seatingId: this.props.booking._embedded.seating.id
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.handleCustomerChange = this.handleCustomerChange.bind(this)
    this.handleSeatingChange = this.handleSeatingChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
}

handleDateChange(event){
    this.setState({date: event.target.value})
}

handleTimeChange(event){
    this.setState({time: event.target.value})
}

handlePartySizeChange(event){
    this.setState({partySize: event.target.value})
}

handleNotesChange(event){
    this.setState({notes: event.target.value})
}

handleCustomerChange(event){
    this.setState({customerId: event.target.value})
}

handleSeatingChange(event){
    this.setState({seatingId: event.target.value})
}

  render(){
    return(
      <form className="booking-form" onSubmit={this.handleSubmit}>
          <TextField
          className="inputField"
          type="date"
          placeholder="Choose a Date"
          value={this.state.date}
          onChange={this.handleDateChange}
          /><br></br>
          <TextField
          type="time"
          placeholder="Choose a Time"
          value={this.state.time}
          onChange={this.handleTimeChange}
          /><br></br>
          <br></br>
          <TextField
          type="number"
          placeholder="Number of customers"
          value={this.state.partySize}
          onChange={this.handlePartySizeChange}

          />
          <br></br><br></br>
          <TextField
          placeholder="Add notes"
          value={this.state.notes}
          onChange={this.handleNotesChange}/>
          <br></br>
          <InputLabel>Select a Customer</InputLabel>


          <br></br>

          <Button variant="contained" color="secondary" type="submit">Edit</Button>
        </form>
    )
  }
}









export default EditBookingForm
