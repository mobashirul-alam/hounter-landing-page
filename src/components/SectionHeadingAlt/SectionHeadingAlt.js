const SectionHeadingAlt = ({ heading, subHeading }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-8 h-[1px] bg-[#F59E0B] mb-2"></div>
            <p className="text-[#F59E0B] text-sm leading-[17.5px] font-medium mb-3 text-center">
                {subHeading}
            </p>
            <h2 className="text-[#1B1C57] text-[32px] leading-[40px] font-semibold max-w-[471px] text-center capitalize">
                {heading}
            </h2>
        </div>
    );
};

export default SectionHeadingAlt;
