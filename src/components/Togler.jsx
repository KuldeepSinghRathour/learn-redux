import React, { useState } from 'react';

const Togler = () => {



  const sections = [
    {
      title: 'Horse Information',
      hinfo: {header1col1:"Horse Name",header1col2:'Horse Color',
              breed:'Breed',breeder:'Breeder'},
      data: [
        { header1:"Horse Name", name: 'Doremon', color: 'Red' },
        { breed: 'Asian', breeder: 'Unknown' },
      ],
    },
    {
      title: 'FEI Details',
      hinfo: {header1col1:"Horse Name",header1col2:'Horse Color'},
      data: [
        { column1: 'Row 1', column2: 'Value 1' },
        { column1: 'Row 2', column2: 'Value 2' },
      ],
    },
    // Add more sections as needed
  ];






  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            {section.title}
          </button>
          {activeIndex === index && (
            <table>
              <thead>
                <tr>
                  <th>{section.hinfo.header1col1}</th>
                  <th>{section.hinfo.header1col2}</th>
                </tr>
              </thead>
              <tbody>
                {section.data.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th>{section.hinfo.breed}</th>
                  <th>{section.hinfo.breeder}</th>
                </tr>
              </thead>
              <tbody>
                {section.data.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{item.breed}</td>
                    <td>{item.breeder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default Togler;
