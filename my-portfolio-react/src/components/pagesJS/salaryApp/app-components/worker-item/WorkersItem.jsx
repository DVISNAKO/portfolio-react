import './WorkersItem.css';

const WorkersItem = (props) => {
    
        const {name, salary, onDelete, onToggleProp, increase, like} = props;

        let className = "list-group-item d-flex justify-content-between";
        if(increase){
            className += ' increase';
        }

        if(like){
            className += ' like'
        }

    return (
        <li className={className}>
            <span className="list-group-item-label"
            onClick={onToggleProp} data-toggle="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <box-icon name='cookie'></box-icon>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                   <box-icon name='trash-alt' ></box-icon>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
       
    )
    }


export default WorkersItem;