import { Form, Link, useLoaderData } from 'react-router-dom'

const Landing = () => {
  const cheeses = useLoaderData()
  console.log(cheeses)
  return (
    <div>
      <h3>Create a cheese</h3>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="cheese's name" />
        <input type="input" name="image" placeholder="cheese's image" />
        <input type="input" name="countryOfOrigin" placeholder="cheese's countryOfOrigin" />
        <input type="submit" value={'create cheese'} />
      </Form>

      <h3>cheese</h3>
      {cheeses.map(cheese => {
        return (
          <div key={cheese._id} className="cheese">
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Landing
