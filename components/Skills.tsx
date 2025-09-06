
import React, { useEffect, useState } from 'react';
import { SKILLS } from '../constants';

const SkillBar: React.FC<{ name: string; level: number; description: string }> = ({ name, level, description }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the bar on mount
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);
  
  const levelText = level >= 65 ? 'Intermediate / Growing' : 'Growing Foundations';

  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-1">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{levelText}</p>
        </div>
        <span className="text-sm font-bold text-purple-600">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
       <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const coreSkills = SKILLS.filter(s => s.category === 'core');
  const externalSkills = SKILLS.filter(s => s.category === 'external');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-800 text-center mb-4">My Skillset & Journey</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">I believe learning never stops. Here’s a snapshot of the skills I’m building — from my foundations in coding to my growing expertise in web development and AI automation.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-cyan-400 pb-2">Core Tech Skills</h3>
            {coreSkills.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} description={skill.description} />
            ))}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-400 pb-2">External Skills</h3>
            <div className="space-y-6">
                {externalSkills.map(skill => (
                    <div key={skill.name} className="p-6 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="text-xl font-semibold text-gray-800">{skill.name}</h4>
                        <p className="text-gray-600 mt-1">{skill.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
