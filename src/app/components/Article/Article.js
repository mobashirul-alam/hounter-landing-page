import SectionHeadingAlt from "@/components/SectionHeadingAlt/SectionHeadingAlt";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/data";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { GoClockFill } from "react-icons/go";

const Article = () => {
    const basicArticles = articles.filter((article) => !article.description);
    const detailArticle = articles.find((article) => article.description);

    return (
        <div className="relative">
            <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
                <SectionHeadingAlt
                    subHeading={"See tips and trick from our partnership"}
                    heading={"Find out more about selling and buying homes"}
                />
                <div className="flex justify-center mt-6 mb-10">
                    <Button className="rounded-[32px] bg-[#10B981] text-[14px] px-4 py-3">
                        More Article
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-x-[68px]">
                    <div>
                        {basicArticles.map((article) => (
                            <div key={article.id} className="mb-8">
                                <div className="flex items-center gap-x-8">
                                    <div>
                                        <Image
                                            src={article.blogImg}
                                            alt="blog thumbnail"
                                            className="w-[250px] h-[144px]"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-x-4 mb-3">
                                            <Image
                                                src={article.authorImg}
                                                alt="author image"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <p className="text-[#3C4563] text-sm leading-[22px]">
                                                {article.author}
                                            </p>
                                        </div>
                                        <p className="text-lg font-medium text-[#1B1C57] mb-3">
                                            {article.title}
                                        </p>

                                        <p className="flex items-center text-[#888B97] text-sm leading-6">
                                            <GoClockFill className="mr-3 text-2xl" />{" "}
                                            {article.readTime} | {article.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="mb-6">
                            <Image
                                src={detailArticle.blogImg}
                                alt="blog image"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 mb-3">
                                <Image
                                    src={detailArticle.authorImg}
                                    alt="author image"
                                    className="w-8 h-8 rounded-full"
                                />
                                <p className="text-[#3C4563] text-sm leading-[22px]">
                                    {detailArticle.author}
                                </p>
                            </div>
                            <p className="text-lg font-medium text-[#1B1C57] mb-3">
                                {detailArticle.title}
                            </p>
                            <p className="text-[#626687] text-sm leading-6 mb-4">
                                {detailArticle.description}
                            </p>
                            <p className="flex items-center text-[#888B97] text-sm leading-6">
                                <GoClockFill className="mr-3 text-2xl" />{" "}
                                {detailArticle.readTime} | {detailArticle.date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={icons.vector.green}
                alt="green bg"
                className="absolute -left-40 top-28 rotate-90 -z-50"
            />
        </div>
    );
};

export default Article;
