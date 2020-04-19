import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <div>
        <Fragment>
            {this.props.events.map(event => (
                <EventListItem key={event.id} event={event}/>
            )
            )}
            
            
        </Fragment>
      </div>
    );
  }
}

export default EventList;
