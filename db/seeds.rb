
users = User.create([
  {username: "Bob", email: "bob@gmail.com", password: "password"},
  {username: "Steve", email: "steve@gmail.com", password: "password"},
  {username: "Bill", email: "bill@gmail.com", password: "password"},
  {username: "Rob", email: "rob@gmail.com", password: "password"}
])

tweets = Tweet.create([
  {message: "First Tweet by Bob", user_id: users[0].id},
  {message: "First Tweet by Steve", user_id: users[1].id},
  {message: "First Tweet by Bill", user_id: users[2].id},
  {message: "First Tweet by Rob", user_id: users[3].id}
])
