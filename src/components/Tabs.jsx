import  reactbg  from '../assets/react.svg';
import { Tab } from '@headlessui/react';
import Project from './Project';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const categories = [
    {
      name: 'React js',
      data: [
        {
          title: "online | store app",
			description:
				"Crafted with React and supercharged by Redux, this eStore app makes shopping a breeze. Browse, select, and add products to your cart with ease. Elevate your online shopping experience & convenience!    ",
			logo: reactbg,
			linkText: "View Project",
			link: "https://estore0.netlify.app/",
        },
        {title: "Booking.com | clone",
        description:
          "Designed and developed a Booking.com inspired clone using React, allowing users to effortlessly search and book hotels. Click on images to view them in detail. Your perfect stay is just a click away",
        logo: reactbg,
        linkText: "View Project",
        link: "https://bookingcom0.netlify.app/",
        }, {title: "URL shortener ",
        description:
        "Engineered a sleek URL shortener, reminiscent of Bitly, with React.js and Tailwind CSS. Simplify link sharing, receive smart URL suggestions, and empower users to copy and share their  links effortlessly.",
        logo: reactbg,
        linkText: "View Project",
        link: "https://urlshortner0.netlify.app/",
        },
      ],
    },
    {
      name: 'Next js',
      data: [
        {
          title: "Project 1",
			description:
				"Where Learning Never Ends, Progress Never Stops, and the Future is On the Way—Working on Here",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gmv65nxUV9rPmaJRuu4GL77Czoqvh9Qv0g&usqp=CAU",
			linkText: "View Project",
			link: "https://github.com",
        },
        
      ],
    },
    {
      name: 'HTML-CSS',
      data: [
        {
          title: "Portfolio",
			description:
				"Built my portfolio website using JavaScript, HTML, CSS, and jQuery. It features a user-friendly dark and light mode for an enhanced browsing experience.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://thomson00.netlify.app/",
        },
        {
          title: "Ujivan bank | clone ",
          description:
            "Crafted an attention-grabbing animated landing page using the magic of HTML, CSS, and CSS animations, leaving a memorable first impression.",
          logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
          linkText: "View Project",
          link: "https://ujivan-mock.netlify.app/",
          },
        {
        title: "Education site",
        description:
          "Crafted an attention-grabbing animated landing page using the magic of HTML, CSS, and CSS animations, leaving a memorable first impression.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
        linkText: "View Project",
        link: "https://thomsonportfolio.netlify.app/projects/xyz/",
        },
      ],
    },
  ];



  
  

  return (
    <div className="w-full mx-auto  px-2 py-16 sm:px-0">
    <Tab.Group>
      <Tab.List className="flex space-x-1 max-w-xl mx-auto rounded-xl border p-1">
        {categories.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 dark:text-white ',
                'ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none ',
                selected
                  ? '  text-blue-500 shadow'
                  : 'text-black hover:bg-white/[0.12] hover:text-green-500'
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {categories.map((category, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              'rounded-xl  p-3',
            )}
          >
            <div
              className={`relative z-5 grid grid-cols-1 md:grid-cols-3 w-full gap-8  mb-5`}
            >
              {category.data.map((post, postIdx) => (
                <Project
                  key={postIdx}
                  title={post.title}
                  description={post.description}
                  logo={post.logo}
                  linkText={post.linkText}
                  link={post.link}
                />
              ))}
            </div>
                  
          
          </Tab.Panel>
          
        ))}
        <div className='text-center mt-5 text-blue-500'>
                    <Link  to={'/project'} className=' px-6 py-3 border   rounded-xl' > See all My project </Link>
                  </div>
      </Tab.Panels>
    </Tab.Group>
  </div>
  );
}
