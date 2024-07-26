import React, { useEffect, useRef, useState } from 'react';

function UseRefDemo() {
	console.log('...rendering');

	// component içindeki bir değeri render sonrası kaybetmek istemiyorsak memoize etmek istiyorsak kullanılan bir memoization tekniği

	// arayüzdeki componentin DOM referansına bağlanıp gereksiz renderları ortadan kaldırmak için kullanılan bir yöntem (document.getElementById() ile elementin html referansına bağlanma çok benzer bir yöntem)

	// Not: Component Render alana kadar useRef içerisindeki bilgilere JSX üzerinden erişemiyoruz.
	// JSX üzerinde kullanıcın etkileşimi sonrasında güncellenip ekran gösterilecek bir durum varsa zaten UseState kullanalım.

	//2. kullanım
	const focusCount = useRef<number>(0);
	let _fcount = 0; // render sonrası sıfırlandı, render sonrası değer korunamıyor.

	const inputRef = useRef<HTMLInputElement | null>(null);
	const [number, setNumber] = useState(0);

	const [cityId, setCityId] = useState('35');

	const cityRef = useRef<number>(0);

	const onClick = () => {
		inputRef.current?.focus();
		focusCount.current = focusCount.current + 1;
		console.log('focusCount', focusCount);

		_fcount = _fcount + 1;
		console.log('_fcount', _fcount);

		if (focusCount.current == 5) {
			inputRef.current?.disabled;
		}
	};

	const getValue = () => {
		console.log('value', inputRef.current?.value);
		alert(inputRef.current?.value);
		// setState yaptığımız için render aldırıcak
		setNumber(Math.random() * 1);
	};

	const onReset = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	// useEffect(() => {
	// 	console.log('cityId değiştil', cityId);
	// }, [cityId]);

	const onCityChange = (event: any) => {
		// apiden veri çekme
		// setCityId(event.target.value);
		cityRef.current = event.target.value;

		console.log('state cityId', cityId); // async çalışıyor
		console.log('cityRef.current', cityRef.current);
		// cityId göre api istek at
	};

	return (
		<>
			<div className="p-5">
				seçilen şehir Id : {cityRef.current}
				<select defaultValue={cityId} onChange={onCityChange}>
					<option value="6">Ankara</option>
					<option value="35">İzmir</option>
				</select>
				<hr></hr>
				<input className="form-input" ref={inputRef} />
				<br></br>
				<button className="border border-gray-500" onClick={onClick}>
					Focus
				</button>
				<br></br>
				<button className="border border-gray-500" onClick={getValue}>
					Get Value
				</button>
				<br></br>
				<button className="border border-gray-500" onClick={onReset}>
					Reset
				</button>
				<p>Value: {inputRef.current?.value}</p>
			</div>
		</>
	);
}

export default UseRefDemo;
