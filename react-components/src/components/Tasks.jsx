import {Task} from './Task'

export function Tasks (props) {
    if (props.tasks !== null) {
        return (
            <div>
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