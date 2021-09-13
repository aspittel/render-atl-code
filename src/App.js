import { ChakraProvider } from '@chakra-ui/react'

import Timeline from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'

export default function App () {
  return (
    <ChakraProvider>
      <Timeline>
        {({ post }) => (
          <Card post={post} key={post.id}>
            <Card.Header author={post.user} />
            <Card.Main content={post.content} />
            <Card.Footer
              author={post.user}
              description={post.description}
            >
              <CommentList postId={post.id} />
            </Card.Footer>
          </Card>
        )}
      </Timeline>
    </ChakraProvider>
  )
}
