import Hero from '@/components/common/HeroBanner/Hero'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>About page
       <Hero backgroundImage="/path/to/image.jpg">
        <h2>Discover amazing content.</h2>
        <button>Get Started</button>
      </Hero>
    </div>
  )
}

export default page