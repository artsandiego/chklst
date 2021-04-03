import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { UserCard } from '../components/userCard'

const SaveModal = ({ open, setOpen }) => (
  <div
    className={
      open
        ? 'flex justify-center bg-accent z-30 bg-opacity-40 fixed inset-0 overflow-x-hidden overflow-y-auto'
        : 'hidden'
    }
  >
    <button
      onClick={() => setOpen(false)}
      className='fixed'
      style={{ width: '100vw', height: '100vh' }}
    />
    <div className='relative p-5 text-white rounded shadow top-10 bg-accent'>
      <h2 className='font-bold text-center text-24 text-primary'>
        Your file is now downloading
      </h2>
      <h3 className='text-18'>Next Steps</h3>
      <ul>
        <li>1. Fork the repository</li>
        <li>
          2. Go to your forked repo and go to components/contributors
          <br />
          (github.com/&#123;&#123; Your gh handle
          &#125;&#125;/chklst/tree/main/components/contributors)
        </li>
        <li>
          3. Click Upload file
          <br />
          <Image
            width='500px'
            height='300px'
            src='/upload your file.json.png'
          />
        </li>
        <li>
          4. Then, go to the data.js, and click the edit introduction
          <br />
          <Image width='500px' height='300px' src='/click the edit icon.png' />
        </li>
        <li>
          5. import the file, append the name, and click submit.
          <br />
          <Image width='500px' height='300px' src='/import,append,submit.png' />
        </li>
        <li>
          6. Go back to your repo(github.com/&#123;&#123; Your gh handle
          &#125;&#125;/chklst)
        </li>
        <li>
          7. Click pull request
          <br />
          <Image width='500px' height='100px' src='/clickpull request.png' />
        </li>
      </ul>
      Thanks for using the app, I really hope you liked it
    </div>
  </div>
)

const SocialItem = ({ label, url, setData, idx }) => {
  const [hovered, setHovered] = useState()
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative'
    >
      <button
        onClick={() =>
          setData((data) => {
            return {
              ...data,
              socials: data.socials.filter((_, i) => idx !== i),
            }
          })
        }
        style={{ background: '#E13137' }}
        className={
          (hovered ? '-translate-x-2 opacity-1' : ' opacity-0 translate-x-2') +
          ' flex absolute focus:outline-none items-center justify-center w-8 h-8 text-white rounded-full text-36 -left-8 transform transition-all duration-300'
        }
      >
        -
      </button>
      <div className='flex flex-row items-center space-x-2 '>
        <div className='w-32 p-2 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'>
          {label}
        </div>
        <span className=''>:</span>
        <div className='w-full p-2 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'>
          {url}
        </div>
      </div>
    </div>
  )
}

const SourceItem = ({ label, url, tags, setData, idx }) => {
  const [hovered, setHovered] = useState()
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative'
    >
      <button
        onClick={() =>
          setData((data) => {
            return {
              ...data,
              sources: data.sources.filter((_, i) => idx !== i),
            }
          })
        }
        style={{ background: '#E13137' }}
        className={
          (hovered ? '-translate-x-2 opacity-1' : ' opacity-0 translate-x-2') +
          ' flex absolute focus:outline-none items-center justify-center w-8 h-8 text-white rounded-full text-36 -left-8 transform transition-all duration-300'
        }
      >
        -
      </button>
      <div className='flex flex-row items-center space-x-2 '>
        <div className='w-32 p-2 truncate rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'>
          {label}
        </div>
        <span className=''>:</span>
        <div className='w-full max-w-sm p-2 truncate rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'>
          {url}
        </div>
      </div>
      {tags.map((t) => (
        <span className={'bg-accent px-2 py-1 rounded-full shadow text-11'}>
          {t}
        </span>
      ))}
    </div>
  )
}

const Tag = ({ tag, onDeleteClick }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onClick={onDeleteClick}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#e13137' : '#2A3B48' }}
      className={'px-2 py-1 rounded-full shadow text-11'}
    >
      {tag}
    </span>
  )
}

