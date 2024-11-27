import {FC, JSX, ReactNode} from 'react'
import classNames from 'classnames'
import styles from './Container.module.scss'


type States = {
    children: ReactNode
    className?: string
}


const Container: FC<States> = (props): JSX.Element => {

    const {
        children,
        className
    } = props

    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    )
}

export default Container