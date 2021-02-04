import useSWR from 'swr'
import Layout from '../components/layout/Layout'
import UtilitySelect from '../components/atoms/UtilitySelect'
import LoadingIcon from '../components/atoms/LoadingIcon'

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      return json.data
    })

const Home = () => {
  const { data, error } = useSWR('{ members { member_name } }', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <LoadingIcon />

  const { members } = data
  const formattedMembers = members.map(member => member.member_name)
  const unitType = ['comedy', 'action', 'serious']
  return (
    <Layout>
      <UtilitySelect label="members"  categories={formattedMembers} />
      <p>Select unit type.</p>
      <UtilitySelect label="UnitType"  categories={unitType} />
    </Layout>
  )
}

export default Home