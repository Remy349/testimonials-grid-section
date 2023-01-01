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
    <main
      className='font-barlow mx-6 my-16 text-white grid gap-6
      md:grid-cols-2 md:mx-10 xl:grid-cols-4 xl:mx-auto xl:max-w-6xl'
    >
      <figure
        className='card1 shadow-md rounded-lg relative z-10 p-8
        md:hover:scale-105 duration-300 md:col-span-2'
      >
        <img
          className='absolute top-0 right-8 w-28 -z-10 xl:right-20'
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
      <figure
        className='card2 shadow-md rounded-lg p-8
        md:hover:scale-105 duration-300'
      >
        <CardHeader
          img={testimonials.testimonialTwo.img}
          name={testimonials.testimonialTwo.name}
        />
        <CardText text={testimonials.testimonialTwo.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialTwo.testimonial}
        />
      </figure>
      <figure
        className='card3 shadow-md rounded-lg p-8
        md:hover:scale-105 duration-300'
      >
        <CardHeader
          img={testimonials.testimonialThree.img}
          name={testimonials.testimonialThree.name}
        />
        <CardText text={testimonials.testimonialThree.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialThree.testimonial}
        />
      </figure>
      <figure
        className='card4 shadow-md rounded-lg p-8
        md:col-span-2 md:hover:scale-105 duration-300'
      >
        <CardHeader
          img={testimonials.testimonialFour.img}
          name={testimonials.testimonialFour.name}
        />
        <CardText text={testimonials.testimonialFour.text} />
        <CardTestimonial
          testimonial={testimonials.testimonialFour.testimonial}
        />
      </figure>
      <figure
        className='card5 shadow-md rounded-lg p-8
        md:hover:scale-105 duration-300 md:col-span-2
        xl:row-start-1 xl:row-end-3 xl:col-span-1 xl:col-start-4'
      >
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
