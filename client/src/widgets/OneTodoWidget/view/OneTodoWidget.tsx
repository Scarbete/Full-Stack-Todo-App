import {FC, JSX} from 'react'
import {useParams} from 'react-router-dom'


const OneTodoWidget: FC = (): JSX.Element => {

    const {id} = useParams()

    console.log('id', id)

    return (
        <div>
            OneTodoWidget
        </div>
    )
}

export default OneTodoWidget