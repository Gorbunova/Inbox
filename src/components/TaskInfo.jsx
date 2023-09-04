import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { approveTask, rejectTask, togglePreview } from '../actions';
import previewIcon from '../assets/file-text.svg';

function TaskInfo(props) {
  const dispatch = useDispatch();
  const displayStates = { true: 'Кратко', false: 'Подробнее' };
  const [displayState, setDisplayState] = useState(false);

  useEffect(() => {
    setDisplayState(false);
  }, [props.currentTask ? props.currentTask.id : 0]);

  const expandCollapseBody = () => {
    setDisplayState(!displayState);
  };

  const isButtonDisabled = props.currentTask
    ? props.currentTask.stage !== 'Рассмотрение'
    : false;

  const buttonClassesString = isButtonDisabled
    ? 'button btn-secondary rounded'
    : 'button btn-success rounded';

  return props.currentTask ? (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <div style={{ float: 'left', marginRight: '15px' }}>
          <b>{props.currentTask.title}</b>
        </div>
        <div>
          <span className="badge bg-secondary">{props.currentTask.stage}</span>
          <span>
            <button
              type="button"
              className="btn"
              style={{
                width: '35px',
                height: '35px',
              }}
              onClick={() => dispatch(togglePreview())}
            >
              <img src={previewIcon} alt=""></img>
            </button>
          </span>
        </div>
        <div>
          {displayState
            ? props.currentTask.body
            : props.currentTask.body.slice(0, 200) + '...'}
        </div>
      </div>
      <div style={{ color: 'blue' }} onClick={expandCollapseBody}>
        {displayStates[displayState]}
      </div>
      <div>
        <button
          onClick={() => dispatch(approveTask(props.currentTask.id))}
          type="button"
          disabled={isButtonDisabled}
          className={buttonClassesString}
          style={{ width: '40%', marginRight: '18%' }}
        >
          Подписать
        </button>
        <button
          onClick={() => dispatch(rejectTask(props.currentTask.id))}
          type="button"
          disabled={isButtonDisabled}
          className={buttonClassesString}
          style={{ width: '40%' }}
        >
          Отклонить
        </button>
      </div>
    </div>
  ) : (
    <div style={{ textAlign: 'center' }}>Ни одной задачи не выбрано</div>
  );
}

export default TaskInfo;
