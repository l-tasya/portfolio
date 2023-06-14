import React from 'react';

const Skill = ({img, title}) => {
    return (
        <div className={'skill-item'}>
            <div className='skill-item__img'><img src={img} alt={'img'}/></div>
            <div className='skill-item__subtitle'>{title}</div>
        </div>
    );
};

export default Skill;
