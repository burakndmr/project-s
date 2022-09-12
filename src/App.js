// REACT STUFF
import { useState } from "react";

// ASSETS
import Logo from "./assets/images/logos/Sociality-logo.png";
import Profile from "./assets/images/profile-foto.png";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
} from "./assets/images/logos/brand-logo";

import {
  engage,
  listen,
  notifications,
  publish,
  report,
  summary,
} from "./assets/icons/index";

// COMPONENTS
import Dot from "./components/General/Dot";
import SideBarMenu from "./components/SideBar/SideBarMenu";

function App() {
  // SIDEBAR
  const SideBar = [
    {
      id: 1,
      title: "Brand1",
      logo: Logo1,
      notification: 0,
    },
    {
      id: 2,
      title: "Brand2",
      logo: Logo2,
      notification: 99,
    },
    {
      id: 3,
      title: "Brand3",
      logo: Logo3,
      notification: 0,
    },
    {
      id: 4,
      title: "Brand4",
      logo: Logo4,
      notification: 0,
    },
    {
      id: 5,
      title: "Brand5",
      logo: Logo5,
      notification: 0,
    },
    {
      id: 6,
      title: "Brand6",
      logo: Logo6,
      notification: 0,
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(4);

  // STATUS
  const Status = [
    {
      id: 1,
      title: "Published",
      color: "#ACACAC",
    },
    {
      id: 2,
      title: "Scheduled",
      color: "#3AC183",
    },
    {
      id: 3,
      title: "Need Approval",
      color: "#F7BF38",
    },
    {
      id: 4,
      title: "Error",
      color: "#FB6450",
    },
    {
      id: 5,
      title: "Notes",
      color: "#67B1F2",
    },
  ];

  // SIDEBAR MENU
  const SideBarMenuArray = [
    {
      id: 1,
      title: "Notifications",
      icon: notifications,
      notification: 29,
    },
    {
      id: 2,
      title: "Summary",
      icon: summary,
      notification: 0,
      subMenu: [
        {
          id: 1,
          title: "menu1",
        },
      ],
    },
    {
      id: 3,
      title: "Publish",
      icon: publish,
      notification: 0,
      subMenu: [
        {
          id: 1,
          title: "Compose",
        },
        {
          id: 2,
          title: "Feed",
        },
      ],
    },
    {
      id: 4,
      title: "Engage",
      icon: engage,
      notification: 0,
      subMenu: [
        {
          id: 1,
          title: "menu1",
        },
      ],
    },
    {
      id: 5,
      title: "Listen",
      icon: listen,
      notification: 0,
      subMenu: [
        {
          id: 1,
          title: "menu1",
        },
      ],
    },
    {
      id: 6,
      title: "Report",
      icon: report,
      notification: 0,
      subMenu: [
        {
          id: 1,
          title: "menu1",
        },
        {
          id: 2,
          title: "menu2",
        },
      ],
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(3);

  return (
    <div className="flex min-h-screen">
      <div className="w-[274px] min-h-full bg-SideBar-Main flex  flex-col">
        <div className="h-14 flex justify-center items-center bg-Logo-Bg">
          <img src={Logo} alt="Sociality Logo" />
        </div>
        <div className="flex flex-1">
          <div className="w-16 h-full flex flex-col gap-3 items-center">
            {
              // SIDEBAR ICONS
              SideBar.map((item, i) => (
                <div key={i} className="relative">
                  {
                    // BRAND SELECTED
                    selectedBrand === item.id && (
                      <div className="absolute right-[46px] w-full h-full bg-SideBar-Red rounded-lg " />
                    )
                  }
                  {
                    // BRAND NOTIFICATION
                    item.notification > 0 && (
                      <div className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-[#3AC1A9] rounded-full flex justify-center items-center text-white text-xs">
                        {item.notification}
                      </div>
                    )
                  }
                  <img
                    onClick={() => setSelectedBrand(item.id)}
                    key={item.id}
                    className={
                      item.id === selectedBrand
                        ? "rounded-lg opacity-100"
                        : "rounded-lg opacity-75"
                    }
                    src={item.logo}
                    alt={item.title}
                  />
                </div>
              ))
            }
          </div>
          <div className="flex-1 h-full bg-SideBar-Secondary">
            {SideBarMenuArray.map((item) => (
              <SideBarMenu
                key={item.id}
                data={item}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 py-8 px-12">
        <div className="flex justify-between">
          <div className="flex gap-5 flex-1 flex-wrap items-center">
            {
              // Status
              Status.map((item) => (
                <div className="flex gap-[10px] items-center" key={item.id}>
                  <Dot size="10" color={item.color} />
                  <p className="text-[#444] text-lg whitespace-nowrap">
                    {item.title}
                  </p>
                </div>
              ))
            }
          </div>
          <div>
            <img className="rounded-full w-16" src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
