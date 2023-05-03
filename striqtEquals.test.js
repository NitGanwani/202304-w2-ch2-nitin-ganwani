import result from "./striqtEquals.js";

describe("Given a striqtEquals function", () => {
  describe("When it receives a value 2 and 2", () => {
    test("Then it should return true", () => {
      //Arrange ("camisa y pendrive" --> (Organizar/Inicializa) => inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.))
      const valueA = 2;
      const valueB = 2;
      const expectedValue = result(valueA, valueB);

      //Act ("Darle al botón para que funcione la máquina"  -->  (Actuar) => realiza la llamada al método a probar con los parámetros preparados para tal fin.)
      const correctValue = true;

      //Assert ("Afirmar/comprobar que ha salido bien" --> (Confirmar/Comprobar) => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.)
      expect(expectedValue).toBe(correctValue);
    });
  });

  describe("When it receives a value NaN and NaN", () => {
    test("Then t should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const expectedValue = result(valueA, valueB);
      const correctValue = false;
      expect(expectedValue).toBe(correctValue);
    });
  });

  describe("When it receives a value 0 and -0", () => {
    test("It should return true", () => {
      const valueA = 0;
      const valueB = -0;
      const expectedValue = result(valueA, valueB);
      const correctValue = true;
      expect(expectedValue).toBe(correctValue);
    });
  });

  describe("When it receives a value 2 and '2'", () => {
    test("It should return false", () => {
      const valueA = 2;
      const valueB = "2";
      const expectedValue = result(valueA, valueB);
      const correctValue = false;
      expect(expectedValue).toBe(correctValue);
    });
  });
});
