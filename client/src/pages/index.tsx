import { useQuery } from '@apollo/client'
import Layout from '../components/templates/Layout'
import UtilitySelect from '../components/atoms/UtilitySelect'
import UtilityButton from '../components/atoms/UtilityButton'
import LoadingIcon from '../components/atoms/LoadingIcon'
import { FormControl } from '@material-ui/core'
import { useCompanyMembersQuery } from '../graphql/generated/graphql'

const Home = () => {
  const { loading, data, error } = useCompanyMembersQuery()

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    )
  }

  if (error)  {
    console.log({error})
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
  const clickHandler = () => {
    console.log('clickHandler')
  }
  return (
    <Layout>
      <p>Select member.</p>
      <form>
        <UtilitySelect label="members"  categories={formattedMembers} />
        <p>Select unit type.</p>
        <UtilitySelect label="UnitType"  categories={unitType} />
        <UtilityButton onClick={clickHandler}>
          Dispatch!
        </UtilityButton>
      </form>
    </Layout>
  )
}

export default Home