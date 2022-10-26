import { ReactNode } from 'react'

export interface IElement {
    map(
        arg0: (element: {
            data: { fias_id: import('react').Key | null | undefined }
            value:
                | string
                | number
                | boolean
                | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>>
                | import('react').ReactFragment
                | import('react').ReactPortal
                | null
                | undefined
        }) => JSX.Element,
    ): ReactNode
    data: IData
    value: ReactNode
}

interface IData {
    fias_id: string
}

export interface IAdress {
    value: string
    unrestricted_value: string
    data: object
}
