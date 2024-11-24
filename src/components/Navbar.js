import GoogleLogo from "../images/googlelogo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="h-16 border-b px-4 flex justify-between items-center bg-white fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-row items-center gap-2">
        <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100">
          <svg className="fill-[#5f6368] w-6 h-6" focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </button>
        <img className="mt-1" src={GoogleLogo} alt="google-logo" />
        <div className="ml-[26px] hidden lg:flex flex-row gap-2">
          <Button
            variant="outline"
            title="Travel"
            className="text-[#202124] h-10 pl-3 pr-4 border-[#dadce0]"
            icon={<svg className="fill-[#1A73E8]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><rect fill="none" height="24" width="24"></rect><path d="M16.5,6H15l0-3.25C15,2.34,14.66,2,14.25,2h-4.5C9.34,2,9,2.34,9,2.75V6H7.5C6.67,6,6,6.67,6,7.5v11 C6,19.33,6.67,20,7.5,20v0.5C7.5,21.33,8.17,22,9,22s1.5-0.67,1.5-1.5V20h3v0.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5V20 c0.83,0,1.5-0.67,1.5-1.5v-11C18,6.67,17.33,6,16.5,6z M10.5,3.5h3V6h-3V3.5z M14.56,15.58c-0.62,0.57-1.47,0.91-2.48,0.91 c-1.46,0-2.73-0.84-3.35-2.07c-0.26-0.51-0.4-1.08-0.4-1.68c0-0.61,0.14-1.18,0.4-1.69c0.62-1.22,1.89-2.07,3.35-2.07 c0.99,0,1.84,0.36,2.48,0.95c0.01,0.01,0.01,0.04,0,0.05L13.54,11c-0.01,0.02-0.04,0.02-0.05,0c-0.39-0.35-0.87-0.53-1.41-0.53 c-0.98,0-1.8,0.66-2.1,1.55c-0.08,0.23-0.12,0.47-0.12,0.71c0,0.25,0.04,0.49,0.12,0.71c0.3,0.89,1.12,1.55,2.1,1.55 c0.5,0,0.93-0.13,1.27-0.36c0.38-0.25,0.64-0.63,0.73-1.08c0-0.02-0.01-0.05-0.04-0.05h-1.93c-0.02,0-0.04-0.02-0.04-0.04v-1.37 c0-0.02,0.02-0.04,0.04-0.04h3.46c0.02,0,0.03,0.01,0.04,0.03c0.04,0.23,0.06,0.48,0.06,0.73C15.68,13.97,15.27,14.93,14.56,15.58z"></path></g></svg>}
          />
          <Button
            variant="outline"
            title="Explore"
            className="text-[#202124] h-10 pl-3 pr-4 border-[#dadce0]"
            icon={<svg className="fill-[#1A73E8]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><rect fill="none" height="24" width="24"></rect><path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path></svg>}
          />
          <Button
            variant="secondary"
            title="Flights"
            className="h-10 pl-3 pr-4 bg-[#e8f0fe] border-0 hover:bg-blue-100"
            icon={<svg className="fill-[#1A73E8]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><rect fill="none" height="24" width="24"></rect><path d="M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z"></path></svg>}
          />
          <Button
            variant="outline"
            title="Hotels"
            className="text-[#202124] h-10 pl-3 pr-4 border-[#dadce0]"
            icon={<svg className="fill-[#1A73E8]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g></g></svg>}
          />
          <Button
            variant="outline"
            title="Vacation Rentals"
            className="text-[#202124] h-10 pl-3 pr-4 border-[#dadce0]"
            icon={<svg className="fill-[#1A73E8]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><g><rect fill="none" height="24" width="24"></rect></g></g><g><g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path></g></g></g></svg>}
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2.5">
        <button className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-100">
          <svg className="fill-[#5f6368]" enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false"><rect fill="none" height="24" width="24"></rect><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
        </button>
        <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100">
          <svg className="fill-[#5f6368] w-6 h-6" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path><image src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="24" width="24"></image></svg>
        </button>
        <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100">
          <div className="w-8 h-8 rounded-full bg-[#5D4037] text-white font-medium flex justify-center items-center">
            M
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;