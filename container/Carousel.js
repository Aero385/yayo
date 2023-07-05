import Image from 'next/image';
import React, {useState} from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';

const CARDS = 5;
const MAX_VISIBILITY = 3;

const images = [
  {
    src: '/act5.jpg',
    alt: 'Image 1',
        width: 800,
    height: 600,
  },
  {
    src: '/act2.jpg',
    alt: 'Image 2',
        width: 800,
    height: 600,
  },
  {
    src: '/act3.jpg',
    alt: 'Image 2',
        width: 800,
    height: 600,
  },
  {
    src: '/act4.jpg',
    alt: 'Image 2',
        width: 800,
    height: 600,
  },
  {
    src: '/act1.jpg',
    alt: 'Image 2',
        width: 800,
    height: 600,
  },
];

const Card = ({title, content, image}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
    <Image 
      className='rounded-xl md:rounded'
      src={image.src} 
      alt={image.alt} 
      width={image.width} 
      height={image.height} 
    />
  </div>
);

function Slider({children}){

  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
  );
};



export default function Carousel(){
  return (
    <div className="carousel__wrapper">
      <Slider>
        {[...new Array(CARDS)].map((_, i) => (
          <Card
            key={i}
            title={'Test Test Card ' + (i + 1)}
            content='test card'
            image={images[i % images.length]} // Use modulo operator to cycle through images
          />
        ))}
      </Slider>
  </div>
  )
}