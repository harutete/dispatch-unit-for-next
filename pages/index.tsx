import Layout from '../components/layout/Layout'
import UtilitySelect from '../components/atoms/UtilitySelect'

const Home = () => {
  const unitType = ['comedy', 'action', 'serious']
  return (
    <Layout>
      <p>Select unit type.</p>
      <UtilitySelect label="UnitType"  categories={unitType} />
    </Layout>
  )
}

export default Home