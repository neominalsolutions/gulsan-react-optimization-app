// 300 ms de bir api istek atılıyor. son kullanıcı klavyeden yavaşta girese hızlıda girse isetk 300 ms sonrasında api atılıyor.
// 5 karakteri 300ms yazdığı için apidan daha filtreli bir sonuç döner.
// 2 karakteri göre aratırasa daha çok sonuç gelir.
// en fazla 500 ms kabul edilebilir.
const debounce = (fn: Function, ms = 500) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};

export default debounce;
