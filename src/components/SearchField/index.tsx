import Image from 'next/image';
import Search from '@/assets/icons/search.svg'

export default function SearchField() {
    return (
        <form className="flex searchContainer">
            <input type="search" placeholder="Search product..." className="searchField block p-2.5 w-full z-20 text-sm"/>
            <button type="submit" className="searchBtn">
                <Image
                    src={Search}
                    // width={500}
                    // height={500}
                    alt="Picture of the author"
                    />
            </button>
        </form>
    )
}