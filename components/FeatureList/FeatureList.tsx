import FeatureCard from '@/components/FeatureCard/FeatureCard'
import { features } from './data'

const FeatureList = () => {
  /**
   * Feature items
   */
  const featureItems = features.map((text: string, id: number) => (
    <FeatureCard
      text={text}
      key={id}
    />
  ))

  return (
    <div>
      <h2 className="text-center">What is included in this starter?</h2>

      <div className="space-y-3">{featureItems}</div>
    </div>
  )
}

export default FeatureList
