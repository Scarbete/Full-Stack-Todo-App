import {FC, JSX, ReactNode} from 'react'


type States = {
    isLoading?: boolean
    errorMessage?: string
    children: ReactNode
}


const RequestStatus: FC<States> = (props): JSX.Element => {

    const {
        isLoading,
        errorMessage,
        children
    } = props

    if (isLoading) return (
        <div>
            LOADING...
        </div>
    )

    if (errorMessage) return (
        <div>
            ERROR: {errorMessage}
        </div>
    )

    return (
        <>
            {children}
        </>
    )
}

export default RequestStatus