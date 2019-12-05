import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SubTreeBody from './SubTreeBody';
import { setSocio } from '../actions';
import '../assets/styles/components/SubTree.scss';

const SubTree = (props) => {
  const { tabs } = props;

  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const handleSetSocio = () => {
    props.setSocio({
      'nombre': 'Jorge',
      'id': 444,
      'cuentas': [
        {
          'nombre': 'Banco',
          'id': 987,
        },
        {
          'nombre': 'Inversion',
          'id': 876,
        },
        {
          'nombre': 'CxC Tags',
          'id': 765,
        },
      ],
    });
  };

  return (
    <div className='subTree'>
      <div className='subTree__title'>
        {tabs.map((tab, index) => {
          let customClassName = 'subTree__title__tab';
          customClassName += (index === selectedTabIdx ? ' active' : '');
          return (
            <div
              className={customClassName}
              key={tab.titulo}
              onClick={() => {
                (index !== selectedTabIdx ? setSelectedTabIdx(index) : setSelectedTabIdx(-1)) ;
              }}
              onDoubleClick={handleSetSocio}
              role='button'
              tabIndex='0'
            >
              {tab.titulo}
            </div>
          );
        })}
      </div>
      <div className='subTree__body'>
        {tabs.map((tab, index) => (
          <SubTreeBody {...tab} show={index === selectedTabIdx} wrapper={true} key={tab.titulo} />
        ))}
      </div>
    </div>
  );
};

SubTree.propTypes = {
  tabs: propTypes.array,
};

const mapDispatchToProps = {
  setSocio,
};

export default connect(null, mapDispatchToProps)(SubTree);
