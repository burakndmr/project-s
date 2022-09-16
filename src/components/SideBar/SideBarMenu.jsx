// REACT
import { useState } from "react";

// ICONS
import { SeeMore, SeeLess } from "../../assets/icons/index";

// COMPONENTS
import Dot from "../General/Dot";

const SideBarMenu = (props) => {
  // DATA
  const { id, title, icon, notification, subMenu } = props.data;

  // STATE
  const { selectedMenu, setSelectedMenu } = props;

  const [selectedSubMenu, setSelectedSubMenu] = useState(1);

  // FUNCTIONS
  const handleMenuClick = (id) => {
    if (selectedMenu === id) {
      setSelectedMenu("");
    } else {
      setSelectedMenu(id);
    }
  };

  const handleSubMenuClick = (id) => {
    if (selectedSubMenu === id) {
      setSelectedSubMenu(0);
    }
    setSelectedSubMenu(id);
  };

  return (
    <div>
      <div
        onClick={() => handleMenuClick(id)}
        className={
          selectedMenu === id
            ? "bg-SideBar-Red w-full h-[50px] relative px-5 flex items-center justify-start cursor-pointer"
            : "w-full h-[50px] relative px-5 flex items-center justify-start cursor-pointer"
        }
      >
        <img className="mr-3" src={icon} alt={title} />
        <h2 className="uppercase  text-sm  text-white">{title}</h2>
        {notification > 0 && (
          <div className="absolute right-[14px] border rounded-md px-2 text-white border-[#73D9C7]">
            {notification}
          </div>
        )}
        {subMenu && (
          <div className="absolute right-[14px]">
            {selectedMenu === id ? (
              <img src={SeeLess} alt="SeeLess" />
            ) : (
              <img src={SeeMore} alt="SeeMore" />
            )}
          </div>
        )}
      </div>
      {subMenu &&
        selectedMenu === id &&
        subMenu.map((item) => (
          <div
            onClick={() => handleSubMenuClick(item.id)}
            key={item.id}
            className="bg-[#32363A] w-full h-[50px] hover:bg-Logo-Bg relative px-5 flex items-center justify-start cursor-pointer"
          >
            <Dot
              className="mr-4"
              size="5"
              color={selectedSubMenu === item.id ? "#F55661" : "#BABBBD"}
            />
            <h3
              className={
                selectedSubMenu === item.id
                  ? "pl-4 text-SideBar-Red font-bold"
                  : "pl-4 text-white"
              }
            >
              {item.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default SideBarMenu;
