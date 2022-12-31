import React from 'react'

export const Card = ({ avatarImg, cardItem }) => {
  return (
    <figure className={`${cardItem} rounded-lg p-8`}>
      <div className='flex items-center gap-x-4 mb-4'>
        <img
          src={avatarImg}
          className='rounded-full w-9 h-9'
          alt='Avatar image'
        />
        <figcaption>
          <h3>Daniel Clifford</h3>
          <p className='opacity-50'>Verified Graduate</p>
        </figcaption>
      </div>
      <p className='font-semibold mb-4'>
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </p>
      <blockquote>
        <p className='opacity-70'>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </blockquote>
    </figure>
  )
}
