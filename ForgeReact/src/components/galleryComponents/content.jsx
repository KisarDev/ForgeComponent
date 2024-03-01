import React from 'react';

const Content = ({ contentData }) => {
  return (
    <div className="text-black font-bold flex flex-col gap-4">
      {Object.entries(contentData.categorys).map(([category, components]) => (
        <div key={category} className='flex flex-col gap-2'>
          <h2 className='text-2xl'>{category}</h2>
          <div className="flex gap-4 overflow-auto  md:w-[1920px] w-[300px]">
            {components.map((component, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-2xl shadow hover:scale-95 ease-out duration-500">
                <a href="#">
                  <h3 className="text-center">{component.name}</h3>
                  <img className="rounded-full min-w-[300px]" src={component.gif} alt={`Preview ${component.name}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
