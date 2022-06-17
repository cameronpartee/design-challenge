import "./App.css";
import { itemsArray } from "./data/server";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";

function App() {
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
  };

  const options: IDropdownOption[] = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
    { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
    {
      key: "vegetablesHeader",
      text: "Vegetables",
      itemType: DropdownMenuItemType.Header,
    },
    { key: "broccoli", text: "Broccoli" },
    { key: "carrot", text: "Carrot" },
    { key: "lettuce", text: "Lettuce" },
  ];

  return (
    <div className="Container">
      <div className="FilterContainer">
        <div className="Filters">
          <div>PRICE</div>
          <div>STORE</div>
          <div>COLOR</div>
          <div>CATEGORY</div>
          <div>SEASON</div>
          <div>BRAND</div>
          <Dropdown
            placeholder="BRAND"
            multiSelect
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
