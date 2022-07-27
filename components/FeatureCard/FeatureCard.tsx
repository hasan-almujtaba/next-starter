import { Feature } from '@/types/feature'

const FeatureCard = ({ text }: Feature) => {
  return (
    <div className="rounded border w-full md:w-1/3 p-2 text-center mx-auto">
      {text}
    </div>
  )
}

export default FeatureCard
