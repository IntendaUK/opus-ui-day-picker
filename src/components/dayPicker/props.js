/* eslint-disable max-len */

//Props
const props = {
	value: {
		type: 'mixed',
		desc: 'The selected date object(s). Can be a date object, array of date objects or object containing from and to date objects, depending on the mode'
	},
	valueFormatted: {
		type: 'string',
		desc: 'The formatted date string(s)'
	},
	format: {
		type: 'string',
		desc: 'The format string to be used. Follows moment.js conventions: https://devhints.io/datetime',
		dft: 'YYYY-MM-DD'
	},
	mode: {
		type: 'string',
		desc: '',
		options: ['single', 'multiple', 'range'],
		dft: 'single'
	},
	disabled: {
		type: 'object',
		desc: 'Defines dates that should not be selectable. Read more at https://daypicker.dev/docs/selection-modes#disabling-dates'
	},
	tLoadValue: {
		type: 'mixed',
		desc: 'When set, will load the date strings into the value and valueFormatted. Should be a date string, array of date strings or object containing from and to date strings, depending on the mode'
	},
	captionLayout: {
		type: 'string',
		desc: 'When set, show dropdowns to navigate between months or years. Read more at https://daypicker.dev/api/interfaces/PropsBase#captionlayout',
		options: ['dropdown', 'label', 'dropdown-months', 'dropdown-years']
	},
	startYear: {
		type: 'integer'
	},
	usestartYear: {
		type: 'date',
		internal: true
	},
	endYear: {
		type: 'integer'
	},
	useEndYear: {
		type: 'date',
		internal: true
	},
	month: {
		type: 'date',
		internal: true
	},
	fixedWeeks: {
		type: 'boolean',
		dft: true
	},
	extraPrps: {
		type: 'object',
		desc: 'Extra prps to pass into the picker',
		dft: () => ({})
	}
};

export default props;
