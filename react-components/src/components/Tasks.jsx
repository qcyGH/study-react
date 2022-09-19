import {Task} from './Task'

export function Tasks (props) {
    if (props.tasks !== null && props.tasks.length !== 0) {
        return (
            <div className='my-24'>
                {
                    props.tasks.map(task => (
                        <Task func={props.func} id={task.id} key={task.id} name={task.name}/>
                    ))
                }
            </div>
        )
    } else {
        return <span className='font-mono text-lg mb-4'>No tasks yet!</span>
    }
}