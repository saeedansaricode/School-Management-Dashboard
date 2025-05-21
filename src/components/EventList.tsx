import React from 'react'

function EventList({dateParam} : {dateParam : string | undefined}) {
    const date = dateParam ? new Date(dateParam) : new Date()
  return (
    <div>EventList</div>
  )
}

export default EventList