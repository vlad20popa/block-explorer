import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItems } from "@/model/NavigationBar";

type NavIconProps = {
  label: NavItems;
  icon: IconDefinition;
  selectedTab: NavItems;
  onClick: (label: NavItems) => void;
};

export default function NavIcon({
  label,
  icon,
  selectedTab,
  onClick,
}: NavIconProps) {
  const isSelected = label === selectedTab;

  return (
    <div
      className={`flex flex-col justify-center items-center text-white py-2 hover:cursor-pointer ${isSelected && "bg-selected-purple"}`}
      onClick={() => onClick(label)}
    >
      <div className="py-1 pointer-events-aut">
        <FontAwesomeIcon icon={icon} className="w-6 text-white" />
      </div>
      <span className="text-xs text-white">{label}</span>
    </div>
  );
}
