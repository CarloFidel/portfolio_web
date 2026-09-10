import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io"

export const CustomFooter = () => {
    return (
        <footer className=" flex justify-between border-t border-border px-6 md:px-10 max-w-6xl mx-auto py-8" >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-xs font-light text-muted">
                    © {new Date().getFullYear()} Carlo Fidel. All rights reserved.
                </p>
                <p className="text-xs font-light" style={{ color: "var(--color-muted)" }}>
                    Barcelona, Spain
                </p>
            </div>
            <div className="flex flex-row gap-8 items-center justify-center">
                <IoLogoInstagram size={25} color="#6b6b6b"/>
                <IoLogoYoutube size={20} color="#6b6b6b"/>

            </div>
        </footer>)
}
