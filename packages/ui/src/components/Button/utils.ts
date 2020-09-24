export const getColorButton = (color: string): string => {
  let cssClass: string = ''

  switch (color) {
    case 'blue':
      cssClass =
        'bg-clrPrimary hover:bg-clrPrimary01 text-white font-bold py-2 px-4 rounded w-full transition-all duration-300 ease-in'
      break
    case 'white':
      cssClass =
        'bg-clrInverse hover:bg-clrPrimary text-clrPrimary hover:text-white font-bold py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrPrimary'
      break
    case 'social-white':
      cssClass =
        'bg-clrInverse hover:bg-clrField01 text-sm font-thin text-clrSubText5 py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrBorder01 flex items-center justify-center'
      break
    case 'social-black':
      cssClass =
        'bg-black hover:bg-gray-700 text-sm font-thin text-clrInverse py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrBorder01 flex items-center justify-center'
      break
  }

  return cssClass
}
