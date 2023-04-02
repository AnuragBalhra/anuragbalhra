import gs_logo from '../../assets/goldman-sachs-logo.png';
import fb_logo from '../../assets/meta-facebook-logo.png';
import github_logo from '../../assets/github-icon.png';
import linkedin_logo from '../../assets/linkedin-icon.png';

export default function AboutMeHome() {

  return (
    <div className="bg-white flex justify-center">
      <a id="about" />
      <div className="container flex flex-col md:flex-row my-25 border-t border-b border-gray-200">
        <div className="flex-1 p-20 ">
          <div className="max-w-lg">
            <h2 className="text-base font-semibold text-indigo-600">Who am I?</h2>
            <h1 className="text-4xl font-bold mt-2 mb-10">
              About me
            </h1>
            <div className="text-gray-400">
              I'm a software engineer with 4+ years of full stack development experience in some of the most renowned companies.
            </div>
            <div className="text-gray-400 mt-3">
              Work Experience:
              <div className="flex flex-row justify-center">
                <img class="h-16 my-3" src={fb_logo} alt="Meta logo"/>
                <img class="h-16 my-3 shadow-lg" src={gs_logo} alt="Goldman Sachs Logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-20">
          <div className="max-w-lg">
            <h2 className="text-base font-semibold text-indigo-600">Social Media</h2>
            <h1 className="text-4xl font-bold mt-2 mb-10">
              Get in touch
            </h1>
            <ul className="text-xs md:text-md text-gray-600">
              <li>
                <div className="flex flex-row items-center">
                  <img class="h-6 my-3" src={github_logo} alt="Github logo" /> 
                  <span className="mx-2">
                    Github - 
                  </span>
                  <a href="https://github.com/AnuragBalhra">
                    @AnuragBalhra
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center">
                  <img class="h-6 my-3" src={linkedin_logo} alt="Github logo" /> 
                  <span className="mx-2">
                    Linkedin - 
                  </span>
                  <a href="https://www.linkedin.com/in/anuragbalhra/">
                    @anuragbalhra
                  </a>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}