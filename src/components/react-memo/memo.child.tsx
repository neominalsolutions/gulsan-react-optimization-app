import React, { memo, useEffect } from 'react';

// memoisation kavramı component belirli durumlar dışında rendera dahil olmuyor.

type Props = {
	title?: string;
	onTitleChange?: (title: string) => void;
};

// react da memo kullansak dahi componente ait propslar güncellenince child component tekrardan render alır.

function MemoChild({ title, onTitleChange }: Props) {
	console.log('..rendering');

	// title değiştiğinde title değişti eventini fırlat.
	useEffect(() => {
		if (onTitleChange) {
			onTitleChange(title as string);
		}
	}, [title]);

	return <>Memo Child : {title}</>;
}

export default memo(MemoChild);
