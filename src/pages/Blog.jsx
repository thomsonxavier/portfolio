import Hero from "../components/Hero"

import HomepageArticles from "../components/HomepageArticles";
import info from "../data/user";


function Blog() {
  return (
    <div className='max-w-5xl mx-auto  mt-16'>
       <Hero
       title={info.articles.title}
       description={info.articles.description}
       
       type='blog'
      />

      <div>
        <HomepageArticles
        type='blog'
        />
      </div>
    </div>
  )
}

export default Blog