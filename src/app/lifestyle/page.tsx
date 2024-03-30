import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from '../components/Article'

const Lifestyle =async  () => {
  const newsWorld = await getNewsSearch("Lifestyle")
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

export default Lifestyle