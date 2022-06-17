import "./App.css";
import { itemsArray } from "./data/server";
import {
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import { initializeIcons } from "@fluentui/react/lib/Icons";

function App() {
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
  };

  const options: IDropdownOption[] = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
    { key: "broccoli", text: "Broccoli" },
    { key: "carrot", text: "Carrot" },
    { key: "lettuce", text: "Lettuce" },
  ];

  initializeIcons();

  return (
    <div className="Container">
      <div className="FilterContainer">
        <div className="Filters">
          <Dropdown
            placeholder="PRICE"
            options={["hello", "Cameron"]}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="STORE"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="COLOR"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="CATEGORY"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="SEASON"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="BRAND"
            options={options}
            styles={dropdownStyles}
          />
        </div>
      </div>
      <div className="Content">
        <div className="Grid">
          {itemsArray.map((item) => (
            <div key={item.img} className="Item">
              <a href={item.item} target="_blank">
                <img src={item.img} alt={item.store} />
                <img src={item.favicon} alt={item.store} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
