import Instagram from "@/assets/instagram.png";
import Github from "@/assets/github.png";

type Props = {
}

const Footer = (props: Props) => {
  return (
    <footer className="h-60 bg-gray-100 flex items-center">
        <div className="w-5/6 mx-auto">
            <div className="flex justify-center md:justify-start my-8 gap-12">
                <a
                    className="hover:opacity-50 transition duration-500"
                    href="https://github.com/Mengzhen1992"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img alt="github-link" src={Github} />
                </a>
                <a
                    className="hover:opacity-50 transition duration-500"
                    href="https://www.instagram.com/mon__ki/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img alt="instagram-link" src={Instagram} />
                </a>
            </div>
            <div className="text-2xl font-semibold font-dancingscript flex justify-between">
                <p>Mengzhen Liao</p>
                <p>©2023</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer