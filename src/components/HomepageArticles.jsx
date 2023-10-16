import React from 'react';
import HomepageArticle from './HomepageArticle';

const articles = [
  {
    date: '|   7 May 2023',
    title: 'Building a Dark Theme Toggle in React: A Simple Guide for Frontend Developers',
    description:
      'As a frontend developer, one of the essential aspects of creating a user-friendly web application is providing an option for users to switch between light and dark themes. ',
    link: 'https://thomson.hashnode.dev/building-a-dark-theme-toggle-in-react-a-simple-guide-for-frontend-developers',
  },
  {
    date: '|   4 oct 2023',
    title: 'Best Practices for Organizing Your React Projects File Structure',
    description:
      'maintaining a clean and organized file structure becomes crucial for code maintainability and collaboration with team members. In this blog post, we will discuss best practices for organizing your React projects file structure to enhance clarity, maintainability, and scalability',
    link: 'https://thomson.hashnode.dev/best-practices-for-organizing-your-react-projects-file-structure',
  },
];

const HomepageArticles = () => {
  return (
    <div className=" flex flex-col w-full p-3 lg:p-0 items-center lg:items-start  lg:w-7/12 flex-wrap -mx-4">
      {articles.map((article, index) => (
        <div key={index} className=" px-4 mb-5 w-full md:w-11/12">
          <HomepageArticle
            date={article.date}
            title={article.title}
            description={article.description}
            link={article.link}
            type='home'
          />
        </div>
      ))}
    </div>
  );
};

export default HomepageArticles;
