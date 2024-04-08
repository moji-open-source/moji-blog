interface Props {
  title: string
  number?: number
}

export function TitleWithDivider({ title, number }: Props) {
  return (
    <h5 className="flex items-center whitespace-nowrap mb-10 text-xl">
      {title}
      <span
        data-number={number}
        className="relative ml-5 mr-[35px] inline-block h-[1px]
     border-b-2 border-dotted border-b-slate-300 w-full
     after:content-[attr(data-number)] after:rounded-full after:absolute after:text-xs
     after:text-[#7b7b7d] after:text-center opacity-80 after:w-[15px] after:h-[15px]
     after:top-[-6px] after:right-[-35px]"
      >
      </span>
    </h5>
  )
}
