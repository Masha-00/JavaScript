import React  from 'react';
import classes from './SongModal.module.css';

const SongModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.songModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.songModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
	);
};

export default SongModal;