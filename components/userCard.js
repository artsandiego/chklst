import _ from 'lodash'

export const UserCard = ({ data }) => {
  const { name, bio, emoji, socials, sources } = data
  let classArr = []
  sources.map((source) => {
    source.tags.map((tag) => {
      classArr.push(tag)
    })
  })
  let filteredClass = _.union(classArr)
  return (
    <div
      className={` bg-accent mobilelg:w-card mobile:w-cardsm h-card p-6 self-center ${filteredClass
        .map((ft) => ft)
        .join(' ')}`}
    >
      <div className='cards__item--details'>
        <p className='font-normal text-center text-24 text-primary'>
          {name} <span>{emoji}</span>
        </p>
        <p className='px-8 font-normal text-center text-white text-12'>{bio}</p>
        <div className='flex flex-row flex-wrap items-center justify-center my-4'>
          {socials?.map((social, i) => (
            <a
              className='px-2 font-bold capitalize text-12 text-primary'
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              href={social.url}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className='overflow-y-scroll cards__item--links h-meat'>
        {sources?.map((source, i) => (
          <div key={i} className='p-4 mb-4 bg-secondary'>
            <div className='flex flex-row items-start mb-4'>
              <p className='w-8/12 font-normal text-white text-14'>
                {source.label}
              </p>
              <a
                className='w-4/12'
                href={source.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='ml-auto mr-0' src='/linkout.svg' />
              </a>
            </div>
            <div className='flex flex-row flex-wrap'>
              {source?.tags?.map((tag, i) => (
                <span
                  className='px-2 py-1 mt-2 mr-2 text-white uppercase rounded-full bg-accent text-11'
                  key={i}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
