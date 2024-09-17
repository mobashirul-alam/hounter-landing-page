const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="flex items-start gap-x-2">
            <div className="w-8 h-[1px] bg-[#F59E0B] mt-2"></div>
            <div>
                <p className="text-sm font-medium text-[#F59E0B] leading-[17.5px] mb-3">
                    {subHeading}
                </p>
                <h3 className="text-[32px] font-semibold text-[#1B1C57] leading-[40px]">
                    {heading}
                </h3>
            </div>
        </div>
    );
};

export default SectionHeading;
