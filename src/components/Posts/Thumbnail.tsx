type ThumbnailProps = {
    title: string;
    id: string;
}
const Thumbnail = ({title, id}: ThumbnailProps) => {
    return (
        <div className="w-fit py-5 px-8">
            <h2>
                <span className="text-orange-600">{id}: </span>
                {title}
            </h2>
        </div>
    )
}

export default Thumbnail;
