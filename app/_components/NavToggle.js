import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavToggle({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden bg-gray-950 fixed w-12 h-12 sm:right-5 right-1 rounded-full border-none text-md flex items-center p-2 active:bg-primary-700 top-24 sm:top-32 z-50 "
    >
      {!isOpen ? <Bars3BottomRightIcon /> : <XMarkIcon />}
    </button>
  );
}
