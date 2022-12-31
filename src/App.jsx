import React from 'react'
import { testimonials } from './testimonials'
import {
  CardHeader,
  CardTestimonial,
  CardText,
} from './components/CardComponents'

import patternQuotation from './assets/svg/bg-pattern-quotation.svg'

function App() {
  return (
    <main className='font-barlow mx-6 text-white grid gap-6'>
      <figure className='card1 shadow-md rounded-lg relative z-10 p-8'>
        <img
          className='absolute top-0 right-8 w-28 -z-10'
          src={patternQuotation}
          alt='Background svg'
        />
        <CardHeader
          img={testimonials.testimonialOne.img}
          name={testimonials.testimonialOne.name}
        />
        <CardText text={testimonials.testimonialOne.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialOne.testimonial}
        />
      </figure>
      <figure className='card2 shadow-md rounded-lg p-8'>
        <CardHeader
          img={testimonials.testimonialTwo.img}
          name={testimonials.testimonialTwo.name}
        />
        <CardText text={testimonials.testimonialTwo.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialTwo.testimonial}
        />
      </figure>
      <figure className='card3 shadow-md rounded-lg p-8'>
        <CardHeader
          img={testimonials.testimonialThree.img}
          name={testimonials.testimonialThree.name}
        />
        <CardText text={testimonials.testimonialThree.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialThree.testimonial}
        />
      </figure>
      <figure className='card4 shadow-md rounded-lg p-8'>
        <CardHeader
          img={testimonials.testimonialFour.img}
          name={testimonials.testimonialFour.name}
        />
        <CardText text={testimonials.testimonialFour.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialFour.testimonial}
        />
      </figure>
      <figure className='card5 shadow-md rounded-lg p-8'>
        <CardHeader
          img={testimonials.testimonialFive.img}
          name={testimonials.testimonialFive.name}
        />
        <CardText text={testimonials.testimonialFive.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialFive.testimonial}
        />
      </figure>
    </main>
  )
}

export default App
