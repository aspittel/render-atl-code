import { useEffect, useState } from 'react'
import { Container } from '@chakra-ui/react'

import { DataStore } from '@aws-amplify/datastore'
import { TimelineItem } from './models'

export default function Timeline (props) {
  const [timelineItems, setTimelineItems] = useState([])
  useEffect(() => {
    const pullData = async () => {
      const models = await DataStore.query(TimelineItem)
      setTimelineItems(models)
    }
    pullData()
  }, [])
  return (
    <Container>
      {timelineItems.map(post => props.children({ post }))}
    </Container>
  )
}
