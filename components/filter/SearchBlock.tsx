"use client";

import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import Image from "next/image";
import { Layer } from "../layer/layerProps";
import { Infrastructure } from "../infrastructure/infrastructureProps";
import { SearchResult } from "./SearchResult";

type SearchableItem = Layer | Infrastructure;

const SearchBlock = () => {
    const [inputValue, setInputValue] = useState("");
    const [isInputFocused, setInputFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredItems, setFilteredItems] = useState<SearchableItem[]>([]);

    useOnClickOutside(ref, () => setInputFocused(false));

    const shouldRenderSearchResult = () => {
        return isInputFocused && inputValue;
    };

    const handleInputSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const input = evt.target.value;
        const sanitizedValue = input.replace(/"/g, "");
        setInputValue(sanitizedValue);
        if (!input) return [];
        // const filteredLayers = allLayers.filter((layer) =>
        const filtered = [...allLayers, ...allInfrastructures].filter((item) =>
            item.title
                .toLowerCase()
                .slice(0, input.length)
                .includes(input.toLowerCase()),
        );
        setFilteredItems(filtered || []);
    };

    return (
        <div
            className="w-[22rem] relative"
            ref={ref}
            role="presentation"
            onClick={() => {
                inputRef.current?.focus();
                setInputFocused(true);
            }}
        >
            <input
                type="text"
                placeholder="Find Layer"
                onChange={handleInputSearch}
                onFocus={() => setInputFocused(true)}
                ref={inputRef}
                className="bg-white border-2 border-slate-300 rounded-full p-2 w-full text-black pl-6 pr-12 outline-none h-11 font_playfair cursor-pointer hover:placeholder:text-slate-600 active:border-[#fe4e18] focus:border-[#fe4e18] text-xl"
            />

            <Image
                src={
                    isInputFocused
                        ? "/icons/search-red.svg"
                        : "/icons/search.svg"
                }
                alt="Search icon"
                className="absolute outline bottom-3 right-6 cursor-pointer"
                width={21}
                height={21}
            />

            {shouldRenderSearchResult() && (
                <SearchResult searchResult={filteredItems} />
            )}
        </div>
    );
};

export default SearchBlock;
