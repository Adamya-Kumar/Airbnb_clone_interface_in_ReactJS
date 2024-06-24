function More({getMoreResult}){
    return (
        <div className="h-10 w-full py-20">
        <div className="flex justify-center ">
            <button className="w-56 h-12 rounded-full bg-green-600 text-white hover:bg-green-500" onClick={getMoreResult}>More</button>
        </div>
    </div>
    )
}
export default More;