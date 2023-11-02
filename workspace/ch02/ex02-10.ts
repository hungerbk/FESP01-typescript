(() => {
  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  function createDropdown<T>(list: Dropdown<T>[]): string {
    let result = "<select>\n";
    list.forEach((item) => {
      result += `<option${item.selected ? " selected" : ""}>${item.value}</option>\n`;
    });
    result += "</select>";

    return result;
  }

  var cityList: Dropdown<string>[] = [
    { value: "서울시", selected: false },
    { value: "인천", selected: true },
    { value: "광주", selected: false },
  ];

  const cityTag = createDropdown<string>(cityList);
  console.log(cityTag);

  var zipcodeList: Dropdown<number>[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: false },
    { value: 56789, selected: true },
  ];

  // 타입 추론이 되기 때문에 함수 호출 시 <타입>은 생략할 수 있음
  const zipcodeTag = createDropdown(zipcodeList);
  console.log(zipcodeTag);
})();
