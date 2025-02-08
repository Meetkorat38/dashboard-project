import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardWrapperProps{
    icon : React.ElementType;
    mainNumber: string;
    text:string;
    message:string;
}

export const CardWrapper = ({icon , mainNumber , message , text ,} : CardWrapperProps) => {
    const Icon = icon;

  return (
    <Card className="flex flex-col p-1 bg-orange-200 dark:bg-zinc-900  w-full">
      <CardHeader>
        <div className="rounded-full w-max p-2  flex items-center bg-orange-600 justify-center">
          <Icon className="size-4 text-zinc-100" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-semibold text-2xl">{mainNumber}</CardTitle>
        <CardTitle className="font-light my-2 text-base">{text}</CardTitle>
        <CardDescription className="text-base ">
          {message}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
