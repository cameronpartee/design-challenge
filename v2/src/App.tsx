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

  const options = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
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
            placeholder="Price"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="Store"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="Color"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="Category"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="Season"
            options={options}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="Brand"
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
