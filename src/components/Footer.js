import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-b p-6 flex flex-col gap-7">
        <div className="w-full flex justify-center gap-2">
          <Button
            variant="outline"
            title={"Language · English (United States)"}
            icon={<svg className="fill-[#1A73E8]" width="18" height="18" viewBox="0 0 24 24" focusable="false"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>}
          />
          <Button
            variant="outline"
            title={"Location · Malaysia"}
            icon={<svg className="fill-[#1A73E8]" width="18" height="18" viewBox="0 0 24 24" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>}
          />
          <Button
            variant="outline"
            title={"Currency · MYR"}
            icon={<svg className="fill-[#1A73E8]" version="1.1" width="18" height="18" viewBox="0 0 24 24"><g><rect fill="none" width="24" height="24"></rect></g><g><g><circle cx="12" cy="12" r="3"></circle><polygon points="6.5,9.5 9,9.5 9,8 5,8 5,12 6.5,12"></polygon><polygon points="15,16 19,16 19,12 17.5,12 17.5,14.5 15,14.5"></polygon><path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20, 5z M20,17H4V7h16V17z"></path></g></g></svg>}
          />
        </div>
        <p className="font-roboto text-sm text-[#70757a] text-center mx-auto max-w-xl">
          Current language and currency options applied: English (United States) - Malaysia - MYR
          Displayed currencies may differ from the currencies used to purchase flights. Learn more
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            About
          </a>
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            Privacy
          </a>
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            Terms
          </a>
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            Join user studies
          </a>
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            Feedback
          </a>
          <a href="" className="font-roboto text-sm text-[#1A73E8] hover:underline">
            Help Center
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-12 mt-10">
        <button className="flex justify-between items-center gap-3">
          <span className="font-roboto font-medium text-sm text-[#1a73e8]">
            International sites
          </span>
          <span className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fill-[#1a73e8]"><path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path></svg>
          </span>
        </button>
        <button className="flex justify-between items-center gap-3">
          <span className="font-roboto font-medium text-sm text-[#1a73e8]">
          Explore flights
          </span>
          <span className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fill-[#1a73e8]"><path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path></svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Footer;