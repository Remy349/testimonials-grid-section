import React from 'react'
import { testimonials } from './testimonials'

function App() {
  return (
    <main className='font-barlow mx-6 text-white grid gap-6'>
      <figure className='card1 shadow-md rounded-lg p-8'>
        <div className='flex items-center gap-x-4 mb-4'>
          <img
            src={testimonials.testimonialOne.img}
            className='rounded-full w-9 h-9'
            alt='Avatar image'
          />
          <figcaption>
            <h3>{testimonials.testimonialOne.name}</h3>
            <p className='opacity-50'>Verified Graduate</p>
          </figcaption>
        </div>
        <p className='font-semibold mb-4'>{testimonials.testimonialOne.text}</p>
        <blockquote>
          <p className='opacity-70'>
            {testimonials.testimonialOne.testimonial}
          </p>
        </blockquote>
      </figure>
      <figure className='card2 shadow-md rounded-lg p-8'>
        <div className='flex items-center gap-x-4 mb-4'>
          <img
            src={testimonials.testimonialTwo.img}
            className='rounded-full w-9 h-9'
            alt='Avatar image'
          />
          <figcaption>
            <h3>{testimonials.testimonialTwo.name}</h3>
            <p className='opacity-50'>Verified Graduate</p>
          </figcaption>
        </div>
        <p className='font-semibold mb-4'>{testimonials.testimonialTwo.text}</p>
        <blockquote>
          <p className='opacity-70'>
            {testimonials.testimonialTwo.testimonial}
          </p>
        </blockquote>
      </figure>
      <figure className='card3 shadow-md rounded-lg p-8'>
        <div className='flex items-center gap-x-4 mb-4'>
          <img
            src={testimonials.testimonialThree.img}
            className='rounded-full w-9 h-9'
            alt='Avatar image'
          />
          <figcaption>
            <h3>{testimonials.testimonialThree.name}</h3>
            <p className='opacity-50'>Verified Graduate</p>
          </figcaption>
        </div>
        <p className='font-semibold mb-4'>
          {testimonials.testimonialThree.text}
        </p>
        <blockquote>
          <p className='opacity-70'>
            {testimonials.testimonialThree.testimonial}
          </p>
        </blockquote>
      </figure>
      <figure className='card4 shadow-md rounded-lg p-8'>
        <div className='flex items-center gap-x-4 mb-4'>
          <img
            src={testimonials.testimonialFour.img}
            className='rounded-full w-9 h-9'
            alt='Avatar image'
          />
          <figcaption>
            <h3>{testimonials.testimonialFour.name}</h3>
            <p className='opacity-50'>Verified Graduate</p>
          </figcaption>
        </div>
        <p className='font-semibold mb-4'>
          {testimonials.testimonialFour.text}
        </p>
        <blockquote>
          <p className='opacity-70'>
            {testimonials.testimonialFour.testimonial}
          </p>
        </blockquote>
      </figure>
      <figure className='card5 shadow-md rounded-lg p-8'>
        <div className='flex items-center gap-x-4 mb-4'>
          <img
            src={testimonials.testimonialFive.img}
            className='rounded-full w-9 h-9'
            alt='Avatar image'
          />
          <figcaption>
            <h3>{testimonials.testimonialFive.name}</h3>
            <p className='opacity-50'>Verified Graduate</p>
          </figcaption>
        </div>
        <p className='font-semibold mb-4'>
          {testimonials.testimonialFive.text}
        </p>
        <blockquote>
          <p className='opacity-70'>
            {testimonials.testimonialFive.testimonial}
          </p>
        </blockquote>
      </figure>
    </main>
  )
}

export default App
