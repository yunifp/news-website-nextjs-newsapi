import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from '../components/Article'

const Education =async  () => {
  const newsWorld = await getNewsSearch("education")
  const filterArticles = removeDuplicateData(newsWorld)

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default Education