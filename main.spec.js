describe ("Math.sqtr() это функция", function() {
	
		it("вычисляет квадратный корень", function() {
			expect(Math.sqrt(9)).toBe(3);
		});

    it("возвращает ноль, если попытаться найти корень из ноля", function() {
      expect(Math.sqrt(0)).toBe(0);
    });

});

describe('Тест на сложение', function () {
    it('складываем два числа', function () {
        expect(1 + 2).toEqual(3);
    });
});
	
describe ("Тестирование функции ageClassification", function() {
	
  it("проверяем детский возраст", function() {
    n=5;
    function ageClassification(n) {
      return n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null 
      };
    expect(ageClassification(n)).toBe('детский возраст');
  });

  it("проверяем средний возраст", function() {
  n=55;
  function ageClassification(n) {
    return n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null 
    };
  expect(ageClassification(n)).toBe('средний возраст');
  });

});




