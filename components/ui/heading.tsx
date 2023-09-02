interface HeadingProps {
    title: string;
    description: string;
};

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) => {
    return (
        <div className="pl-7 lg:pl-40 md:pl-20 sm:pl-10 space-y-10">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )

};