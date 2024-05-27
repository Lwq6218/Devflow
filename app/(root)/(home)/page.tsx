import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/LocalSearchbar";
import NotResult from "@/components/shared/NotResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "12345",
      title: "如何使用 TypeScript 接口?",
      tags: [
        { _id: "1", name: "TypeScript" },
        { _id: "2", name: "编程" },
      ],
      author: {
        _id: "1",
        name: "张三",
        picture: "https://example.com/picture.jpg",
      },
      upvotes: 1231313,
      views: 12800,
      answers: [
        {
          _id: "1",
          content: "你可以使用接口来定义对象的结构。",
          author: {
            _id: "1",
            name: "李四",
          },
          createdAt: new Date("2023-05-27T12:34:56Z"),
        },
        {
          _id: "1",
          content: "接口在 TypeScript 中非常有用。",
          author: {
            _id: "3",
            name: "王五",
          },
          createdAt: new Date("2023-05-28T14:22:10Z"),
        },
      ],
      createdAt: new Date("2023-05-28T14:22:10Z"),
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClases="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NotResult
            description="Be the first to break the silence!"
            title="There's question to show"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
