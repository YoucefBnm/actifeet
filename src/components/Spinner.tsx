
const Spinner = () => {
  return (
   <div className="flex items-center justify-center space-x-1">
    <div className="w-2 h-2 rounded-full animate-pulse bg-zinc-900" />
    <div className="w-2 h-2 rounded-full animate-pulse bg-zinc-900" />
    <div className="w-2 h-2 rounded-full animate-pulse bg-zinc-900" />
   </div>
  )
}

export default Spinner