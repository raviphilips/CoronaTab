import React from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'
import CloseSvg from '../../public/icons/close.svg'

type DayPickerValue = { startDate?: Date, endDate?: Date }

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  startDate: Date
  endDate: Date
  minDate: Date
  maxDate: Date
  month: Date
  fromMonth?: Date
  toMonth?: Date
  onApply: ({ startDate, endDate }: DayPickerValue) => any
  onCancel: () => any
}

interface State {
  startDate: Date
  endDate: Date
  minDate: Date
  maxDate: Date
  month: Date
  fromMonth: Date
  toMonth: Date
  popupTitle: string
}

export class DayPickerComponent extends React.Component<Props, State> {
  state: State = (() => {
    const { startDate, endDate, minDate, maxDate, month, fromMonth, toMonth } = this.props

    // Modify dates here perhaps

    const popupTitle = (!startDate || !endDate)
      ? 'Select dates'
      : 'Select new dates'

    return {
      startDate,
      endDate,
      minDate,
      maxDate,
      month,
      fromMonth,
      toMonth,
      popupTitle
    }
  })()

  onDayClick = (day: Date) => {
    const range = DateUtils.addDayToRange(day, {
      from: this.state.startDate,
      to: this.state.endDate
    })
    this.setState({
      startDate: range.from,
      endDate: range.to
    })
  }

  onApplyBtnClick = () => {
    this.props.onApply?.({
      startDate: this.state.startDate,
      endDate: this.state.endDate
    })
  }

  get isValid () {
    return this.state.startDate && this.state.endDate
  }

  render () {
    const { startDate, endDate, popupTitle } = this.state
    return (
      <div className={this.props.className}>
        <div className="flex flex-col md:flex-row items-center border-b border-lighter pb-2 md:pb-0 mb-2">
          <div className="flex-1 px-2 pb-2 pt-1">
            <h2 className="font-bold text-lg">
              {popupTitle}
            </h2>
          </div>
          <div className="text-right flex-1">
            {
              (startDate && endDate)
                ? (
                  <div className="inline-flex items-center rounded bg-lighter text-sm px-2 py-1 font-bold">
                    <span>{Date.rangeToString(startDate, endDate)}</span>
                    <button
                      onClick={() => this.setState({ startDate: null, endDate: null })}
                      className="hover:opacity-50 pl-2 pr-1 py-1"
                    >
                      <CloseSvg className="h-line-sm" />
                    </button>
                  </div>
                )
                : ''
            }
          </div>
        </div>
        <DayPicker
          numberOfMonths={2}
          selectedDays={[startDate, { from: startDate, to: endDate }]}
          month={this.state.month}
          fromMonth={this.state.fromMonth}
          toMonth={this.state.toMonth}
          modifiers={{ start: startDate, end: endDate }}
          onDayClick={this.onDayClick}
          disabledDays={[{
            after: this.state.maxDate,
            before: this.state.minDate
          }]}
        />
        <div className="flex items-center -mx-1 mt-2">
          <div className="flex-shrink-0 p-1">
            <button
              disabled={!startDate && !endDate}
              onClick={() => this.setState({ startDate: null, endDate: null })}
              className="btn btn-white border-2 border-lighter px-3 py-2 rounded mr-1"
            >
              Reset
            </button>

            <button
              onClick={() => this.props.onCancel?.()}
              className="btn btn-white border-2 border-lighter px-3 py-2 rounded"
            >
              Cancel
            </button>
          </div>
          <div className="flex flex-1 justify-end p-1">
            <button
              onClick={this.onApplyBtnClick}
              disabled={!this.isValid}
              className="btn btn-white border-2 border-lighter p-3 px-12 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    )
  }
}
