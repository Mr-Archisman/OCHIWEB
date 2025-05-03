'use client';
import Image from 'next/image';
import { useState } from 'react';
import { aboutImg } from '@/public';
import { LinkHover } from '@/animation';
import { footerItems } from '@/constants';
import { Heading, RoundButton } from '@/components';

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className='w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]'>
      <div className='pl-[50px] sm:px-[20px] xm:px-[20px]'>
        <h2 className='sub-heading font-medium font-NeueMontreal text-secondry'>
          Sick Studios is a digital ally for bold brands
          <br className='sm:hidden xm:hidden' /> looking to&nbsp;
          <span className='sub-heading font-medium font-NeueMontreal link-flash cursor-pointer'>
            launch stunning websites,
          </span>
          &nbsp;build smart apps, <br className='sm:hidden xm:hidden' />
          <span className='sub-heading font-medium font-NeueMontreal link-flash cursor-pointer'>
            captivate audiences,
          </span>
          &nbsp;and&nbsp;
          <span className='sub-heading font-medium font-NeueMontreal link-flash cursor-pointer'>
            grow with style.
          </span>
        </h2>
      </div>

      <div className='w-full border-y border-[#21212155] my-[50px] py-[20px]'>
        <div className='padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between'>
          <div className='w-[50%] sm:w-full xm:w-full'>
            <h3 className='sub-paragraph font-medium text-secondry font-NeueMontreal'>
              What you can expect?
            </h3>
          </div>
          <div className='w-[50%] sm:w-full xm:w-full'>
            <div className='w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col'>
              <div className='w-[40%] sm:w-[60%] xm:w-[60%]'>
                <p className='sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide'>
                  We craft visually striking digital content that helps you
                  impress clients, captivate users, or pitch bold ideas. Whether
                  it’s a landing page, app interface, or animated campaign — we
                  make it unforgettable.
                </p>
                <p className='sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide'>
                  At Sick Studios, we blend design thinking with digital
                  strategy (and just the right dose of caffeine) to deliver work
                  that’s clear, compelling, and creatively sharp.
                </p>
              </div>
              <div className='w-[60%] flex justify-end flex-col  sm:w-full xm:w-full'>
                <h1 className='sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]'>
                  S:
                </h1>
                <div className='flex flex-col'>
                  {footerItems.map((item) => (
                    <LinkHover
                      key={item.id}
                      className='w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]'
                      title={item.title}
                      href={'/'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]'>
        <div className='flex flex-col gap-[30px]'>
          <Heading title='Our approach:' />
          <div
            className='w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <RoundButton
              href='/ochi-team'
              title='read more'
              bgcolor='#000'
              className='bg-white text-black'
              style={{ color: '#fff' }}
            />
          </div>
        </div>
        <div
          className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
            hovered && 'scale-[0.96]'
          }`}
        >
          <Image
            src={aboutImg}
            alt='about-img'
            className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
              hovered && 'scale-[1.09]'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
