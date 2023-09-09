interface HeadingProps {
    title: string;
};

export const Heading: React.FC<HeadingProps> = ({
    title
}) => {
    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl flex justify-center items-center">{title}</h2>
        </div>
    )

};