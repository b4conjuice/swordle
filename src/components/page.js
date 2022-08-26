import Head from 'next/head'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'swordle'

const Page = ({ title = DEFAULT_TITLE, children }) => (
  <div className='flex min-h-screen flex-col bg-gray-100 text-cobalt dark:bg-cobalt dark:text-gray-100'>
    <Head>
      <link rel='manifest' href='/manifest.json' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='msapplication-starturl' content='/' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta charSet='utf-8' />
      <meta name='description' content='swordle' />
      <meta name='theme-color' content='#193549' />
      <link rel='shortcut icon' href='/favicon.png' />
      <link rel='apple-touch-icon' sizes='57x57' href='/icon.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/icon.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='/icon.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/icon.png' />
      <link
        href='splash.png'
        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
        rel='apple-touch-startup-image'
      />
      <title>
        {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
      </title>
    </Head>
    {children}
  </div>
)

export default Page
