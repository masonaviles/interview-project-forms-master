import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Input, Typeahead } from '../primitives'

export type { RFC } from '@center-inc/common-web'

export type GetResultsFunc<T> = (query: string) => Array<T>

export type GetResultsPromiseFunc<T> = (query: string) => Promise<Array<T>>

type RenderRowFunc<T> = (item: T, props: { active: boolean; selected: boolean }) => any

export type ObjectWithValueKey<TValue = string> = {
  value: TValue
}

export type State<TValue extends string> = {
  query: string
  value?: TValue | ''
}

export type ChangeQueryAction = {
  type: 'CHANGE_QUERY'
  payload: {
    query: string
  }
}

export type SelectAction<TValue> = {
  type: 'SELECT_VALUE'
  payload: {
    value: TValue
  }
}

type TypeaheadInputProps<TObj extends ObjectWithValueKey> = {
  getResults: GetResultsPromiseFunc<TObj>
  getInitialResults?: GetResultsPromiseFunc<TObj>
  value: TObj['value']
  defaultValue?: TObj['value']
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  showNoResultsWhenEmpty?: boolean
  itemToKey: (item: TObj) => any
  className?: string
  placeholder?: string

  // TODO: remove the any
  renderRow: RenderRowFunc<TObj> | any
  renderAddOptionRow?: RenderRowFunc<TObj> | any
}
// & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'>

export const TypeaheadInput = <TObjectWithValueKey extends ObjectWithValueKey>({
  getResults,
  renderRow,
  itemToKey,
  className,
  onChange = undefined,
  placeholder = undefined,
  showNoResultsWhenEmpty = false,
  renderAddOptionRow,
  ...props
}: TypeaheadInputProps<TObjectWithValueKey>): React.ReactElement => {
  const handleChange = React.useCallback(
    (value: TObjectWithValueKey['value']) => {
      if (onChange) {
        return onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)
      }
    },
    [onChange]
  )
  const [options, setOptions] = React.useState<Array<TObjectWithValueKey>>([])

  React.useEffect(() => {
    if (getResults) {
      getResults(props.value).then((opts) => {
        setOptions(opts)
      })
    }
  }, [props.value, getResults, setOptions])

  const inputRef = React.useRef<HTMLInputElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const handleInputClick = React.useCallback(() => {
    buttonRef.current?.click()
    if (getResults) {
      getResults('').then((opts) => setOptions(opts))
    }
  }, [getResults, setOptions])

  const handleKeyDown = React.useCallback(
    (event: any) => {
      if (onChange && (event.key === 'Tab' || event.key === 'Enter')) {
        if (event.target?.value) {
          onChange({
            // @ts-ignore events
            target: {
              value: event.target.value,
            },
          })
        }
      }
    },
    [onChange]
  )

  const handleInputBlur = React.useCallback(() => {
    if (inputRef.current?.value) {
      handleChange(inputRef.current.value)
    }
  }, [inputRef, handleChange])

  return (
    <Combobox
      // @ts-ignore typing
      as="div"
      className={clsx(className)}
      onChange={handleChange}
      {...props}
    >
      <Combobox.Input
        as={Input}
        onBlur={handleInputBlur}
        autoComplete="off"
        ref={inputRef}
        onClick={handleInputClick}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <Combobox.Button className="hidden" ref={buttonRef}></Combobox.Button>
      <Transition
        enter="transition duration-25 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-25 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options>
          <Typeahead.ResultsContainer className="absolute mt-[4px] !z-50">
            {options.map((option) => (
              <Combobox.Option key={itemToKey(option)} value={option.value}>
                {({ active, selected }) => (
                  <Typeahead.ResultItem
                    active={active}
                    selected={selected}
                    key={`${itemToKey(option)}.result-item`}
                  >
                    {renderRow(option, { active, selected })}
                  </Typeahead.ResultItem>
                )}
              </Combobox.Option>
            ))}
            {/* <div className="py-1 px-2 text-slate-700 border-top-2">
            {`Suggest a new feature ${query}`}
          </div> */}
            {options.length === 0 && showNoResultsWhenEmpty ? (
              <div className="py-1 px-2 text-slate-400">No Results</div>
            ) : undefined}
          </Typeahead.ResultsContainer>
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}
