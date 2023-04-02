import Typewriter from 'typewriter-effect'
import avatar_image from '../../assets/dalle_avatar.png';
import resume_pdf from '../../assets/AnuragBalhraResume.pdf';

export default function HeroHome() {

  return (
    <div className="bg-white">
      <a id="home" />
      <div className="relative isolate px-6 md:pt-14 lg:px-8">
        <div className="flex justify-center">
            <div className="container flex flex-col md:flex-row justify-center items-center p-10">
                <div className="flex-1 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-left">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Hello &#128075; Glad to meet you {' '}
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <Typewriter onInit={(typewriter) => { 
                                typewriter.typeString('Hi, myself ')
                                    .pauseFor(500)
                                    .typeString('Anurag Balhra')
                                    .pauseFor(10000)
                                    .deleteAll()
                                    .typeString('I\'m a ')
                                    .pauseFor(500)
                                    .typeString('Software Engineer')
                                    .pauseFor(10000)
                                    .deleteChars(17)
                                    .typeString('Fullstack Developer')
                                    .pauseFor(10000)
                                    .deleteChars(19)
                                    .typeString('tech enthusiast')
                                    .pauseFor(10000)
                                    .deleteAll()
                                    .start();
                            }}
                                options={{loop: true}}
                            />
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        This is my personal online space. <br />
                        As geeky as it may sound, but I use this space to showcase some of my past professional experience and the most intriguing personal projects I've worked on.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Scroll down <span aria-hidden="true">&darr;</span>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-10">
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar_image} alt="Bonnie image"/>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Anurag Balhra</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                            <div class="flex mt-4 space-x-3 md:mt-6">
                                <a
                                    href={resume_pdf}
                                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    download
                                >
                                    Download Resume
                                </a>
                                <a href="#projects" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">See My Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
        >
        <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
        />
        </div>
      </div>
    </div>
  )
}