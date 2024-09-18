//Components
import { DayPicker } from './components/dayPicker';

//PropSpecs
import propsDayPicker from './components/dayPicker/props';

import { registerComponentTypes } from '@intenda/opus-ui';

registerComponentTypes([{
	type: 'dayPicker',
	component: DayPicker,
	propSpec: propsDayPicker
}]);
