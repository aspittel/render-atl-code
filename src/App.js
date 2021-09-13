import { ChakraProvider } from '@chakra-ui/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'

import Timeline from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'

import { useEffect, useState } from 'react'

function App () {
  const [user, setUser] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
    }

    getUser()
  }, [])
  return (
    <ChakraProvider>
      <button onClick={async () => await Auth.signOut()}>
        Sign Out
      </button>
      <Timeline>
        {({ post }) => (
          <Card post={post} key={post.id}>
            <Card.Header author={post.user} />
            <Card.Main content={post.content} />
            <Card.Footer
              author={post.user}
              description={post.description}
            >
              <CommentList postId={post.id} isAdmin={isAdmin} />
            </Card.Footer>
          </Card>
        )}
      </Timeline>
    </ChakraProvider>
  )
}

export default withAuthenticator(App)
