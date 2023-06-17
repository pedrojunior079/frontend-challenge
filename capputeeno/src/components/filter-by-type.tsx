"use client"
import { useFilter } from "@/hooks/userFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

interface FilterItemProps{
   selected: boolean
}

const FilterList = styled.ul`
    displey: flex;
    align-item: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    
    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4x solid var(--orange-low);' : ''}
`

export function FilterByType(){
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterType) => {
       setType(value)
    }

    return(
       <FilterList>
        <FilterItem 
          selected={type === FilterType.ALL} 
          onClick={() => handleChangeType(FilterType.ALL)}>
            Todos os produtos
        </FilterItem>
        <FilterItem 
          selected={type === FilterType.SHIRT} 
          onClick={() => handleChangeType(FilterType.SHIRT)}>
            Camisetas
        </FilterItem>
        <FilterItem 
          selected={type === FilterType.MUG} 
          onClick={() => handleChangeType(FilterType.MUG)}>
            Canecas
        </FilterItem>
       </FilterList> 
    )
}