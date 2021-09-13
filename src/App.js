import { ChakraProvider } from '@chakra-ui/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'

import Timeline from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'

import { useEffect } from 'react'

function App () {
  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user)
    }

    getUser()
  }, [])
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

export default withAuthenticator(App)
