import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { MobileMenu } from "./MobileMenu";
import { NavbarItem } from "./NavbarItem";
import { useState, useCallback, useEffect } from "react";
import { menuData } from "./data";
import { AccountMenu } from "./AccountMenu";

type Props = {};

const TOP_OFFSET = 66;

export const Navbar = (props: Props) => {
  const [showMobMenu, setShowMobMenu] = useState<boolean>(false);
  const [showAccMenu, setShowAccMenu] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);

  const toggleMobMenu = useCallback(() => {
    setShowMobMenu((current) => !current);
  }, []);
  const toggleAccMenu = useCallback(() => {
    setShowAccMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= TOP_OFFSET
        ? setShowBackground(true)
        : setShowBackground(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zing-900 bg-opacity-90" : ""
        } `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {menuData.map((item) => (
            <NavbarItem label={item.text} key={item.id} />
          ))}
        </div>
        <div
          onClick={toggleMobMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="default-blue" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
