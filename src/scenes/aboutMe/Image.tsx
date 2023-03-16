type Props = {
    date?: string;
    location: string;
    image: string;
}

const Image = ({date, location, image}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[480px] w-[320px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mr-10 inline-block h-[480px] w-[320px]">
        <div className={overlayStyles}>
            <p>{date}</p>
            <p>{location}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Image