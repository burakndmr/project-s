// IMPORT REACT STUFF
import { useState } from "react";

// IMPORT ASSETS
import Logo from "./assets/logos/Sociality-logo.png";
import Profile from "./assets/images/profile-foto.png";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
} from "./assets/images/brand-logo";

function App() {
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

  return (
    <div className="flex min-h-screen">
      <div className="w-[274px] min-h-full bg-SideBar-Main flex flex-col">
        <div className="h-14 flex justify-center items-center bg-Logo-Bg">
          <img src={Logo} alt="Sociality Logo" />
        </div>
        <div className="flex flex-1">
          <div className="w-16 h-full flex flex-col gap-3 items-center">
            {
              // SIDEBAR ICONS
              SideBar.map((item) => (
                <div className="relative">
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
          <div className="flex-1 h-full bg-SideBar-Secondary">SIDEBAR-TWO</div>
        </div>
      </div>
      <div className="flex-1 py-8 px-12">
        <div className="flex justify-between">
          <div>STATUS</div>
          <div>
            <img className="rounded-full" src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
