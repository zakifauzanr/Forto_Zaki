import { useEffect } from "react";
import SectionTitle from "../component/atom/SectionTitle";
import DataExperiences from "../data/dataExperience";

export default function ExperiencePage() {
  useEffect(()=>{
      window.scrollTo(0, 0);
  },[])
  return (
    <section className="px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center">
        <SectionTitle title="Experience" />
      </h2>

      <div className="space-y-12">
        {DataExperiences.map((exp) => (
          <div key={exp.id} className="flex flex-col lg:flex-row gap-6 glass rounded-xl shadow-lg p-6">
            {/* Logo perusahaan */}
            <div className="flex-shrink-0">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={exp.company} className="w-16 h-16 object-cover rounded-lg" />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-500">
                  {/* fallback ikon */}
                  {exp.company.charAt(0)}
                </div>
              )}
            </div>

            {/* Isi pengalaman */}
            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 space-x-2">
                <span>{exp.company}</span>
                {exp.location && <span>· {exp.location}</span>}
              </div>

              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((line, idx) => (
                  <li className="text-md" key={idx}>{line}</li>
                ))}
              </ol>

              {exp.media && exp.media.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.media.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${exp.company} media ${index}`}
                      className="rounded-lg object-cover h-40 w-full hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              )}

              {exp.companyLink && (
                <div className="mt-4">
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit company website →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}