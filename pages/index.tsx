import useSWR from 'swr'

import Layout from '../components/templates/Layout'
import UtilitySelect from '../components/atoms/UtilitySelect'
import UtilityButton from '../components/atoms/UtilityButton'
import LoadingIcon from '../components/atoms/LoadingIcon'
import { FormControl } from '@material-ui/core'

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  .then((response) => response.json())
  .then((json) => json.data)

const Home = () => {
  const { data, error } = useSWR('{ members { member_id, member_name } }', fetcher)
  if (error)  {
    return (
      <Layout>
        <div>Failed to load</div>
      </Layout>
    )
  }
  if (!data) {
    return (
      <Layout>
        <LoadingIcon />
      </Layout>
    )
  }

  const { members } = data
  const formattedMembers = members.map(member => member.member_name)
  const unitType = ['comedy', 'action', 'serious']
  return (
    <Layout>
      <p>Select member.</p>
      <UtilitySelect label="members"  categories={formattedMembers} />
      <p>Select unit type.</p>
      <UtilitySelect label="UnitType"  categories={unitType} />
      <UtilityButton>
        Dispatch!
      </UtilityButton>
    </Layout>
  )
}

export default Home