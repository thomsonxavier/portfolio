import { AiOutlineArrowRight } from 'react-icons/ai';

const HomepageArticle = ({ type, date, title, description, link }) => {
  return (
    <div className={`rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out ${type === 'blog' ? 'bg-blue-500' : ''}`}>
      {type === 'blog' && (
        <div className="w-1/3 p-4">
          <div className="text-[#acacb4] text-xs">{date}</div>
        </div>
      )}
      <div className={`p-4 ${type === 'blog' ? 'w-2/3' : ''}`}>
        {type !== 'blog' && (
          <div className="text-[#acacb4] text-xs">{date}</div>
        )}
        <div className="font-bold text-base mb-1">{title}</div>
        <div className="text-[#65656d] text-xs">{description}</div>
        <div className="text-sm font-semibold pt-3">
          <a href={link} target='_blank' rel='noreferrer' className="text-blue-400 flex items-center gap-3 hover:underline">
            {type === 'blog' ? 'Read article' : 'Read more'}
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomepageArticle;
