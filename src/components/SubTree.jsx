import React, { useState } from 'react';
import propTypes from 'prop-types';
import SubTreeBody from './SubTreeBody';
import '../assets/styles/components/SubTree.scss';

const SubTree = ({ tabs }) => {

  tabs.forEach((tab) => {
    const [show, setShow] = useState(tab.active);
    tab.show = show; // eslint-disable-line no-param-reassign
    tab.setShow = setShow; // eslint-disable-line no-param-reassign
  });

  return (
    <div className='subTree'>
      <div className='subTree__title'>
        {tabs.map((tab, index) => {
          let customClassName = 'subTree__title__tab';
          customClassName += tab.show ? ' active' : '';
          return (
            <div className={customClassName} key={tab.titulo} onClick={() => { tabs.forEach((element) => { element.setShow(tab === element) ; }) ; }} role='button' tabIndex='0'>{tab.titulo}</div>
          );
        })}
      </div>
      <div className='subTree__body'>
        {tabs.map((tab) => {
          tab.wrapper = true; // eslint-disable-line no-param-reassign
          return (<SubTreeBody {...tab} key={tab.titulo} />);
        })}
      </div>
    </div>
  );
};

SubTree.propTypes = {
  tabs: propTypes.array,
};

export default SubTree;
