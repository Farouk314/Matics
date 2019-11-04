import React from "react";
import { Action, State } from "App";
import { User, ChevronDown } from "react-feather";
import { Transition } from "react-transition-group";
import { navigate } from "@reach/router";
import { useOnClickOutside } from "helpers/hooks/useOnClickOutside";

type UserMenuProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = UserMenuProps;

const UserMenu: React.FC<Props> = ({ state, dispatch }) => {
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);

  // const wrapperRef = React.useRef(null);

  // React.useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent, ref: React.MutableRefObject<any>) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       setDropdownVisible(false);
  //     }
  //   };
  //   const clickOutsideListener = (e: MouseEvent) => handleClickOutside(e, wrapperRef);
  //   document.addEventListener("click", clickOutsideListener);

  //   return () => {
  //     document.removeEventListener("click", clickOutsideListener);
  //   };
  // }, [dropdownVisible]);

  const bind = useOnClickOutside(() => setDropdownVisible(false));

  const handleMenuClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
    } else {
      setDropdownVisible(true);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: "SET_USER_LOGGED_OUT" });
  };

  return (
    <div className="UserMenu">
      <button className="Btn LightGrey WithIcon Left Right" onClick={handleMenuClick}>
        <User size={25} className="Icon Left" color="#000" />
        {state.user.userName}
        <ChevronDown size={25} className="Icon Right Lower" color="#000" style={{ top: "8px" }} />
      </button>
      <Transition in={dropdownVisible} timeout={100}>
        {transitionState => (
          <div className={"UserMenuDropdown " + transitionState} ref={bind.ref}>
            <ul className="Menu">
              <li
                className="Item"
                onClick={() => {
                  setDropdownVisible(false);
                  navigate("/Matics/dashboard");
                }}
              >
                Dashboard
              </li>
              <li
                className="Item"
                onClick={() => {
                  setDropdownVisible(false);
                  navigate("/Matics/assignments");
                }}
              >
                Assignments
              </li>
              <li className="Item" onClick={handleLogOut}>
                Log Out
              </li>
            </ul>
          </div>
        )}
      </Transition>
    </div>
  );
};

export { UserMenu };
