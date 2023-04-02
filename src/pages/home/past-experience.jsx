import fb_logo from '../../assets/meta-facebook-logo.png';
import gs_logo from '../../assets/goldman-sachs-logo.png';

const projects = [
    {
      'name': 'Meta (Facebook)',
      'tenure': '2022 - present',
      'description': 'Worked as software engineer at Facebook to build tools for supporting facebook\’s core revenue streams (Facebook Ads and Reality Labs).',
      'logo': fb_logo
    },
    {
      'name': 'Goldman Sachs',
      'tenure': 'May 2019 - Feb 2022',
      'description': 'Worked in Core Engineering division at Goldman Sachs, primarily building tools and services used by other developers across the firm.',
      'logo': gs_logo
    }
];

export default function PastExperienceHome() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <a id="experience" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Build out of curiosity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Past Experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Over the last couple of years, I've been lucky enough to have had the opportunity of working in some of the most renowned global tech companies.
          </p>
        </div>
        <div className="flex mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl justify-center">
          <div className="grid max-w-4xl grid-cols-1 gap-x-8 gap-y-10">
            {projects.map((project) => (
              <div key={project.name} className="relative pl-16">
                <div className="">
                  <div className="flex flex-col md:flex-row items-center" >
                    <img class="w-56 my-3" src={project.logo} alt="Meta logo" />
                    <div className="ml-5">
                      <div className="text-base font-semibold text-gray-900" >
                        {project.name}
                      </div>
                      <div className="text-base text-gray-600 text-sm" >
                        {project.tenure}
                      </div>
                      <div className="mt-5 text-base leading-7 text-gray-600">{project.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}