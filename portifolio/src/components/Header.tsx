import Button from "./Button";
import Brazil from "@/../public/bandeiras/brazil.svg"

export default function Header() {
    return <header className="p-2 lg:p-8 flex flex-row-reverse absolute top-0 w-full">
        <Button id="language-button" className="text-base px-4 py-2 bg-green-200 border border-neutral-200 " icone={Brazil}>Português</Button>
    </header>
}