import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import copyToClipboard from '@/lib/copyToClipboard'

const colors = [
  { name: 'Yellow', hex: '#ffc600', light: true },
  { name: 'Orange', hex: '#ff9d00', light: true },
  { name: 'Mint', hex: '#2affdf', light: true },
  { name: 'Blue', hex: '#193549', light: false },
  { name: 'Off Blue', hex: '#0d3a58', light: false },
  { name: 'Dusty Blue', hex: '#35434d', light: false },
  { name: 'Dark Blue', hex: '#15232d', light: false },
  { name: 'Pink', hex: '#fb94ff', light: true },
  { name: 'Light Blue', hex: '#9effff', light: true },
]

const About = () => (
  <Page title='about'>
    <Main className='flex flex-col justify-center space-y-4 p-4 text-center'>
      <Title>about</Title>
      <ul className='flex justify-center space-x-4 text-2xl sm:text-3xl'>
        <li>
          <a
            className='font-semibold text-[#dbdddf] hover:underline dark:hover:text-cb-mint'
            href='https://github.com/b4conjuice'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='h-6 w-6 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <title>GitHub</title>
              <path d='M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0' />
            </svg>
          </a>
        </li>
        <li>
          <a
            className='font-semibold text-[#1da1f1] hover:underline dark:hover:text-cb-mint'
            href='https://twitter.com/b4conjuice'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='h-6 w-6 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <title>Twitter</title>
              <path d='M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84' />
            </svg>
          </a>
        </li>
      </ul>
      <h2>
        theme:{' '}
        <a
          className='font-semibold hover:underline dark:text-cb-light-blue'
          href='https://github.com/wesbos/cobalt2'
          target='_blank'
          rel='noopener noreferrer'
        >
          cobalt2
        </a>
      </h2>
      <ul className='grid gap-4 text-2xl text-cobalt sm:text-3xl md:mx-auto md:max-w-4xl md:grid-cols-3'>
        {colors.map(({ name, hex, light }) => (
          <li
            key={name}
            className={`flex items-center rounded-lg shadow transition-colors duration-200 ${
              light
                ? `bg-cobalt hover:bg-cb-off-blue dark:bg-cb-dark-blue ${
                    name === 'Yellow'
                      ? 'text-cb-yellow'
                      : name === 'Orange'
                      ? 'text-cb-orange'
                      : name === 'Mint'
                      ? 'text-cb-mint'
                      : name === 'Pink'
                      ? 'text-cb-pink'
                      : name === 'Light Blue'
                      ? 'text-cb-light-blue'
                      : 'text-gray-100'
                  }`
                : `text-gray-100 hover:bg-blue-900 ${
                    name === 'Blue'
                      ? 'bg-cb-blue'
                      : name === 'Off Blue'
                      ? 'bg-cb-off-blue'
                      : name === 'Dusty Blue'
                      ? 'bg-cb-dusty-blue'
                      : name === 'Dark Blue'
                      ? 'bg-cb-dark-blue'
                      : 'bg-cobalt'
                  }`
            }`}
          >
            <button
              className='flex-grow p-4'
              type='button'
              onClick={() => copyToClipboard(hex)}
            >
              <div className='leading-none'>{name}</div>
              <div className='text-sm md:text-2xl'>{hex}</div>
            </button>
          </li>
        ))}
      </ul>
    </Main>
  </Page>
)

export default About
