import React, { useCallback, useState } from 'react';
import MemoChild from '../react-memo/memo.child';

// bir child component içindeki bir action props, parent component içinde bir state değişiminde etkilenip gereksiz yere re-render tabi tutuluyor
// bu sebeple child componentlerdeki action propsları parent componneten dinlendiğimiz durumlarda her bir action için ayrı bir useCallback yazmalıyız.

// https://primereact.org/dialog/ sistesindeki Modal örneğinde onHide action Props useCallback ile sarmallanmadığı için Dialog componentinin kullandığı sayfada bir setState işlemi yapılırsa Dialog Component ve sayfadaki diğer actiona sahip tüm componentler gereksiz yere re-render olur. Bunun önüne geçmek için  aşağıdaki kod bloğuna kodumuzu çevirelim

/*

const onHideChange = useCallback(() => {
    {if (!visible) return; setVisible(false); }
}, [])

<Dialog
    visible={visible}
    modal
    onHide={() => {if (!visible) return; setVisible(false); }}
    content={({ hide }) => (
        <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
            <...>
        </div>
    )}
></Dialog>

<Dialog
    visible={visible}
    modal
    onHide={onHideChange}
    content={({ hide }) => (
        <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
            <...>
        </div>
    )}
></Dialog>

*/

function UseCallBackDemo() {
	const [number, setNumber] = useState<number>(0);
	const [title, setTitle] = useState<string>('');
	// const onTitleChange =   (title: string) => {
	// 	console.log('güncel title' + title);
	// };

	const onTitleChange = useCallback((title: string) => {
		console.log('güncel title' + title);
	}, []);

	const onNumberChange = () => {
		setNumber(Math.round(Math.random() * 100));
	};

	const onInputTitleChange = (e: any) => {
		setTitle(e.target.value);
	};

	return (
		<>
			<MemoChild title={title} onTitleChange={onTitleChange} />

			<p>Number: {number}</p>
			<button onClick={onNumberChange}>Change Number</button>
			<br></br>
			<label>Güncel Title</label>
			<input onChange={onInputTitleChange} />
		</>
	);
}

export default UseCallBackDemo;
