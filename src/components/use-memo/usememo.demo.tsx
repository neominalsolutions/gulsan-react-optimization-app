import React, { useEffect, useMemo, useState } from 'react';

// useMemo hook ile bir component içinde kullanılan değişkenleri memoize ediyoruz.

function UseMemoDemo() {
	const [gender, setGender] = useState<string>('male');
	const [cm, setCm] = useState<number>(2000);

	// useEffect(() => {}, [cm]);

	const calc = () => {
		console.log('...calculating');
		return 100;
	};
	/*
	const result = calc(); // eğer result değerim sadece component ilk doma basıldığında hesaplansın istersem yada hesaplamayı bir değerin değişimini takip edene kadar memoize etmek istersem useMemo hook kullarım
    */

	// async işlemler ile yani axios dan veri çekme gibi asenkron kod blogları ile useMemo kullanmıyoruz. useMemo arayüzde yapılan işlemlerin sonuçlarını memoize ediyor. bununda senkron bir veri olması lazım.
	const result = useMemo(() => calc(), []); // calc sadece 1 kez component doma yüklenince çalışsın.

	const convertCmtoMetre = () => {
		console.log('...convert to cm to meter');
		return cm / 100;
	};

	// cm değeri değişirse meterValue tekrar güncelle.
	const meterValue = useMemo(() => convertCmtoMetre(), [cm]);

	const onGenderSelect = (event: any) => {
		setGender(event.target.value);
	};

	const onCmChange = (event: any) => {
		setCm(Number(event.target.value));
	};

	return (
		<>
			<select defaultValue={gender} onChange={onGenderSelect}>
				<option value="male">Erkek</option>
				<option value="female">Kadın</option>
			</select>
			<hr></hr>
			<p className="p-2">Result: {result}</p>
			<input onChange={onCmChange} />
			<p>Meter Value: {meterValue}</p>
		</>
	);
}

export default UseMemoDemo;
