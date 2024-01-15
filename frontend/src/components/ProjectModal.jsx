import ReactDOM from 'react-dom';
import classes from './styles/ProjectModal.module.css'

const ProjectModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={classes.modalOverlay} onClick={onClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={classes.modalClose} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modalRoot')
  );
};

export default ProjectModal;