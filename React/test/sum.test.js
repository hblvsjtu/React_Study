test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3);
});

test('object assignment', () => {
	const data = {
		one: 1
	};
	data['two'] = 2;
	expect(data).toEqual({
		one: 1,
		two: 2
	});
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

test('two plus two', () => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);

	// toBe and toEqual are equivalent for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

function compileAndroidCode() {
	throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
	expect(compileAndroidCode).toThrow();

	// You can also use the exact error message or a regexp
	expect(compileAndroidCode).toThrow('you are using the wrong JDK');
	expect(compileAndroidCode).toThrow(/JDK/);
});


test('the data is peanut butter', done => {
	function callback(data) {
		expect(data).toBe('peanut butter');
		done();
	};

	function fetchData(data, callback) {
		setTimeout((() => {
			callback("peanut " + data);
			console.log("fetchData...");
		}), 1000);
	};

	fetchData('butter', callback);
});

describe("deccribe block", () => {
	expect(1 + 2).toBe(3);
});

describe("mock function", () => {

	// 创建我们需要测试的函数
	let testFunction = function(array, callback) {
		array.map(callback);
		console.log([...array]);
	}

	const mockCallback = jest.fn();
	testFunction([1, 2, 3], mockCallback);
	expect(mockCallback.mock.calls.length).toBe(3);
})

beforeEach(() => {
	console.log("start a test....");
});

afterEach(() => {
	console.log("end a test....");
});

beforeAll(() => console.log('start ....'));
afterAll(() => console.log('end ....'));