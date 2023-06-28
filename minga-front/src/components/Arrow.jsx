export default function Arrow({icon, onClick}) {
  return (
    <svg onClick={onClick} className="lg:bg-[#FFF] lg:h-[1.5rem] lg:w-[1.5rem] rounded-[15px] p-[5px] lg:ml-[1rem]"  width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d={icon} fill="#333333"/>
    </svg>
  );
}
