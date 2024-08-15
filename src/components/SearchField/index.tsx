import Image from 'next/image';
import Search from '@/assets/icons/search.svg'

export default function SearchField() {
    return (
        <div className="flex">
            <input type="text" placeholder="Search product..." className="searchField"/>
            <button className="SearchBtn">
                <Image
                    src={Search}
                    // width={500}
                    // height={500}
                    alt="Picture of the author"
                />
            </button>
        </div>
    )
}