import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

export default function RightSidebar() {
  const hotQuestions = [
    { id: "1", title: "How do I expess as a custom server in Nextjs?" },
    { id: "2", title: "How do I expess as a custom server in Nextjs?" },
    { id: "3", title: "How do I expess as a custom server in Nextjs?" },
    { id: "4", title: "How do I expess as a custom server in Nextjs?" },
  ];

  const popularTags = [
    { id: "1", name: "javascript", totalQuestions: 100 },
    { id: "2", name: "react", totalQuestions: 100 },
    { id: "3", name: "java", totalQuestions: 100 },
    { id: "4", name: "c++", totalQuestions: 100 },
  ];
  return (
    <section
      className="background-light900_dark200 light-border custom-scrollbar sticky right-0
    top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex items-center justify-between gap-7"
            >
              <p className="body-medium  text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                className="invert-colors"
                alt="cheron right"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag.id}
              _id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}
