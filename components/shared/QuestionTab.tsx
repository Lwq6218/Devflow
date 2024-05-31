import { getUserQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import QuestionCard from "../cards/QuestionCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId: string;
}
export default async function QuestionTab({
  searchProps,
  userId,
  clerkId,
}: Props) {
  const result = await getUserQuestions({
    userId,
    page: 1,
  });
  return (
    <>
      {result.questions.map((question) => (
        <QuestionCard
          key={question.id}
          _id={question.id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}
    </>
  );
}
