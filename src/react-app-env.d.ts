/// <reference types="react-scripts" />


interface Menu {
    id? : string
    name? : string
    url? : string
    subMenu? : Menu[]
}