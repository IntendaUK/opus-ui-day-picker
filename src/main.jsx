//Imports
import React from 'react';
import { createRoot } from 'react-dom/client';

import Opus from '@intenda/opus-ui';
import './library';

//Sample
createRoot(document.getElementById('root'))
	.render(
		<Opus
			startupMda={{
				type: 'containerSimple',
				prps: {
					singlePage: true,
					backgroundColor: 'white',
					mainAxisAlign: 'center',
					crossAxisAlign: 'center',
					gap: '24px'
				},
				wgts: [{
					type: 'containerSimple',
					prps: {
						padding: true,
						paddingSize: '24px',
						roundedBorders: true,
						backgroundColor: '#eee',
						borderRadius: '36px'
					},
					wgts: [{
						id: 'dayPicker',
						type: 'dayPicker',
						prps: {
							mode: 'multiple',
							captionLayout: 'dropdown',
							endDate: '1 Dec 2025',
							style: {
								'.cpnDayPicker': {
									'--rdp-accent-color': '#2277DD',
									'--rdp-selected-border': 'none',
									'--rdp-selected-font': 'inherit',
									'.rdp-selected': {
										color: 'white',
										'background-color': '#2277DD',
										'border-radius': '50%'
									}
								}
							}
						}
					}]
				}, {
					type: 'container',
					prps: {
						canClick: true,
						fireScript: {
							actions: [{
								type: 'setState',
								target: 'dayPicker',
								key: 'tLoadValue',
								value: ['22 Dec 2024', '3 Jan 2025' ]
							}]
						}
					},
					wgts: [{
						type: 'label',
						prps: {
							cpt: 'Load Value'
						}
					}]
				}]
			}}
		/>
	);
