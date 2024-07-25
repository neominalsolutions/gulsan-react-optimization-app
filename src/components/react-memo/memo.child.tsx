import React, { memo } from 'react';

// memoisation kavramı component belirli durumlar dışında rendera dahil olmuyor.

type Props = {
	title?: string;
};

// react da memo kullansak dahi componente ait propslar güncellenince child component tekrardan render alır.

function MemoChild({ title }: Props) {
	console.log('..rendering');
	return <>Memo Child : {title}</>;
}

export default memo(MemoChild);
