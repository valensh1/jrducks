import React from 'react';

const RosterHeadings = () => {
  return (
    <div className='profile__heading'>
      <h1 className='profile__heading-player'>Player</h1>
      <h1 className='profile__heading-number'>#</h1>
      <h1 className='profile__heading-position'>Pos</h1>
      <h1 className='profile__heading-sh'>Sh</h1>
      <h1 className='profile__heading-height'>Ht</h1>
      <h1 className='profile__heading-weight'>Wt</h1>
      <h1 className='profile__heading-born'>Born</h1>
      <h1 className='profile__heading-birthplace'>Birthplace</h1>
    </div>
  );
};

export default RosterHeadings;
