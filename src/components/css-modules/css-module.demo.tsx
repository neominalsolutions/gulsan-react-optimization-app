import React from 'react';

import * as demoStyles from './demo.module.scss';

function CssModuleDemo() {
	console.log('demoStyles', demoStyles);

	return (
		<>
			<p className={demoStyles.textCenter}>Ortalanmış Yazı</p>

			<p className={`${demoStyles.textCenter} ${demoStyles['color-red']}`}>
				Birden Fazla Stil uyguladık
			</p>
		</>
	);
}

export default CssModuleDemo;
