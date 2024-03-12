import React from 'react'

type ClassName = any
type Children = React.ReactNode | React.ReactNode[]

type DefaultProps = { className?: ClassName; children?: Children }

export type RFC<TProps extends {} = {}> = React.FunctionComponent<TProps & DefaultProps>
