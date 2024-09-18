//React
import React, { useEffect, useCallback } from 'react';

//Sytem
import { dateFormatter } from '@intenda/opus-ui';

//Styles
import './styles.css';

//Plugins
import { DayPicker as Picker } from 'react-day-picker';
import 'react-day-picker/style.css';

//Events
const onSelect = ({ setState, state: { mode, format } }, selected) => {
	if (!selected)
		return;

	let valueFormatted;

	if (mode === 'single')
		valueFormatted = dateFormatter(selected, format);
	else if (mode === 'range') {
		valueFormatted = {
			from: dateFormatter(selected.from, format),
			to: dateFormatter(selected.to, format)
		};
	} else
		valueFormatted = selected.map(v => dateFormatter(v, format));

	setState({
		value: selected,
		valueFormatted
	});
};

const onLoadValue = ({ setState, state: { mode, format, tLoadValue } }) => {
	if (!tLoadValue)
		return;

	let value;
	let valueFormatted;
	let month;

	if (mode === 'single') {
		value = new Date(tLoadValue);
		valueFormatted = dateFormatter(value, format);
		month = value;
	} else if (mode === 'range') {
		value = {
			from: new Date(tLoadValue.from),
			to: new Date(tLoadValue.to)
		};

		valueFormatted = {
			from: dateFormatter(value.from, format),
			to: dateFormatter(value.to, format)
		};

		month = value.from;
	} else {
		value = tLoadValue.map(v => new Date(v));
		valueFormatted = value.map(v => dateFormatter(v, format));
		month = value[0];
	}

	setState({
		value,
		valueFormatted,
		month,
		deleteKeys: [
			'tLoadValue'
		]
	});
};

const onMonthChange = ({ setState }, month) => {
	setState({
		month
	});
};

const onSetStartDate = ({ setState, state: { startDate }}) => {
	if (!startDate)
		return;

	setState({
		useStartDate: new Date(startDate)
	});
};

const onSetEndDate = ({ setState, state: { endDate }}) => {
	if (!endDate)
		return;

	setState({
		useEndDate: new Date(endDate)
	});
};

//Component
export const DayPicker = props => {
	const { id, getHandler, classNames, style, state } = props;
	const { mode, value, valueFormatted, disabled, tLoadValue, month, captionLayout } = state;
	const { startDate, useStartDate, endDate, useEndDate, fixedWeeks, extraPrps } = state;

	useEffect(getHandler(onLoadValue), [tLoadValue]);
	useEffect(getHandler(onSetStartDate), [startDate]);
	useEffect(getHandler(onSetEndDate), [endDate]);
	
	const setSelected = useCallback(getHandler(onSelect), []);
	const setMonth = useCallback(getHandler(onMonthChange), []);

	return (
		<Picker
			id={id}
			className={classNames}
			style={style}
			mode={mode}
			month={month}
			onMonthChange={setMonth}
			selected={value}
			onSelect={setSelected}
			disabled={disabled}
			captionLayout={captionLayout}
			startMonth={useStartDate}
			endMonth={useEndDate}
			fixedWeeks={fixedWeeks}
			{...extraPrps}
		/>
	);
};
