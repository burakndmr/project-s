import Logo from "./assets/logo/Sociality-logo.png";

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[274px] h-full bg-SideBar-Main flex flex-col">
        <div className="h-14 flex justify-center items-center bg-Logo-Bg">
          <img src={Logo} alt="Sociality Logo" />
        </div>
        <div className="flex">
          <div className="w-16 h-full bg-SideBar-Secondary">SIDEBAR-ONE</div>
          <div className="flex-1 h-full">SIDEBAR-TWO</div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default App;
