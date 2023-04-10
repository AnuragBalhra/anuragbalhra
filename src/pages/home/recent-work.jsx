import { QueueListIcon, ShareIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        'name': 'Recommendation System',
        'description': 'An interactive online video streaming application build using Django. Used Collaborative Filtering(CF) recommendation algorithm for suggesting next videos.',
        'icon': QueueListIcon
    },
    {
        'name': 'Data Sharing app using Li-fi',
        'description': 'A Data sharing app for android that allows quick file sharing accross devices similar to ShareIt or Apple Drop. Unlike most other data sharing apps that use Wifi technology, this app actually used LiFi for sharing data between devices.',
        'icon': ShareIcon
    }
];

export default function RecentWorkHome() {

  return (
      <div className="bg-white py-24 sm:py-32">
        <a id="projects" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Built out of curiosity</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Self Projects
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                I regularly work on some of the most intriguing ideas that make me curious. <br/>
                These are some of the recent projects I've worked on.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {projects.map((project) => (
                <div key={project.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <project.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {project.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{project.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
    </div>
  )
}