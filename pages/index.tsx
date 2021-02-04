import useSWR from 'swr'
import Layout from '../components/layout/Layout'
import UtilitySelect from '../components/atoms/UtilitySelect'

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

const Home = () => {
  const { data, error } = useSWR('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { users } = data
  const unitType = ['comedy', 'action', 'serious']
  return (
    <Layout>
      <div>
        {users.map((user, i) => (
          <div key={i}>{user.name}</div>
        ))}
      </div>
      <p>Select unit type.</p>
      <UtilitySelect label="UnitType"  categories={unitType} />
    </Layout>
  )
}

export default Home