function download(filename, content, ext = 'json') {
  var element = document.createElement('a')
  element.setAttribute(
    'href',
    `data:${ext}/plain;charset=utf-8,${encodeURIComponent(content)}`
  )
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
const Metadata = () => (
  <Head>
    <title>C H K L S T. JSON Builder</title>
    <link rel='icon' href='/favicon.png' />
    <meta charSet='utf-8' />
    <meta
      name='description'
      content='A one-stop repository of different resources for Front-End Developers and UI Designers.'
    />
    <meta
      name='keywords'
      content='frontend, tools, crtved, artsandiego, website, ui, ux, web design, tips, resources'
    />

    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://chklst.vercel.app/json-builder' />
    <meta property='og:title' content='CHKLST.' />
    <meta
      property='og:description'
      content='A one-stop repository of different resources for Front-End Developers and UI Designers.'
    />
    <meta property='og:image' content='/social-image.png' />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content='https://chklst.vercel.app' />
    <meta property='twitter:title' content='CHKLST.' />
    <meta
      property='twitter:description'
      content='A one-stop repository of different resources for Front-End Developers and UI Designers.'
    />
    <meta property='twitter:image' content='/social-image.png' />
  </Head>
)

const JsonBuilder = () => {
  const [data, setData] = useState({
    name: 'Jane Doe',
    bio: 'A Web Developer and a design enthusiast',
    emoji: '👋',
    socials: [
      {
        label: 'blog',
        url: 'https://romanmunar.netlify.app/blog',
      },
    ],
    sources: [
      {
        label: 'CSS Animations for Beginners',
        url: 'https://romanmunar.netlify.app/blog/all-about-css-animations',
        tags: ['animations', 'css'],
      },
    ],
  })
  const [[sociaLabel, sociaLUrl], setSocialInput] = useState(['', ''])
  const [[sourceLabel, sourceUrl, sourceTags], setSourceInput] = useState([
    '',
    '',
    [],
  ])
  const [tagInput, setTagInput] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onSaveClick = () => {
    const camelize = function camalize(str) {
      return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    }
    const json = JSON.stringify(data)
    setIsModalOpen(true)

    download(`${camelize(data.name)}.json`, json)
  }

  const onTagDelete = (index) => {
    setSourceInput((prev) => [
      prev[0],
      prev[1],
      prev[2].filter((_, idx) => idx !== index),
    ])
  }

  const onSourcesSubmitClick = () => {
    setData({
      ...data,
      sources: [
        ...data.sources,
        {
          label: sourceLabel,
          url: sourceUrl,
          tags: sourceTags,
        },
      ],
    })

    setSourceInput('', '', [])
  }

  const onSocialSubmitClick = () => {
    setData({
      ...data,
      socials: [
        ...data.socials,
        {
          label: sociaLabel,
          url: sociaLUrl,
        },
      ],
    })
    setSocialInput('', '')
  }

  return (
    <>
      <Metadata />
      <SaveModal open={isModalOpen} setOpen={setIsModalOpen} />
      <div style={{ height: '100vh' }} className='overflow-y-hidden'>
        <h1 className='my-5 font-bold text-center text-white text-24'>
          JSON Builder
          {/* by{' '}
          <a className='underline' href='https://romanmunar.netlify.app/' target="_blank" rel="noopener noreferrer">
            Roman Munar 
          </a>*/}
        </h1>
        <div className='flex w-full max-w-4xl mx-auto my-5'>
          <div
            style={{ height: '100vh' }}
            className='w-full p-3 mr-4 space-y-3 text-white'
          >
            <div className='flex flex-row space-x-4'>
              <h4 className=' text-18'>Name</h4>
              <input
                onChange={(e) => {
                  setData({ ...data, name: e.target.value })
                }}
                placeholder='Your Name'
                type='text'
                className='w-32 p-2 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
              />
              <h4 className=' text-18'>Emoji</h4>
              <input
                onChange={(e) => {
                  setData({ ...data, emoji: e.target.value[0] }) // Only allow single emoji
                }}
                placeholder='✍️, 🇵🇭, ⌨, 💻'
                type='text'
                className='w-32 p-2 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
              />
            </div>
            <h4 className=' text-18'>Bio</h4>
            <input
              onChange={(e) => {
                setData({ ...data, bio: e.target.value })
              }}
              placeholder='A Content Writer in Web development'
              type='text'
              className='w-full p-2 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
            />
            <h4 className=' text-18'>Socials</h4>
            {data.socials.map((s, idx) => (
              <SocialItem
                label={s.label}
                url={s.url}
                setData={setData}
                key={idx}
                idx={idx}
              />
            ))}
            <div className='relative flex flex-row items-center space-x-2'>
              <input
                onChange={(e) =>
                  setSocialInput((prev) => [e.target.value, prev[1]])
                }
                placeholder='Github, Blog, Website'
                type='text'
                className='w-32 p-2 bg-opacity-50 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
              />
              <span className=''>:</span>
              <input
                onChange={(e) =>
                  setSocialInput((prev) => [prev[0], e.target.value])
                }
                placeholder='URL/Link Ex. https://github.com/romanmunar'
                type='text'
                className='w-full p-2 bg-opacity-50 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
              />
              <button
                onClick={onSocialSubmitClick}
                className='flex items-center justify-center px-3 leading-none text-white rounded bg-primary focus:outline-none text-36'
              >
                +
              </button>
            </div>
            <h4 className=' text-18'>Links</h4>
            {data.sources.map((s, idx) => (
              <SourceItem
                setData={setData}
                tags={s.tags}
                label={s.label}
                url={s.url}
                idx={idx}
                key={idx}
              />
            ))}
            <div className='space-y-2'>
              <div className='relative flex flex-row items-center space-x-2'>
                <input
                  onChange={(e) =>
                    setSourceInput((prev) => [e.target.value, prev[1], prev[2]])
                  }
                  placeholder='Github, Blog, Website'
                  type='text'
                  className='w-32 p-2 bg-opacity-50 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
                />
                <span className=''>:</span>
                <input
                  onChange={(e) =>
                    setSourceInput((prev) => [prev[0], e.target.value, prev[2]])
                  }
                  placeholder='URL/Link Ex. https://github.com/romanmunar'
                  type='text'
                  className='w-full p-2 bg-opacity-50 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
                />
                <button
                  onClick={onSourcesSubmitClick}
                  className='flex items-center justify-center px-3 leading-none text-white rounded bg-primary focus:outline-none text-36'
                >
                  +
                </button>
              </div>
              <div className='flex justify-between'>
                <div>
                  {sourceTags.map((s, idx) => (
                    <Tag
                      onDeleteClick={() => onTagDelete(idx)}
                      key={idx}
                      tag={s}
                    />
                  ))}
                </div>
                <div className='flex space-x-4'>
                  <input
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder='Html'
                    type='text'
                    className='w-16 p-2 bg-opacity-50 rounded-sm text-12 bg-accent focus:outline-none focus:ring-2 ring-primary ring-opacity-40'
                  />
                  <button
                    onClick={(e) =>
                      setSourceInput((prev) => [
                        prev[0],
                        prev[1],
                        [...prev[2], tagInput],
                      ])
                    }
                    className='flex items-center justify-center px-3 leading-none text-white border rounded border-primary text-12 bg-secondary focus:outline-none'
                  >
                    Add Tag
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-shrink-0 space-y-4'>
            <UserCard data={data} />
            <div className='flex flex-row'>
              <button
                onClick={onSaveClick}
                className='items-center justify-center block w-full px-4 py-2 font-bold capitalize border border-transparent rounded-md text-14 text-secondary bg-primary hover:bg-opacity-50 ring-white focus:outline-none focus:ring-2 hover:shadow-sm ring-offset-2'
              >
                Save me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JsonBuilder
