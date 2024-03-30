import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import RandomArticle from './RandomArticle'


const RandomNews = async () => {
  const randomNews = await getNewsSearch("random news")
  const filterArticles = removeDuplicateData(randomNews)
  return (
    <div className='mt-4 w-[450px] border-1 border-gray-200'>
        <h1 className='pl-2 text-2xl font-bold underline'>
            Anything Sedulur
        </h1>
        {filterArticles.map((article, idx)=>(
            <div key={`${article?.title}-${idx}`}>
                <RandomArticle data={article}/>
            </div>
        )
        )}
    </div>
  )
}

export default RandomNews