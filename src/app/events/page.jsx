import EventPage from '@/components/EventComponents/EventPage'
import React from 'react'

const page = () => {
  return (
    <div>
        <EventPage eventsId={['007', '008']} pageType='Events'/>
    </div>
  )
}

export default page