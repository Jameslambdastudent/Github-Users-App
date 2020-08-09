import React, { useState, useEffect } from 'react'
import { Form, Card, Image, Icon } from 'semantic-ui-react'

 function FetchUsers() {
     const [name, setName] = useState('')
     const [userName, setUsername] = useState('')
     const [followers, setFollowers] = useState('')
     const [following, setFollowing] = useState('')
     const [repos, setRepos] = useState('')
     const [avatar, setAvatar] = useState('')
     const [userInput, setUserinput] = useState('')

     useEffect(() => {
       fetch("https://api.github.com/users/example")
       .then(res => res.json())
       .then(data => {
         setData(data)
       })
     }, [])

     const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
      setName(name)
      setUsername(login)
      setFollowers(followers)
      setFollowing(following)
      setRepos(public_repos)
      setAvatar(avatar_url)
     }

     const handleSearch = (e) => {
         setUserinput(e.target.value)
     }

     const handleSubmit = () => {
         fetch(`https://api.github.com/users/${userInput}`)
         .then(res => res.json())
         .then(data => {
             setData(data)
         })
     }
    
    return (
       <>
       <div className="navbar">Github Search</div>
       <div className="search">
       <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Github Users'
              name='github users'
              onChange={handleSearch}
              />
          
            <Form.Button content='Search' />
          </Form.Group>
        </Form>
       </div>
       <div className="card">
       <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Card.Header>{userName}</Card.Header>
      </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user ' />
        {followers} Followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {following} Following
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {repos} Repos
      </a>
    </Card.Content>
  </Card>
       </div>

       </>
    )
}

export default FetchUsers
